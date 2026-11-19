import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { ActionPasswordService } from '@core/http/action-password.service';
import { NamedActionPassword } from '@shared/models/action-protection.models';
import * as i0 from "@angular/core";
export interface ActionPasswordsDialogData {
    /** The named password to change (with its current password). */
    name: string;
}
/**
 * Changes one named action password at runtime, with its current password
 * (opened from the password prompt). Adding, deleting and changing without
 * the current password happen in Security › Secrets.
 */
export declare class ActionPasswordsDialogComponent extends DialogComponent<ActionPasswordsDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ActionPasswordsDialogComponent, boolean>;
    data: ActionPasswordsDialogData;
    private fb;
    private translate;
    private actionPasswordService;
    /** The compact popup look. */
    readonly runtime = true;
    readonly list: import("@angular/core").WritableSignal<NamedActionPassword[]>;
    readonly loading: import("@angular/core").WritableSignal<boolean>;
    readonly error: import("@angular/core").WritableSignal<string>;
    readonly notice: import("@angular/core").WritableSignal<string>;
    readonly changeForm: FormGroup;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ActionPasswordsDialogComponent, boolean>, data: ActionPasswordsDialogData, fb: FormBuilder, translate: TranslateService, actionPasswordService: ActionPasswordService);
    ngOnInit(): void;
    get shown(): NamedActionPassword[];
    saveChange(p: NamedActionPassword): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionPasswordsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionPasswordsDialogComponent, "st-action-passwords-dialog", never, {}, {}, never, never, false, never>;
}
