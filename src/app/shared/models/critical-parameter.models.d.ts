import { ActionProtectionContext, ActionProtectionMode, ActionProtectionVerifyResult } from '@shared/models/action-protection.models';
/** How a critical key is written. */
export declare enum CriticalParameterKind {
    ATTRIBUTE = "ATTRIBUTE",
    TIME_SERIES = "TIME_SERIES",
    RPC = "RPC"
}
/** What confirms a change of a critical key, weakest first. */
export declare enum CriticalParameterConfirm {
    CONFIRM = "CONFIRM",
    PASSWORD = "PASSWORD",
    OWN_PASSWORD = "OWN_PASSWORD"
}
export declare const criticalConfirmRank: (c: CriticalParameterConfirm) => number;
/** Where a rule shown on a device or asset comes from. */
export type CriticalParameterSource = 'PROFILE' | 'STRICTER' | 'OWN';
export interface CriticalParameter {
    id?: string;
    key: string;
    kind: CriticalParameterKind;
    /** SHARED_SCOPE / SERVER_SCOPE for attributes; empty = any scope. */
    scope?: string | null;
    confirm: CriticalParameterConfirm;
    /** `${Name}` when confirm is PASSWORD. */
    passwordRef?: string | null;
    askReason: boolean;
    minValue?: number | null;
    maxValue?: number | null;
    unit?: string | null;
    logChanges: boolean;
}
export interface CriticalParameterRow extends CriticalParameter {
    source: CriticalParameterSource;
    fromName?: string;
    /** For a stricter device/asset row: the profile rule it tightens. */
    profileRule?: CriticalParameter;
}
export interface CriticalParameterList {
    rules: CriticalParameterRow[];
    logManualChanges: boolean;
    profile?: {
        id: string;
        name: string;
        entityType: string;
    };
}
export interface AuditSettings {
    logManualChanges: boolean;
}
/** One value a click is about to write. */
export interface PlannedWrite {
    kind: CriticalParameterKind;
    key: string;
    scope?: string;
    value: any;
}
/** The widget's own protection, merged into the prompt. */
export interface WidgetProtectionRequest {
    mode: ActionProtectionMode;
    passwordRef?: string;
    password?: string;
    askReason?: boolean;
    audit?: boolean;
}
export interface CriticalWrite {
    key: string;
    kind: CriticalParameterKind;
    confirm: CriticalParameterConfirm;
    passwordName?: string;
    askReason: boolean;
    minValue?: number;
    maxValue?: number;
    unit?: string;
    old?: any;
    new: any;
}
export interface CriticalNeeds {
    ownPassword: boolean;
    passwords: string[];
    reason: boolean;
    confirm: boolean;
}
export interface CriticalRequirements {
    critical: CriticalWrite[];
    outOfRange: string[];
    needs: CriticalNeeds;
    actionPassword: boolean;
}
export interface CriticalAuthorizeRequest {
    entityType: string;
    entityId: string;
    writes: PlannedWrite[];
    passwords?: {
        [name: string]: string;
    };
    ownPassword?: string;
    reason?: string;
    widget?: WidgetProtectionRequest;
    context?: ActionProtectionContext;
}
export interface CriticalAuthorizeResult extends Omit<ActionProtectionVerifyResult, 'error'> {
    error?: 'WRONG' | 'BLOCKED' | 'UNKNOWN_PASSWORD' | 'REASON_REQUIRED' | 'OUT_OF_RANGE';
    /** The password that failed: a name, "own", "action" or "reason". */
    failed?: string;
    grant?: string;
    expiresAt?: number;
    message?: string;
}
export declare const GRANT_HEADER = "X-Sentient-Grant";
export declare const criticalKindTranslation: (kind: CriticalParameterKind, scope?: string | null) => string;
/** "60 – 85 °C", "at least 5", "—". */
export declare const formatCriticalRange: (r: {
    minValue?: number | null;
    maxValue?: number | null;
    unit?: string | null;
}, atLeast: string, atMost: string) => string;
