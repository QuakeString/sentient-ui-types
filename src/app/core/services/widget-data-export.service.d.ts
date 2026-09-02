import { DatasourceData } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export type WidgetDataExportFormat = 'csv' | 'xlsx' | 'xls' | 'ods';
/** A ready-to-write table. Widgets with non-datasource data (recipe table,
 *  alarm table) supply this via `WidgetContext.customDataExport`. */
export interface WidgetExportData {
    headers: string[];
    rows: any[][];
    fileName?: string;
}
/** What the export needs from the widget — supplied by the widget container. */
export interface WidgetExportSource {
    data?: Array<DatasourceData>;
    latestData?: Array<DatasourceData>;
    custom?: () => WidgetExportData | null | undefined;
    widgetType?: string;
    fileName?: string;
    defaultDecimals?: number;
}
/**
 * Exports a widget's data to CSV / XLSX / XLS / ODS using SheetJS — a PE-style
 * feature that TB CE lacks. Handles three shapes:
 *  - a widget-supplied custom table (recipe / alarm / any non-datasource widget),
 *  - time-series widgets (charts, time-series table): pivot by timestamp,
 *  - latest widgets (value cards, entity table): one row per entity, one column per key.
 */
export declare class WidgetDataExportService {
    exportData(source: WidgetExportSource, format: WidgetDataExportFormat): void;
    private resolveTable;
    /** Time-series pivot: rows = timestamps, columns = one per (entity, key). */
    private buildTimeseries;
    /** Latest pivot: rows = one per entity (datasource), columns = one per key. */
    private buildLatest;
    private seriesLabel;
    private keyDecimals;
    private roundValue;
    private formatTs;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetDataExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetDataExportService>;
}
