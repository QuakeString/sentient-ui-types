import { Observable } from 'rxjs';
export interface ThemeColor {
    light: string;
    dark: string;
}
export type ThemeAwareColor = string | ThemeColor;
export declare function isThemeColor(value: any): value is ThemeColor;
export declare function resolveThemeColor(value: ThemeAwareColor, isDark: boolean, fallback?: string): string;
export declare function normalizeThemeColor(value: ThemeAwareColor): ThemeColor;
export declare function themeChange$(): Observable<boolean>;
