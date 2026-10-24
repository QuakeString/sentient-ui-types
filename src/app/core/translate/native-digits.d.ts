/** The digits 0-9 of `lang`, or null when it writes 0-9. */
export declare function nativeDigits(lang: string): string[] | null;
/** A number written with the current UI language's digits. */
export declare function localDigits(value: number | string): string;
/** Start converting values on screen; follows the UI language (`<html lang>`). */
export declare function initNativeDigits(document: Document): void;
