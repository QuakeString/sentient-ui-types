import { PageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { BaseData, HasId } from '@shared/models/base-data';
import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { EntityBooleanFunction } from '@home/models/entity/entities-table-config.models';
export type EntitiesFetchFunction<T extends BaseData<HasId>, P extends PageLink> = (pageLink: P) => Observable<PageData<T>>;
export declare class EntitiesDataSource<T extends BaseData<HasId>, P extends PageLink = PageLink> implements DataSource<T> {
    private fetchFunction;
    protected selectionEnabledFunction: EntityBooleanFunction<T>;
    protected dataLoadedFunction: (col?: number, row?: number) => void;
    private entitiesSubject;
    private pageDataSubject;
    private currentLoadSubscription;
    pageData$: Observable<PageData<T>>;
    selection: SelectionModel<T>;
    currentEntity: T;
    dataLoading: boolean;
    constructor(fetchFunction: EntitiesFetchFunction<T, P>, selectionEnabledFunction: EntityBooleanFunction<T>, dataLoadedFunction: (col?: number, row?: number) => void);
    connect(collectionViewer: CollectionViewer): Observable<T[] | ReadonlyArray<T>>;
    disconnect(collectionViewer: CollectionViewer): void;
    reset(): void;
    loadEntities(pageLink: P, silent?: boolean): Observable<PageData<T>>;
    protected onEntities(entities: T[]): void;
    /**
     * In-place patch of a single row. Useful when a mutation endpoint
     * (e.g., `POST /alarm/{id}/assign/{userId}`) returns the updated
     * entity — instead of triggering a full table reload we splice the
     * fresh entity into the current page and re-emit so Angular only
     * re-renders that row. Returns `true` if a matching row was found.
     *
     * Match is by `entity.id.id`; pass the entity as returned by the
     * server (must have a populated `id`).
     */
    updateEntity(updated: T): boolean;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    toggleCurrentEntity(entity: T): boolean;
    isCurrentEntity(entity: T): boolean;
    masterToggle(): void;
    private selectableEntitiesCount;
}
