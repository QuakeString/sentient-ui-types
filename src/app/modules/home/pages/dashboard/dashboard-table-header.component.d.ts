import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { DashboardInfo } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class DashboardTableHeaderComponent extends EntityTableHeaderComponent<DashboardInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardTableHeaderComponent, "tb-dashboard-table-header", never, {}, {}, never, never, false, never>;
}
