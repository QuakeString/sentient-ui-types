import { ChangeDetectorRef, DestroyRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { BackgroundGradientSettings } from '@shared/models/background-gradient.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
/**
 * Box button for an optional gradient (null = none): shows the gradient, opens
 * the gradient popover, and has a clear button when a gradient is set.
 */
export declare class GradientInputComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    private destroyRef;
    disabled: boolean;
    /** Text colour checked for contrast in the editor. */
    textColor: ThemeAwareColor;
    readonly isDark: import("@angular/core").WritableSignal<boolean>;
    modelValue: BackgroundGradientSettings;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: BackgroundGradientSettings): void;
    get isSet(): boolean;
    swatchCss(): string;
    clear(): void;
    openPanel($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientInputComponent, "st-gradient-input", never, { "disabled": { "alias": "disabled"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, never, false, never>;
}
