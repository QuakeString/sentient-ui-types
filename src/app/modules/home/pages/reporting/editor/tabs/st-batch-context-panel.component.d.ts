import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StBatchContextCapture, StBatchContextField } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Context (metadata-bag) field editor: which telemetry key carries the
 * value, what the batch-row column is called, and when the value is taken
 * (at open, at close, or as the within-batch counter delta).
 */
export declare class StBatchContextPanelComponent implements OnInit {
    private fb;
    private popover;
    field: StBatchContextField | null;
    availableKeys: string[];
    buttonTitle: string;
    readonly: boolean;
    fieldApplied: import("@angular/core").OutputEmitterRef<StBatchContextField>;
    readonly BatchContextCaptureTranslations: Map<StBatchContextCapture, string>;
    readonly captureOptions: StBatchContextCapture[];
    contextForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        key: import("@angular/forms").FormControl<string>;
        capture: import("@angular/forms").FormControl<"delta" | "atOpen" | "atClose">;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<StBatchContextPanelComponent>);
    ngOnInit(): void;
    /** Conventional ISA-95 names offered first; free text stays allowed. */
    fetchNameOptions(searchText?: string): Observable<string[]>;
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    saveField(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchContextPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchContextPanelComponent, "st-batch-context-panel", never, { "field": { "alias": "field"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "fieldApplied": "fieldApplied"; }, never, never, false, never>;
}
