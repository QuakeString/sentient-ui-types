import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export interface ThingParkConnectionConfig {
    baseUrl?: string;
    enableSecurity?: boolean;
    enableSecurityNew?: boolean;
    asId?: string;
    asKey?: string;
    maxTimeDiffInSeconds?: number;
    remote?: boolean;
    replaceNoContentToOk?: boolean;
    downlinkUrl?: string;
    description?: string;
    metadata?: {
        [key: string]: string;
    };
}
export declare class ThingParkConnectionFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private store;
    private translate;
    routingKey: string;
    secret: string;
    integrationType: IntegrationType;
    configForm: UntypedFormGroup;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    private onTouched;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    get enableSecurity(): boolean;
    get remote(): boolean;
    get endpointUrl(): string;
    copied(): void;
    writeValue(value: ThingParkConnectionConfig): void;
    private currentValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThingParkConnectionFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThingParkConnectionFormComponent, "tb-thingpark-connection-form", never, { "routingKey": { "alias": "routingKey"; "required": false; }; "secret": { "alias": "secret"; "required": false; }; "integrationType": { "alias": "integrationType"; "required": false; }; }, {}, never, never, false, never>;
}
