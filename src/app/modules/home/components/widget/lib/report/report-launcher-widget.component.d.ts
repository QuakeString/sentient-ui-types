import { AfterViewInit, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { WidgetContext } from '@home/models/widget-component.models';
import { ReportService } from '@core/http/report.service';
import { PermissionService } from '@core/services/permission.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Report, ReportFormat, ReportStatus, ReportTemplate } from '@home/pages/reporting/models/report.models';
import { ReportFilter } from '@home/components/report/report-filter.component';
import { ReportLauncherWidgetSettings } from './report-launcher-widget.models';
import * as i0 from "@angular/core";
/** Report Launcher widget.
 *
 *  A `static` (datasource-less) module widget that shows the current user's
 *  generated reports in a standard sortable/filterable table (reusing the same
 *  filter, view and split-view components as the Reports page), and lets a
 *  permitted user run a new report from an assigned template.
 *
 *  RBAC is enforced by the backend (see docs/REPORT_WIDGET_PLAN.md); the widget
 *  only reflects it: REPORT_TEMPLATE/EXECUTE → the Generate menu; READ → view +
 *  download; DELETE → the delete action. The template + report lists are already
 *  customer-subtree-scoped server-side.
 */
export declare class ReportLauncherWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private reportService;
    private permission;
    private translate;
    private store;
    private datePipe;
    private dialog;
    private cd;
    ctx: WidgetContext;
    sort: MatSort;
    paginator: MatPaginator;
    settings: ReportLauncherWidgetSettings;
    canGenerate: boolean;
    canDelete: boolean;
    /** Report templates the user can run (drives the Generate menu). */
    templates: ReportTemplate[];
    /** Generated reports — client-side sorted / filtered / paginated. */
    dataSource: MatTableDataSource<Report, MatPaginator>;
    selection: SelectionModel<Report>;
    reportFilter: ReportFilter;
    loading: boolean;
    /** True while any report is being generated (drives the toolbar spinner). */
    generatingCount: number;
    downloading: Set<string>;
    viewing: Set<string>;
    deleting: Set<string>;
    displayedColumns: string[];
    readonly ReportStatus: typeof ReportStatus;
    private destroy$;
    private pollSubs;
    constructor(reportService: ReportService, permission: PermissionService, translate: TranslateService, store: Store<AppState>, datePipe: DatePipe, dialog: MatDialog, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Controller-script bridge (see report_launcher.json). */
    onDataUpdated(): void;
    private loadTemplates;
    generate(template: ReportTemplate): void;
    private pollStatus;
    private loadReports;
    onFilterChange(filter: ReportFilter): void;
    get hasData(): boolean;
    /** Whether every filtered row is selected. */
    isAllSelected(): boolean;
    someSelected(): boolean;
    toggleAll(): void;
    clearSelection(): void;
    get selectedCount(): number;
    private selectedCompleted;
    private selectedViewable;
    /** Download is offered whenever any selected report is completed. */
    get canDownloadSelected(): boolean;
    /** Split-view is offered only for 2–3 selected viewable reports. */
    get canSplitViewSelected(): boolean;
    downloadSelected(): void;
    splitViewSelected(): void;
    isViewableFormat(report: Report): boolean;
    isCompleted(report: Report): boolean;
    formatLabel(format: ReportFormat | undefined): string;
    statusLabel(status: ReportStatus | undefined): string;
    private titleCase;
    createdTime(report: Report): string;
    downloadReport(reportId: string, fallbackName?: string): void;
    downloadRow(report: Report, $event?: Event): void;
    isDownloading(report: Report): boolean;
    /** Open a completed report in the shared Reports viewer dialog. */
    viewRow(report: Report, $event?: Event): void;
    deleteRow(report: Report, $event?: Event): void;
    private saveBlob;
    private notifyError;
    trackByReport: (_: number, r: Report) => string;
    trackByTemplate: (_: number, t: ReportTemplate) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportLauncherWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportLauncherWidgetComponent, "tb-report-launcher-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
