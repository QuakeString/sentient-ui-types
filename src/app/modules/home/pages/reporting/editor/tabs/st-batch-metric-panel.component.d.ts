import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StBatchMetricFn, StBatchMetricRow } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/** Per-batch metric row editor: (telemetry key, aggregation function). */
export declare class StBatchMetricPanelComponent implements OnInit {
    private fb;
    private popover;
    row: StBatchMetricRow | null;
    availableKeys: string[];
    buttonTitle: string;
    readonly: boolean;
    rowApplied: import("@angular/core").OutputEmitterRef<StBatchMetricRow>;
    readonly BatchMetricFnTranslations: Map<StBatchMetricFn, string>;
    /** The offered function set. `sum` is legacy-only: kept selectable when the
     *  row being edited already uses it, never offered for new rows. */
    fnOptions: StBatchMetricFn[];
    metricForm: import("@angular/forms").FormGroup<{
        key: import("@angular/forms").FormControl<string>;
        fn: import("@angular/forms").FormControl<"max" | "delta" | "min" | "sum" | "first" | "last" | "count" | "avg" | "stddev">;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<StBatchMetricPanelComponent>);
    /** Key suggestions for the autocomplete: the resolved telemetry keys,
     *  filtered by what the user typed. Free text is allowed — a key that
     *  does not exist yet (a tag not reporting so far) can be typed in. */
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    ngOnInit(): void;
    saveRow(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchMetricPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchMetricPanelComponent, "st-batch-metric-panel", never, { "row": { "alias": "row"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "rowApplied": "rowApplied"; }, never, never, false, never>;
}
