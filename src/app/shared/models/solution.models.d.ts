/** One field of a list parameter's items (e.g. a machine's name, cell, type). */
export interface SolutionParameterField {
    name: string;
    label?: string;
    type?: 'string' | 'number' | 'boolean';
    options?: any[];
}
/** A template parameter, as the form shows it. */
export interface SolutionParameter {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'list';
    label?: string;
    help?: string;
    default?: any;
    required?: boolean;
    min?: number;
    max?: number;
    options?: any[];
    /** Object items of a list parameter. */
    itemFields?: SolutionParameterField[];
}
/** Where an imported template came from. */
export interface SolutionPackageOrigin {
    verified: boolean;
    signer?: string;
    importedAt?: number;
    createdWith?: string;
}
/** A template card in the gallery. */
export interface SolutionTemplateSummary {
    id: string;
    name: string;
    /** `name` in the UI language, when SENTIENT ships a translation of it. */
    displayName?: string;
    summary?: string;
    description?: string;
    category?: string;
    tags: string[];
    icon?: string;
    author?: string;
    version?: string;
    createdWith?: string;
    /** Ships with SENTIENT (system resource). */
    system: boolean;
    package?: SolutionPackageOrigin;
    parameters: SolutionParameter[];
    /** Items per section with the defaults. */
    creates: {
        [section: string]: number;
    } | null;
    /** Dashboard screenshots (system image keys); the first is the gallery card's cover. */
    screenshots?: SolutionScreenshot[];
}
export interface SolutionScreenshot {
    image: string;
    caption?: string;
}
/** What a template gives, for its details dialog (with its default parameters). */
export interface SolutionHighlights {
    dashboards: {
        title: string;
        pages: string[];
    }[];
    alarms: {
        name: string;
        severities: string[];
    }[];
    calculations: string[];
    deviceTypes: string[];
    notifications: string[];
    emulator: boolean;
}
/** Dashboards built from a blueprint before it is installed, with simulated values. */
export interface SolutionPreview {
    dashboards: {
        ref: string;
        title: string;
        dashboard: any;
    }[];
    errors: string[];
}
/** The image URL of a screenshot (served as a system image). */
export declare function screenshotUrl(s: SolutionScreenshot): string;
/** A screenshot's preview (at most 400 px; for cards and covers, not the slideshow). */
export declare function screenshotPreviewUrl(s: SolutionScreenshot): string;
/** A mark on a draft item the assistant (or the user) changed. */
export interface SolutionDraftChange {
    section: string;
    ref: string;
    op: 'added' | 'changed' | 'removed';
    by?: string;
    at?: number;
}
export interface SolutionDraft {
    id: string;
    name: string;
    /** SCRATCH, TEMPLATE, COPY or INSTALLED. */
    source: string;
    templateId?: string;
    /** The installed solution this draft updates (install = apply changes). */
    installedName?: string;
    parameters?: any;
    blueprint: any;
    changes?: SolutionDraftChange[] | null;
    version: number;
    createdTime?: number;
    updatedTime?: number;
}
/** A draft in the list (without its blueprint). */
export interface SolutionDraftInfo {
    id: string;
    name: string;
    source: string;
    installedName?: string;
    templateId?: string;
    version: number;
    createdTime: number;
    updatedTime: number;
    counts: {
        [section: string]: number;
    };
}
/** The blueprint's sections with `ref`ed items, as the creator lists them (the server decides the install order). */
export declare const solutionSections: string[];
export interface SolutionValidation {
    valid: boolean;
    errors: string[];
    warnings: string[];
    limits?: string[];
    summary?: {
        [section: string]: number;
    };
}
export interface SolutionJob {
    id: string;
    status: 'RUNNING' | 'DONE' | 'FAILED';
    error?: string;
    log?: string[];
    sections?: [string, number][];
    result?: any;
}
export interface InstalledSolution {
    name: string;
    description?: string;
    installedAt?: number;
    template?: {
        id?: string;
        name?: string;
        version?: string;
        parameters?: any;
    };
    counts: {
        [section: string]: number;
    };
    dashboards: {
        id: string;
        name: string;
    }[];
    /** The solution's own users (sign in as one of them to see what they see). */
    users?: {
        id: string;
        name: string;
    }[];
    hasEmulator: boolean;
}
export interface PackageDependency {
    type: 'widgetType' | 'image';
    id: string;
    source: 'system' | 'bundled';
    status: 'present' | 'bundled' | 'missing' | 'conflict';
}
/** What the server found checking a package before importing it. */
export interface PackagePreflight {
    manifest?: {
        name: string;
        slug: string;
        version: string;
        category?: string;
        summary?: string;
        author?: string;
        createdWith?: string;
        minSentientVersion?: string;
        creates?: {
            [section: string]: number;
        };
    };
    signature?: {
        status: 'VERIFIED' | 'UNSIGNED' | 'UNKNOWN_KEY' | 'INVALID';
        keyId?: string;
        reason?: string;
    };
    server?: string;
    dependencies?: PackageDependency[];
    existing?: {
        templateId: string;
        version: string;
        package: 'newer' | 'same' | 'older';
    } | null;
    template?: {
        valid: boolean;
        errors?: string[];
        warnings?: string[];
    };
    canImport: boolean;
    blockers: string[];
    warnings: string[];
}
/** What a package is made from: a template, or an installed solution. */
export interface PackageSource {
    templateId?: string;
    installedName?: string;
}
/** Section names as the UI shows them. */
export declare const solutionSectionLabels: {
    [section: string]: string;
};
/** A single Solution hub item: one dashboard, widget, rule chain, calculated field (alarm rule), device profile or analytics pipeline. */
export type SolutionItemType = 'DASHBOARD' | 'WIDGET_TYPE' | 'RULE_CHAIN' | 'CALCULATED_FIELD' | 'DEVICE_PROFILE' | 'ANALYTICS_PIPELINE';
export interface SolutionItemSummary {
    id: string;
    name: string;
    /** `name` in the UI language, when SENTIENT ships a translation of it. */
    displayName?: string;
    itemType: SolutionItemType;
    /** A calculated field's type (ALARM = an alarm rule), a rule chain's type, a widget's type. */
    subType?: string;
    summary?: string;
    description?: string;
    category?: string;
    tags: string[];
    icon?: string;
    author?: string;
    version?: string;
    createdWith?: string;
    system: boolean;
    package?: SolutionPackageOrigin;
    screenshots?: SolutionScreenshot[];
}
/** The hub's kinds of content as the gallery and the pages show them (alarm rules are ALARM calculated fields). */
export interface SolutionHubKind {
    kind: string;
    itemType?: SolutionItemType;
    subType?: string;
    label: string;
    icon: string;
}
export declare const solutionHubKinds: SolutionHubKind[];
/** Whether an item belongs to a kind (calculated fields leave out the alarm rules, which have their own kind). */
export declare function itemOfKind(item: SolutionItemSummary, kind: SolutionHubKind): boolean;
