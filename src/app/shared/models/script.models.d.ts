/** The base language of a locale (`ar_AE` → `ar`, `zh-TW` → `zh`). */
export declare function baseLang(locale: string): string;
export declare function isRtlLocale(locale: string): boolean;
export declare function directionOf(locale: string): 'rtl' | 'ltr';
/**
 * The CJK font sheet a locale needs (`assets/fonts/noto/cjk-*.css`), or null.
 * Traditional Chinese is zh_TW, zh_HK, zh_MO or zh_Hant.
 */
export declare function cjkFontSheetOf(locale: string): string | null;
/** A language in its own script, with its English name. */
export interface NativeLanguageName {
    native: string;
    english: string;
    /** Scheduled language of India (the picker lists these first). */
    indian?: boolean;
}
/**
 * Load every 'SENTIENT Names' face (about 120 KB, scss/names-font.scss) now,
 * so a language picker never waits for a font: in Firefox each font that
 * arrives while text is on screen redraws all text on the page.
 */
export declare function preloadNameFonts(document: Document): void;
/** How a UI locale is shown in the language picker. Unknown locales show their code. */
export declare function nativeLanguageName(locale: string): NativeLanguageName;
export interface LanguageChoice extends NativeLanguageName {
    locale: string;
    /** Written right to left; when absent, decided from the locale. */
    rtl?: boolean;
}
/** Group ready-made choices (content languages) the same way as locales. */
export declare function groupChoices(choices: LanguageChoice[], filter?: string): {
    indian: LanguageChoice[];
    world: LanguageChoice[];
};
/**
 * The picker's two groups: the scheduled languages of India, then the rest,
 * each sorted by English name. `filter` matches the native name, the English
 * name or the locale code, ignoring case.
 */
export declare function groupLanguageChoices(locales: string[], filter?: string): {
    indian: LanguageChoice[];
    world: LanguageChoice[];
};
