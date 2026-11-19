import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { BaseData, HasId } from '@shared/models/base-data';
import * as i0 from "@angular/core";
/**
 * In a profile's Audit logs tab (view mode): its "Log every manual change",
 * read-only, after the time window. `componentsData.logManualChanges` holds
 * the value (a signal).
 */
export declare class AuditLogTableSettingHeaderComponent extends EntityTableHeaderComponent<BaseData<HasId>> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogTableSettingHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuditLogTableSettingHeaderComponent, "st-audit-log-table-setting-header", never, {}, {}, never, never, false, never>;
}
