import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface SolutionNameDialogData {
    title: string;
    name: string;
    /** Also ask for a template's version, category and description. */
    template?: boolean;
}
export interface SolutionNameDialogResult {
    name: string;
    version?: string;
    category?: string;
    description?: string;
}
/** Asks for a name (rename), or a template's name, version, category and description (save as template). */
export declare class SolutionNameDialogComponent extends DialogComponent<SolutionNameDialogComponent, SolutionNameDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionNameDialogComponent, SolutionNameDialogResult>;
    data: SolutionNameDialogData;
    result: SolutionNameDialogResult;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionNameDialogComponent, SolutionNameDialogResult>, data: SolutionNameDialogData);
    get valid(): boolean;
    ok(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionNameDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionNameDialogComponent, "st-solution-name-dialog", never, {}, {}, never, never, false, never>;
}
