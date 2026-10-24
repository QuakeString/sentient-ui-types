import type { LanguageChoice } from './script.models';
/** Language the platform can translate user content into. */
export interface ContentLanguage {
    code: string;
    name: string;
    nativeName: string;
    /** ISO 15924 script code. */
    script: string;
    rtl: boolean;
    group: 'SOURCE' | 'INDIA' | 'EUROPE' | 'MIDDLE_EAST' | 'EAST_ASIA' | 'SOUTH_ASIA' | 'AFRICA';
    offlineEngine: string;
    /** The offline engine's output for this language is often poor. */
    offlineLowQuality?: boolean;
}
export type TranslationStatus = 'MACHINE' | 'REVIEWED' | 'MANUAL';
/** Editor filter: a status, or no text at all in the language. */
export type TranslationState = 'missing' | 'machine' | 'reviewed' | 'manual';
export interface TranslationTarget {
    text: string;
    status: TranslationStatus;
    engine?: string;
    updatedTime: number;
}
export interface TranslationUsage {
    entityType: string;
    entityId: string;
    entityName?: string;
    fieldPath: string;
}
export interface TranslationEntry {
    id: string;
    sourceText: string;
    sourceLang?: string;
    locked: boolean;
    createdTime: number;
    translations: {
        [lang: string]: TranslationTarget;
    };
    usages: TranslationUsage[];
}
export interface TranslationEntryPage {
    data: TranslationEntry[];
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
}
export interface TranslationEntryQuery {
    page?: number;
    pageSize?: number;
    textSearch?: string;
    lang?: string;
    state?: TranslationState;
    locked?: boolean;
    entityType?: string;
    entityId?: string;
    /** `createdTime`, `sourceText`, `translation` or `status` (the last two need `lang`). */
    sortProperty?: TranslationEntrySort;
    sortOrder?: 'ASC' | 'DESC';
}
export type TranslationEntrySort = 'createdTime' | 'sourceText' | 'translation' | 'status';
export interface TranslationSettings {
    targetLanguages: string[];
    defaultSourceLanguage: string;
    autoTranslate: boolean;
    providers?: TranslationProvider[];
}
export type TranslationProviderType = 'SENTIENT' | 'AI_MODEL' | 'ANTHROPIC' | 'GOOGLE' | 'DEEPL' | 'LIBRE' | 'OPENAI' | 'OFFLINE';
/** A translation engine, in the order engines are tried. */
export interface TranslationProvider {
    id: string;
    type: TranslationProviderType;
    enabled: boolean;
    name?: string;
    /** Only sent when changed; the server never returns it. */
    apiKey?: string;
    /** Set by the server when a key is stored. Send it back to keep the key. */
    hasApiKey?: boolean;
    url?: string;
    model?: string;
    /** Only use for these target languages (all when empty). */
    languages?: string[];
    codeMap?: {
        [code: string]: string;
    };
    /** SENTIENT: the translator (see Translator). */
    instanceId?: string;
    /** AI_MODEL: the model from Settings > AI models. Name, provider and model come from it. */
    aiModelId?: string;
    aiProvider?: string;
    systemModel?: boolean;
}
/** Which fields a provider type uses. */
export declare const providerFields: {
    [type in TranslationProviderType]: {
        apiKey: 'required' | 'optional' | 'none';
        url: 'required' | 'optional' | 'none';
        model: boolean;
    };
};
/** Entries of the Add engine menu: engine types, and presets of one. */
export type EngineMenuItem = TranslationProviderType | 'GEMINI';
/** Settings an Add engine entry starts from. */
export declare const enginePresets: {
    [item in EngineMenuItem]?: {
        type: TranslationProviderType;
        name?: string;
        url?: string;
        model?: string;
    };
};
/** What a provider still needs before it can work, or null. */
export declare function providerProblem(p: TranslationProvider): 'api-key' | 'url' | 'model' | null;
/** A new provider entry with a fresh id. */
export declare function newProvider(type: TranslationProviderType, existing: TranslationProvider[]): TranslationProvider;
/** A language pack group a SENTIENT translator can install. */
export interface TranslatorPackGroup {
    id: string;
    name: string;
    model: string;
    packs: string[];
    sizeGb: number;
    memoryGb: number;
    license: string;
    requiresAcceptance: boolean;
    languages: string[];
}
export type TranslatorMode = 'CONNECTED' | 'DIRECT';
export type TranslatorState = 'ONLINE' | 'OFFLINE' | 'WAITING';
/** Last report of a translator (CONNECTED: over its connection; DIRECT: polled). */
export interface TranslatorStatus {
    version?: string;
    host?: string;
    cpu?: number;
    memoryUsedGb?: number;
    memoryTotalGb?: number;
    queue?: number;
    textsPerMinute?: number;
    packs?: {
        id: string;
        state: string;
    }[];
    languages?: string[];
}
/** The offline translator installed like a gateway (docs/SENTIENT_TRANSLATOR_PLAN.md). */
export interface Translator {
    id: string;
    name: string;
    owner: 'TENANT' | 'SYSTEM';
    /** The viewer may change it. */
    editable: boolean;
    shared: boolean;
    mode: TranslatorMode;
    url?: string;
    packs: string[];
    acceptedLicenses: string[];
    tokenHint?: string;
    createdTime: number;
    state: TranslatorState;
    lastSeen?: number;
    languages: string[];
    status?: TranslatorStatus;
}
export interface TranslatorRequest {
    name: string;
    mode: TranslatorMode;
    url?: string;
    packs: string[];
    acceptLicenses: string[];
    shared: boolean;
}
export type GlossaryMode = 'KEEP' | 'FIXED' | 'EXPAND';
export interface GlossaryTerm {
    id?: string;
    term: string;
    mode: GlossaryMode;
    expansion?: string;
    translations: {
        [lang: string]: string;
    };
    caseSensitive: boolean;
    createdTime?: number;
}
export interface TranslationJobReport {
    translated: number;
    failed: number;
    keptHuman: number;
    errors: string[];
}
export interface TranslationJobStatus {
    running: boolean;
    lang?: string;
    startedTime?: number;
    finishedTime?: number;
    report: TranslationJobReport;
}
export interface ProviderTestResult {
    text?: string;
    engine?: string;
    error?: string;
}
export interface TranslationLangStats {
    lang: string;
    machine: number;
    reviewed: number;
    manual: number;
    missing: number;
}
export interface TranslationStats {
    totalSources: number;
    translatableSources: number;
    lockedSources: number;
    languages: TranslationLangStats[];
}
export interface TranslationImportReport {
    created: number;
    updated: number;
    skipped: number;
}
export interface TranslationScanReport {
    dashboards: number;
    /** Device profiles, alarm rules, notification and report templates. */
    otherEntities: number;
    strings: number;
    newSources: number;
    failed: number;
}
/** `{lang: {source text: translated text}}`, the export/import file shape. */
export type TranslationBundle = {
    [lang: string]: {
        [source: string]: string;
    };
};
/** Content languages as choices for the shared language picker (tb-language-select). */
export declare function contentLanguageChoices(languages: ContentLanguage[]): LanguageChoice[];
/**
 * Catalogue code for a UI locale: `hi_IN` → `hi`, `zh_TW` → `zh_TW`,
 * `zh_CN` → `zh`. Mirrors `languages::normalize` on the server.
 */
