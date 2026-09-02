import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class ReportHeaderWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    reportHeaderWidgetSettingsForm: UntypedFormGroup;
    titleAlignmentOptions: {
        value: string;
        label: string;
    }[];
    logoPositionOptions: {
        value: string;
        label: string;
    }[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportHeaderWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportHeaderWidgetSettingsComponent, "tb-report-header-widget-settings", never, {}, {}, never, never, false, never>;
}
