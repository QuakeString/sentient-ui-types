import { DestroyRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { EntityService } from '@core/http/entity.service';
import { EntityId } from '@shared/models/id/entity-id';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { ZipImportClashPolicy, ZipImportHandler } from '@shared/import-export/import-export.models';
import * as i0 from "@angular/core";
export interface ImportZipDialogData {
    file: File;
    handler: ZipImportHandler;
}
/** What will happen to a row (review step). */
type ZipRowStatus = 'invalid' | 'unticked' | 'checking' | 'needs-target' | 'new' | 'copy' | 'skip' | 'replace';
/** What happened to a row (result step). */
type ZipRowResult = 'imported' | 'skipped' | 'failed';
type ZipImportInto = 'original' | 'target';
type ZipOwnerState = 'none' | 'checking' | 'found' | 'missing';
interface ZipImportRow {
    file: string;
    name: string;
    data: any;
    error: string | null;
    selected: boolean;
    sourceOwner: EntityId | null;
    ownerState: ZipOwnerState;
    ownerName: string;
    importInto: ZipImportInto;
    status: ZipRowStatus;
    copyName: string | null;
    result?: ZipRowResult;
    resultText?: string;
}
/**
 * Review and run the import of a multi-entity export ZIP: one row per JSON file,
 * a name-clash policy, a target owner for owner-bound types, then a result list.
 */
export declare class ImportZipDialogComponent extends DialogComponent<ImportZipDialogComponent, number> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ImportZipDialogData;
    dialogRef: MatDialogRef<ImportZipDialogComponent, number>;
    private translate;
    private entityService;
    private importExport;
    private destroyRef;
    readonly handler: ZipImportHandler;
    readonly fileName: string;
    readonly title: string;
    /** Owner-bound type opened from the tenant-wide table: owners are picked per row. */
    readonly ownerSelectable: boolean;
    readonly pickTargetHint: string;
    step: 'reading' | 'review' | 'importing' | 'result' | 'error';
    readError: string;
    rows: ZipImportRow[];
    displayedColumns: string[];
    policyControl: FormControl<ZipImportClashPolicy>;
    targetControl: FormControl<EntityId>;
    targetForAll: EntityId;
    selectedCount: number;
    validCount: number;
    importCount: number;
    needsTargetCount: number;
    checkingCount: number;
    progressDone: number;
    progressTotal: number;
    importedCount: number;
    skippedCount: number;
    failedCount: number;
    private lookups;
    private lookupRequests;
    private readonly tenantId;
    constructor(store: Store<AppState>, router: Router, data: ImportZipDialogData, dialogRef: MatDialogRef<ImportZipDialogComponent, number>, translate: TranslateService, entityService: EntityService, importExport: ImportExportService, destroyRef: DestroyRef);
    ngOnInit(): void;
    get busy(): boolean;
    get progressValue(): number;
    get allSelected(): boolean;
    cancel(): void;
    toggleAll(checked: boolean): void;
    toggleRow(row: ZipImportRow, checked: boolean): void;
    importIntoChanged(row: ZipImportRow, importInto: ZipImportInto): void;
    ownerTypeName(row: ZipImportRow): string;
    statusText(row: ZipImportRow): string;
    statusClass(row: ZipImportRow): string;
    startImport(): void;
    downloadReport(): void;
    private importRow;
    private setResult;
    private showResult;
    private updateColumns;
    /** Reads manifest.json (when present) and every other JSON file of the ZIP into rows. */
    private readZip;
    /** Looks up each original owner once; a found owner becomes the row's default target. */
    private checkOwners;
    private refresh;
    /** The owner a row is saved into, or null when it still needs one (owner-bound types). */
    private rowOwner;
    private ownerReady;
    private ownerKey;
    private lookupKey;
    /** Starts the name searches the current rows need (each owner and name once). */
    private ensureLookups;
    /**
     * Status of every row, in table order. A name that an earlier row will create
     * counts as taken for the rows after it, as it will be by the time they are saved.
     */
    private recompute;
    /** "Name (1)", "Name (2)", ... : the first one not in use. */
    private nextFreeName;
    private errorText;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportZipDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImportZipDialogComponent, "tb-import-zip-dialog", never, {}, {}, never, never, false, never>;
}
export {};
