import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export interface LorawanConnectionConfig {
    baseUrl?: string;
    enableSecurity?: boolean;
    headersFilter?: {
        [key: string]: string;
    };
    replaceNoContentToOk?: boolean;
    createLoriotApplicationOutput?: boolean;
    server?: string;
    domain?: string;
    applicationId?: string;
    credentialsType?: 'Basic' | 'Token';
    email?: string;
    password?: string;
    token?: string;
    sendDownlink?: boolean;
    downlinkUrl?: string;
    applicationAccessToken?: string;
    asId?: string;
    asKey?: string;
    maxTimeDiffInSeconds?: number;
    remote?: boolean;
    description?: string;
    metadata?: {
        [key: string]: string;
    };
}
export declare class LorawanConnectionFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private store;
    private translate;
    routingKey: string;
    secret: string;
    integrationType: IntegrationType;
    configForm: UntypedFormGroup;
    disabled: boolean;
    IntegrationType: typeof IntegrationType;
    private destroy$;
    private propagateChange;
    private onTouched;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    get isLoriot(): boolean;
    get isTpe(): boolean;
    get enableSecurity(): boolean;
    get createLoriotApplicationOutput(): boolean;
    get sendDownlink(): boolean;
    get loriotBasic(): boolean;
    get endpointUrl(): string;
    copied(): void;
    writeValue(value: LorawanConnectionConfig): void;
    private currentValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<LorawanConnectionFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LorawanConnectionFormComponent, "tb-lorawan-connection-form", never, { "routingKey": { "alias": "routingKey"; "required": false; }; "secret": { "alias": "secret"; "required": false; }; "integrationType": { "alias": "integrationType"; "required": false; }; }, {}, never, never, false, never>;
}
