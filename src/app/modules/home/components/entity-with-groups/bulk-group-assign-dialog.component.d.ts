import { OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormControl } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityGroup, EntityGroupType } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export interface BulkGroupAssignDialogData {
    entityIds: string[];
    currentGroupId: string;
    groupType: EntityGroupType;
    mode: 'add' | 'move';
    ownerId: string;
}
export declare class BulkGroupAssignDialogComponent extends DialogComponent<BulkGroupAssignDialogComponent, boolean> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<BulkGroupAssignDialogComponent, boolean>;
    data: BulkGroupAssignDialogData;
    private entityGroupService;
    searchCtrl: FormControl<string>;
    filteredGroups: EntityGroup[];
    selectedGroup: EntityGroup;
    groupsLoaded: boolean;
    isSaving: boolean;
    private destroy$;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<BulkGroupAssignDialogComponent, boolean>, data: BulkGroupAssignDialogData, entityGroupService: EntityGroupService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    displayGroupFn: (group: EntityGroup) => string;
    onGroupSelected(event: any): void;
    cancel(): void;
    confirm(): void;
    private loadGroups;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulkGroupAssignDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulkGroupAssignDialogComponent, "tb-bulk-group-assign-dialog", never, {}, {}, never, never, false, never>;
}
