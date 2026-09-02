import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IntegrationSharedSettings {
    remote?: boolean;
    description?: string;
    metadata?: {
        [key: string]: string;
    };
}
export declare class IntegrationSharedSettingsComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private store;
    private translate;
    routingKey: string;
    secret: string;
    showRemote: boolean;
    form: UntypedFormGroup;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    private onTouched;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get remote(): boolean;
    copied(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: IntegrationSharedSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationSharedSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationSharedSettingsComponent, "tb-integration-shared-settings", never, { "routingKey": { "alias": "routingKey"; "required": false; }; "secret": { "alias": "secret"; "required": false; }; "showRemote": { "alias": "showRemote"; "required": false; }; }, {}, never, ["*"], false, never>;
}
