import { AuthConfig } from 'angular-oauth2-oidc';

export const OAUTH_CONFIG: AuthConfig = {
    issuer: 'https://idsvr4.azurewebsites.net',
    redirectUri: 'http://localhost:4200',
    clientId: 'spa',
    scope: 'openid profile email offline_access api',
    responseType: 'code',
    showDebugInformation: true
};

export const OAUTH_STORAGE = localStorage;