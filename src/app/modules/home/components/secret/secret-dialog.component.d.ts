import { DestroyRef } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { SecretService } from '@core/http/secret.service';
import { ActionPasswordService } from '@core/http/action-password.service';
import { SecretInfo, SecretType } from '@shared/models/secret.models';
import * as i0 from "@angular/core";
export interface SecretDialogData {
    /** The secret to edit; absent to add one. */
    secret?: SecretInfo;
    /** The Type list offers "Action password" (tenant administrator). */
    withActionPasswords?: boolean;
    /** The type a new entry starts with. */
    type?: SecretType;
}
/**
 * Add or edit an entry of Security › Secrets. A secret's value and an action
 * password can only be written: editing shows empty fields that keep what is
 * stored.
 */
export declare class SecretDialogComponent extends DialogComponent<SecretDialogComponent, SecretInfo | boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SecretDialogComponent, SecretInfo | boolean>;
    private fb;
    private secretService;
    private actionPasswordService;
    data: SecretDialogData;
    readonly SecretType: typeof SecretType;
    readonly isEdit: boolean;
    readonly form: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        type: import("@angular/forms").FormControl<SecretType>;
        value: import("@angular/forms").FormControl<string>;
        repeat: import("@angular/forms").FormControl<string>;
        description: import("@angular/forms").FormControl<string>;
    }>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SecretDialogComponent, SecretInfo | boolean>, fb: FormBuilder, secretService: SecretService, actionPasswordService: ActionPasswordService, destroyRef: DestroyRef, data: SecretDialogData);
    get isActionPassword(): boolean;
    get title(): string;
    get placeholder(): string;
    /** Name and password rules follow the type. */
    private applyType;
    /** A FILE secret can be read from a file (certificate, key, JSON key file). */
    loadFile(event: Event): void;
    close(): void;
    save(): void;
    private saveActionPassword;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecretDialogComponent, "st-secret-dialog", never, {}, {}, never, never, false, never>;
}
