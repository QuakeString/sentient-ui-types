export interface TinyMceThemeOptions {
    skin: string;
    content_css?: string[];
    content_style?: string;
}
export declare const tinyMceDarkContentBackground = "#2c3f43";
export declare function tinyMceThemeOptions(darkContent?: boolean): TinyMceThemeOptions;
