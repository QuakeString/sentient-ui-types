import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { PackagePreflight } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
/**
 * Import a solution package file (a zip exported by another SENTIENT). The
 * server checks it first (files, signature, version, dependencies);
 * the import button is enabled only when nothing blocks it, and an unsigned
 * package needs an explicit "I trust it".
 */
export declare class SolutionImportDialogComponent extends DialogComponent<SolutionImportDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionImportDialogComponent>;
    private translate;
    private solutionService;
    file: File;
    busy: boolean;
    error: string;
    report: PackagePreflight;
    trust: boolean;
    replace: boolean;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionImportDialogComponent>, translate: TranslateService, solutionService: SolutionService);
    fileChosen(file: File): void;
    check(): void;
    get verified(): boolean;
    get hasConflicts(): boolean;
    get canImport(): boolean;
    get creates(): string;
    sectionLabel(s: string): string;
    doImport(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionImportDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionImportDialogComponent, "st-solution-import-dialog", never, {}, {}, never, never, false, never>;
}
