import { ThemeAwareColor } from '@shared/models/theme-color.models';
export type BackgroundGradientStyle = 'linear' | 'radial';
/**
 * Linear direction: a CSS side or corner keyword, or 'angle' for the angle
 * field. Corner keywords run exactly corner to corner whatever the widget's
 * aspect ratio; a fixed angle such as 135deg does not.
 */
export type BackgroundGradientDirection = 'angle' | 'to top' | 'to top right' | 'to right' | 'to bottom right' | 'to bottom' | 'to bottom left' | 'to left' | 'to top left';
/** Direction keywords with the angle they equal on a square (shown in the angle field). */
export declare const backgroundGradientDirections: {
    direction: Exclude<BackgroundGradientDirection, 'angle'>;
    angle: number;
    icon: string;
}[];
export interface BackgroundGradientStop {
    color: ThemeAwareColor;
    /** 0..100 */
    position: number;
}
export interface BackgroundGradientSettings {
    style: BackgroundGradientStyle;
    /** Linear only: a side/corner keyword, or 'angle' (also when missing, as in older settings). */
    direction?: BackgroundGradientDirection;
    /** Linear with direction 'angle': CSS degrees, 0 = bottom to top, 90 = left to right, 180 = top to bottom. */
    angle: number;
    stops: BackgroundGradientStop[];
}
export interface BackgroundGradientPreset {
    /** i18n key */
    name: string;
    gradient: BackgroundGradientSettings;
}
export declare const backgroundGradientPresets: BackgroundGradientPreset[];
export declare const defaultBackgroundGradient: () => BackgroundGradientSettings;
/** A gradient with at least one usable stop. */
export declare const isBackgroundGradientSet: (gradient: BackgroundGradientSettings) => boolean;
/** Fills missing fields of saved JSON with defaults; never mutates the input. */
export declare const normalizeBackgroundGradient: (gradient: Partial<BackgroundGradientSettings>) => BackgroundGradientSettings;
/** CSS `background` value for the current theme, or '' when nothing is set. */
export declare const backgroundGradientCss: (gradient: BackgroundGradientSettings, isDark: boolean) => string;
/** A plain colour for places that cannot draw a gradient: the first stop. */
export declare const backgroundGradientFallbackColor: (gradient: BackgroundGradientSettings, isDark: boolean) => string;
/**
 * A solid colour for a widget card, for code that paints opaque parts (sticky
 * table headers, toolbars): the first gradient stop when a gradient is set,
 * otherwise the card colour.
 */
export declare const cardSolidBackgroundColor: (backgroundColor: ThemeAwareColor, backgroundGradient: BackgroundGradientSettings, isDark: boolean) => string;
/**
 * The dark-theme partner of a colour picked for the light theme: light colours
 * become a dark tone of the same hue, dark colours stay as they are.
 */
export declare const suggestDarkColor: (light: string) => string;
/**
 * The value a stop colour takes after the user edits it. A change of the light
 * side refreshes the dark side with the suggestion; an edit of the dark side
 * (alone or together with the light side) is kept as chosen.
 */
export declare const withSuggestedDark: (previous: ThemeAwareColor, next: ThemeAwareColor) => ThemeAwareColor;
/** WCAG contrast ratio between two colours (1..21). */
export declare const contrastRatio: (a: string, b: string) => number;
/** Theme text colours a widget title uses when it has no colour of its own. */
export declare const DEFAULT_TEXT_COLOR: {
    light: string;
    dark: string;
};
/**
 * Themes in which text of the given colour (default: the theme's text colour)
 * is hard to read on some part of the gradient (contrast below 3:1).
 */
export declare const lowContrastThemes: (gradient: BackgroundGradientSettings, textColor?: ThemeAwareColor) => ("light" | "dark")[];
