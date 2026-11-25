import { ChangeDetectorRef, DestroyRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { FillSettings, ThemeAwareFill } from '@shared/models/background-gradient.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
/**
 * One box for a fill that is either a colour or a gradient (null = none).
 * Opens a popover with a Color / Gradient switch over the colour picker and
 * the gradient editor.
 */
export declare class FillInputComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    private destroyRef;
    disabled: boolean;
    /** Text colour checked for contrast in the gradient editor. */
    textColor: ThemeAwareColor;
    /** Warn when part of a gradient is close to textColor. */
    checkContrast: boolean;
    /**
     * The form value is one stored setting (a colour, or {gradient}) instead of
     * FillSettings: used where a colour setting moves to the fill box.
     */
    singleValue: boolean;
    readonly isDark: import("@angular/core").WritableSignal<boolean>;
    modelValue: FillSettings;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FillSettings | ThemeAwareFill): void;
    get isSet(): boolean;
    tooltip(): string;
    swatchCss(): string;
    openPanel($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FillInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FillInputComponent, "st-fill-input", never, { "disabled": { "alias": "disabled"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "checkContrast": { "alias": "checkContrast"; "required": false; }; "singleValue": { "alias": "singleValue"; "required": false; }; }, {}, never, never, false, never>;
}
