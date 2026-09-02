import { ChangeDetectorRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ResourceReferences } from '@shared/models/resource.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityService } from '@core/http/entity.service';
import { BaseData, HasId } from '@shared/models/base-data';
import { HasTenantId } from '@shared/models/entity.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
interface ReferencedEntityInfo {
    entity: BaseData<HasId> & HasTenantId;
    typeName: string;
    detailsUrl: string;
}
interface TenantReferencedEntities {
    tenantName?: string;
    tenantDetailsUrl?: string;
    entities: ReferencedEntityInfo[];
}
type ReferencedEntitiesEntry = [string, TenantReferencedEntities];
export declare class ImageReferencesComponent implements OnInit {
    protected store: Store<AppState>;
    private entityService;
    private cd;
    private translate;
    references: ResourceReferences;
    popoverComponent: TbPopoverComponent<ImageReferencesComponent>;
    contentReady: boolean;
    authUser: import("../../public-api").AuthUser;
    simpleList: boolean;
    referencedEntitiesList: ReferencedEntityInfo[];
    referencedEntitiesEntries: ReferencedEntitiesEntry[];
    constructor(store: Store<AppState>, entityService: EntityService, cd: ChangeDetectorRef, translate: TranslateService);
    ngOnInit(): void;
    isSystem(tenantId: string): boolean;
    private hasNonSystemEntities;
    private toReferencedEntitiesList;
    private toReferencedEntitiesEntries;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageReferencesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageReferencesComponent, "tb-image-references", never, { "references": { "alias": "references"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
