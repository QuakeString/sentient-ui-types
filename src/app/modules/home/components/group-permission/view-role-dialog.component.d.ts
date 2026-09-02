import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { Role } from '@shared/models/role.model';
import { RoleService } from '@core/http/role.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
interface PermissionRow {
    resource: string;
    operations: string[];
}
export declare class ViewRoleDialogComponent extends DialogComponent<ViewRoleDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private roleService;
    private translate;
    data: {
        roleId: string;
    };
    dialogRef: MatDialogRef<ViewRoleDialogComponent>;
    role: Role;
    roleTypeDisplay: string;
    permissionRows: PermissionRow[];
    loading: boolean;
    constructor(store: Store<AppState>, router: Router, roleService: RoleService, translate: TranslateService, data: {
        roleId: string;
    }, dialogRef: MatDialogRef<ViewRoleDialogComponent>);
    ngOnInit(): void;
    getResourceLabel(resource: string): string;
    getOperationLabel(op: string): string;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewRoleDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewRoleDialogComponent, "tb-view-role-dialog", never, {}, {}, never, never, false, never>;
}
export {};
