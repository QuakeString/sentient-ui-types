import { TargetDevice, WidgetSettings, WidgetSettingsComponent, widgetType } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class PidControlWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    get targetDevice(): TargetDevice;
    get widgetType(): widgetType;
    valueType: typeof ValueType;
    pidControlWidgetSettingsForm: UntypedFormGroup;
    valuesOpen: boolean;
    tuningOpen: boolean;
    formulaOpen: boolean;
    onShowTuning(checked: boolean): void;
    onShowFormula(checked: boolean): void;
    tuningBindings: {
        label: string;
        get: string;
        set: string;
        bool: boolean;
    }[];
    formulaBindings: {
        label: string;
        get: string;
        set: string;
        bool: boolean;
    }[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected validatorTriggers(): string[];
    protected updateValidators(_emitEvent: boolean): void;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PidControlWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PidControlWidgetSettingsComponent, "tb-pid-control-widget-settings", never, {}, {}, never, never, false, never>;
}
