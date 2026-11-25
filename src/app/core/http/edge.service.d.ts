import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink, TimePageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntitySubtype } from '@app/shared/models/entity-type.models';
import { Edge, EdgeBinding, EdgeConflict, EdgeConflictResolution, EdgeEvent, EdgeInfo, EdgeInstructions, EdgeSearchQuery } from '@shared/models/edge.models';
import { EntityId } from '@shared/models/id/entity-id';
import { BulkImportRequest, BulkImportResult } from '@shared/import-export/import-export.models';
import * as i0 from "@angular/core";
export declare class EdgeService {
    private http;
    constructor(http: HttpClient);
    /** What a report template reads that the edge cannot provide (docs/edge/EDGE_REPORTS_PLAN.md R7). */
    getReportTemplateWarnings(edgeId: string, templateId: string, config?: RequestConfig): Observable<{
        batchData: boolean;
        entitiesNotOnEdge: string[];
    }>;
    getEdges(edgeIds: Array<string>, config?: RequestConfig): Observable<Array<Edge>>;
    getEdge(edgeId: string, config?: RequestConfig): Observable<Edge>;
    getEdgeInfo(edgeId: string, config?: RequestConfig): Observable<EdgeInfo>;
    saveEdge(edge: Edge, config?: RequestConfig): Observable<Edge>;
    deleteEdge(edgeId: string, config?: RequestConfig): Observable<Object>;
    getEdgeTypes(config?: RequestConfig): Observable<Array<EntitySubtype>>;
    getCustomerEdgeInfos(customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EdgeInfo>>;
    changeEdgeOwner(edgeId: string, customerId: string, config?: RequestConfig): Observable<Edge>;
    removeEdgeOwner(edgeId: string, config?: RequestConfig): Observable<Edge>;
    getEdgesByTenant(tenantId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<EdgeInfo>>;
    getTenantEdgeInfos(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EdgeInfo>>;
    findByQuery(query: EdgeSearchQuery, config?: RequestConfig): Observable<Array<Edge>>;
    getEdgeEvents(entityId: EntityId, pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<EdgeEvent>>;
    /** An edge's refused edits (SENTIENT scoped edits), newest first. */
    getEdgeConflicts(edgeId: string, pageLink: PageLink, unresolved?: boolean, config?: RequestConfig): Observable<PageData<EdgeConflict>>;
    getEdgeConflict(conflictId: string, config?: RequestConfig): Observable<EdgeConflict>;
    resolveEdgeConflict(conflictId: string, resolution: EdgeConflictResolution, config?: RequestConfig): Observable<EdgeConflict>;
    private toConflict;
    syncEdge(edgeId: string, config?: RequestConfig): Observable<Object>;
    findMissingToRelatedRuleChains(edgeId: string, config?: RequestConfig): Observable<string>;
    findByName(edgeName: string, config?: RequestConfig): Observable<Edge>;
    bulkImportEdges(entitiesData: BulkImportRequest, config?: RequestConfig): Observable<BulkImportResult>;
    getEdgeInstallInstructions(edgeId: string, method?: string, config?: RequestConfig): Observable<EdgeInstructions>;
    getEdgeUpgradeInstructions(edgeVersion: string, method?: string, config?: RequestConfig): Observable<EdgeInstructions>;
    getEdgeBinding(edgeId: string, config?: RequestConfig): Observable<EdgeBinding>;
    /** Forget the machine the edge is bound to: the next one that connects is bound. */
    rebindEdgeHardware(edgeId: string, config?: RequestConfig): Observable<{
        wasBound: boolean;
    }>;
    /** Queue a failed (dead-lettered) downlink event again. */
    retryEdgeEvent(edgeId: string, seqId: number, config?: RequestConfig): Observable<{
        retriedAt: number;
    }>;
    isEdgeUpgradeAvailable(edgeId: string, config?: RequestConfig): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
