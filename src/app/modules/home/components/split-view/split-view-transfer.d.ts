import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import type JSZip from 'jszip';
import { Dashboard } from '@shared/models/dashboard.models';
import { SplitViewZipManifest } from '@shared/models/split-view.models';
/**
 * Export and import of a split view together with its dashboards, as one ZIP:
 * manifest.json, split-view.json and dashboards/*.json, each JSON exactly what
 * the single dashboard export writes. Loaded on demand by ImportExportService.
 */
export declare class SplitViewTransfer {
    private injector;
    private readonly dashboardService;
    private readonly importExport;
    private readonly permissionService;
    private readonly translate;
    private readonly store;
    private readonly dialog;
    constructor(injector: Injector);
    /** splitView: the split view as the export endpoint returned it. */
    exportZip(splitView: Dashboard, includeResources: boolean): Observable<void>;
    /** Imports a split view ZIP: the dashboards inside (new or existing ones), then the split view. */
    importZip(zip: JSZip, manifest: SplitViewZipManifest): Observable<Dashboard | null>;
    private readEntries;
    private error;
}
/** The manifest of a split view ZIP, or null for any other file. */
export declare const readSplitViewZip: (file: File) => Promise<{
    zip: JSZip;
    manifest: SplitViewZipManifest;
} | null>;
