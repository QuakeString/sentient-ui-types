import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { BaseData } from '@shared/models/base-data';
import { EntityGroupService } from '@core/http/entity-group.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { PermissionService } from '@core/services/permission.service';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
interface MemberEntity extends BaseData<EntityId> {
    entityId: string;
    entityType: string;
    entityName: string;
}
export declare class EntityGroupMembersTableConfigResolver {
    private entityGroupService;
    private translate;
    private datePipe;
    private router;
    private dialog;
    private dialogService;
    private permissionService;
    private readonly config;
    private currentGroupType;
    constructor(entityGroupService: EntityGroupService, translate: TranslateService, datePipe: DatePipe, router: Router, dialog: MatDialog, dialogService: DialogService, permissionService: PermissionService);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<MemberEntity>>;
    private removeFromGroup;
    private addEntities;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupMembersTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupMembersTableConfigResolver>;
}
export {};
