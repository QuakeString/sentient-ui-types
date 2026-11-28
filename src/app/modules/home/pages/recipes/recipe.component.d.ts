import { AfterViewInit, ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { EntityKeysPanelComponent } from '@home/components/entity-keys-panel/entity-keys-panel.component';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { specFor } from '@shared/models/recipe-element-type.spec';
import { AttributeService } from '@core/http/attribute.service';
import { AppState } from '@core/core.state';
import { EntityComponent } from '@home/components/entity/entity.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityType } from '@shared/models/entity-type.models';
import { CustomerService } from '@core/http/customer.service';
import { Customer } from '@shared/models/customer.model';
import { DeviceService } from '@core/http/device.service';
import { DeviceInfo } from '@shared/models/device.models';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Recipe, RecipeElementKind, RecipeElementTargetKind, RecipeElementType, RecipeSourceType } from '@shared/models/recipe.models';
import { AssetService } from '@core/http/asset.service';
import { EntityViewService } from '@core/http/entity-view.service';
import { EntityService } from '@core/http/entity.service';
import { TranslateService } from '@ngx-translate/core';
import { RecipeService } from '@core/http/recipe.service';
import * as i0 from "@angular/core";
/** One option of a source / entity picker: devices, assets, entity views, customers. */
interface SourceOption {
    id: string;
    name: string;
}
export declare class RecipeComponent extends EntityComponent<Recipe> implements AfterViewInit, OnDestroy {
    protected store: Store<AppState>;
    protected entityValue: Recipe;
    protected entitiesTableConfigValue: EntityTableConfig<Recipe>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    private attributeService;
    private customerService;
    private deviceService;
    private assetService;
    private entityViewService;
    private entityService;
    private translate;
    private recipeService;
    readonly entityType: typeof EntityType;
    /** The Owner field is a hybrid Customer-or-User picker, ported from
     *  the report-template pattern.  When nothing is explicitly chosen
     *  it pre-fills with the current user's email so the dialog never
     *  opens with an empty/anonymous owner; saving with a bare email
     *  yields a null customer_id, which the backend resolves per
     *  authority:
     *    tenant admin  → recipe stays tenant-owned (customer_id NULL)
     *    customer user → recipe gets customer_id force-set to their own.
     *  Customer users have the picker locked to their email — they can't
     *  reassign ownership to a sibling customer. */
    currentUserEmail: string;
    ownerSearchControl: FormControl<string | Customer>;
    filteredOwners: Observable<Customer[]>;
    private selectedOwner;
    /** True when current user is a CUSTOMER_USER — disables the owner
     *  autocomplete (locked to their email). */
    ownerLocked: boolean;
    /** Owner-aware device picker. The device must match the recipe owner —
     *  a customer-owned recipe needs one of that customer's devices, a
     *  tenant-owned recipe needs an UNASSIGNED device. tb-entity-autocomplete
     *  can't express "unassigned only", so the device field is a custom
     *  autocomplete that fetches the right set based on the chosen owner.
     *  This prevents the operator from picking a device the backend would
     *  reject with a "device owner mismatch". */
    deviceSearchControl: FormControl<string | DeviceInfo>;
    filteredDevices: Observable<DeviceInfo[]>;
    private selectedDevice;
    readonly elementTypes: RecipeElementType[];
    readonly targetKinds: RecipeElementTargetKind[];
    readonly TYPE: typeof RecipeElementType;
    readonly KIND: typeof RecipeElementTargetKind;
    readonly specFor: typeof specFor;
    /** Keys that commit a typed enum value into the chip list. Comma is
     *  included so the user can either press Enter OR comma — comma never
     *  appears as part of the chip text, it's consumed by the chip-input. */
    readonly enumSeparators: number[];
    readonly KINDS: RecipeElementKind[];
    readonly ELEMENT_KIND: typeof RecipeElementKind;
    readonly SOURCE_TYPES: RecipeSourceType[];
    readonly READ_FROM: string[];
    readonly AGE_UNITS: string[];
    /** Which half of the recipe the dialog shows: its details or its elements. */
    readonly view: import("@angular/core").WritableSignal<"details" | "elements">;
    /** Devices the elements can write to (the owner's devices). */
    readonly targetDevices: import("@angular/core").WritableSignal<SourceOption[]>;
    /** Entities a live element can read, per entity type (loaded on demand). */
    readonly liveEntities: import("@angular/core").WritableSignal<Record<string, SourceOption[]>>;
    /** Latest live readings of a saved recipe (key → value), for the formula preview. */
    readonly liveValues: import("@angular/core").WritableSignal<Record<string, number>>;
    /** Caret position in each formula field, for its autocomplete. */
    private formulaCaret;
    /** Options of the Details / Elements switch. */
    viewOptions(): {
        name: string;
        value: string;
    }[];
    private viewOptionsCache;
    /** Header switch between Details and Elements, rendered by the dialog / drawer. */
    viewToggleTpl?: TemplateRef<unknown>;
    /** SHARED_SCOPE attribute keys for the currently selected device.
     *  Fetched lazily when the target-address field is first focused;
     *  re-fetched if the device selection changes. Shared across all
     *  element rows (they all target the same device). */
    private sharedAttrKeys;
    private sharedAttrKeysDeviceId;
    private _destroy$?;
    private get destroy$();
    addElementFooterTpl?: TemplateRef<unknown>;
    /** ViewChild handle on the collapsible elements panel — we call its
     *  `refresh()` after mutating the FormArray (the panel is OnPush, so
     *  it won't re-derive its displayed-controls list on its own). */
    elementsPanel?: EntityKeysPanelComponent;
    ngAfterViewInit(): void;
    /** Wires the owner-aware device autocomplete. Resolves any existing
     *  deviceId to its DeviceInfo for display (and locks the control in edit
     *  mode — device is identity once a recipe exists), then streams a
     *  filtered list that respects the current owner: a customer owner gets
     *  that customer's devices, a tenant owner gets only unassigned devices. */
    private initDeviceAutocomplete;
    /** Seed the device display control from an entity's deviceId. Called both
     *  on init (add dialog — entity present at construction) and from
     *  updateForm (detail panel — entity arrives async, after ngAfterViewInit).
     *  Uses emitEvent:false so it never disturbs the hidden deviceId control,
     *  which the caller has already set authoritatively. */
    private seedDeviceDisplay;
    /** The recipe's source type (DEVICE for recipes saved before sources). */
    sourceType(): RecipeSourceType;
    /** Entities of `type` the current owner may use: its own (a customer
     *  owner) or the tenant's unassigned ones (a tenant owner). */
    private fetchSources;
    /** Current live readings of a saved recipe, so its formula preview can use them. */
    private loadLiveValues;
    /** The owner's devices, for each element's Target device. */
    private loadTargetDevices;
    /** Entities a live element can read for a type (cached per type). */
    liveEntityOptions(type: string | null | undefined): SourceOption[];
    /** Fetch the devices eligible for the current owner. Customer owner →
     *  that customer's devices; tenant owner → only unassigned devices (the
     *  backend rejects a tenant-owned recipe on a customer-assigned device). */
    private fetchDevices;
    /** A device is tenant-owned (eligible for a tenant-owned recipe) when it
     *  has no customer, or the sentinel NULL customer id. */
    private isUnassigned;
    /** mat-autocomplete displayWith for the device field. */
    displayDeviceFn: (value: DeviceInfo | string) => string;
    /** Clear button — resets the device autocomplete (and the hidden id). */
    clearDeviceSelection(event: Event): void;
    /** Wires the hybrid Customer-or-string owner picker. Mirrors the
     *  report-template flow exactly: when the entity already has a
     *  customerId we resolve it to the Customer object (so the input
     *  shows the customer's title); otherwise we pre-fill with the
     *  current user's email so the dialog never opens with an empty
     *  owner. Selecting a customer from the autocomplete sets the
     *  hidden `customerId` form control; clearing back to a bare
     *  string null-ifies it (backend resolves per authority — tenant
     *  admin → tenant-owned, customer user → their own customer). */
    private initOwnerAutocomplete;
    /** mat-autocomplete displayWith — Customer renders as its title;
     *  bare strings (the pre-filled email or in-progress typing) render
     *  verbatim. */
    displayOwnerFn: (value: Customer | string) => string;
    /** Clear button — wipes the autocomplete back to empty, then the
     *  ownerSearchControl.valueChanges sub null-ifies customerId. The
     *  user can then re-type or pick a new owner. */
    clearOwnerSelection(event: Event): void;
    /** Seed the owner display control from an entity's customerId. Called on
     *  init and from updateForm (detail panel — entity arrives async). Uses
     *  emitEvent:false so it never disturbs the hidden customerId control. */
    private seedOwnerDisplay;
    private fetchCustomers;
    ngOnDestroy(): void;
    constructor(store: Store<AppState>, entityValue: Recipe, entitiesTableConfigValue: EntityTableConfig<Recipe>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, attributeService: AttributeService, customerService: CustomerService, deviceService: DeviceService, assetService: AssetService, entityViewService: EntityViewService, entityService: EntityService, translate: TranslateService, recipeService: RecipeService);
    /** Fetch the device's SHARED_SCOPE attribute keys when the target
     *  address field is focused. Lazy + cached per device to avoid a roundtrip
     *  on every keystroke. */
    onAddressFocus(group: UntypedFormGroup): void;
    /** Filter the cached key list by what's currently typed in the row's
     *  target_address field. Case-insensitive substring match. */
    filterAddressKeys(group: UntypedFormGroup): string[];
    /** True when the typed text is non-empty and doesn't match any existing
     *  key — surfaces the "Create '<name>'" option in the autocomplete. */
    canCreateNewKey(group: UntypedFormGroup): boolean;
    hideDelete(): boolean;
    updateFormState(): void;
    buildForm(entity: Recipe): UntypedFormGroup;
    updateForm(entity: Recipe): void;
    prepareFormValue(formValue: any): any;
    /** The form group of one element, with every kind's fields. */
    private elementGroup;
    /** Kind / target dependent rules: which fields are required. */
    private applyKindRules;
    /** Error of a formula: syntax, names that are not number elements of this recipe, its own name. */
    private formulaError;
    /** Keys of the number elements of this recipe. */
    private numericKeys;
    kindOf(group: any): RecipeElementKind;
    writesOf(group: any): boolean;
    /** Name of an element's target device for its summary line. */
    targetDeviceName(group: any): string;
    /** Remembers the caret in a formula field (for its suggestions). */
    trackFormulaCaret(group: object, input: HTMLInputElement): void;
    /** Suggestions for the word being typed in a formula: number elements, then functions. */
    formulaSuggestions(group: any): string[];
    /** Puts a picked suggestion in place of the word being typed. */
    insertFormulaSuggestion(group: any, picked: string, input: HTMLInputElement): void;
    /** mat-autocomplete writes the option into the input before optionSelected; keep the typed text. */
    private formulaBeforePick;
    rememberFormula(group: any): void;
    /** Values of every element worked out from the defaults (live elements
     *  use their default, if any), for the formula preview. */
    formulaPreview(group: any): {
        value?: number;
        error?: string;
    };
    /** Whole numbers for an element's preview, else up to 4 decimals. */
    formatPreview(n: number | undefined): string;
    get elementsArray(): ReturnType<typeof this.fb.array>;
    addElement(): void;
    /** Drag-and-drop reorder: move the control itself (its state and
     *  validity go with it), so the saved order follows the list. */
    moveElement(event: {
        previousIndex: number;
        currentIndex: number;
    }): void;
    removeElement(idx: number): void;
    /** True when this element TYPE accepts numeric min/max. Driven by the
     *  central spec — components must never switch on type strings. */
    isNumericGroup(group: any): boolean;
    isEnumGroup(group: any): boolean;
    /** Which field the Default uses for this element's type. */
    defaultKind(group: any): 'number' | 'boolean' | 'text' | 'enum' | 'time' | 'date' | 'datetime';
    /** Translation key of the first error on a Default / Min / Max number field. */
    numberError(group: any, key: string): string;
    /** Whole-number types (integer, int8..uint64) step by 1. */
    isWholeGroup(group: any): boolean;
    /** Type-aware checks on Default / Min / Max: numbers only for numeric
     *  types, whole numbers for the integer types, and the type's own range
     *  (int8 -128..127 and so on). Re-installed when the type changes. */
    private applyTypeValidators;
    /** Append a chip from the user's typed text. Bound to the chip-input's
     *  `matChipInputTokenEnd` so it fires on Enter / comma / semicolon.
     *  Trims; drops duplicates and empty values silently. */
    addEnumValue(group: UntypedFormGroup, event: MatChipInputEvent): void;
    /** Remove a chip from the enum values list. */
    removeEnumValue(group: UntypedFormGroup, value: string): void;
    /** Wire a freshly-created element FormGroup: type-aware validators
     *  installed now, and a subscription so type changes re-install them
     *  (and clear the type-tied numeric/default fields, since values from
     *  the old type are usually meaningless under the new type). */
    private wireElementGroup;
    private coerceValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeComponent, "tb-recipe", never, {}, {}, never, never, false, never>;
}
export {};
