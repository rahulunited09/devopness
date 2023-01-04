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



/**
 * 
 * @export
 * @interface RequestRelation
 */
export interface RequestRelation {
    /**
     * The unique UUID of the hook request
     * @type {string}
     * @memberof RequestRelation
     */
    id: string;
    /**
     * The UUID of the hook that the request belongs to
     * @type {string}
     * @memberof RequestRelation
     */
    hook_id: string;
    /**
     * The ID of the action that the request belongs to
     * @type {number}
     * @memberof RequestRelation
     */
    action_id: number | null;
    /**
     * The UUID of the request that this request is a retry of
     * @type {string}
     * @memberof RequestRelation
     */
    retry_of: string | null;
    /**
     * The IP address of the source that triggered the hook
     * @type {string}
     * @memberof RequestRelation
     */
    ip_address: string;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof RequestRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof RequestRelation
     */
    updated_at: string;
}
