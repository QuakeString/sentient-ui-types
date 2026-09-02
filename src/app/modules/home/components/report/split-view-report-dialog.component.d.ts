import { OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl, SafeHtml } from '@angular/platform-browser';
import { ReportService } from '@core/http/report.service';
import { Report } from '@home/pages/reporting/models/report.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as XLSX from 'xlsx';
import * as i0 from "@angular/core";
export interface SplitViewReportDialogData {
    reports: Report[];
}
interface ReportView {
    report: Report;
    pdfUrl: SafeResourceUrl | null;
    spreadsheetHtml: SafeHtml | null;
    sheetNames: string[];
    activeSheetIndex: number;
    workbook: XLSX.WorkBook | null;
    isSpreadsheet: boolean;
    loading: boolean;
    error: string | null;
    blobUrl: string | null;
    width: number;
}
export declare class SplitViewReportDialogComponent implements OnInit, OnDestroy {
    dialogRef: MatDialogRef<SplitViewReportDialogComponent>;
    data: SplitViewReportDialogData;
    private reportService;
    private sanitizer;
    reportViews: ReportView[];
    isFullscreen: boolean;
    isAutoFullscreen: boolean;
    isVerticalLayout: boolean;
    resizing: boolean;
    private resizeIndex;
    private startX;
    private startY;
    private startWidths;
    private containerWidth;
    private containerHeight;
    constructor(dialogRef: MatDialogRef<SplitViewReportDialogComponent>, data: SplitViewReportDialogData, reportService: ReportService, sanitizer: DomSanitizer);
    private checkIfSpreadsheet;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private loadReports;
    private loadSpreadsheet;
    private renderSheet;
    selectSheet(view: ReportView, index: number): void;
    getFormatLabel(report: Report): string;
    close(): void;
    toggleFullscreen(): void;
    getReportTitle(report: Report): string;
    drop(event: CdkDragDrop<ReportView[]>): void;
    closeReport(index: number): void;
    startResize(event: MouseEvent, index: number): void;
    private onMouseMove;
    private onMouseUp;
    showResizeHandle(index: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewReportDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewReportDialogComponent, "tb-split-view-report-dialog", never, {}, {}, never, never, false, never>;
}
export {};
