import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SecretService } from '@core/http/secret.service';
import { ActionPasswordService } from '@core/http/action-password.service';
import { SecretKind } from '@shared/models/secret.models';
import { SecretsTableConfig } from './secrets-table-config';
import * as i0 from "@angular/core";
export interface SecretsTableDialogData {
    kind?: SecretKind;
}
/**
 * The Security › Secrets list in a dialog, opened from "Manage passwords" in
 * widget and dashboard settings. Same table, same dialogs as the page.
 */
export declare class SecretsTableDialogComponent extends DialogComponent<SecretsTableDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SecretsTableDialogComponent, boolean>;
    readonly config: SecretsTableConfig;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SecretsTableDialogComponent, boolean>, data: SecretsTableDialogData, secretService: SecretService, actionPasswordService: ActionPasswordService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretsTableDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecretsTableDialogComponent, "st-secrets-table-dialog", never, {}, {}, never, never, false, never>;
}
