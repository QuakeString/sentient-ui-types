import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { Customer } from '@shared/models/customer.model';
import * as i0 from "@angular/core";
export declare class CustomerTableHeaderComponent extends EntityTableHeaderComponent<Customer> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    includeSubCustomerEntitiesChanged(value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerTableHeaderComponent, "tb-customer-table-header", never, {}, {}, never, never, false, never>;
}
