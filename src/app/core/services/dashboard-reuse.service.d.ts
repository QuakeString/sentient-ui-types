import { Injector } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Dashboard } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
/** Emitted when a background revalidation found a newer dashboard than the
 *  one a cached page was built from. */
export interface StaleDashboard {
    dashboardId: string;
    /** The fresh copy, or null when only the fact of a change is known (the
     *  page then re-creates from the server). */
    dashboard: Dashboard | null;
    /** Set when the AI assistant saved the dashboard. */
    byAssistant?: boolean;
}
/** `runGuardsAndResolvers` for the dashboard routes: Angular's default
 *  ('paramsChange') plus "a stale on-screen page asked to be re-created". */
export declare const dashboardRouteRunGuardsAndResolvers: (from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean;
export declare class DashboardReuseService {
    private injector;
    private cache;
    private cacheable;
    private attaching;
    private resolved;
    private readonly staleSubject;
    readonly stale$: import("rxjs").Observable<StaleDashboard>;
    private depthSetting;
    private depthLimit;
    private routerEventsHooked;
    private dashboardActivationPending;
    constructor(store: Store<AppState>, injector: Injector);
    /** Parked pages kept between navigations. */
    get capacity(): number;
    private hookRouterEvents;
    setCacheable(dashboardId: string, cacheable: boolean): void;
    get disabled(): boolean;
    isCacheable(dashboardId: string): boolean;
    store(dashboardId: string, handle: DetachedRouteHandle): void;
    private trimToCapacity;
    has(dashboardId: string): boolean;
    take(dashboardId: string): DetachedRouteHandle;
    rememberResolved(dashboardId: string, dashboard: Dashboard): void;
    forgetResolved(dashboardId: string): void;
    /** The dashboard a parked (or being-reattached) page was built from, or
     *  null when there is no cached page to serve. */
    peekResolved(dashboardId: string): Dashboard;
    markStale(dashboardId: string, dashboard: Dashboard): void;
    /** The AI assistant saved this dashboard: a page showing it re-creates from
     *  the server, a parked one is dropped (same path as a background revalidation). */
    changedByAssistant(dashboardId: string): void;
    private static recreatePending;
    static hasPendingRecreate(dashboardId: string): boolean;
    private fullscreenCarry;
    private detachPreparers;
    setDetachPreparer(dashboardId: string, preparer: () => void): void;
    clearDetachPreparer(dashboardId: string): void;
    prepareDetach(dashboardId: string): void;
    carryFullscreen(): void;
    takeFullscreen(): boolean;
    requestRecreate(dashboardId: string): void;
    consumeRecreate(dashboardId: string): boolean;
    invalidate(dashboardId: string): void;
    clear(): void;
    private destroyEntry;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardReuseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardReuseService>;
}
