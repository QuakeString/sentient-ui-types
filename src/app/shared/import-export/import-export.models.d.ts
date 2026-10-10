import { Widget, WidgetTypeDetails } from '@app/shared/models/widget.models';
import { DashboardLayoutId } from '@shared/models/dashboard.models';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
export interface ImportWidgetResult {
    widget: Widget;
    layoutId: DashboardLayoutId;
}
export interface WidgetsBundleItem {
    widgetsBundle: WidgetsBundle;
    widgetTypes?: WidgetTypeDetails[];
    widgetTypeFqns?: string[];
}
/** One item of a multi-entity ZIP export: the same data a single export writes. */
export interface ZipExportItem {
    /** Display name; also the file name stem. */
    name: string;
    /** Id of the exported entity on the source server (kept in the manifest). */
    sourceId: string;
    /** JSON payload, or the raw bytes of a binary item. */
    data: object | Blob;
    /** File extension for a binary item (JSON items are always .json). */
    extension?: string;
    /** Owner of an owner-bound entity (calculated field, alarm rule), for a later import. */
    ownerType?: string;
    ownerId?: string;
}
/** Version of the manifest.json written into every multi-entity export ZIP. */
export declare const ZIP_EXPORT_FORMAT_VERSION = 1;
/** One entry of manifest.json in a multi-entity export ZIP. */
export interface ZipManifestEntry {
    file: string;
    name: string;
    sourceId: string;
    ownerType?: string;
    ownerId?: string;
}
/** A record found on this server by a name search, for clash detection. */
export interface ZipImportExisting {
    id: string;
    name: string;
}
/** What to do with a ZIP item whose name already exists. */
export type ZipImportClashPolicy = 'skip' | 'copy' | 'replace';
/**
 * What the ZIP import review dialog needs for one entity type. Each item is
 * checked and saved through the same code the single JSON import uses.
 */
export interface ZipImportHandler<T = any> {
    /** Translation key of the plural type name shown in the dialog title. */
    typeTranslation: string;
    /** Owner-bound types (calculated fields, alarm rules) are saved into an owner entity. */
    ownerBound?: boolean;
    /** Entity types offered by the "Target for all" picker of an owner-bound type. */
    ownerEntityTypes?: Array<EntityType>;
    /** Set when the table is opened for one entity: every item is saved into it. */
    fixedOwner?: EntityId;
    /** Translation key of the footer hint shown while items lack a target ({{count}}). */
    pickTargetHint?: string;
    /** Error text when a parsed file is not importable (the single import's check), else null. */
    validate(data: any): string | null;
    getName(data: T): string;
    /** A copy of the data under another name ("Import as copy"). */
    withName(data: T, name: string): T;
    /** Records whose name contains the given text; owner-bound types search within the owner. */
    findByName(name: string, owner: EntityId | null, config: RequestConfig): Observable<ZipImportExisting[]>;
    /** Saves one item; with replaceId it overwrites that record, keeping its id and version. */
    save(data: T, replaceId: string | null, owner: EntityId | null, config: RequestConfig): Observable<unknown>;
}
/** Emitted by a table import when a ZIP import saved at least one item. */
export declare class ZipImportOutcome {
    readonly imported: number;
    constructor(imported: number);
}
export interface CsvToJsonConfig {
    delim?: string;
    header?: boolean;
}
export interface CsvToJsonResult {
    headers?: string[];
    rows?: any[][];
}
export type CSVDelimiter = ',' | ';' | '|' | '\t';
export declare enum ImportEntityColumnType {
    name = "NAME",
    type = "TYPE",
    label = "LABEL",
    clientAttribute = "CLIENT_ATTRIBUTE",
    sharedAttribute = "SHARED_ATTRIBUTE",
    serverAttribute = "SERVER_ATTRIBUTE",
    timeseries = "TIMESERIES",
    accessToken = "ACCESS_TOKEN",
    x509 = "X509",
    mqttClientId = "MQTT_CLIENT_ID",
    mqttUserName = "MQTT_USER_NAME",
    mqttPassword = "MQTT_PASSWORD",
    lwm2mClientEndpoint = "LWM2M_CLIENT_ENDPOINT",
    lwm2mClientSecurityConfigMode = "LWM2M_CLIENT_SECURITY_CONFIG_MODE",
    lwm2mClientIdentity = "LWM2M_CLIENT_IDENTITY",
    lwm2mClientKey = "LWM2M_CLIENT_KEY",
    lwm2mClientCert = "LWM2M_CLIENT_CERT",
    lwm2mBootstrapServerSecurityMode = "LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE",
    lwm2mBootstrapServerClientPublicKeyOrId = "LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID",
    lwm2mBootstrapServerClientSecretKey = "LWM2M_BOOTSTRAP_SERVER_SECRET_KEY",
    lwm2mServerSecurityMode = "LWM2M_SERVER_SECURITY_MODE",
    lwm2mServerClientPublicKeyOrId = "LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID",
    lwm2mServerClientSecretKey = "LWM2M_SERVER_CLIENT_SECRET_KEY",
    snmpHost = "SNMP_HOST",
    snmpPort = "SNMP_PORT",
    snmpVersion = "SNMP_VERSION",
    snmpCommunityString = "SNMP_COMMUNITY_STRING",
    isGateway = "IS_GATEWAY",
    description = "DESCRIPTION",
    routingKey = "ROUTING_KEY",
    secret = "SECRET"
}
export declare const importEntityColumnTypeTranslations: Map<ImportEntityColumnType, string>;
export interface CsvColumnParam {
    type: ImportEntityColumnType;
    key: string;
    sampleData: any;
}
export interface ColumnMapping {
    type: ImportEntityColumnType;
    key?: string;
}
export interface BulkImportRequest {
    file: string;
    mapping: {
        columns: Array<ColumnMapping>;
        delimiter: CSVDelimiter;
        header: boolean;
        update: boolean;
    };
}
export interface BulkImportResult {
    created: number;
    updated: number;
    errors: number;
    errorsList: Array<string>;
}
export interface FileType {
    mimeType: string;
    extension: string;
}
export declare const TEXT_TYPE: FileType;
export declare const JSON_TYPE: FileType;
export declare const ZIP_TYPE: FileType;
export declare const CSV_TYPE: FileType;
export declare function convertCSVToJson(csvdata: string, config: CsvToJsonConfig, onError: (messageId: string, params?: any) => void): CsvToJsonResult | number;
