import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Dashboard, DashboardInfo, HomeDashboard, HomeDashboardInfo } from '@shared/models/dashboard.models';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
/** The response ETag a dashboard was fetched with (getDashboardWithEtag), if any. */
export declare const getDashboardEtag: (dashboard: Dashboard) => string;
export declare class DashboardService {
    private http;
    private router;
    private window;
    stDiffObservable: Observable<number>;
    currentUrl: string;
    constructor(http: HttpClient, router: Router, window: Window);
    getTenantDashboards(pageLink: PageLink, includeCustomers?: boolean, config?: RequestConfig): Observable<PageData<DashboardInfo>>;
    getTenantDashboardsByTenantId(tenantId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<DashboardInfo>>;
    getCustomerDashboards(customerId: string, pageLink: PageLink, config?: RequestConfig, includeSubCustomers?: boolean): Observable<PageData<DashboardInfo>>;
    getDashboard(dashboardId: string, config?: RequestConfig): Observable<Dashboard>;
    /** Like getDashboard, but the response ETag rides along as a non-enumerable
     *  `etag` property (see getDashboardEtag). The backend sends one on every
     *  dashboard response and answers a bodyless 304 to the browser's own
     *  revalidation, so this is the cheapest stable identity of a dashboard's
     *  content — the route keep-alive uses it to tell "reattached, unchanged"
     *  from "changed while parked" without comparing normalised configurations,
     *  which validation fills with per-resolve values. Non-enumerable so it is
     *  never serialised back on save nor copied by deepClone. */
    getDashboardWithEtag(dashboardId: string, config?: RequestConfig): Observable<Dashboard>;
    exportDashboard(dashboardId: string, includeResources?: boolean, config?: RequestConfig): Observable<Dashboard>;
    getDashboardInfo(dashboardId: string, config?: RequestConfig): Observable<DashboardInfo>;
    saveDashboard(dashboard: Dashboard, config?: RequestConfig): Observable<Dashboard>;
    deleteDashboard(dashboardId: string, config?: RequestConfig): Observable<Object>;
    changeDashboardOwner(dashboardId: string, customerId: string, config?: RequestConfig): Observable<Dashboard>;
    removeDashboardOwner(dashboardId: string, config?: RequestConfig): Observable<Dashboard>;
    getHomeDashboard(config?: RequestConfig): Observable<HomeDashboard>;
    getTenantHomeDashboardInfo(config?: RequestConfig): Observable<HomeDashboardInfo>;
    setTenantHomeDashboardInfo(homeDashboardInfo: HomeDashboardInfo, config?: RequestConfig): Observable<any>;
    getPublicDashboardLink(dashboard: DashboardInfo): string | null;
    getServerTimeDiff(): Observable<number>;
    getEdgeDashboards(edgeId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<DashboardInfo>>;
    assignDashboardToEdge(edgeId: string, dashboardId: string, config?: RequestConfig): Observable<Dashboard>;
    unassignDashboardFromEdge(edgeId: string, dashboardId: string, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardService>;
}
