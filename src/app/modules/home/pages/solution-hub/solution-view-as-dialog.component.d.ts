import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface SolutionViewAsDialogData {
    solution: string;
    users: {
        id: string;
        name: string;
    }[];
}
/** Picks which of a solution's users to sign in as; returns the user id. */
export declare class SolutionViewAsDialogComponent extends DialogComponent<SolutionViewAsDialogComponent, string> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionViewAsDialogComponent, string>;
    data: SolutionViewAsDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionViewAsDialogComponent, string>, data: SolutionViewAsDialogData);
    close(userId?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionViewAsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionViewAsDialogComponent, "st-solution-view-as-dialog", never, {}, {}, never, never, false, never>;
}
