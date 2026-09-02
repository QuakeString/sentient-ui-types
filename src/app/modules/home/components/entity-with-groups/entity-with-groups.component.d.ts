import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { EntityGroup, EntityGroupType } from '@shared/models/entity-group.model';
import { EntityGroupService } from '@core/http/entity-group.service';
import { MatDialog } from '@angular/material/dialog';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityGroupTableConfigService } from '@home/services/entity-group-table-config.service';
import * as i0 from "@angular/core";
export declare class EntityWithGroupsComponent implements OnInit, AfterViewInit, OnDestroy {
    private route;
    private translate;
    private datePipe;
    private entityGroupService;
    private router;
    private dialog;
    private http;
    private store;
    private cd;
    private groupTableService;
    private importExport;
    private destroy$;
    private readonly groupTypeIcons;
    entitiesTableConfig: EntityTableConfig<BaseData<HasId>>;
    groupsTableConfig: EntityTableConfig<EntityGroup>;
    membersTableConfig: EntityTableConfig<BaseData<HasId>>;
    groupType: EntityGroupType;
    selectedTabIndex: number;
    entityTabLabel: string;
    entityTabIcon: string;
    showHierarchy: boolean;
    hierarchyLabel: string;
    membersMode: boolean;
    entityGroupId: string;
    entityGroupName: string;
    entityTypeLabel: string;
    private cachedMembers;
    private cachedGroups;
    updateBreadcrumbs: EventEmitter<void>;
    tabGroupEl: ElementRef;
    constructor(route: ActivatedRoute, translate: TranslateService, datePipe: DatePipe, entityGroupService: EntityGroupService, router: Router, dialog: MatDialog, http: HttpClient, store: Store<AppState>, cd: ChangeDetectorRef, groupTableService: EntityGroupTableConfigService, importExport: ImportExportService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onTabChange(tabIndex: number): void;
    onGroupsTabClick(): void;
    goBackToGroups(): void;
    openGroupDetails(): void;
    private buildDashboardMemberActions;
    private buildMembersConfig;
    private fetchEntityDetail;
    private addEntitiesToGroup;
    /**
     * Walk up the activated route tree to find :customerId or :tenantId.
     * Falls back to the authenticated user's tenantId so the Groups tab always
     * scopes to the current owner and never shows groups from other owners.
     */
    private getGroupsOwnerId;
    /**
     * Walk up the activated route tree to find :customerId or :tenantId.
     * Returns null if we're at the tenant level (no owner in route).
     */
    private getRouteOwnerId;
    /**
     * Walk up the activated route tree to find :customerId.
     * Returns null if we're at the tenant level (no customer in route).
     */
    private getRouteCustomerId;
    /**
     * Walk up the activated route tree to find :tenantId.
     * Returns null if no tenantId in route.
     */
    private getRouteTenantId;
    private buildGroupsConfig;
    private buildColumnsFromConfig;
    private getColumnTitle;
    private buildCellActionDescriptor;
    private buildHeaderActionDescriptor;
    private executeGroupAction;
    private onEntityGroupAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityWithGroupsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityWithGroupsComponent, "tb-entity-with-groups", never, {}, {}, never, never, false, never>;
}
