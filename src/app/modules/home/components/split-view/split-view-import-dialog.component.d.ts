import { ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { DashboardService } from '@core/http/dashboard.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { Dashboard, DashboardInfo } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface SplitViewImportEntry {
    /** The dashboard's id where it was exported: what the panes point to. */
    sourceId: string;
    title: string;
    dashboard: Dashboard;
}
export interface SplitViewImportDialogData {
    splitView: Dashboard;
    entries: SplitViewImportEntry[];
}
interface EntryChoice {
    entry: SplitViewImportEntry;
    existing: DashboardInfo[];
    /** 'new', or the id of an existing dashboard to use instead. */
    choice: string;
}
/**
 * The import step of a split view ZIP: for each dashboard inside, create it
 * anew or use a dashboard of the same title that is already here; then the
 * split view is created with its panes pointing to those dashboards.
 */
export declare class SplitViewImportDialogComponent implements OnInit {
    data: SplitViewImportDialogData;
    dialogRef: MatDialogRef<SplitViewImportDialogComponent, Dashboard>;
    private dashboardService;
    private importExport;
    private store;
    private translate;
    private cd;
    readonly splitIcon = "view_quilt";
    title: string;
    choices: EntryChoice[];
    loading: boolean;
    importing: boolean;
    errorText: string;
    constructor(data: SplitViewImportDialogData, dialogRef: MatDialogRef<SplitViewImportDialogComponent, Dashboard>, dashboardService: DashboardService, importExport: ImportExportService, store: Store<AppState>, translate: TranslateService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    import(): void;
    private createSplitView;
    /** Removes what this import created (best effort) and says what went wrong. */
    private fail;
    private findByTitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewImportDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewImportDialogComponent, "st-split-view-import-dialog", never, {}, {}, never, never, true, never>;
}
export {};
