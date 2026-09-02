import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { CustomHttpSmsProviderConfiguration } from '@shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class CustomHttpSmsProviderConfigurationComponent implements ControlValueAccessor, OnInit {
    private store;
    private fb;
    private destroyRef;
    customHttpSmsProviderConfigurationFormGroup: UntypedFormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CustomHttpSmsProviderConfiguration | null): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomHttpSmsProviderConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomHttpSmsProviderConfigurationComponent, "tb-custom-http-sms-provider-configuration", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
