import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** The entity types the global search ("Go to…") can return. */
export type GlobalSearchEntityType = 'DEVICE' | 'ASSET' | 'DASHBOARD' | 'ENTITY_VIEW' | 'CUSTOMER' | 'USER' | 'RULE_CHAIN' | 'TENANT' | 'TENANT_PROFILE';
export interface GlobalSearchItem {
    id: string;
    entityType: GlobalSearchEntityType;
    name: string;
    label?: string | null;
    subtitle?: string | null;
    gateway?: boolean;
    /** Devices: connected now (true), not (false), or unknown (null). */
    active?: boolean | null;
    lastActivityTime?: number | null;
    /** Dashboards: DASHBOARD (or missing) or SPLIT_VIEW. */
    dashboardType?: string | null;
}
export interface GlobalSearchGroup {
    entityType: GlobalSearchEntityType;
    items: GlobalSearchItem[];
    hasMore: boolean;
}
export interface GlobalSearchResult {
    groups: GlobalSearchGroup[];
}
/**
 * Searches entities by name across types in one request. The server applies
 * the user's RBAC; callers should also leave out types the user cannot read.
 */
export declare class GlobalSearchService {
    private http;
    constructor(http: HttpClient);
    search(query: string, types?: GlobalSearchEntityType[], limit?: number): Observable<GlobalSearchResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalSearchService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalSearchService>;
}
