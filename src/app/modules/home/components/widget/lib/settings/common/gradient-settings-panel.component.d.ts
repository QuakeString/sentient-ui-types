import { EventEmitter, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { BackgroundGradientSettings } from '@shared/models/background-gradient.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
/** Popover with the gradient editor and a preview, for the widget card background. */
export declare class GradientSettingsPanelComponent implements OnInit {
    gradient: BackgroundGradientSettings;
    textColor: ThemeAwareColor;
    popover: TbPopoverComponent<GradientSettingsPanelComponent>;
    gradientApplied: EventEmitter<BackgroundGradientSettings>;
    gradientControl: UntypedFormControl;
    ngOnInit(): void;
    previewCss(): string;
    cancel(): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientSettingsPanelComponent, "st-gradient-settings-panel", never, { "gradient": { "alias": "gradient"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "gradientApplied": "gradientApplied"; }, never, never, false, never>;
}
