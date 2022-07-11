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
import { ResourceEvent } from '../../generated/models';

/**
 * ResourceEventsApiService - Auto-generated
 */
export class ResourceEventsApiService extends ApiBaseService {
    /**
     * 
     * @summary Return a list of all events belonging to a resource
     * @param {string} resourceType The resource type to get related events
     * @param {number} resourceId Unique ID of the resource that\&#39;s being searched
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listResourceEvents(resourceType: string, resourceId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<ResourceEvent>>> {
        if (resourceType === null || resourceType === undefined) {
            throw new ArgumentNullException('resourceType', 'listResourceEvents');
        }
        if (resourceId === null || resourceId === undefined) {
            throw new ArgumentNullException('resourceId', 'listResourceEvents');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/events/{resource_type}/{resource_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ResourceEvent>>(requestUrl.replace(`{${"resource_type"}}`, encodeURIComponent(String(resourceType))).replace(`{${"resource_id"}}`, encodeURIComponent(String(resourceId))));
        return new ApiResponse(response);
    }
}