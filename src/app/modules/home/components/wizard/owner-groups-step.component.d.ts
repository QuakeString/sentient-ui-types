import { ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EntityGroup, EntityGroupType } from '@shared/models/entity-group.model';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityService } from '@core/http/entity.service';
import { CustomerService } from '@core/http/customer.service';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class OwnerGroupsStepComponent implements OnInit {
    private entityGroupService;
    private entityService;
    private customerService;
    private dialog;
    private store;
    formGroup: FormGroup;
    groupType: EntityGroupType;
    prefilledGroup: EntityGroup;
    isLoading: boolean;
    customerIdField: string;
    groupIdsField: string;
    /** If set, pre-selects this customer as owner and scopes groups to it */
    defaultOwnerId: string;
    /** If set, uses this tenant ID for group queries instead of the authenticated user's tenant */
    targetTenantId: string;
    groupInput: ElementRef<HTMLInputElement>;
    ownerInput: ElementRef<HTMLInputElement>;
    ownerDisplayValue: string;
    ownerSearchControl: FormControl<string>;
    filteredCustomers$: Observable<Array<BaseData<EntityId>>>;
    ownerSelected: boolean;
    private selectedCustomer;
    /** The ownerId used to scope group queries (tenant UUID or customer UUID) */
    private currentGroupsOwnerId;
    selectedGroups: EntityGroup[];
    groupSearchControl: FormControl<string>;
    filteredGroups: EntityGroup[];
    groupSearchText: string;
    separatorKeyCodes: number[];
    constructor(entityGroupService: EntityGroupService, entityService: EntityService, customerService: CustomerService, dialog: MatDialog, store: Store<AppState>);
    ngOnInit(): void;
    displayOwnerFn: (value: any) => string;
    onOwnerFocus(): void;
    onOwnerSelected(event: MatAutocompleteSelectedEvent): void;
    clearOwner(): void;
    onGroupFocus(): void;
    removeGroup(group: EntityGroup): void;
    onGroupSelected(event: MatAutocompleteSelectedEvent): void;
    createNewGroup($event?: MouseEvent): void;
    private clearGroupInput;
    private updateGroupIds;
    static ɵfac: i0.ɵɵFactoryDeclaration<OwnerGroupsStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OwnerGroupsStepComponent, "tb-owner-groups-step", never, { "formGroup": { "alias": "formGroup"; "required": false; }; "groupType": { "alias": "groupType"; "required": false; }; "prefilledGroup": { "alias": "prefilledGroup"; "required": false; }; "isLoading": { "alias": "isLoading"; "required": false; }; "customerIdField": { "alias": "customerIdField"; "required": false; }; "groupIdsField": { "alias": "groupIdsField"; "required": false; }; "defaultOwnerId": { "alias": "defaultOwnerId"; "required": false; }; "targetTenantId": { "alias": "targetTenantId"; "required": false; }; }, {}, never, never, false, never>;
}
