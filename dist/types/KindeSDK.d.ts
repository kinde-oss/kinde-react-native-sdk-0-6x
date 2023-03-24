export type AdditionalParameters = {
    audience?: string;
    is_create_org?: boolean;
    org_code?: string;
    org_name?: string;
};
export type TokenID = {
    sub: string;
    given_name: string;
    family_name: string;
    email: string;
};
export type UserProfile = {
    id: string;
    given_name: string;
    family_name: string;
    email: string;
};
export type TokenResponse = {
    access_token: string;
    refresh_token: string;
    id_token: string;
    scope: string;
    token_type: string;
    expires_in: number;
};
export type AccessTokenDecoded = {
    aud: string[];
    azp: string;
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    gty?: string[];
    scp?: string[];
};
export type IdTokenDecoded = {
    sub: string;
    given_name: string;
    family_name: string;
    email: string;
};
