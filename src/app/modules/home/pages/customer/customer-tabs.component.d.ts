import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Customer } from '@shared/models/customer.model';
import { CustomerService } from '@core/http/customer.service';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class CustomerTabsComponent extends EntityTabsComponent<Customer> {
    protected store: Store<AppState>;
    private customerService;
    private dialog;
    subCustomers: Customer[];
    subCustomerColumns: string[];
    constructor(store: Store<AppState>, customerService: CustomerService, dialog: MatDialog);
    ngOnInit(): void;
    protected setEntity(entity: Customer): void;
    refreshSubCustomers(): void;
    createSubCustomer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerTabsComponent, "tb-customer-tabs", never, {}, {}, never, never, false, never>;
}
