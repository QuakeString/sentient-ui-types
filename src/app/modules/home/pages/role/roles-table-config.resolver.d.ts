import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { Role } from '@shared/models/role.model';
import { RoleService } from '@core/http/role.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PermissionService } from '@core/services/permission.service';
import * as i0 from "@angular/core";
export declare class RolesTableConfigResolver {
    private roleService;
    private translate;
    private datePipe;
    private router;
    private store;
    private permissionService;
    private readonly config;
    constructor(roleService: RoleService, translate: TranslateService, datePipe: DatePipe, router: Router, store: Store<AppState>, permissionService: PermissionService);
    resolve(route: ActivatedRouteSnapshot): import("rxjs").Observable<EntityTableConfig<Role, import("../../../../shared/public-api").PageLink, Role>>;
    private openRole;
    private onRoleAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<RolesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RolesTableConfigResolver>;
}
