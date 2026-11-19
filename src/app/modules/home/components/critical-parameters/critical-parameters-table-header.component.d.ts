import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import type { CriticalParameterEntity, CriticalParametersTableConfig } from './critical-parameters-table-config';
import * as i0 from "@angular/core";
/**
 * On a device or asset: the profile's "Log every manual change", read-only
 * (it is set on the profile, in its Audit settings tab).
 */
export declare class CriticalParametersTableHeaderComponent extends EntityTableHeaderComponent<CriticalParameterEntity> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    get config(): CriticalParametersTableConfig;
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticalParametersTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CriticalParametersTableHeaderComponent, "st-critical-parameters-table-header", never, {}, {}, never, never, false, never>;
}
