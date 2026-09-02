import { ElementRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipGrid, MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface PipelineAddLinkDialogData {
    labels: string[];
    sourceNodeName: string;
    targetNodeName: string;
}
export declare class PipelineAddLinkDialogComponent implements OnInit {
    private dialogRef;
    data: PipelineAddLinkDialogData;
    private fb;
    formGroup: UntypedFormGroup;
    selectedLabels: string[];
    filteredLabels$: Observable<string[]>;
    separatorKeyCodes: number[];
    chipList: MatChipGrid;
    matAutocomplete: MatAutocomplete;
    labelInput: ElementRef<HTMLInputElement>;
    constructor(dialogRef: MatDialogRef<PipelineAddLinkDialogComponent>, data: PipelineAddLinkDialogData, fb: UntypedFormBuilder);
    ngOnInit(): void;
    private filterLabels;
    selected(event: MatAutocompleteSelectedEvent): void;
    addFromInput(event: MatChipInputEvent): void;
    removeLabel(label: string): void;
    onFocus(): void;
    private clearInput;
    add(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PipelineAddLinkDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PipelineAddLinkDialogComponent, "tb-pipeline-add-link-dialog", never, {}, {}, never, never, false, never>;
}
