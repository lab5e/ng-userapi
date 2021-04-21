/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.5 medium-hadley
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Invite. Invites are used to share access to teams. You must be an administrator to generate invites for a team.
 */
export interface Invite { 
    code?: string;
    /**
     * Time stamp when the invite was generated.
     */
    createdAt?: string;
}

