import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { SecretService } from '@core/http/secret.service';
import { SecretInfo } from '@shared/models/secret.models';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
/**
 * Security → Secrets: named credentials that configuration refers to as
 * `${secret:<name>}` (mail server, rule nodes, integrations, AI models, …).
 * Values are encrypted on the server and can be replaced, never read.
 */
export declare class SecretsTableConfigResolver {
    private secretService;
    private translate;
    private datePipe;
    private dialog;
    private store;
    private readonly config;
    constructor(secretService: SecretService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, store: Store<AppState>);
    resolve(): EntityTableConfig<SecretInfo>;
    private openDialog;
    private copyReference;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SecretsTableConfigResolver>;
}
