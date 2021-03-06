/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.13 bordering-jerilyn
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Invite } from './invite';


/**
 * List of active invites. Onece an invite has been redeemed it will be removed automatically. An administrator of the team can delete unused invites.
 */
export interface InviteList { 
    invites?: Array<Invite>;
}

