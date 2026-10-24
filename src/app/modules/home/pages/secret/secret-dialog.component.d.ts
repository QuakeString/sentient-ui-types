import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { SecretService } from '@core/http/secret.service';
import { SecretInfo, SecretType } from '@shared/models/secret.models';
import * as i0 from "@angular/core";
export interface SecretDialogData {
    /** The secret to edit; absent to add one. */
    secret?: SecretInfo;
}
/** Add or edit a secret. The value can only be written: editing shows an empty field that keeps the stored value. */
export declare class SecretDialogComponent extends DialogComponent<SecretDialogComponent, SecretInfo> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SecretDialogComponent, SecretInfo>;
    private fb;
    private secretService;
    data: SecretDialogData;
    readonly SecretType: typeof SecretType;
    readonly isEdit: boolean;
    readonly form: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        type: import("@angular/forms").FormControl<SecretType>;
        value: import("@angular/forms").FormControl<string>;
        description: import("@angular/forms").FormControl<string>;
    }>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SecretDialogComponent, SecretInfo>, fb: FormBuilder, secretService: SecretService, data: SecretDialogData);
    get placeholder(): string;
    /** A FILE secret can be read from a file (certificate, key, JSON key file). */
    loadFile(event: Event): void;
    close(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecretDialogComponent, "st-secret-dialog", never, {}, {}, never, never, false, never>;
}
