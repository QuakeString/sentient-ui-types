import { Observable } from 'rxjs';
import { EdgeRuntimeService } from '@core/services/edge-runtime.service';
import { CloudService } from '@core/http/cloud.service';
import { CloudEventStatus, CloudEventStream, CloudStatus, EdgeLimit } from '@shared/models/cloud.models';
import { EdgeLinkState } from '@home/components/edge-runtime/edge-link-chip.component';
import * as i0 from "@angular/core";
/** SENTIENT Edge: its link to the server, and what goes up and comes down (docs/edge plan P5). */
export declare class EdgeStatusComponent {
    private edgeRuntime;
    private cloudService;
    readonly status$: Observable<CloudStatus | null>;
    /** What the lease lets the edge hold, refreshed with the status. */
    readonly limits$: Observable<EdgeLimit[]>;
    readonly stream: typeof CloudEventStream;
    readonly eventStatus: typeof CloudEventStatus;
    readonly dateFormat = "yyyy-MM-dd HH:mm:ss";
    constructor(edgeRuntime: EdgeRuntimeService, cloudService: CloudService);
    state(status: CloudStatus): EdgeLinkState;
    /** The edge is parked because its key belongs to another Edge entity. */
    needsRebind(status: CloudStatus): boolean;
    now(): number;
    refresh(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeStatusComponent, "tb-edge-status", never, {}, {}, never, never, false, never>;
}
