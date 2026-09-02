import { OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { ActionSourceType, EntityGroupAction, EntityGroupActionType } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export interface AddEntityGroupActionDialogData {
    action?: EntityGroupAction;
}
export declare class AddEntityGroupActionDialogComponent extends DialogComponent<AddEntityGroupActionDialogComponent, EntityGroupAction> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    private fb;
    private dashboardService;
    private dashboardUtils;
    data: AddEntityGroupActionDialogData;
    dialogRef: MatDialogRef<AddEntityGroupActionDialogComponent, EntityGroupAction>;
    actionForm: UntypedFormGroup;
    isEditMode: boolean;
    actionSources: {
        value: ActionSourceType;
        label: string;
    }[];
    actionTypes: {
        value: EntityGroupActionType;
        label: string;
    }[];
    customFunctionArgs: string[];
    filteredDashboardStates$: Observable<string[]>;
    private destroy$;
    constructor(store: Store<AppState>, router: Router, fb: UntypedFormBuilder, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, data: AddEntityGroupActionDialogData, dialogRef: MatDialogRef<AddEntityGroupActionDialogComponent, EntityGroupAction>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private setupDashboardStatesAutocomplete;
    private fetchDashboardStates;
    get selectedType(): EntityGroupActionType;
    cancel(): void;
    save(): void;
    private buildConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddEntityGroupActionDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddEntityGroupActionDialogComponent, "tb-add-entity-group-action-dialog", never, {}, {}, never, never, false, never>;
}
