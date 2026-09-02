import { DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { StBatchEdge, StBatchTrigger, StBatchValueType } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
export interface StBatchTriggerDialogData {
    trigger: StBatchTrigger | null;
    availableKeys: string[];
    readonly: boolean;
    /** Close triggers carry the batch max-duration timeout. */
    withTimeout: boolean;
    titleKey: string;
}
/**
 * Edits one batch trigger predicate: the condition list (match all/any),
 * the edge it fires on, and — for the close trigger — the auto-close timeout.
 * Modelled on the CF alarm-rule condition dialog.
 */
export declare class StBatchTriggerDialogComponent extends DialogComponent<StBatchTriggerDialogComponent, StBatchTrigger> {
    protected store: Store<AppState>;
    protected router: Router;
    data: StBatchTriggerDialogData;
    dialogRef: MatDialogRef<StBatchTriggerDialogComponent, StBatchTrigger>;
    private fb;
    private destroyRef;
    readonly BatchCmpOpSymbols: Map<import("../../models/st-chart.models").StBatchCmpOp, string>;
    readonly BatchEdgeTranslations: Map<StBatchEdge, string>;
    readonly BatchValueTypeTranslations: Map<StBatchValueType, string>;
    readonly ops: import("../../models/st-chart.models").StBatchCmpOp[];
    readonly edges: StBatchEdge[];
    readonly valueTypes: StBatchValueType[];
    readonly: boolean;
    availableKeys: string[];
    triggerFormGroup: FormGroup<{
        match: import("@angular/forms").FormControl<"all" | "any">;
        conditions: import("@angular/forms").FormArray<FormGroup<any>>;
        edge: import("@angular/forms").FormControl<"level" | "rising" | "falling">;
        allowTimeout: import("@angular/forms").FormControl<boolean>;
        timeoutSec: import("@angular/forms").FormControl<number>;
    }>;
    constructor(store: Store<AppState>, router: Router, data: StBatchTriggerDialogData, dialogRef: MatDialogRef<StBatchTriggerDialogComponent, StBatchTrigger>, fb: FormBuilder, destroyRef: DestroyRef);
    get conditionsFormArray(): any;
    private buildConditionGroup;
    private updateTimeoutValidator;
    /** Key suggestions for the autocomplete: the resolved telemetry keys,
     *  filtered by what the user typed. Free text is allowed — a key that
     *  does not exist yet (a tag not reporting so far) can be typed in. */
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    addCondition(): void;
    removeCondition(index: number): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchTriggerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchTriggerDialogComponent, "st-batch-trigger-dialog", never, {}, {}, never, never, false, never>;
}
