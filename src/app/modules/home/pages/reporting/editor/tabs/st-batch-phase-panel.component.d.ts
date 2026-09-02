import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StBatchPhase, StBatchTrigger } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Phase editor: a named stage inside each batch. Either boundary can inherit
 * the batch's own start/end, or fire on its own condition (edited in the
 * shared trigger dialog).
 */
export declare class StBatchPhasePanelComponent implements OnInit {
    private fb;
    private cd;
    private dialog;
    private translate;
    private popover;
    phase: StBatchPhase | null;
    availableKeys: string[];
    buttonTitle: string;
    readonly: boolean;
    phaseApplied: import("@angular/core").OutputEmitterRef<StBatchPhase>;
    phaseForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        startsWithBatch: import("@angular/forms").FormControl<boolean>;
        open: import("@angular/forms").FormControl<StBatchTrigger>;
        endsWithBatch: import("@angular/forms").FormControl<boolean>;
        close: import("@angular/forms").FormControl<StBatchTrigger>;
        aggregates: import("@angular/forms").FormControl<boolean>;
    }>;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, dialog: MatDialog, translate: TranslateService, popover: TbPopoverComponent<StBatchPhasePanelComponent>);
    ngOnInit(): void;
    private blankTrigger;
    triggerSummary(which: 'open' | 'close'): string;
    editTrigger($event: Event, which: 'open' | 'close'): void;
    savePhase(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchPhasePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchPhasePanelComponent, "st-batch-phase-panel", never, { "phase": { "alias": "phase"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "phaseApplied": "phaseApplied"; }, never, never, false, never>;
}
