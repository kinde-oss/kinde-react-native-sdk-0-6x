/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import * as KeyChain from 'react-native-keychain';

/**
 * The Storage SDK module.
 * @module SDK/Storage
 * @version 1.1.1
 */

export default class RNStorage {
    async getItem() {
        return KeyChain.getGenericPassword();
    }

    async setItem<T>(value: T) {
        const rs = await KeyChain.setGenericPassword(
            'kinde',
            typeof value === 'string' ? value : JSON.stringify(value)
        );
        return Boolean(rs);
    }

    clear() {
        return KeyChain.resetGenericPassword();
    }
}
