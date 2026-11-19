import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { SecretService } from '@core/http/secret.service';
import { ActionPasswordService } from '@core/http/action-password.service';
import { AppState } from '@core/core.state';
import { SecretsTableConfig } from '@home/components/secret/secrets-table-config';
import * as i0 from "@angular/core";
/** Security → Secrets: secrets and (tenant administrator) the tenant's action passwords. */
export declare class SecretsTableConfigResolver {
    private secretService;
    private actionPasswordService;
    private translate;
    private datePipe;
    private dialog;
    private store;
    constructor(secretService: SecretService, actionPasswordService: ActionPasswordService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, store: Store<AppState>);
    resolve(): SecretsTableConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
