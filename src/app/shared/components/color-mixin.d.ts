import { ElementRef } from '@angular/core';
export type ThemePaletteLocal = 'primary' | 'accent' | 'warn' | undefined;
export interface CanColor {
    color: ThemePaletteLocal;
    defaultColor: ThemePaletteLocal | undefined;
}
export type _Constructor<T> = new (...args: any[]) => T;
export declare function mixinColor<T extends _Constructor<{
    _elementRef: ElementRef;
}>>(base: T, defaultColor?: ThemePaletteLocal): _Constructor<CanColor> & T;
