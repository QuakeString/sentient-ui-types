import { StBatchDataset } from '@home/pages/reporting/models/st-chart.models';
/** Runtime settings for the Batch table widget (lives in `ctx.settings`).
 *
 *  The widget is a query over what an EVENT definition materialised for the
 *  widget's datasource entities (the dashboard's entity aliases pick the
 *  devices — dashboard states and entity parameters work as usual) over the
 *  widget/dashboard timewindow.
 *
 *  - `definitionId`     — the EVENT calculated field whose results to show.
 *  - `dataset`          — batches (one row per charge) | rollup (bucketed
 *                         counts) | summary | detail.
 *  - `columns`          — result fields to show, in order. Empty = every
 *                         field the store carries (minus quality noise when
 *                         `hideQualityColumns`).
 *  - `refreshIntervalSec` — re-query cadence; the store advances on the
 *                         definition's tick (typically 5 min). 0 = only on
 *                         timewindow changes.
 *  - `timeFormat`       — Angular date format for timestamp fields.
 *  - `showEntityColumn` — auto: only when more than one datasource. */
export interface BatchTableWidgetSettings {
    definitionId: string;
    definitionName?: string;
    dataset: StBatchDataset;
    columns: string[];
    hideQualityColumns: boolean;
    /** Drop columns whose value is empty in every row of the current result. */
    hideEmptyColumns: boolean;
    refreshIntervalSec: number;
    timeFormat: string;
    showEntityColumn: 'auto' | 'always' | 'never';
}
export declare const batchTableWidgetDefaultSettings: BatchTableWidgetSettings;
/** One column of the rendered table, derived from the store's schema. */
export interface BatchTableColumn {
    field: string;
    label: string;
    dataType: string;
}
/** A row = one store row + the datasource it came from. */
export interface BatchTableRow {
    entityName: string;
    values: Record<string, any>;
}
