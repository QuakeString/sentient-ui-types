import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UserService } from '@core/http/user.service';
import { AuthService } from '@core/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { UserPasswordPolicy } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export interface SetPasswordDialogData {
    userId: string;
    userName?: string;
}
export declare class SetPasswordDialogComponent extends DialogComponent<SetPasswordDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    data: SetPasswordDialogData;
    dialogRef: MatDialogRef<SetPasswordDialogComponent, boolean>;
    private fb;
    private userService;
    private authService;
    private translate;
    setPassword: UntypedFormGroup;
    passwordPolicy: UserPasswordPolicy;
    constructor(store: Store<AppState>, router: Router, data: SetPasswordDialogData, dialogRef: MatDialogRef<SetPasswordDialogComponent, boolean>, fb: UntypedFormBuilder, userService: UserService, authService: AuthService, translate: TranslateService);
    private passwordStrengthValidator;
    private samePasswordValidation;
    cancel(): void;
    onSetPassword(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetPasswordDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SetPasswordDialogComponent, "tb-set-password-dialog", never, {}, {}, never, never, false, never>;
}
