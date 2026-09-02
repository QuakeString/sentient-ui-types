import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { EntityDebugSettings, HasTenantId } from '@shared/models/entity.models';
import { IntegrationType } from '@shared/models/integration.models';
export declare enum ConverterType {
    UPLINK = "UPLINK",
    DOWNLINK = "DOWNLINK"
}
export declare const converterTypeTranslationMap: Map<ConverterType, string>;
export declare enum ConverterScriptLanguage {
    JS = "JS",
    RHAI = "RHAI"
}
export declare const converterScriptLanguageTranslationMap: Map<ConverterScriptLanguage, string>;
export interface ConverterConfiguration {
    scriptLang?: ConverterScriptLanguage;
    decoder?: string;
    rhaiDecoder?: string;
    encoder?: string;
    rhaiEncoder?: string;
    updateOnlyKeys?: string[];
}
export interface Converter extends BaseData<ConverterId>, HasTenantId {
    tenantId?: TenantId;
    type: ConverterType;
    integrationType?: IntegrationType;
    debugMode?: boolean;
    debugSettings?: EntityDebugSettings;
    configuration?: ConverterConfiguration;
    additionalInfo?: any;
    edgeTemplate?: boolean;
    converterVersion?: number;
    version?: number;
}
export interface TestUplinkRequest {
    scriptLang?: ConverterScriptLanguage;
    decoder: string;
    payloadContentType?: string;
    payload: string;
    metadata?: {
        [key: string]: string;
    };
}
export interface TestDownlinkRequest {
    scriptLang?: ConverterScriptLanguage;
    encoder: string;
    msg: any;
    metadata?: {
        [key: string]: string;
    };
    msgType?: string;
}
export interface ConverterTestResult {
    output: any;
}
