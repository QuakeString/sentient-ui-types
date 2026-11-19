/** What a protected widget action asks for before it runs. */
export declare enum ActionProtectionMode {
    NONE = "NONE",
    CONFIRM = "CONFIRM",
    PASSWORD = "PASSWORD",
    OWN_PASSWORD = "OWN_PASSWORD"
}
export declare const actionProtectionModeTranslations: Map<ActionProtectionMode, string>;
/**
 * Protection of one widget action (or of a write widget's click).
 *
 * `password` (mode PASSWORD) is either `${Name}`, one of the tenant's named
 * passwords, or `pw:<id>`, a password typed for this action and kept on the
 * server as a hash. The dashboard never holds a password.
 */
export interface ActionProtection {
    mode: ActionProtectionMode;
    password?: string;
    message?: string;
    askReason?: boolean;
    audit?: boolean;
    /** Minutes the action stays unlocked after a right password; 0 = ask every time. */
    unlockMinutes?: number;
}
export declare const defaultActionProtection: () => ActionProtection;
export declare const unlockMinutesOptions: number[];
export declare const isActionProtected: (p?: ActionProtection | null) => boolean;
/** `${Name}` → `Name`; anything else → null. */
export declare const namedPasswordOf: (ref?: string) => string | null;
/** Whether a reference is a password set for one action (`pw:<id>`). */
export declare const isActionPasswordRef: (ref?: string) => boolean;
export interface NamedActionPassword {
    id: string;
    name: string;
    usedByDashboards: number;
    updatedTime: number;
    updatedBy?: string;
    blockedUntil?: number;
}
export interface ActionPasswordBlockPolicy {
    maxAttempts: number;
    blockMinutes: number;
}
/** Where a protected action runs, for the audit log. */
export interface ActionProtectionContext {
    dashboardId?: string;
    dashboardName?: string;
    state?: string;
    widgetId?: string;
    widgetName?: string;
    actionName?: string;
    actionSource?: string;
    entityType?: string;
    entityId?: string;
    entityName?: string;
}
export interface ActionProtectionVerifyResult {
    ok: boolean;
    error?: 'WRONG' | 'BLOCKED' | 'UNKNOWN_PASSWORD' | 'REASON_REQUIRED';
    attemptsLeft?: number;
    blockedUntil?: number;
}
