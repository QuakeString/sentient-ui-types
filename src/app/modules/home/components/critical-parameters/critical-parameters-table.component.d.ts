import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityId } from '@shared/models/id/entity-id';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { CriticalParametersTableConfig } from './critical-parameters-table-config';
import * as i0 from "@angular/core";
/** The Critical parameters tab of a device profile, asset profile, device or asset. */
export declare class CriticalParametersTableComponent {
    private criticalParameterService;
    private translate;
    private dialog;
    private store;
    readonly active: import("@angular/core").InputSignal<boolean>;
    readonly entityId: import("@angular/core").InputSignal<EntityId>;
    readonly config: import("@angular/core").WritableSignal<CriticalParametersTableConfig>;
    constructor(criticalParameterService: CriticalParameterService, translate: TranslateService, dialog: MatDialog, store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticalParametersTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CriticalParametersTableComponent, "st-critical-parameters-table", never, { "active": { "alias": "active"; "required": false; "isSignal": true; }; "entityId": { "alias": "entityId"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
