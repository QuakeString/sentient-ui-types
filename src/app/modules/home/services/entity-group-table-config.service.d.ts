import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { EntityGroupService } from '@core/http/entity-group.service';
import { DialogService } from '@core/services/dialog.service';
import { EntityGroup, EntityGroupType } from '@shared/models/entity-group.model';
import { EntityType } from '@shared/models/entity-type.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityTableConfig, GroupActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { PermissionService } from '@core/services/permission.service';
import * as i0 from "@angular/core";
export interface BuildGroupsTableConfigParams {
    groupType: EntityGroupType;
    ownerId: string;
    tableTitle?: string;
    showPublicColumn?: boolean;
}
export interface BuildGroupActionDescriptorsParams {
    groupId: string;
    groupType: EntityGroupType;
    ownerId: string;
    onRefresh: () => void;
    deleteEntityFn: (id: string) => Observable<any>;
}
export declare class EntityGroupTableConfigService {
    private translate;
    private datePipe;
    private dialog;
    private dialogService;
    private entityGroupService;
    private http;
    private store;
    private permissionService;
    constructor(translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, dialogService: DialogService, entityGroupService: EntityGroupService, http: HttpClient, store: Store<AppState>, permissionService: PermissionService);
    buildGroupsTableConfig(params: BuildGroupsTableConfigParams): EntityTableConfig<EntityGroup>;
    buildGroupActionDescriptors(params: BuildGroupActionDescriptorsParams): GroupActionDescriptor<any>[];
    openChangeOwnerDialog($event: MouseEvent, entities: any[], entityType: EntityType, onSuccess: () => void): void;
    openBulkGroupAssignDialog($event: MouseEvent, entities: any[], currentGroupId: string, groupType: EntityGroupType, ownerId: string, mode: 'add' | 'move', onSuccess: () => void): void;
    bulkRemoveFromGroup($event: MouseEvent, entities: any[], groupId: string, onSuccess: () => void): void;
    bulkDeleteEntities($event: MouseEvent, entities: any[], deleteEntityFn: (id: string) => Observable<any>, onSuccess: () => void): void;
    removeEntityFromGroup($event: Event, entity: any, group: EntityGroup, onSuccess: () => void): void;
    openShareDialog($event: Event, entityGroup: EntityGroup, onSuccess: () => void): void;
    makeGroupPublic($event: Event, entityGroup: EntityGroup, onSuccess: () => void): void;
    makeGroupPrivate($event: Event, entityGroup: EntityGroup, onSuccess: () => void): void;
    clientSidePaginate<T>(allData: T[], pageLink: PageLink): PageData<T>;
    deleteEntityByType(groupType: EntityGroupType, entityId: string): Observable<any>;
    openEntityWizard(groupType: EntityGroupType, ownerId: string, group: EntityGroup): Observable<any>;
    hasWizardForType(groupType: EntityGroupType): boolean;
    resolveProperty(obj: any, path: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupTableConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupTableConfigService>;
}
