import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { ActionPasswordService } from '@core/http/action-password.service';
import * as i0 from "@angular/core";
/** Wrong-try blocking for the tenant's action passwords. */
export declare class ActionPasswordPolicyDialogComponent extends DialogComponent<ActionPasswordPolicyDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ActionPasswordPolicyDialogComponent, boolean>;
    private fb;
    private actionPasswordService;
    readonly form: import("@angular/forms").FormGroup<{
        maxAttempts: import("@angular/forms").FormControl<number>;
        blockMinutes: import("@angular/forms").FormControl<number>;
    }>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ActionPasswordPolicyDialogComponent, boolean>, fb: FormBuilder, actionPasswordService: ActionPasswordService);
    ngOnInit(): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionPasswordPolicyDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionPasswordPolicyDialogComponent, "st-action-password-policy-dialog", never, {}, {}, never, never, false, never>;
}
