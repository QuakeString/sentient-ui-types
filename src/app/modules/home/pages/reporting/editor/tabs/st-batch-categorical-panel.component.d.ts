import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StBatchCategorical } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Categorical time-map editor: how long the batch spent in each value of a
 * state/reason key — the downtime-Pareto shape, per batch.
 */
export declare class StBatchCategoricalPanelComponent implements OnInit {
    private fb;
    private popover;
    categorical: StBatchCategorical | null;
    availableKeys: string[];
    phaseNames: string[];
    buttonTitle: string;
    readonly: boolean;
    categoricalApplied: import("@angular/core").OutputEmitterRef<StBatchCategorical>;
    categoricalForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        key: import("@angular/forms").FormControl<string>;
        maxCategories: import("@angular/forms").FormControl<number>;
        within: import("@angular/forms").FormControl<string>;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<StBatchCategoricalPanelComponent>);
    ngOnInit(): void;
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    saveCategorical(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchCategoricalPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchCategoricalPanelComponent, "st-batch-categorical-panel", never, { "categorical": { "alias": "categorical"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "phaseNames": { "alias": "phaseNames"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "categoricalApplied": "categoricalApplied"; }, never, never, false, never>;
}
