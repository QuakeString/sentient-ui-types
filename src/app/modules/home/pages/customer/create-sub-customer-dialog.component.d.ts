import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CustomerService } from '@core/http/customer.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface CreateSubCustomerDialogData {
    parentCustomerId: string;
}
export declare class CreateSubCustomerDialogComponent {
    private dialogRef;
    private data;
    private fb;
    private customerService;
    private store;
    private translate;
    form: UntypedFormGroup;
    isLoading: boolean;
    constructor(dialogRef: MatDialogRef<CreateSubCustomerDialogComponent>, data: CreateSubCustomerDialogData, fb: UntypedFormBuilder, customerService: CustomerService, store: Store<AppState>, translate: TranslateService);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateSubCustomerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CreateSubCustomerDialogComponent, "tb-create-sub-customer-dialog", never, {}, {}, never, never, false, never>;
}
