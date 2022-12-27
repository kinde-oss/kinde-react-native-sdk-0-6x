import { UserProfile } from '../../types/KindeSDK';
import BaseStore from './Base';

class Storage extends BaseStore {
    constructor() {
        super();
    }
    getAccessToken(): string | undefined {
        return this.getItem('accessToken');
    }

    setAccessToken(newAccessToken: string): void {
        return this.setItem('accessToken', this.convertString(newAccessToken));
    }

    getState(): string | undefined {
        return this.getItem('state');
    }

    setState(newState: string): void {
        return this.setItem('state', this.convertString(newState));
    }

    getCodeVerifier(): string | undefined {
        return this.getItem('codeVerifier');
    }

    setCodeVerifier(newCodeVerifier: string): void {
        return this.setItem(
            'codeVerifier',
            this.convertString(newCodeVerifier)
        );
    }

    getAuthStatus(): string | undefined {
        return this.getItem('authStatus');
    }

    setAuthStatus(newAuthStatus: string): void {
        return this.setItem('authStatus', this.convertString(newAuthStatus));
    }

    getIdToken() {
        return this.getItem('id_token');
    }

    setIdToken(newIdToken: string) {
        return this.setItem('id_token', this.convertString(newIdToken));
    }

    getExpiredAt() {
        return Number(this.getItem('expired_at')) || 0;
    }

    setExpiredAt(expiredAt: number) {
        return this.setItem('expired_at', String(expiredAt || 0));
    }

    getUserProfile(): UserProfile | null {
        const userProfile = this.getItem('userProfile');
        return userProfile && !['undefined', 'null'].includes(userProfile)
            ? JSON.parse(userProfile)
            : null;
    }

    setUserProfile(newUserProfile: UserProfile) {
        return this.setItem('userProfile', this.convertString(newUserProfile));
    }

    convertString(str: string | object): string {
        return typeof str === 'string' ? str : JSON.stringify(str);
    }
}

const sessionStorage = (globalThis.sessionStorage =
    globalThis.sessionStorage ?? new Storage()) as Storage;

export { Storage, sessionStorage };
