/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 0.2.1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { exists } from '../ApiClient';
/**
 *
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    preferredEmail?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    firstName?: string;
}

/**
 * Check if a given object implements the UserProfile interface.
 */
export function instanceOfUserProfile(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserProfileFromJSON(json: any): UserProfile {
    return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): UserProfile {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !exists(json, 'id') ? undefined : json['id'],
        preferredEmail: !exists(json, 'preferred_email')
            ? undefined
            : json['preferred_email'],
        lastName: !exists(json, 'last_name') ? undefined : json['last_name'],
        firstName: !exists(json, 'first_name') ? undefined : json['first_name']
    };
}

export function UserProfileToJSON(value?: UserProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        preferred_email: value.preferredEmail,
        last_name: value.lastName,
        first_name: value.firstName
    };
}
