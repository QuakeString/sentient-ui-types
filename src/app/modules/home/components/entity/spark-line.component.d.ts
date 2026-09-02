import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Reusable inline bar-sparkline (ThingsBoard's `tb-spark-line` idiom) — a tiny
 * trend chart for table cells, tiles and stats. Give it a `data` array (e.g.
 * per-hour counts); it renders normalized bars and, optionally, a running total
 * next to them. Self-contained SVG: no charting-library dependency.
 */
export declare class SparkLineComponent implements OnChanges {
    /** Series values (oldest → newest). */
    data: number[];
    /** Total shown beside the bars; defaults to the sum of `data`. */
    total: number;
    /** Bar fill (defaults to the platform accent). */
    color: string;
    width: number;
    height: number;
    /** Show the total count beside the sparkline. */
    showTotal: boolean;
    /** Placeholder shown when there is no activity. */
    emptyText: string;
    bars: Array<{
        x: number;
        y: number;
        w: number;
        h: number;
    }>;
    hasData: boolean;
    totalLabel: number;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SparkLineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SparkLineComponent, "tb-spark-line", never, { "data": { "alias": "data"; "required": false; }; "total": { "alias": "total"; "required": false; }; "color": { "alias": "color"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "emptyText": { "alias": "emptyText"; "required": false; }; }, {}, never, never, false, never>;
}
