export interface IAuthData {
    auth_token: string;
    auth_permissions: string;
    key: string | undefined;
}

export interface TLoginInput {
    email: string;
    password: string;
}

export interface TRegisterUserInput {
    name: string;
    email: string;
    password: string;
}

export interface TAuthCallback {
    redirect_uri: string;
    response_type: string;
    scope: string;
    state: string;
    prompt: string;
}

export interface TRefreshSession {
    token_type: string;
    refresh_token: string;
    client_secret: string;
    scope: string;
}

interface ChallengeUser {
    state: string;
    auth_token: string;
}
export type TChallengeUserApproveAuth = ChallengeUser;
export type TChallengeUserDenyAuth = ChallengeUser;

interface TUserClient {
    name: string;
    redirect: string;
}
export type TCreateUserClient = TUserClient;
export type TEditUserClient = TUserClient;

export interface TCreateUserAccTkn {
    name: string;
    scopes: string;
}

export interface TSetAuthCred {
    token: string;
    permissions: string | null;
}

export interface TGetAuthCred {
    req: { headers: { cookie?: string } };
}

export interface TParseSSRCookie {
    req: { headers: { cookie?: string } };
}

export type isAuthCookie = Record<string, string | null>;

export interface THasType {
    allowedRoles: string[];
    data: { token: string | null; permissions: string | null };
}
