import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ArgumentNullException } from "../common/Exceptions";

export interface ConfigurationOptions {
    apiKey?: string;
    // email?: string;
    // password?: string;
    // accessToken?: string;
    baseUrl: string;
}

export class Configuration implements ConfigurationOptions {
    // API_KEY may or may not be needed in the future.
    // so far only supporting authentication with user credentials
    public apiKey?: string;
    // public email?: string;
    // public password?: string;
    // public accessToken?: string;
    public baseUrl: string;

    constructor(options: ConfigurationOptions) {
        this.apiKey = options.apiKey;
        // this.email = options.email;
        // this.password = options.password;
        // this.accessToken = options.accessToken;
        this.baseUrl = options.baseUrl;
    }
}

export class ApiBaseService {
    private api: AxiosInstance;
    private static _accessToken: string;

    public static configuration: Configuration;

    // public onTokenExpired: () => void;

    private defaultAxiosSettings: AxiosRequestConfig = {
        timeout: 30000,
        responseType: 'json',
        headers: {
            common: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        },
        withCredentials: false
    }

    constructor() {
        if (ApiBaseService.configuration == undefined) {
            throw new ArgumentNullException('configuration');
        }

        const settings = this.defaultAxiosSettings;
        settings.baseURL = ApiBaseService.configuration.baseUrl;

        this.api = axios.create(settings);
        this.setupAxiosInterceptors();
    }

    private setupAxiosInterceptors(): void {
        this.api.interceptors.request.use((config: AxiosRequestConfig) => {
            if (ApiBaseService._accessToken) {
                config.headers.Authorization = `Bearer ${ApiBaseService._accessToken}`;
            } else {
                delete config.headers.Authorization;
            }

            return config;
        });
    }

    public static get accessToken(): string {
        return ApiBaseService._accessToken;
    }

    public static set accessToken(value: string) {
        ApiBaseService._accessToken = value;
    }

    // TO DO: define events to notify the external world that a token has expired
    // so the consumer app can invoke refresh-token
    // so a web app might decide to redirect the user to login page or set
    // a or should we add an event parameter allowing `refresh: false` to be set to
    // true and we trigger refresh?
    // public tokenExpired(): void {
    //     if (this.onTokenExpired) {
    //         this.onTokenExpired();
    //     }
    // }

    protected async post<T, B, R = AxiosResponse<T>>(endpoint: string, data?: B): Promise<R> {
        return this.api.post<T, R>(endpoint, data);

        //     try {
        //         const response = await this.api.post<T, R>(endpoint, data);
        //         const result = response.data;
        //         return result;
        //     } catch (exception) {
        //         if (exception && exception.response) {
        //             const axiosError = exception as AxiosError<any>;
        //             return axiosError.response.data;
        //         }

        //         throw err;
        //     }
        // };

    }

    protected get<T, R = AxiosResponse<T>>(endpoint: string): Promise<R> {
        return this.api.get<T, R>(this.api.defaults.baseURL + endpoint);


        // .then((response: R) => {
        //     return response.data<T>;
        // })
        // .then((res: R) => res);
    }

    public success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    public error(error: AxiosError<Error>): void {
        throw error;
    }
}