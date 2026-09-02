import { DestroyRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StBatchDeviation } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Deviation check editor: a tolerance band around a setpoint (another key or
 * a fixed number), optionally restricted to one phase.
 */
export declare class StBatchDeviationPanelComponent implements OnInit {
    private fb;
    private destroyRef;
    private popover;
    deviation: StBatchDeviation | null;
    availableKeys: string[];
    phaseNames: string[];
    buttonTitle: string;
    readonly: boolean;
    deviationApplied: import("@angular/core").OutputEmitterRef<StBatchDeviation>;
    deviationForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        actual: import("@angular/forms").FormControl<string>;
        setpointMode: import("@angular/forms").FormControl<"key" | "value">;
        setpoint: import("@angular/forms").FormControl<string>;
        setpointValue: import("@angular/forms").FormControl<number>;
        tolerance: import("@angular/forms").FormControl<number>;
        within: import("@angular/forms").FormControl<string>;
        minDurationSec: import("@angular/forms").FormControl<number>;
    }>;
    constructor(fb: FormBuilder, destroyRef: DestroyRef, popover: TbPopoverComponent<StBatchDeviationPanelComponent>);
    /** Key suggestions for the autocomplete: the resolved telemetry keys,
     *  filtered by what the user typed. Free text is allowed — a key that
     *  does not exist yet (a tag not reporting so far) can be typed in. */
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    ngOnInit(): void;
    private updateSetpointValidators;
    saveDeviation(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchDeviationPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchDeviationPanelComponent, "st-batch-deviation-panel", never, { "deviation": { "alias": "deviation"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "phaseNames": { "alias": "phaseNames"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "deviationApplied": "deviationApplied"; }, never, never, false, never>;
}
