import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { EdgeService } from '@core/http/edge.service';
import { SchedulerEvent } from '../models/report.models';
/** An edge a report schedule can run on. */
export interface RunOnEdge {
    id: string;
    name: string;
}
/**
 * The edges a report schedule can be set to run on ("Run on",
 * docs/edge/EDGE_REPORTS_PLAN.md R1), with the one `event` runs on even when
 * it is not among the first page. Empty on a SENTIENT Edge, with edges off,
 * or when the tenant has none: the form then hides the choice.
 */
export declare const loadRunOnEdges: (edgeService: EdgeService, store: Store<AppState>, event?: SchedulerEvent) => Observable<RunOnEdge[]>;
/**
 * The `runOnEdgeId` a save sends: undefined (unchanged) when the choice was
 * not offered, null for the server, else the edge.
 */
export declare const runOnEdgeValue: (offered: boolean, edgeId: string | null) => {
    entityType: string;
    id: string;
};
/**
 * The warnings for a template run on an edge (docs/edge/EDGE_REPORTS_PLAN.md
 * R7): what it reads that the edge cannot provide. None without both.
 */
export declare const loadRunOnWarnings: (edgeService: EdgeService, translate: TranslateService, edgeId: string | null, templateId: string | null) => Observable<string[]>;
