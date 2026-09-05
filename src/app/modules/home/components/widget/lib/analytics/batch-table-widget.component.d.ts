import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { AnalyticsService } from '@core/http/analytics.service';
import { BatchTableColumn, BatchTableRow, BatchTableWidgetSettings } from './batch-table-widget.models';
import * as i0 from "@angular/core";
/** Batch table widget.
 *
 *  Shows what an EVENT definition materialised (charges / rollup buckets /
 *  summary / detail) for the widget's datasource entities over the
 *  dashboard's timewindow — the same store the report builder's batch tables
 *  read, live on a dashboard. A `timeseries` widget with optional data keys:
 *  the platform resolves the entity aliases and owns the timewindow, the
 *  widget queries the batch store itself and re-queries on timewindow changes
 *  and on a refresh timer (the store advances on the definition's tick).
 */
export declare class BatchTableWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private analyticsService;
    private translate;
    private datePipe;
    private cd;
    ctx: WidgetContext;
    sort: MatSort;
    settings: BatchTableWidgetSettings;
    columns: BatchTableColumn[];
    displayedColumns: string[];
    dataSource: MatTableDataSource<BatchTableRow, import("@angular/material/paginator").MatPaginator>;
    loading: boolean;
    error: string | null;
    /** Human window label shown in the empty state. */
    windowLabel: string;
    readonly ENTITY_COLUMN = "__entity";
    private destroy$;
    private reload$;
    private timerSub;
    private timewindowSub;
    constructor(analyticsService: AnalyticsService, translate: TranslateService, datePipe: DatePipe, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Controller-script bridge: the subscription's timewindow/data changed. */
    onDataUpdated(): void;
    private startTimer;
    private window;
    private entities;
    private load;
    private setRows;
    private buildColumns;
    private isNoise;
    private inferType;
    humanize(field: string): string;
    cellText(column: BatchTableColumn, row: BatchTableRow): string;
    /** Deviation verdicts get a colored chip so an operator spots them. */
    cellClass(column: BatchTableColumn, row: BatchTableRow): string;
    private duration;
    private sortValue;
    get hasRows(): boolean;
    trackByRow: (i: number, _r: BatchTableRow) => number;
    trackByColumn: (_: number, c: BatchTableColumn) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BatchTableWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BatchTableWidgetComponent, "tb-batch-table-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
