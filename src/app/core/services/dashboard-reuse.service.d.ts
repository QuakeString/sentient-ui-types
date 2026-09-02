import { Injector } from '@angular/core';
import { DetachedRouteHandle } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class DashboardReuseService {
    private injector;
    private cache;
    private cacheable;
    private attaching;
    private routerEventsHooked;
    constructor(store: Store<AppState>, injector: Injector);
    private hookRouterEvents;
    setCacheable(dashboardId: string, cacheable: boolean): void;
    get disabled(): boolean;
    isCacheable(dashboardId: string): boolean;
    store(dashboardId: string, handle: DetachedRouteHandle): void;
    has(dashboardId: string): boolean;
    take(dashboardId: string): DetachedRouteHandle;
    invalidate(dashboardId: string): void;
    clear(): void;
    private destroyEntry;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardReuseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardReuseService>;
}
