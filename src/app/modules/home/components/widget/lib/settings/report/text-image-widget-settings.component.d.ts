import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class TextImageWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    textImageWidgetSettingsForm: UntypedFormGroup;
    imagePositionOptions: {
        value: string;
        label: string;
    }[];
    imageFitOptions: {
        value: string;
        label: string;
    }[];
    verticalAlignOptions: {
        value: string;
        label: string;
    }[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextImageWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextImageWidgetSettingsComponent, "tb-text-image-widget-settings", never, {}, {}, never, never, false, never>;
}
