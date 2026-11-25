import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { EdgeRuntimeService } from '@core/services/edge-runtime.service';
import { CloudStatus } from '@shared/models/cloud.models';
import * as i0 from "@angular/core";
export type EdgeLinkState = 'connected' | 'syncing' | 'disconnected' | 'parked';
export declare const edgeLinkState: (status: CloudStatus) => EdgeLinkState;
interface ChipView {
    state: EdgeLinkState;
    pending: number;
    tooltip: string;
}
/**
 * SENTIENT Edge: the state of the link to the server in the top toolbar
 * (docs/edge plan P5, study §6.7). It stays visible under white-labeling: it
 * tells the operator this is the plant edge, not the central server.
 */
export declare class EdgeLinkChipComponent {
    private edgeRuntime;
    private router;
    readonly view$: Observable<ChipView | null>;
    readonly canOpenStatus: boolean;
    constructor(edgeRuntime: EdgeRuntimeService, router: Router, store: Store<AppState>);
    openStatus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeLinkChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeLinkChipComponent, "tb-edge-link-chip", never, {}, {}, never, never, false, never>;
}
export {};
