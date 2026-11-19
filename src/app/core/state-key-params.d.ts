export declare const RESERVED_LABEL_PARAM_NAMES: string[];
export declare const STATE_PARAM_TOKEN_REGEX: RegExp;
export declare function substituteStateKeyParams(text: string, stateParams: {
    [key: string]: any;
}, skipReservedLabelParams?: boolean): string;
export declare const hasStateParamToken: (value: any) => boolean;
export declare const hasStateParamDefaultToken: (value: any) => boolean;
export declare const isKeySettingName: (name: string) => boolean;
/**
 * A key setting with its ${name} / ${name|default} tokens replaced: a string,
 * or each string of an array. Returns the input itself when nothing changed.
 */
export declare function substituteKeySetting<T>(value: T, stateParams: {
    [key: string]: any;
}): T;
/** Whether a key setting (string or string array) holds a ${...} token. */
export declare const keySettingHasToken: (value: any) => boolean;
/**
 * A text with `${` that is not a well-formed token: `${.run_fb}`, `${run fb}`,
 * an unclosed `${run`. Returns the first bad part, or null when every `${`
 * starts a valid ${name} / ${name|default} token (names: letters, digits, _).
 */
export declare function invalidStateParamToken(text: string): string | null;
