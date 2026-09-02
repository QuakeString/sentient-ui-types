import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityGroupColumn, EntityGroupColumnSortOrder, EntityGroupColumnType } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export interface EditEntityGroupColumnDialogData {
    column: EntityGroupColumn;
    viewOnly?: boolean;
}
export declare class EditEntityGroupColumnDialogComponent extends DialogComponent<EditEntityGroupColumnDialogComponent, EntityGroupColumn> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private fb;
    data: EditEntityGroupColumnDialogData;
    dialogRef: MatDialogRef<EditEntityGroupColumnDialogComponent, EntityGroupColumn>;
    columnForm: UntypedFormGroup;
    columnTypes: {
        value: EntityGroupColumnType;
        label: string;
    }[];
    entityFieldsList: {
        value: string;
        name: string;
    }[];
    sortOrders: {
        value: EntityGroupColumnSortOrder;
        label: string;
    }[];
    cellStyleFunctionArgs: string[];
    cellContentFunctionArgs: string[];
    constructor(store: Store<AppState>, router: Router, fb: UntypedFormBuilder, data: EditEntityGroupColumnDialogData, dialogRef: MatDialogRef<EditEntityGroupColumnDialogComponent, EntityGroupColumn>);
    get isViewOnly(): boolean;
    ngOnInit(): void;
    get selectedType(): EntityGroupColumnType;
    get showCellStyleFunction(): boolean;
    get showCellContentFunction(): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditEntityGroupColumnDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditEntityGroupColumnDialogComponent, "tb-edit-entity-group-column-dialog", never, {}, {}, never, never, false, never>;
}
