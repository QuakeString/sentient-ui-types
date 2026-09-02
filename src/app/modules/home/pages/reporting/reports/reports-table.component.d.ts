import { OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { TranslateService } from '@ngx-translate/core';
import { ReportService } from '@core/http/report.service';
import { DialogService } from '@core/services/dialog.service';
import { Report, ReportFormat, ReportStatus } from '@home/pages/reporting/models/report.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class ReportsTableComponent implements OnInit, AfterViewInit {
    private reportService;
    private dialogService;
    private translate;
    private dialog;
    private store;
    displayedColumns: string[];
    dataSource: MatTableDataSource<Report, MatPaginator>;
    selection: SelectionModel<Report>;
    isLoading: boolean;
    dataLoading: boolean;
    totalElements: number;
    pageSize: number;
    pageIndex: number;
    textSearch: string;
    textSearchMode: boolean;
    displayPagination: boolean;
    filterReportTemplate: string;
    filterUser: string;
    filterStartDate: Date | null;
    filterEndDate: Date | null;
    appliedFilterReportTemplate: string;
    appliedFilterUser: string;
    appliedFilterStartDate: Date | null;
    appliedFilterEndDate: Date | null;
    reportTemplates: Array<{
        id: string;
        name: string;
    }>;
    users: Array<{
        id: string;
        name: string;
    }>;
    paginator: MatPaginator;
    sort: MatSort;
    searchInputField: ElementRef;
    filterMenuTrigger: MatMenuTrigger;
    /**
     * Whether the current user can trigger report generation. Gated by
     * **scope**, not by RBAC role permissions — report generation is a
     * tenant-scoped action (the template list endpoint hard-blocks
     * `is_customer_user()` regardless of which role the customer holds).
     * Even a Customer Administrator (role grants WRITE on ReportTemplate)
     * shouldn't see the button because the operation isn't reachable
     * within a customer scope. Only TENANT_ADMIN qualifies; SYS_ADMIN can
     * inspect but typically wouldn't generate against a specific tenant.
     */
    canGenerateReport: boolean;
    constructor(reportService: ReportService, dialogService: DialogService, translate: TranslateService, dialog: MatDialog, store: Store<AppState>);
    ngOnInit(): void;
    loadFilterOptions(): void;
    ngAfterViewInit(): void;
    loadData(): void;
    onPageChange(event: any): void;
    onSearch(searchText: string): void;
    private searchDebounceTimer;
    onSearchChange(value: string): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    downloadReport(report: Report): void;
    generateReport(): void;
    deleteReport(report: Report): void;
    getFormatLabel(format: ReportFormat | undefined): string;
    getStatusLabel(status: ReportStatus | undefined): string;
    getStatusClass(status: ReportStatus | undefined): string;
    formatDate(timestamp: number): string;
    formatFileSize(bytes: number): string;
    canDownload(report: Report): boolean;
    getReportTemplateName(report: Report): string;
    getUserName(report: Report): string;
    isAllSelected(): boolean;
    masterToggle(): void;
    hasActiveFilters(): boolean;
    onFilterChange(): void;
    onStartDateChange(event: any): void;
    onEndDateChange(event: any): void;
    resetFilters(): void;
    closeFilterMenu(): void;
    applyFilters(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportsTableComponent, "tb-reports-table", never, {}, {}, never, never, false, never>;
}
