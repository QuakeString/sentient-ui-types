import { Observable } from 'rxjs';
import { EdgeRuntimeService } from '@core/services/edge-runtime.service';
import { CloudStatus } from '@shared/models/cloud.models';
import * as i0 from "@angular/core";
interface Banner {
    level: 'warn' | 'error';
    key: string;
    params: {
        [k: string]: any;
    };
}
export declare const leaseBanner: (s: CloudStatus, now?: number) => Banner | null;
/**
 * SENTIENT Edge: the edge runs on a lease from its server (docs/edge plan
 * P6.2). From two days before it ends while the server cannot be reached,
 * and after it has ended, every page says so.
 */
export declare class EdgeLeaseBannerComponent {
    readonly banner$: Observable<Banner | null>;
    constructor(edgeRuntime: EdgeRuntimeService);
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeLeaseBannerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeLeaseBannerComponent, "tb-edge-lease-banner", never, {}, {}, never, never, false, never>;
}
export {};
