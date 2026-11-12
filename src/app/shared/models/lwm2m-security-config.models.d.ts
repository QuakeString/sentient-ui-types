export declare enum Lwm2mSecurityType {
    PSK = "PSK",
    RPK = "RPK",
    X509 = "X509",
    NO_SEC = "NO_SEC",
    OSCORE = "OSCORE"
}
export declare const Lwm2mSecurityTypeTranslationMap: Map<Lwm2mSecurityType, string>;
export declare const Lwm2mPublicKeyOrIdTooltipTranslationsMap: Map<Lwm2mSecurityType, string>;
export declare const Lwm2mClientSecretKeyTooltipTranslationsMap: Map<Lwm2mSecurityType, string>;
export declare const Lwm2mClientKeyTooltipTranslationsMap: Map<Lwm2mSecurityType, string>;
/** The device's OSCORE security context (RFC 8613). Every value is hexadecimal. */
export interface OscoreSecurityConfig {
    masterSecret: string;
    masterSalt?: string;
    senderId: string;
    recipientId: string;
    idContext?: string;
}
export interface ClientSecurityConfig {
    securityConfigClientMode: Lwm2mSecurityType;
    endpoint: string;
    identity?: string;
    key?: string;
    cert?: string;
    oscore?: OscoreSecurityConfig;
}
export interface ServerSecurityConfig {
    securityMode: Lwm2mSecurityType;
    clientPublicKeyOrId?: string;
    clientSecretKey?: string;
}
export interface Lwm2mSecurityConfigModels {
    client: ClientSecurityConfig;
    bootstrap: Array<ServerSecurityConfig>;
}
export declare function getLwm2mSecurityConfigModelsDefault(): Lwm2mSecurityConfigModels;
export declare function getDefaultClientSecurityConfig(securityConfigMode: Lwm2mSecurityType, endPoint?: string): ClientSecurityConfig;
export declare function getDefaultServerSecurityConfig(): ServerSecurityConfig;
