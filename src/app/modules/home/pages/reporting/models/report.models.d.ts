import { Timewindow } from "@shared/models/time/time.models";
import { BaseData, ExportableEntity } from "@shared/models/base-data";
import { TenantId } from "@shared/models/id/tenant-id";
import { CustomerId } from "@shared/models/id/customer-id";
import { EntityId } from "@shared/models/id/entity-id";
import { ReportTemplateId, SchedulerEventId, ReportId } from "@shared/models/id/report-template-id";
import { HasTenantId } from "@shared/models/entity.models";
import { EntityAliases } from "@shared/models/alias.models";
import { Filters } from "@shared/models/query/query.models";
import { Widget } from "@shared/models/widget.models";
import { GridSettings, WidgetLayouts } from "@shared/models/dashboard.models";
export declare enum ReportTemplateType {
    REPORT = "REPORT",
    SUB_REPORT = "SUB_REPORT"
}
export declare const ReportTemplateTypeTranslationMap: Map<ReportTemplateType, string>;
export declare enum ReportFormat {
    PDF = "PDF",
    CSV = "CSV",
    XLSX = "XLSX",
    ODS = "ODS",
    SCRIPT = "SCRIPT",
    ZIP = "ZIP"
}
export declare const ReportFormatTranslationMap: Map<ReportFormat, string>;
export declare const SPREADSHEET_FORMATS: ReportFormat[];
export declare enum SchedulerEventType {
    GENERATE_REPORT = "GENERATE_REPORT",
    UPDATE_ATTRIBUTES = "UPDATE_ATTRIBUTES",
    SEND_RPC_REQUEST = "SEND_RPC_REQUEST",
    UPDATE_FIRMWARE = "UPDATE_FIRMWARE",
    SEND_RECIPE_DATA = "SEND_RECIPE_DATA",
    CUSTOM = "CUSTOM"
}
export declare enum TargetType {
    SINGLE_ENTITY = "SINGLE_ENTITY",
    GROUP_ENTITIES = "GROUP_ENTITIES",
    GROUP_OWNER = "GROUP_OWNER",
    DEVICE_PROFILE = "DEVICE_PROFILE"
}
export declare const TargetTypeTranslationMap: {
    [key in SchedulerEventType]?: {
        type: TargetType;
        label: string;
    }[];
};
export declare const SchedulerEventTypeTranslationMap: Map<SchedulerEventType, string>;
export declare const schedulerEventTypeCamelCaseMap: {
    [key: string]: SchedulerEventType;
};
export declare const schedulerEventTypeToApiMap: {
    [key in SchedulerEventType]: string;
};
export declare enum RepeatType {
    ONCE = "ONCE",
    DAILY = "DAILY",
    EVERY_N_DAYS = "EVERY_N_DAYS",
    WEEKLY = "WEEKLY",
    EVERY_N_WEEKS = "EVERY_N_WEEKS",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
    TIMER_BASED = "TIMER_BASED"
}
export declare enum TimerUnit {
    SECONDS = "SECONDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS"
}
export declare const TimerUnitTranslationMap: Map<TimerUnit, string>;
export declare const RepeatTypeTranslationMap: Map<RepeatType, string>;
export declare enum ReportStatus {
    PENDING = "PENDING",
    GENERATING = "GENERATING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare const ReportStatusTranslationMap: Map<ReportStatus, string>;
export declare enum DeliveryStatus {
    PENDING = "PENDING",
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    FAILED = "FAILED",
    READ = "READ"
}
export declare const DeliveryStatusTranslationMap: Map<DeliveryStatus, string>;
export declare enum ReportDeliveryMethod {
    EMAIL = "EMAIL",
    SLACK = "SLACK",
    WEB = "WEB",
    SMS = "SMS"
}
export declare const ReportDeliveryMethodTranslationMap: Map<ReportDeliveryMethod, string>;
/**
 * @deprecated Use widget typeFullFqn instead. This enum is kept for backward compatibility.
 * Widget FQNs: system.report.header, system.report.rich_text, system.report.text_image, etc.
 */
export declare enum ComponentType {
    RICH_TEXT = "RICH_TEXT",
    ENTITY_TABLE = "ENTITY_TABLE",
    ALARM_TABLE = "ALARM_TABLE",
    BATCH_ANALYSIS = "BATCH_ANALYSIS",
    TIME_SERIES_TABLE = "TIME_SERIES_TABLE",
    TIME_SERIES_CHART = "TIME_SERIES_CHART",
    LINE_CHART = "LINE_CHART",
    BAR_CHART = "BAR_CHART",
    PIE_CHART = "PIE_CHART",
    DOUGHNUT_CHART = "DOUGHNUT_CHART",
    HORIZONTAL_DOUGHNUT = "HORIZONTAL_DOUGHNUT",
    POINT_CHART = "POINT_CHART",
    STATE_CHART = "STATE_CHART",
    BAR_CHART_WITH_LABELS = "BAR_CHART_WITH_LABELS",
    RANGE_CHART = "RANGE_CHART",
    BARS = "BARS",
    DASHBOARD = "DASHBOARD",
    SUBREPORT = "SUBREPORT",
    IMAGE = "IMAGE",
    DIVIDER = "DIVIDER",
    PAGE_BREAK = "PAGE_BREAK",
    CREATED_TIME = "CREATED_TIME",
    PAGE_NUMBER = "PAGE_NUMBER",
    REPORT_HEADER = "REPORT_HEADER",
    TEXT_IMAGE = "TEXT_IMAGE",
    SHAPE_LINE = "SHAPE_LINE",
    SHAPE_RECTANGLE = "SHAPE_RECTANGLE",
    SHAPE_TRIANGLE = "SHAPE_TRIANGLE",
    SHAPE_CIRCLE = "SHAPE_CIRCLE",
    SHAPE_ELLIPSE = "SHAPE_ELLIPSE",
    SHAPE_HEXAGON = "SHAPE_HEXAGON",
    SHAPE_STAR = "SHAPE_STAR",
    SHAPE_ARROW = "SHAPE_ARROW"
}
/**
 * Report-specific widget type FQNs.
 * These are custom widgets designed specifically for reports.
 */
export declare const ReportWidgetFqns: {
    readonly HEADER: "system.report.header";
    readonly RICH_TEXT: "system.report.rich_text";
    readonly TEXT_IMAGE: "system.report.text_image";
    readonly PAGE_BREAK: "system.report.page_break";
    readonly DIVIDER: "system.report.divider";
};
export interface ReportTemplate extends BaseData<ReportTemplateId>, HasTenantId, ExportableEntity<ReportTemplateId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    customerTitle?: string | null;
    name: string;
    description?: string | null;
    type: ReportTemplateType;
    format: ReportFormat;
    version?: number | null;
    ownerId?: ReportTemplateId;
    ownerName?: string | null;
    configuration: ReportConfiguration;
}
export interface ReportConfiguration {
    format: ReportFormat;
    namePattern: string;
    timeDataPattern: string;
    widgets?: {
        [id: string]: Widget;
    };
    widgetLayouts?: WidgetLayouts;
    gridSettings?: GridSettings;
    entityAliases: EntityAliases;
    filters: Filters;
    timewindow?: Timewindow;
    pageSize?: string;
    pageOrientation?: "PORTRAIT" | "LANDSCAPE";
    pageMargins?: Margins;
    pageBackground?: string;
    header?: ReportSectionConfig;
    footer?: ReportSectionConfig;
    components?: ReportComponent[];
}
/**
 * @deprecated Use Widget interface instead. This is kept for backward compatibility.
 */
