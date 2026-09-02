import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StSummaryAttribution, StSummaryMetricDef } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Fleet-summary metric editor: one pack entry — display label, stable id,
 * the Rhai formula over the bucket's batch rows, and presentation
 * (unit, decimals, expected range, attribution policy).
 */
export declare class StBatchSummaryMetricPanelComponent implements OnInit {
    private fb;
    private popover;
    metric: StSummaryMetricDef | null;
    /** Ids already taken by other pack entries (duplicate guard). */
    takenIds: string[];
    buttonTitle: string;
    readonly: boolean;
    metricApplied: import("@angular/core").OutputEmitterRef<StSummaryMetricDef>;
    readonly BatchSummaryAttributionTranslations: Map<StSummaryAttribution, string>;
    readonly attributionOptions: StSummaryAttribution[];
    metricForm: import("@angular/forms").FormGroup<{
        label: import("@angular/forms").FormControl<string>;
        id: import("@angular/forms").FormControl<string>;
        expr: import("@angular/forms").FormControl<string>;
        unit: import("@angular/forms").FormControl<string>;
        decimals: import("@angular/forms").FormControl<number>;
        rangeMin: import("@angular/forms").FormControl<number>;
        rangeMax: import("@angular/forms").FormControl<number>;
        attribution: import("@angular/forms").FormControl<"" | "end" | "start" | "prorated">;
    }>;
    private idTouched;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<StBatchSummaryMetricPanelComponent>);
    ngOnInit(): void;
    /** New entries get a camelCase id derived from the label until the user
     *  edits the id field themselves. */
    onLabelChange(): void;
    markIdTouched(): void;
    private uniqueIdValidator;
    saveMetric(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchSummaryMetricPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchSummaryMetricPanelComponent, "st-batch-summary-metric-panel", never, { "metric": { "alias": "metric"; "required": false; }; "takenIds": { "alias": "takenIds"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "metricApplied": "metricApplied"; }, never, never, false, never>;
}
