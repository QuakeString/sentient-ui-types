import { OnChanges, SimpleChanges } from '@angular/core';
import { StChartConfig } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Batch Analysis canvas preview.
 *
 * The real batch table is produced by the backend operator at report-generation
 * time; on the builder canvas we show a representative skeleton so the author can
 * see the columns their config will produce (batch window + chosen metrics, or a
 * rollup summary). Purely illustrative — no live data.
 */
export declare class StBatchAnalysisComponent implements OnChanges {
    config: StChartConfig;
    skeletonMode: boolean;
    headers: string[];
    demoRows: string[][];
    isRollup: boolean;
    isDetail: boolean;
    ngOnChanges(_: SimpleChanges): void;
    private rebuild;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchAnalysisComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchAnalysisComponent, "st-batch-analysis", never, { "config": { "alias": "config"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; }, {}, never, never, false, never>;
}
