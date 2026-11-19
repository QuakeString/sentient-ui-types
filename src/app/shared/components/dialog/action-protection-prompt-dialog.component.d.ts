import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { ActionPasswordService } from '@core/http/action-password.service';
import { ActionProtection, ActionProtectionContext, ActionProtectionMode } from '@shared/models/action-protection.models';
import * as i0 from "@angular/core";
export interface ActionProtectionPromptDialogData {
    protection: ActionProtection;
    context: ActionProtectionContext;
}
/** Asks for a confirmation, a password or the user's own password before a widget action runs. */
export declare class ActionProtectionPromptDialogComponent extends DialogComponent<ActionProtectionPromptDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ActionProtectionPromptDialogComponent, boolean>;
    data: ActionProtectionPromptDialogData;
    private fb;
    private translate;
    private dialog;
    private actionPasswordService;
    readonly ActionProtectionMode: typeof ActionProtectionMode;
    readonly protection: ActionProtection;
    readonly context: ActionProtectionContext;
    readonly needsPassword: boolean;
    readonly passwordLabel: string;
    readonly passwordPlaceholder: string;
    readonly form: FormGroup;
    readonly busy: import("@angular/core").WritableSignal<boolean>;
    readonly error: import("@angular/core").WritableSignal<string>;
    readonly blockedUntil: import("@angular/core").WritableSignal<number>;
    readonly hidePassword: import("@angular/core").WritableSignal<boolean>;
    private unblockTimer;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ActionProtectionPromptDialogComponent, boolean>, data: ActionProtectionPromptDialogData, fb: FormBuilder, translate: TranslateService, dialog: MatDialog, actionPasswordService: ActionPasswordService);
    /** The title bar: the action this prompt protects. */
    get title(): string;
    get blockedTime(): string;
    /** The named password this prompt asks for, if any. */
    get namedPassword(): string | null;
    /** Change the named password at runtime (needs its current password). */
    changePassword(): void;
    cancel(): void;
    confirm(): void;
    private onResult;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionProtectionPromptDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionProtectionPromptDialogComponent, "st-action-protection-prompt-dialog", never, {}, {}, never, never, false, never>;
}
