import { HomeDashboard } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
/**
 * SENTIENT Edge status: a standard dashboard on the edge's own tenant
 * (`edge*` attributes and time series the edge writes locally; they never go
 * to the server). The dashboard comes from assets/dashboard/edge_status.json.
 */
export declare class EdgeStatusComponent {
    readonly dashboard: HomeDashboard | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeStatusComponent, "tb-edge-status", never, {}, {}, never, never, false, never>;
}
