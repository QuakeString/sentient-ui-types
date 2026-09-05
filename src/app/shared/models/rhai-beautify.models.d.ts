/** Replace Rhai-only tokens with placeholder identifiers. */
export declare function protectRhai(source: string): string;
/** Put the original Rhai tokens back. Only the one space added on each side
 *  by `protectRhai` is removed again, so `1..7` in code and `01..13` inside a
 *  string or comment both round-trip byte-identical (a line break js-beautify
 *  may have wrapped in before a placeholder is left as harmless whitespace). */
export declare function restoreRhai(source: string): string;
/** Format Rhai with a JavaScript beautifier without breaking Rhai syntax.
 *  `jsBeautify` is the js-beautify `js_beautify(source, options)` function. */
export declare function beautifyRhaiWith(jsBeautify: (src: string, opts?: any) => string, source: string, options?: any): string;
