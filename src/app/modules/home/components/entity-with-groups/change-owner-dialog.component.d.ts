import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { EntityType } from '@shared/models/entity-type.models';
import { DeviceService } from '@core/http/device.service';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { EdgeService } from '@core/http/edge.service';
import { DashboardService } from '@core/http/dashboard.service';
import { CustomerService } from '@core/http/customer.service';
import * as i0 from "@angular/core";
export interface ChangeOwnerDialogData {
    entityIds: string[];
    entityType: EntityType;
}
export declare class ChangeOwnerDialogComponent extends DialogComponent<ChangeOwnerDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ChangeOwnerDialogData;
    dialogRef: MatDialogRef<ChangeOwnerDialogComponent, boolean>;
    private fb;
    private deviceService;
    private assetService;
    private entityViewService;
    private edgeService;
    private dashboardService;
    private customerService;
    form: UntypedFormGroup;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>, router: Router, data: ChangeOwnerDialogData, dialogRef: MatDialogRef<ChangeOwnerDialogComponent, boolean>, fb: UntypedFormBuilder, deviceService: DeviceService, assetService: AssetService, entityViewService: EntityViewService, edgeService: EdgeService, dashboardService: DashboardService, customerService: CustomerService);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    private getAssignTask;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChangeOwnerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChangeOwnerDialogComponent, "tb-change-owner-dialog", never, {}, {}, never, never, false, never>;
}
