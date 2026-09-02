import { ActivatedRouteSnapshot, BaseRouteReuseStrategy, DetachedRouteHandle } from '@angular/router';
import { DashboardReuseService } from './dashboard-reuse.service';
import * as i0 from "@angular/core";
export declare class DashboardReuseStrategy extends BaseRouteReuseStrategy {
    private reuseService;
    constructor(reuseService: DashboardReuseService);
    private dashboardId;
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean;
    shouldDetach(route: ActivatedRouteSnapshot): boolean;
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void;
    shouldAttach(route: ActivatedRouteSnapshot): boolean;
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardReuseStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DashboardReuseStrategy>;
}
