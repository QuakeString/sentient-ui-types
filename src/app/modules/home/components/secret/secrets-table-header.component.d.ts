import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { SecretInfo, SecretKind } from '@shared/models/secret.models';
import { SecretsTableConfig } from './secrets-table-config';
import * as i0 from "@angular/core";
/** The kind filter above the Secrets table: all, secrets, or action passwords. */
export declare class SecretsTableHeaderComponent extends EntityTableHeaderComponent<SecretInfo> {
    protected store: Store<AppState>;
    readonly SecretKind: typeof SecretKind;
    get config(): SecretsTableConfig;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretsTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecretsTableHeaderComponent, "st-secrets-table-header", never, {}, {}, never, never, false, never>;
}
