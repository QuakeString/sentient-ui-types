import { NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { AppState } from '@core/core.state';
import { CloudService } from '@core/http/cloud.service';
import { TitleService } from '@core/services/title.service';
import { EntityType } from '@shared/models/entity-type.models';
import { CloudStatus, ForkResult, EdgeReadOnlyReason, EdgeScope } from '@shared/models/cloud.models';
import * as i0 from "@angular/core";
/**
 * SENTIENT Edge in the UI (docs/edge plan P5): the link to the server, and
 * which entities are the server's and read-only here. The read-only rules
 * mirror the backend write guard, so the UI disables what it would refuse.
 * On a SENTIENT server everything here is inert.
 */
export declare class EdgeRuntimeService {
    private cloudService;
    private titleService;
    private dialogService;
    private translate;
    private store;
    private telemetryWsService;
    private zone;
    readonly edge: boolean;
    /**
     * The link status while subscribed: read once, then again whenever the
     * edge pushes a change of its link attributes over the websocket; null when
     * unknown or not an edge.
     */
    readonly status$: Observable<CloudStatus | null>;
    private refresh$;
    private scopes;
    constructor(cloudService: CloudService, titleService: TitleService, dialogService: DialogService, translate: TranslateService, store: Store<AppState>, telemetryWsService: TelemetryWebsocketService, zone: NgZone);
    refreshStatus(): void;
    /**
     * Emits when the edge's link attributes change (tenant administrator, over
     * the websocket); a slow timer for anyone who cannot read them.
     */
    private linkChanges;
    /** Learn the scopes of these entities (a table page, an opened entity). */
    loadScopes(ids: string[]): Observable<void>;
    /** The entity's scope: null if created here, undefined if not loaded yet. */
    scopeOf(id: string): EdgeScope | null | undefined;
    /** Why the entity is read-only on this edge; null if it may be changed here. */
    readOnlyReason(entityType: EntityType, id?: string): EdgeReadOnlyReason | null;
    isReadOnly(entityType: EntityType, id?: string): boolean;
    /** The locale key of the reason shown with a read-only entity; null if it may be changed here. */
    readOnlyHint(entityType: EntityType, id?: string): string | null;
    /**
     * Ask, then fork a SHARED dashboard, rule chain or profile for this edge.
     * Emits the copy, or null when the user cancels; errors are shown by the
     * HTTP layer. What still uses the original is listed after the fork.
     */
    forkWithConfirm(entityType: EntityType, id: string, name: string): Observable<ForkResult | null>;
    /** A notice for a fork; a dialog when shared entities still use the original. */
    private reportFork;
    /** A SHARED dashboard, rule chain or profile, which a tenant administrator may fork for this edge. */
    canFork(entityType: EntityType, id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeRuntimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
