import { ChangeDetectorRef, DestroyRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { BackgroundGradientPreset, BackgroundGradientSettings } from '@shared/models/background-gradient.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
/**
 * Editor for a gradient: presets, linear/radial, direction, a bar with
 * draggable stop handles and the list of stops. Used inside the widget
 * Background settings and the card-background gradient popover.
 */
export declare class GradientSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private cd;
    private destroyRef;
    /** Text colour checked for contrast; the theme text colour when unset. */
    textColor: ThemeAwareColor;
    /** Off where the text follows the fill on its own (the top bar picks light or dark ink). */
    checkContrast: boolean;
    /** The popover re-measures itself when the editor grows or shrinks. */
    sizeChanged: EventEmitter<void>;
    /** The theme the editor shows (Light/Dark switch); the preview follows it. */
    viewDarkChange: EventEmitter<boolean>;
    readonly presets: BackgroundGradientPreset[];
    /** Shortcuts for the common directions; the angle field holds the real value. */
    readonly directionShortcuts: {
        angle: number;
        icon: string;
        label: string;
    }[];
    readonly selectedStop: import("@angular/core").WritableSignal<number>;
    readonly isDark: import("@angular/core").WritableSignal<boolean>;
    /** Light/Dark switch: null follows the app theme until the user picks one. */
    readonly viewDark: import("@angular/core").WritableSignal<boolean>;
    readonly shownDark: import("@angular/core").Signal<boolean>;
    readonly lowContrast: import("@angular/core").WritableSignal<("light" | "dark")[]>;
    gradientFormGroup: UntypedFormGroup;
    disabled: boolean;
    private propagateChange;
    /** The stop rows scroll on their own (about three rows tall). */
    stopsBody: ElementRef<HTMLElement>;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: BackgroundGradientSettings): void;
    get stopsArray(): UntypedFormArray;
    get value(): BackgroundGradientSettings;
    get angle(): number;
    setAngle(angle: number): void;
    setViewDark(dark: boolean): void;
    presetCss(preset: BackgroundGradientPreset): string;
    barCss(): string;
    stopCss(color: ThemeAwareColor): string;
    applyPreset(preset: BackgroundGradientPreset): void;
    addStop(): void;
    /** New stops go into the list by position, so the rows read like the bar. */
    private insertStop;
    /** Selects a stop and scrolls its row into view in the stop list. */
    selectStop(i: number): void;
    /** Double-click on the bar: a new stop right there, in the colour the gradient has at that point. */
    addStopAt(e: MouseEvent, bar: HTMLElement): void;
    removeStop(i: number): void;
    handleDown(e: PointerEvent, i: number, bar: HTMLElement): void;
    handleKey(e: KeyboardEvent, i: number): void;
    private setGradient;
    private stopForm;
    private updateContrast;
    private emitSizeChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientSettingsComponent, "st-gradient-settings", never, { "textColor": { "alias": "textColor"; "required": false; }; "checkContrast": { "alias": "checkContrast"; "required": false; }; }, { "sizeChanged": "sizeChanged"; "viewDarkChange": "viewDarkChange"; }, never, ["[stGradientFooterEnd]"], false, never>;
}
