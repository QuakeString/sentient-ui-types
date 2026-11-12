import { OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormBuilder } from '@angular/forms';
import { AggregationParamName, AggregationParams, AggregationTimeUnit, AggregationType } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
/**
 * Settings for a computed aggregation (DELTA, INTEGRAL, RUN_TIME, ...).
 * Shows only the fields the selected type uses, and nothing for the others.
 * Empty fields mean "server default".
 */
export declare class StAggregationParamsComponent implements ControlValueAccessor, OnChanges {
    private fb;
    aggregationType: AggregationType;
    /** Row title width class, to line up with the surrounding rows. */
    titleClass: string;
    readonly timeUnits: AggregationTimeUnit[];
    fields: AggregationParamName[];
    form: import("@angular/forms").FormGroup<{
        maxGapSec: import("@angular/forms").FormControl<number>;
        demandWindowMin: import("@angular/forms").FormControl<number>;
        low: import("@angular/forms").FormControl<number>;
        high: import("@angular/forms").FormControl<number>;
        timeUnit: import("@angular/forms").FormControl<AggregationTimeUnit>;
        percentile: import("@angular/forms").FormControl<number>;
    }>;
    private value;
    private propagateChange;
    constructor(fb: FormBuilder);
    has(name: AggregationParamName): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: AggregationParams): void;
    private emit;
    static ɵfac: i0.ɵɵFactoryDeclaration<StAggregationParamsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StAggregationParamsComponent, "st-aggregation-params", never, { "aggregationType": { "alias": "aggregationType"; "required": false; }; "titleClass": { "alias": "titleClass"; "required": false; }; }, {}, never, never, false, never>;
}
