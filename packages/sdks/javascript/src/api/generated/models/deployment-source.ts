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


import { DeploymentOrigin } from './deployment-origin';

/**
 * Deployment source information
 * @export
 * @interface DeploymentSource
 */
export interface DeploymentSource {
    /**
     * 
     * @type {DeploymentOrigin}
     * @memberof DeploymentSource
     */
    origin: DeploymentOrigin;
    /**
     * The IP address from the deployment has been triggered
     * @type {string}
     * @memberof DeploymentSource
     */
    ip_address: string | null;
    /**
     * The hook that has been triggered the deployment
     * @type {number}
     * @memberof DeploymentSource
     */
    hook_id: number | null;
    /**
     * The hook request\'s ID that have triggered the deployment
     * @type {number}
     * @memberof DeploymentSource
     */
    hook_request_id: number | null;
    /**
     * The pull request that have triggered the deployment
     * @type {number}
     * @memberof DeploymentSource
     */
    pull_request_id: number | null;
}
