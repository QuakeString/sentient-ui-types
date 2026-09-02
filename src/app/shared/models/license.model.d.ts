/**
 * Grace period phase for license enforcement
 */
export declare enum GracePhase {
    NORMAL = "NORMAL",
    WARNING = "WARNING",
    CRITICAL_WARNING = "CRITICAL_WARNING",
    BLOCKED = "BLOCKED"
}
/**
 * License state response for frontend (includes grace period info)
 */
export interface LicenseState {
    hasLicense: boolean;
    licenseType?: string;
    isValid: boolean;
    isOverLimit: boolean;
    overLimitEntities: string[];
    gracePhase: GracePhase;
    daysOverLimit?: number;
    daysUntilBlocked?: number;
    showWarning: boolean;
    warningClosable: boolean;
    licenseServerUrl: string;
    /** Whether entity creation is allowed (false when no license) */
    creationAllowed: boolean;
    /** Whether demo license can be requested (true when no license activated) */
    demoAvailable: boolean;
    /**
     * Anti-piracy v2 — runtime block reason. None when nothing is
     * blocking; populated when the offline binding check (hardware
     * mismatch) or the heartbeat kill signal (admin revoke) is forcing
     * the runtime into HardwareMismatch. Surfaced to the sys-admin via
     * a popup at login + a banner on the License page.
     */
    bindingBlockReason?: string;
}
/**
 * License type determines feature availability and limits
 */
export declare enum LicenseType {
    DEMO = "DEMO",
    BASIC = "BASIC",
    ADVANCE = "ADVANCE",
    PROFESSIONAL = "PROFESSIONAL",
    ENTERPRISE = "ENTERPRISE"
}
/**
 * Customer details associated with a license
 */
export interface CustomerDetails {
    company: string;
    email: string;
    phone?: string;
    address?: string;
}
/**
 * License limits defining maximum allowed resources.
 * Convention: -1 = unlimited, 0 = blocked.
 *
 * Mirrors `LicenseLimits` in common/src/models/license.rs (server side).
 */
export interface LicenseLimits {
    maxTenants: number;
    maxUsers: number;
    maxDevices: number;
    maxAssets: number;
    maxCustomers?: number;
    maxEdges?: number;
    maxDashboards: number;
    maxReportTemplates: number;
    maxReportSchedules: number;
    maxRuleChains: number;
    maxIntegrations: number;
    maxTelemetryKeys: number;
    maxAttributeKeys: number;
    maxCalculatedFields?: number;
    transportMsgLimit?: number;
    transportDataPointsLimit?: number;
    storageDataPointsLimit?: number;
    ruleEngineExecutionLimit?: number;
    jsExecutionLimit?: number;
    tbelExecutionLimit?: number;
    emailLimit?: number;
    smsLimit?: number;
    createdAlarmsLimit?: number;
    maxDpStorageDays?: number;
    maxWsSessionsPerTenant?: number;
    maxWsSessionsPerCustomer?: number;
    maxWsSessionsPerRegularUser?: number;
    maxWsSessionsPerPublicUser?: number;
    maxWsSubscriptionsPerTenant?: number;
    maxWsSubscriptionsPerCustomer?: number;
    maxWsSubscriptionsPerRegularUser?: number;
    maxWsSubscriptionsPerPublicUser?: number;
    wsMsgQueueLimitPerSession?: number;
    defaultStorageTtlDays?: number;
    alarmsTtlDays?: number;
    rpcTtlDays?: number;
    queueStatsTtlDays?: number;
    ruleEngineExceptionsTtlDays?: number;
    maxResourcesInBytes?: number;
    maxOtaPackagesInBytes?: number;
    maxResourceSize?: number;
    transportEnabled?: boolean;
    dbStorageEnabled?: boolean;
    ruleEngineEnabled?: boolean;
    jsExecutionEnabled?: boolean;
    tbelExecutionEnabled?: boolean;
    emailEnabled?: boolean;
    smsEnabled?: boolean;
    alarmEnabled?: boolean;
}
/**
 * Current usage statistics
 */
export interface UsageStats {
    tenants: number;
    users: number;
    devices: number;
    assets: number;
    customers?: number;
    edges?: number;
    dashboards: number;
    reportTemplates: number;
    reportSchedules: number;
    ruleChains: number;
    integrations: number;
    telemetryKeys: number;
    attributeKeys: number;
}
/**
 * License status response from API
 */
export interface LicenseStatus {
    activated: boolean;
    valid: boolean;
    licenseKey?: string;
    licenseType?: LicenseType;
    customerDetails?: CustomerDetails;
    limits?: LicenseLimits;
    activationDate?: string;
    expirationDate?: string;
    daysRemaining?: number;
    warning?: string;
    binarySha256?: string;
    binaryIntegrity?: {
        kind: 'known' | 'unknown' | 'server-unreachable' | 'not-checked';
        release_label?: string;
        /** Dotted-prefix version tags the operator attached to this hash on
         *  the license server (e.g. ["4.2.2"], ["4.2","4.3"]). Surfaced
         *  next to the release label in the dashboard. */
        version_tags?: string[];
        known_hashes_registered?: number;
        reason?: string;
    };
    binaryVersion?: string;
    licenseAllowedVersions?: string[];
    /**
     * Anti-piracy v2 — runtime block reason. Populated when the offline
     * binding check (hardware mismatch) or the heartbeat kill signal
     * (admin revoke) is forcing HardwareMismatch on entity creation.
     * Surfaced as a banner on the License page + a popup on sys-admin
     * login.
     */
    bindingBlockReason?: string;
}
/**
 * License usage check result
 */
export interface LicenseUsageResult {
    withinLimits: boolean;
    limits: LicenseLimits;
    usage: UsageStats;
    overLimit: string[];
}
/**
 * Request to activate a license
 */
export interface ActivateLicenseRequest {
    licenseKey: string;
}
/**
 * Request to obtain a demo license from the license server
 */
export interface DemoLicenseRequest {
    companyName: string;
    contactEmail: string;
    contactPhone?: string;
    address?: string;
    useCase?: string;
}
/**
 * Response from deactivate operation
 */
export interface DeactivateLicenseResponse {
    success: boolean;
    message: string;
}
/**
 * SENTIENT license-limit convention (matches Rust `LicenseLimits::is_unlimited`
 * in common/src/models/license.rs and Python LicenseLimits in license-server):
 *
 *   0   = unlimited (also: missing / NA → defaults to 0)
 *   -1  = blocked / not allowed
 *   n>0 = explicit cap
 */
export declare function isUnlimited(value: number): boolean;
export declare function isBlocked(value: number): boolean;
/**
 * Helper function to get display text for a limit value
 */
export declare function getLimitDisplay(value: number): string;
/**
 * Helper function to get license type display name
 */
export declare function getLicenseTypeDisplay(type: LicenseType): string;
/**
 * Helper function to get license type badge color
 */
export declare function getLicenseTypeBadgeColor(type: LicenseType): string;
/**
 * Default license limits for display when no license is activated
 */
export declare const DEFAULT_LICENSE_LIMITS: LicenseLimits;
