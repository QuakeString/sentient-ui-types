import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityGroupType } from '@shared/models/entity-group.model';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export interface AddEntitiesToGroupDialogData {
    groupId: string;
    groupType: EntityGroupType;
}
export declare class AddEntitiesToGroupDialogComponent extends DialogComponent<AddEntitiesToGroupDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<AddEntitiesToGroupDialogComponent, boolean>;
    data: AddEntitiesToGroupDialogData;
    private fb;
    private entityGroupService;
    formGroup: FormGroup;
    entityType: EntityType;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<AddEntitiesToGroupDialogComponent, boolean>, data: AddEntitiesToGroupDialogData, fb: FormBuilder, entityGroupService: EntityGroupService);
    ngOnInit(): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddEntitiesToGroupDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddEntitiesToGroupDialogComponent, "tb-add-entities-to-group-dialog", never, {}, {}, never, never, false, never>;
}
