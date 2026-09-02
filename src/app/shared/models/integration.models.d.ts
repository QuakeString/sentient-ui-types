import { BaseData } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { IntegrationId } from '@shared/models/id/integration-id';
import { ConverterId } from '@shared/models/id/converter-id';
import { EntityDebugSettings, HasTenantId } from '@shared/models/entity.models';
export declare enum IntegrationType {
    OCEANCONNECT = "OCEANCONNECT",
    SIGFOX = "SIGFOX",
    THINGPARK = "THINGPARK",
    TPE = "TPE",
    CHIRPSTACK = "CHIRPSTACK",
    PARTICLE = "PARTICLE",
    TMOBILE_IOT_CDP = "TMOBILE_IOT_CDP",
    HTTP = "HTTP",
    MQTT = "MQTT",
    PUB_SUB = "PUB_SUB",
    AWS_IOT = "AWS_IOT",
    AWS_SQS = "AWS_SQS",
    AWS_KINESIS = "AWS_KINESIS",
    TTN = "TTN",
    TTI = "TTI",
    AZURE_EVENT_HUB = "AZURE_EVENT_HUB",
    OPC_UA = "OPC_UA",
    CUSTOM = "CUSTOM",
    UDP = "UDP",
    TCP = "TCP",
    KAFKA = "KAFKA",
    AZURE_IOT_HUB = "AZURE_IOT_HUB",
    APACHE_PULSAR = "APACHE_PULSAR",
    RABBITMQ = "RABBITMQ",
    LORIOT = "LORIOT",
    COAP = "COAP",
    TUYA = "TUYA",
    AZURE_SERVICE_BUS = "AZURE_SERVICE_BUS",
    KPN = "KPN"
}
export interface IntegrationTypeInfo {
    name: string;
    description?: string;
    icon?: string;
    remote?: boolean;
    checkConnection?: boolean;
    hideDownlink?: boolean;
}
export declare const integrationTypeInfoMap: Map<IntegrationType, IntegrationTypeInfo>;
export interface Integration extends BaseData<IntegrationId>, HasTenantId {
    tenantId?: TenantId;
    type: IntegrationType;
    enabled?: boolean;
    debugMode?: boolean;
    debugSettings?: EntityDebugSettings;
    allowCreateDevicesOrAssets?: boolean;
    defaultConverterId?: ConverterId;
    downlinkConverterId?: ConverterId;
    routingKey?: string;
    secret?: string;
    configuration?: any;
    additionalInfo?: any;
    remote?: boolean;
    version?: number;
    status?: string;
    dailyActivity?: {
        total: number;
        hourly: number[];
    };
}
