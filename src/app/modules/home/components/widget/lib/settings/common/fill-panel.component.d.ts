import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ColorPickerPanelComponent } from '@shared/components/color-picker/color-picker-panel.component';
import { FillSettings } from '@shared/models/background-gradient.models';
import { ThemeAwareColor, ThemeColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
type FillKind = 'color' | 'gradient';
/** Popover behind st-fill-input: a Color / Gradient switch over the colour picker and the gradient editor. */
export declare class FillPanelComponent implements OnInit {
    private cd;
    private destroyRef;
    fill: FillSettings;
    textColor: ThemeAwareColor;
    checkContrast: boolean;
    popover: TbPopoverComponent<FillPanelComponent>;
    /** The new fill, or null when cleared. */
    fillApplied: EventEmitter<FillSettings>;
    readonly kind: import("@angular/core").WritableSignal<FillKind>;
    readonly isDark: import("@angular/core").WritableSignal<boolean>;
    /** Theme picked with the gradient editor's Light/Dark switch; null follows the app. */
    readonly previewDark: import("@angular/core").WritableSignal<boolean>;
    kindControl: UntypedFormControl;
    gradientControl: UntypedFormControl;
    /** Seed for the colour picker. */
    color: ThemeAwareColor;
    wasSet: boolean;
    private initialKind;
    constructor(cd: ChangeDetectorRef, destroyRef: DestroyRef);
    /**
     * Switching from a gradient to a colour seeds the picker from the gradient,
     * so its Select must work without another change.
     */
    set colorPanel(panel: ColorPickerPanelComponent);
    ngOnInit(): void;
    previewCss(): string;
    applyColor(color: ThemeColor): void;
    applyGradient(): void;
    clear(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FillPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FillPanelComponent, "st-fill-panel", never, { "fill": { "alias": "fill"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "checkContrast": { "alias": "checkContrast"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "fillApplied": "fillApplied"; }, never, never, false, never>;
}
export {};
