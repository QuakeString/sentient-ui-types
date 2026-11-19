import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { SecretService } from '@core/http/secret.service';
import { ActionPasswordService } from '@core/http/action-password.service';
import { SecretInfo, SecretKind } from '@shared/models/secret.models';
import { AppState } from '@core/core.state';
export interface SecretsTableOptions {
    /** A tenant administrator also sees the tenant's action passwords. */
    withActionPasswords: boolean;
    /** The kind shown first. */
    kind?: SecretKind;
}
/**
 * Security → Secrets: named credentials that configuration refers to as
 * `${secret:<name>}` (mail server, rule nodes, integrations, AI models, …),
 * and the tenant's action passwords (checked when a protected widget action
 * runs; never filled into configuration). Values are write-only.
 *
 * The same table backs the Secrets page and the dialog that widget settings
 * and dashboard settings open from "Manage passwords".
 */
export declare class SecretsTableConfig extends EntityTableConfig<SecretInfo> {
    private secretService;
    private actionPasswordService;
    private translate;
    private datePipe;
    private dialog;
    private store;
    readonly options: SecretsTableOptions;
    kind: SecretKind;
    constructor(secretService: SecretService, actionPasswordService: ActionPasswordService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, store: Store<AppState>, options: SecretsTableOptions);
    /** Shows one kind (the header filter). */
    setKind(kind: SecretKind): void;
    /** Ids of action passwords seen in loaded pages (delete gets only the id). */
    private readonly passwordIds;
    private isPassword;
    private inUse;
    private typeText;
    private nameCell;
    private openDialog;
    private copyReference;
}
