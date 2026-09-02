import { DestroyRef, EventEmitter, OnInit } from "@angular/core";
import { TbPopoverComponent } from "@shared/components/popover.component";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { StThreshold, StChartShape } from "../../models/st-chart.models";
import * as i0 from "@angular/core";
/**
 * Sentient Threshold Settings Panel Component
 *
 * Popover panel for configuring threshold line appearance and label settings.
 * Styled to match ThingsBoard's time-series-chart-threshold-settings-panel exactly.
 */
export declare class StThresholdSettingsPanelComponent implements OnInit {
    private fb;
    private destroyRef;
    thresholdSettings: Partial<StThreshold>;
    popover: TbPopoverComponent<StThresholdSettingsPanelComponent>;
    panelTitle: string;
    yAxisIds: string[];
    thresholdSettingsApplied: EventEmitter<Partial<StThreshold>>;
    chartLineTypes: ("solid" | "dashed" | "dotted")[];
    chartLineTypeTranslations: Map<string, string>;
    chartShapes: StChartShape[];
    chartShapeTranslations: Map<StChartShape, string>;
    thresholdLabelPositions: ("end" | "start" | "middle")[];
    thresholdLabelPositionTranslations: Map<string, string>;
    labelPreviewFn: any;
    thresholdSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    cancel(): void;
    applyThresholdSettings(): void;
    private updateValidators;
    private _labelPreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<StThresholdSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StThresholdSettingsPanelComponent, "st-threshold-settings-panel", never, { "thresholdSettings": { "alias": "thresholdSettings"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "yAxisIds": { "alias": "yAxisIds"; "required": false; }; }, { "thresholdSettingsApplied": "thresholdSettingsApplied"; }, never, never, false, never>;
}
