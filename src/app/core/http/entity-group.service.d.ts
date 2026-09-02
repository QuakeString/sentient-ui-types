import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { AddEntitiesToGroupRequest, EntityGroup, EntityGroupMember, EntityGroupType, RemoveEntitiesFromGroupRequest } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export declare class EntityGroupService {
    private http;
    constructor(http: HttpClient);
    getEntityGroups(type: EntityGroupType, pageLink: PageLink, config?: RequestConfig, ownerId?: string, excludeAll?: boolean): Observable<PageData<EntityGroup>>;
    getEntityGroup(entityGroupId: string, config?: RequestConfig): Observable<EntityGroup>;
    saveEntityGroup(entityGroup: EntityGroup, config?: RequestConfig): Observable<EntityGroup>;
    deleteEntityGroup(entityGroupId: string, config?: RequestConfig): Observable<Object>;
    addEntitiesToGroup(entityGroupId: string, request: AddEntitiesToGroupRequest, config?: RequestConfig): Observable<void>;
    removeEntitiesFromGroup(entityGroupId: string, request: RemoveEntitiesFromGroupRequest, config?: RequestConfig): Observable<void>;
    getEntityGroupMembers(entityGroupId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<EntityGroupMember>>;
    getEntityGroups_forEntity(entityType: string, entityId: string, config?: RequestConfig): Observable<EntityGroup[]>;
    makeEntityGroupPublic(entityGroupId: string, config?: RequestConfig): Observable<EntityGroup>;
    makeEntityGroupPrivate(entityGroupId: string, config?: RequestConfig): Observable<EntityGroup>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupService>;
}
