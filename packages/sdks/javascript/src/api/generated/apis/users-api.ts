/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { AcceptedResponseMessage } from '../../generated/models';
import { ApiError } from '../../generated/models';
import { LoginCredentials } from '../../generated/models';
import { User } from '../../generated/models';
import { UserAccountActivate } from '../../generated/models';
import { UserAccountResendVerification } from '../../generated/models';
import { UserAccountVerify } from '../../generated/models';
import { UserCreate } from '../../generated/models';
import { UserPasswordReset } from '../../generated/models';
import { UserPasswordSendResetLink } from '../../generated/models';
import { UserRefreshTokenCreate } from '../../generated/models';
import { UserTokens } from '../../generated/models';
import { UserUpdate } from '../../generated/models';

/**
 * UsersApiService - Auto-generated
 */
export class UsersApiService extends ApiBaseService {
    /**
     * 
     * @summary Activate the user account
     * @param {UserAccountActivate} userAccountActivate A JSON object containing user account data
     */
    public async activateUser(userAccountActivate: UserAccountActivate): Promise<ApiResponse<void>> {
        if (userAccountActivate === null || userAccountActivate === undefined) {
            throw new ArgumentNullException('userAccountActivate', 'activateUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/account/verify' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, UserAccountActivate>(requestUrl, userAccountActivate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Sign up/register a new user
     * @param {UserCreate} userCreate A JSON object containing user essential data
     */
    public async addUser(userCreate: UserCreate): Promise<ApiResponse<AcceptedResponseMessage>> {
        if (userCreate === null || userCreate === undefined) {
            throw new ArgumentNullException('userCreate', 'addUser');
        }
        
        let queryString = '';

        const requestUrl = '/users' + (queryString? `?${queryString}` : '');

        const response = await this.post <AcceptedResponseMessage, UserCreate>(requestUrl, userCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get details of the current user
     */
    public async getCurrentUser(): Promise<ApiResponse<User>> {
        
        let queryString = '';

        const requestUrl = '/users/me' + (queryString? `?${queryString}` : '');

        const response = await this.get <User>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a user by ID
     * @param {number} userId Numeric ID of the user to be retrieved
     */
    public async getUser(userId: number): Promise<ApiResponse<User>> {
        if (userId === null || userId === undefined) {
            throw new ArgumentNullException('userId', 'getUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/{user_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <User>(requestUrl.replace(`{${"user_id"}}`, encodeURIComponent(String(userId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Login/create a new token for the given credentials
     * @param {LoginCredentials} loginCredentials A JSON object containing user credentials
     */
    public async login(loginCredentials: LoginCredentials): Promise<ApiResponse<UserTokens>> {
        if (loginCredentials === null || loginCredentials === undefined) {
            throw new ArgumentNullException('loginCredentials', 'login');
        }
        
        let queryString = '';

        const requestUrl = '/users/login' + (queryString? `?${queryString}` : '');

        const response = await this.post <UserTokens, LoginCredentials>(requestUrl, loginCredentials);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Logout/revoke an existing token
     */
    public async logout(): Promise<ApiResponse<void>> {
        
        let queryString = '';

        const requestUrl = '/users/logout' + (queryString? `?${queryString}` : '');

        const response = await this.get <void>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Refresh an existing user access token
     * @param {UserRefreshTokenCreate} userRefreshTokenCreate A JSON object containing user essential data
     */
    public async refreshToken(userRefreshTokenCreate: UserRefreshTokenCreate): Promise<ApiResponse<UserTokens>> {
        if (userRefreshTokenCreate === null || userRefreshTokenCreate === undefined) {
            throw new ArgumentNullException('userRefreshTokenCreate', 'refreshToken');
        }
        
        let queryString = '';

        const requestUrl = '/users/refresh-token' + (queryString? `?${queryString}` : '');

        const response = await this.post <UserTokens, UserRefreshTokenCreate>(requestUrl, userRefreshTokenCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Resend the verification email
     * @param {UserAccountResendVerification} userAccountResendVerification A JSON object containing the email to resend the verification link
     */
    public async resendUserVerification(userAccountResendVerification: UserAccountResendVerification): Promise<ApiResponse<void>> {
        if (userAccountResendVerification === null || userAccountResendVerification === undefined) {
            throw new ArgumentNullException('userAccountResendVerification', 'resendUserVerification');
        }
        
        let queryString = '';

        const requestUrl = '/users/account/resend-verification' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, UserAccountResendVerification>(requestUrl, userAccountResendVerification);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Reset the user password
     * @param {UserPasswordReset} userPasswordReset A JSON containing the new password of the user
     */
    public async resetUserPassword(userPasswordReset: UserPasswordReset): Promise<ApiResponse<object>> {
        if (userPasswordReset === null || userPasswordReset === undefined) {
            throw new ArgumentNullException('userPasswordReset', 'resetUserPassword');
        }
        
        let queryString = '';

        const requestUrl = '/users/password/reset' + (queryString? `?${queryString}` : '');

        const response = await this.post <object, UserPasswordReset>(requestUrl, userPasswordReset);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Send the password reset link to user\'s email
     * @param {UserPasswordSendResetLink} userPasswordSendResetLink A JSON containing the user email
     */
    public async sendUserPasswordResetLink(userPasswordSendResetLink: UserPasswordSendResetLink): Promise<ApiResponse<object>> {
        if (userPasswordSendResetLink === null || userPasswordSendResetLink === undefined) {
            throw new ArgumentNullException('userPasswordSendResetLink', 'sendUserPasswordResetLink');
        }
        
        let queryString = '';

        const requestUrl = '/users/password/send-reset-link' + (queryString? `?${queryString}` : '');

        const response = await this.post <object, UserPasswordSendResetLink>(requestUrl, userPasswordSendResetLink);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing user
     * @param {number} userId Numeric ID of the user
     * @param {UserUpdate} userUpdate A JSON containing user data
     */
    public async updateUser(userId: number, userUpdate: UserUpdate): Promise<ApiResponse<void>> {
        if (userId === null || userId === undefined) {
            throw new ArgumentNullException('userId', 'updateUser');
        }
        if (userUpdate === null || userUpdate === undefined) {
            throw new ArgumentNullException('userUpdate', 'updateUser');
        }
        
        let queryString = '';

        const requestUrl = '/users/{user_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, UserUpdate>(requestUrl.replace(`{${"user_id"}}`, encodeURIComponent(String(userId))), userUpdate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get the information about the activation status of the current user
     */
    public async verifyUser(): Promise<ApiResponse<UserAccountVerify>> {
        
        let queryString = '';

        const requestUrl = '/users/account/verify' + (queryString? `?${queryString}` : '');

        const response = await this.get <UserAccountVerify>(requestUrl);
        return new ApiResponse(response);
    }
}