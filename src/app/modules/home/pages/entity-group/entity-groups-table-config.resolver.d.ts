import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityGroup } from '@shared/models/entity-group.model';
import { EntityGroupService } from '@core/http/entity-group.service';
import * as i0 from "@angular/core";
export declare class EntityGroupsTableConfigResolver {
    private entityGroupService;
    private translate;
    private datePipe;
    private router;
    private readonly config;
    private groupType;
    constructor(entityGroupService: EntityGroupService, translate: TranslateService, datePipe: DatePipe, router: Router);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<EntityGroup>;
    private openEntityGroup;
    private manageEntities;
    private onEntityGroupAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupsTableConfigResolver>;
}
