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
import { Member } from './member';


export interface Team { 
    teamId?: string;
    isPrivate?: boolean;
    tags?: { [key: string]: string; };
    members?: Array<Member>;
}

