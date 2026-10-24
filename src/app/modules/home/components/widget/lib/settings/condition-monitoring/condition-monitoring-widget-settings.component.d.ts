import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { ZonePreset } from '@home/components/widget/lib/condition-monitoring/condition-monitoring.models';
import * as i0 from "@angular/core";
type Kind = 'spectrum' | 'zoneBar' | 'scoreCard' | 'diagnosisPanel' | 'machineSetup' | 'limitsEditor' | 'waveform' | 'waterfall' | 'fleetHeatmap' | 'faultSunburst' | 'fleetSummary' | 'workOrders' | 'pump' | 'sound' | 'commissioning' | 'sensorHealth' | 'sensorGauges' | 'attention' | 'analysis' | 'fleetKpi' | 'fleetWeek' | 'openWorkOrders';
/** One settings panel for the condition-monitoring widgets; the
 *  widget's `settings.kind` picks the fields shown. */
export declare class ConditionMonitoringWidgetSettingsComponent extends WidgetSettingsComponent implements OnDestroy {
    protected store: Store<AppState>;
    private fb;
    cmSettingsForm: UntypedFormGroup;
    kind: Kind;
    zonePresets: ZonePreset[];
    private destroy$;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, http: HttpClient);
    ngOnDestroy(): void;
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionMonitoringWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConditionMonitoringWidgetSettingsComponent, "st-condition-monitoring-widget-settings", never, {}, {}, never, never, false, never>;
}
export {};
