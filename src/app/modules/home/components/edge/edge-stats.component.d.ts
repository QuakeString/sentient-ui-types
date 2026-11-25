import { ChangeDetectorRef } from '@angular/core';
import { EntityId } from '@shared/models/id/entity-id';
import { AttributeService } from '@core/http/attribute.service';
import { EdgeService } from '@core/http/edge.service';
import { EdgeBinding } from '@shared/models/edge.models';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/** One counter or gauge the server (downlink) or the edge (uplink) records every 10 minutes. */
interface EdgeStat {
    key: string;
    label: string;
    /** A level (waiting messages), not a count per interval. */
    gauge?: boolean;
    /** Worth attention when not zero. */
    failure?: boolean;
}
interface EdgeStatRow extends EdgeStat {
    series: number[];
    /** Counters: the total in the window. Gauges: the peak. */
    total: number;
    /** Gauges: the latest value. */
    now?: number;
}
interface EdgeStatsRange {
    key: string;
    span: number;
    bucket: number;
}
/**
 * The edge details "Statistics" tab (docs/edge plan P5.2): what went to the
 * edge and what came from it, as trends over a window, and whether the edge
 * runs an older SENTIENT release than the server. ThingsBoard keeps these
 * counters as raw telemetry only.
 */
export declare class EdgeStatsComponent {
    private attributeService;
    private edgeService;
    private dialogService;
    private translate;
    private cd;
    readonly ranges: EdgeStatsRange[];
    range: EdgeStatsRange;
    downlink: EdgeStatRow[];
    uplink: EdgeStatRow[];
    edgeVersion: string;
    readonly serverVersion: any;
    upgradeAvailable: boolean;
    binding: EdgeBinding;
    loading: boolean;
    readonly dateFormat = "yyyy-MM-dd HH:mm";
    private entityIdValue;
    private activeValue;
    private dirty;
    set entityId(entityId: EntityId);
    set active(active: boolean);
    constructor(attributeService: AttributeService, edgeService: EdgeService, dialogService: DialogService, translate: TranslateService, cd: ChangeDetectorRef);
    /** Forget the bound machine, after asking (plan P6: replaced hardware). */
    rebindHardware(): void;
    selectRange(range: EdgeStatsRange): void;
    reload(): void;
    private loadIfActive;
    private load;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeStatsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeStatsComponent, "tb-edge-stats", never, { "entityId": { "alias": "entityId"; "required": false; }; "active": { "alias": "active"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
