/**
 * The User API
 * API to manage teams, members and tokens
 *
 * The version of the OpenAPI document: 1.3.4 breezy-leafy
 * Contact: dev@lab5e.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Your user profile. You can change the contents of the user profile via the log in service you are using.
 */
export interface UserProfile { 
    userId?: string;
    email?: string;
    avatarUrl?: string;
    name?: string;
    profileUrl?: string;
    githubLogin?: string;
    provider?: string;
    logoutUrl?: string;
}
