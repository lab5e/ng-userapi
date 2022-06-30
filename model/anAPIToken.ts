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


export interface AnAPIToken { 
    /**
     * The resource of the token.  The token applies to the specified resource and any resources below this so the resource `/` applies to the root resource and any resource below the root resource. In the same manner `/collections` will apply to all collectins while `/collections/{id}` will apply to that particular collection.
     */
    resource?: string;
    /**
     * Write flag for token.  If this is set to `true` the token can be used for write operations in the API such as POST, DELETE and PATCH.
     */
    write?: boolean;
    /**
     * Tags for the token.
     */
    tags?: { [key: string]: string; };
    /**
     * The last time the token was used. Time in ms since epoch.
     */
    lastUse?: string;
    uses?: string;
}

