import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { DialogService } from '@core/services/dialog.service';
import { InstalledSolution, SolutionJob, SolutionParameter, SolutionParameterField, SolutionTemplateSummary, SolutionValidation } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
export interface SolutionInstallDialogData {
    summary: SolutionTemplateSummary;
    /** The full template, when the caller has it (its parameters are on the summary too). */
    template?: any;
}
/** Install steps shown in the dialog. */
type Stage = 'form' | 'checking' | 'invalid' | 'installing' | 'done' | 'failed';
/**
 * Installs a template: the solution's name and the template's parameters
 * (the main ones first, numbers and switches with defaults under "Limits and
 * settings"), then the install job's progress and what to open next.
 */
export declare class SolutionInstallDialogComponent extends DialogComponent<SolutionInstallDialogComponent, boolean> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionInstallDialogComponent, boolean>;
    data: SolutionInstallDialogData;
    private translate;
    private dialogService;
    private solutionService;
    summary: SolutionTemplateSummary;
    template: any;
    parameters: SolutionParameter[];
    /** Parameter values being edited (lists of objects as arrays of plain objects). */
    values: {
        [name: string]: any;
    };
    solutionName: string;
    error: string;
    stage: Stage;
    validation: SolutionValidation;
    job: SolutionJob;
    installed: InstalledSolution;
    emulatorStarted: boolean;
    private draftId;
    private poll;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionInstallDialogComponent, boolean>, data: SolutionInstallDialogData, translate: TranslateService, dialogService: DialogService, solutionService: SolutionService);
    ngOnDestroy(): void;
    reset(): void;
    get busy(): boolean;
    /** Shown first: names, lists and text (what describes the site). */
    get mainParameters(): SolutionParameter[];
    /** Collapsed under "Limits and settings": numbers and switches with sensible defaults. */
    get settingParameters(): SolutionParameter[];
    private isSetting;
    label(p: SolutionParameter): string;
    /** A list of objects is edited as a table; a list of plain values as one value per line. */
    isTable(p: SolutionParameter): boolean;
    columns(p: SolutionParameter): SolutionParameterField[];
    /** A column's heading: its label, else its name made readable ("idealCycleS" → "Ideal cycle s"). */
    columnLabel(c: SolutionParameterField): string;
    addRow(p: SolutionParameter): void;
    /** A CSV with one column per field (heading = field name or label) for this table. */
    downloadCsvTemplate(p: SolutionParameter): void;
    /** Replaces the table's rows with a CSV file's rows. */
    importCsv(p: SolutionParameter, input: HTMLInputElement): void;
    removeRow(p: SolutionParameter, i: number): void;
    plainList(p: SolutionParameter): string;
    setPlainList(p: SolutionParameter, text: string): void;
    /** Values as the server wants them (numbers as numbers). */
    private payload;
    /** A table still holding the template's example rows, untouched. */
    isExample(p: SolutionParameter): boolean;
    /** Empties a table so the user enters their own rows. */
    clearRows(p: SolutionParameter): void;
    install(): void;
    private escape;
    private doInstall;
    /** A draft with these values, opened in the creator to change anything before installing. */
    customize(): void;
    private startInstall;
    private watch;
    private dropDraft;
    get progressText(): string;
    startEmulator(): void;
    openDashboard(id: string): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionInstallDialogComponent, "st-solution-install-dialog", never, {}, {}, never, never, false, never>;
}
/** Rows of a CSV text: comma or semicolon separated, double-quoted fields. */
export declare const parseCsv: (text: string) => string[][];
export {};
