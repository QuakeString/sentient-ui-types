import { ResolveFn } from '@angular/router';
import { HomeDashboard } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/** The Edge status dashboard (standard widgets on the edge's own tenant). */
export declare const edgeStatusDashboardResolver: ResolveFn<HomeDashboard | null>;
export declare class EdgeRuntimeRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeRuntimeRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EdgeRuntimeRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EdgeRuntimeRoutingModule>;
}
