import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface HttpConnectionConfig {
    baseUrl?: string;
    enableSecurity?: boolean;
    headersFilter?: {
        [key: string]: string;
    };
    replaceNoContentToOk?: boolean;
    metadata?: {
        [key: string]: string;
    };
    remote?: boolean;
    description?: string;
}
export declare class HttpConnectionFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private store;
    private translate;
    routingKey: string;
    secret: string;
    configForm: UntypedFormGroup;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    private onTouched;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get enableSecurity(): boolean;
    get remote(): boolean;
    get endpointUrl(): string;
    copied(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: HttpConnectionConfig): void;
    private currentValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpConnectionFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HttpConnectionFormComponent, "tb-http-connection-form", never, { "routingKey": { "alias": "routingKey"; "required": false; }; "secret": { "alias": "secret"; "required": false; }; }, {}, never, never, false, never>;
}
