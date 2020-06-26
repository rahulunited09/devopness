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


import { Action } from './action';
import { EnvironmentLinkItem } from './environment-link-item';
import { ServerBlueprint } from './server-blueprint';

/**
 * 
 * @export
 * @interface ServerCreate
 */
export interface ServerCreate {
    /**
     * The hostname to be set on Linux servers. Accepts numbers (0-9), dash (-) and lower case non accented characters
     * @type {string}
     * @memberof ServerCreate
     */
    hostname: string;
    /**
     * Public ipv4 address for server access
     * @type {string}
     * @memberof ServerCreate
     */
    ip_address: string;
    /**
     * The network port to which the SSH daemon is listening to SSH connections on the server
     * @type {number}
     * @memberof ServerCreate
     */
    ssh_port: number;
    /**
     * 
     * @type {ServerBlueprint}
     * @memberof ServerCreate
     */
    blueprint: ServerBlueprint;
    /**
     * 
     * @type {Array<EnvironmentLinkItem>}
     * @memberof ServerCreate
     */
    environments?: Array<EnvironmentLinkItem>;
    /**
     * The list of actions related to the server
     * @type {Array<Action>}
     * @memberof ServerCreate
     */
    actions?: Array<Action>;
}