export declare function contentLangOf(locale: string): string;
/** Translation key (under `translation.used-in.`) describing where a text is used. */
export declare function usageKind(fieldPath: string, entityType?: string): string;
/** Share of `translatable` texts done in a language, 0-100, rounded down. */
export declare function translatedPercent(stats: TranslationLangStats | undefined, translatable: number): number;
/** Parse an import file: `{lang: {source: text}}` with string values only. */
export declare function parseTranslationBundle(json: string): TranslationBundle;
/**
 * Merge translated user texts into a catalogue's `custom` object in place.
 *
 * Keys written by an earlier merge (`previous`) are removed first, so a text
 * deleted on the server disappears; keys the locale file itself defines
 * (built-in `custom.*` keys) are never overwritten. Returns the keys written.
 */
export declare function mergeCustomTexts(custom: {
    [key: string]: any;
}, texts: {
    [source: string]: string;
}, previous?: Set<string>): Set<string>;
/** A text being edited and its translations (`POST /api/translation/texts`). */
export interface TextTranslations {
    sourceText: string;
    /** Entry id in the translation editor; absent until saved or translated once. */
    id?: string;
    sourceLang?: string;
    locked: boolean;
    translations: {
        [lang: string]: {
            text: string;
            status: TranslationStatus;
        };
    };
}
export interface TextTranslationCell {
    lang: string;
    name: string;
    rtl: boolean;
    text?: string;
    state: TranslationState | 'same';
}
export interface TextTranslationRow {
    sourceText: string;
    id?: string;
    locked: boolean;
    cells: TextTranslationCell[];
}
/**
 * Rows for the "Translations" panel of an editor: one per text, one cell per
 * tenant language. A language the text is already written in reads `same`.
 */
export declare function textTranslationRows(results: TextTranslations[], targetLanguages: string[], languages: ContentLanguage[], defaultSourceLanguage?: string): TextTranslationRow[];
/** How many cells still need a machine translation, and how many are machine-only. */
export declare function textTranslationSummary(rows: TextTranslationRow[]): {
    missing: number;
    machine: number;
    done: number;
};
/**
 * Translatable texts of a widget being edited: title, tooltip, no-data
 * message, data key labels and the text settings of the widget.
 */
export declare function widgetConfigTexts(config: {
    [key: string]: any;
} | null | undefined): string[];
/**
 * Keeps returning the same array while the texts stay the same, so a getter
 * can feed `st-text-translations` without triggering a lookup on every
 * change detection.
 */
export declare class StableTexts {
    private key;
    private value;
    of(texts: (string | null | undefined)[]): string[];
}
/** Languages a designer can preview a dashboard in: the tenant's target languages, by native name. */
export declare function previewLanguageOptions(settings: Pick<TranslationSettings, 'targetLanguages'> | null | undefined, languages: ContentLanguage[]): {
    code: string;
    name: string;
}[];
export type AppTextFilter = 'ALL' | 'CHANGED' | 'MISSING' | 'OUTDATED';
export interface AppTextRow {
    key: string;
    english: string;
    /** The shipped translation, if any. */
    builtin?: string;
    /** The administrator's text, when changed. */
    value?: string;
    /** The English changed after this text was saved. */
    outdated: boolean;
}
export interface AppTextsPage {
    data: AppTextRow[];
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
    changed: number;
    missing: number;
    outdated: number;
    total: number;
}
export interface AppTextsResult {
    saved: number;
    reset: number;
    ignored: number;
}
export interface AppTranslateResult {
    translated: number;
    failed: number;
    remaining: number;
    error?: string;
}
export interface AppLanguageRequest {
    code: string;
    name: string;
    englishName?: string;
    rtl: boolean;
    nativeDigits: boolean;
}
export interface AppLanguageStats {
    code: string;
    custom: boolean;
    total: number;
    shipped: number;
    changed: number;
    outdated: number;
    missing: number;
}
