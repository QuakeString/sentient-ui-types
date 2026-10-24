import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { InstalledSolution } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
/** Uninstall a solution (or several, one after another), optionally keeping their devices and assets. */
export declare class SolutionUninstallDialogComponent extends DialogComponent<SolutionUninstallDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionUninstallDialogComponent>;
    data: {
        solution?: InstalledSolution;
        solutions?: InstalledSolution[];
    };
    private translate;
    private solutionService;
    keepData: boolean;
    busy: boolean;
    error: string;
    result: {
        removed: string[];
        kept?: string[];
        keptShared?: string[];
        couldNotRemove: any[];
    };
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionUninstallDialogComponent>, data: {
        solution?: InstalledSolution;
        solutions?: InstalledSolution[];
    }, translate: TranslateService, solutionService: SolutionService);
    readonly solutions: InstalledSolution[];
    get title(): string;
    get contents(): string;
    uninstall(): void;
    /** Names of the solutions that were uninstalled. */
    uninstalled: string[];
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionUninstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionUninstallDialogComponent, "st-solution-uninstall-dialog", never, {}, {}, never, never, false, never>;
}
