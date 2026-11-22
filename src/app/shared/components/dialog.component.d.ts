import { OnDestroy } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class DialogComponent<T, R = any> extends PageComponent implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<T, R>;
    routerSubscription: Subscription;
    /**
     * Closing without a result (X, Cancel, Escape, a click outside) while a
     * form of this dialog has changes asks "Discard changes?" first. Closing
     * with a result (Save, OK) never asks. Set true where a changed form means
     * nothing worth keeping (search, filter, prompts), or override
     * hasUnsavedChanges() for a rule of your own.
     */
    stSkipUnsavedChangesCheck: boolean;
    private readonly stDiscardConfirm;
    private stCloseGuardSubscription;
    private stCloseAsking;
    private stRawClose;
    protected constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<T, R>);
    /** Close without the unsaved-changes question (e.g. moving on to another page). */
    protected closeWithoutAsking(result?: R): void;
    private stGuardClose;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogComponent<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DialogComponent<any, any>, never, never, {}, {}, never, never, true, never>;
}
