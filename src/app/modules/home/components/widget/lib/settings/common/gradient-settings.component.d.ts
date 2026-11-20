import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { BackgroundGradientDirection, BackgroundGradientPreset, BackgroundGradientSettings } from '@shared/models/background-gradient.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
/**
 * Editor for a gradient: presets, linear/radial, angle dial, a bar with
 * draggable stop handles and the list of stops. Used inside the widget
 * Background settings and the card-background gradient popover.
 */
export declare class GradientSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private cd;
    private destroyRef;
    /** Text colour checked for contrast; the theme text colour when unset. */
    textColor: ThemeAwareColor;
    /** The popover re-measures itself when the editor grows or shrinks. */
    sizeChanged: EventEmitter<void>;
    readonly presets: BackgroundGradientPreset[];
    /** 3x3 picker cells, row by row; null is the middle cell (custom angle). */
    readonly directionCells: {
        direction: Exclude<BackgroundGradientDirection, "angle">;
        angle: number;
        icon: string;
    }[];
    readonly selectedStop: import("@angular/core").WritableSignal<number>;
    readonly isDark: import("@angular/core").WritableSignal<boolean>;
    readonly lowContrast: import("@angular/core").WritableSignal<("light" | "dark")[]>;
    gradientFormGroup: UntypedFormGroup;
    disabled: boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: BackgroundGradientSettings): void;
    get stopsArray(): UntypedFormArray;
    get value(): BackgroundGradientSettings;
    get direction(): BackgroundGradientDirection;
    setDirection(direction: BackgroundGradientDirection): void;
    directionLabel(direction: string): string;
    presetCss(preset: BackgroundGradientPreset): string;
    barCss(): string;
    stopCss(color: ThemeAwareColor): string;
    applyPreset(preset: BackgroundGradientPreset): void;
    addStop(): void;
    removeStop(i: number): void;
    handleDown(e: PointerEvent, i: number, bar: HTMLElement): void;
    handleKey(e: KeyboardEvent, i: number): void;
    dialDown(e: PointerEvent): void;
    private setGradient;
    private stopForm;
    private updateContrast;
    private emitSizeChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientSettingsComponent, "st-gradient-settings", never, { "textColor": { "alias": "textColor"; "required": false; }; }, { "sizeChanged": "sizeChanged"; }, never, never, false, never>;
}
