/** A UI language as the server offers it (GET /api/noauth/app-locale/languages). */
export interface AppLanguage {
    code: string;
    /** Added by the system administrator, not shipped. */
    custom: boolean;
    name?: string;
    englishName?: string;
    rtl?: boolean;
    nativeDigits?: boolean;
}
/** A language the system administrator added, or undefined. */
export declare function addedLanguage(code: string): AppLanguage | undefined;
/** Make the added languages selectable everywhere the UI lists languages. */
export declare function registerAppLanguages(list: AppLanguage[]): void;
/**
 * Load the languages added on this server before the UI picks its language,
 * so a user who chose one gets it on the first screen. Never blocks start-up
 * for long, and a failure only means the shipped languages.
 */
export declare function loadAppLanguages(): Promise<void>;
