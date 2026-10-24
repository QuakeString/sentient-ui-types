/** The Angular locale id for a UI locale (`hi_IN` → `hi`), or `en-US` when none fits. */
export declare function angularLocaleOf(uiLocale: string): string;
/** The LOCALE_ID value: a String whose text follows the UI language. */
export declare class DynamicLocaleId extends String {
    current: string;
    toString(): string;
    valueOf(): string;
    toLowerCase(): string;
}
export declare const dynamicLocaleId: DynamicLocaleId;
/**
 * Load and register Angular's data for a UI locale, then switch LOCALE_ID to
 * it. Falls back to en-US when the data cannot be loaded.
 */
export declare function useAngularLocale(uiLocale: string): Promise<void>;