export interface ReportComponent {
    type: ComponentType;
    id: string;
    config: any;
    x?: number;
    y?: number;
    cols?: number;
    rows?: number;
}
export declare const DEFAULT_GRID_CELL_SIZE_MM = 10;
export declare const DEFAULT_GRID_COLUMNS = 17;
export declare const ComponentDefaultSizes: {
    [key in ComponentType]: {
        cols: number;
        rows: number;
    };
};
export interface EntityAlias {
    id: string;
    alias: string;
    filter: ReportEntityFilter;
}
export interface ReportEntityFilter {
    type: string;
    singleEntity?: {
        entityType: string;
        id: string;
    };
    entityList?: {
        entityType: string;
        entityIds: EntityId[];
    };
}
export interface Margins {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
/**
 * Configuration for report header/footer sections.
 * Uses dashboard-compatible widget format with separate gridster area.
 * Includes backward-compatible 'components' field.
 */
export interface ReportSectionConfig {
    enabled: boolean;
    height?: number;
    widgets?: {
        [id: string]: Widget;
    };
    widgetLayouts?: WidgetLayouts;
    gridSettings?: GridSettings;
    components?: ReportComponent[];
    firstPage?: {
        enabled: boolean;
        widgets?: {
            [id: string]: Widget;
        };
        widgetLayouts?: WidgetLayouts;
        components?: ReportComponent[];
    } | null;
}
/**
 * @deprecated Use ReportSectionConfig instead
 */
export type HeaderFooterConfig = ReportSectionConfig;
export interface CsvConfig {
    delimiter: string;
    includeHeaders: boolean;
    dateFormat: string;
}
export interface SchedulerEvent extends BaseData<SchedulerEventId>, HasTenantId, ExportableEntity<SchedulerEventId> {
    tenantId?: TenantId;
    customerId?: CustomerId;
    originatorId?: EntityId | null;
    name: string;
    type: string;
    schedule?: ScheduleConfig;
    trigger?: TriggerConfig;
    entityAliases?: EntityAliases;
    enabled: boolean;
    version?: number | null;
    templateInfo?: {
        id: ReportTemplateId;
        name: string;
    };
    customerTitle?: string | null;
    userName?: string;
    userId?: string;
    ownerId?: EntityId;
    additionalInfo?: any | null;
    eventType?: SchedulerEventType;
    reportTemplateId?: ReportTemplateId | string;
    generatingUserId?: string;
    scheduleConfig?: LegacyScheduleConfig;
    recipientsConfig?: RecipientsConfig;
    entityFilter?: any;
    additionalConfig?: any;
    lastExecutionTime?: number;
    nextExecutionTime?: number;
}
export interface LegacyScheduleConfig {
    startTime: number;
    endTime?: number;
    timezone: string;
    repeatType: RepeatType;
    repeatTime?: string;
    cronExpression?: string;
    daysOfWeek?: number[];
    dayOfMonth?: number;
}
export interface ScheduleConfig {
    timezone: string;
    startTime: number;
    endTime?: number | null;
    repeat: RepeatConfig;
}
export interface RepeatConfig {
    type: RepeatType;
    endsOn?: number | null;
    repeatOn?: number[];
    timerValue?: number;
    timerUnit?: TimerUnit;
}
export declare enum TriggerOperator {
    EQUALS = "EQUALS",
    NOT_EQUALS = "NOT_EQUALS",
    GREATER = "GREATER",
    LESS = "LESS",
    GREATER_OR_EQUAL = "GREATER_OR_EQUAL",
    LESS_OR_EQUAL = "LESS_OR_EQUAL"
}
export declare const TriggerOperatorSymbols: {
    [key in TriggerOperator]: string;
};
export declare const TriggerOperatorTranslationMap: Map<TriggerOperator, string>;
export declare enum TriggerCompareMode {
    CONSTANT = "CONSTANT",
    KEY = "KEY"
}
export declare const TriggerCompareModeTranslationMap: Map<TriggerCompareMode, string>;
export type TriggerKeyType = "timeseries" | "attribute";
/**
 * Individual trigger condition
 */
export interface TriggerCondition {
    key?: string;
    keyType?: TriggerKeyType;
    keyLabel?: string;
    keyColor?: string;
    keyUnits?: string;
    keyDecimals?: number;
    attributeScope?: string;
    operator?: TriggerOperator;
    compareMode?: TriggerCompareMode;
    constantValue?: string | number | boolean;
    compareKey?: string;
    compareKeyType?: TriggerKeyType;
    compareKeyLabel?: string;
    compareKeyColor?: string;
    compareKeyUnits?: string;
    compareKeyDecimals?: number;
    compareAttributeScope?: string;
}
export interface TriggerConfig {
    enabled: boolean;
    datasourceType?: string;
    entityId?: EntityId;
    entityAliasId?: string;
    conditions?: TriggerCondition[];
    key?: string;
    keyType?: TriggerKeyType;
    attributeScope?: string;
    operator?: TriggerOperator;
    compareMode?: TriggerCompareMode;
    constantValue?: string | number | boolean;
    compareDatasourceType?: string;
    compareEntityId?: EntityId;
    compareEntityAliasId?: string;
    compareKey?: string;
    compareKeyType?: TriggerKeyType;
    compareAttributeScope?: string;
}
export interface RecipientsConfig {
    targetIds: string[];
    targetNames?: string[];
    recipients?: string[];
    notificationTemplateId?: string;
    notificationTemplateName?: string;
    deliveryMethods: ReportDeliveryMethod[];
}
export interface Report extends BaseData<ReportId>, HasTenantId {
    tenantId?: TenantId;
    reportTemplateId?: ReportTemplateId;
    schedulerEventId?: SchedulerEventId;
    userId?: string;
    name?: string;
    format?: ReportFormat;
    fileName?: string;
    fileSize?: number;
    status?: ReportStatus;
    errorMessage?: string;
    contentType?: string;
    originatorEntityType?: string;
    originatorEntityId?: string;
    customerId?: CustomerId;
    customerTitle?: string | null;
    templateInfo?: {
        id: ReportTemplateId;
        name: string;
    };
    userName?: string;
}
export declare const isPublicReport: (report: Report) => boolean;
export interface ReportDelivery {
    id: string;
    createdTime: number;
    reportId: string;
    recipientId: string;
    deliveryMethod: ReportDeliveryMethod;
    status: DeliveryStatus;
    errorMessage?: string;
    deliveredTime?: number;
    readTime?: number;
}
export interface GenerateReportRequest {
    templateId: string;
    entityFilter?: any;
    /**
     * Overrides the period the report covers, in the same shape widgets use
     * (a `Timewindow`). Chosen at generation time, so one template serves any
     * period; widgets with `useReportTimewindow: false` keep their own.
     */
    timeWindow?: any;
    timezone?: string;
}
export interface GenerateReportResponse {
    reportId: string;
    templateId: string;
    status: string;
}
export interface ReportStatusResponse {
    reportId: string;
    status: string;
    progress: number;
    progressMessage?: string;
    errorMessage?: string;
    fileName?: string;
    fileSize?: number;
}
export interface TimeWindowConfig {
    type: string;
    interval?: number;
    startTime?: number;
    endTime?: number;
}
export declare function getDefaultReportTemplate(): ReportTemplate;
export declare function getDefaultReportSectionConfig(): ReportSectionConfig;
export declare function extractId(id: EntityId | ReportTemplateId | string | undefined): string | undefined;
export declare function getDefaultSchedulerEvent(userId: string, eventType?: SchedulerEventType): SchedulerEvent;
