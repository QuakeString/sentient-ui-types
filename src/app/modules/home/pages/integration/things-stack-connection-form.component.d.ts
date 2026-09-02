import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IntegrationType } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export interface ThingsStackConnectionConfig {
    host?: string;
    applicationId?: string;
    apiKey?: string;
    ssl?: boolean;
    remote?: boolean;
    description?: string;
    metadata?: {
        [key: string]: string;
    };
}
export declare class ThingsStackConnectionFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    routingKey: string;
    secret: string;
    integrationType: IntegrationType;
    configForm: UntypedFormGroup;
    disabled: boolean;
    integrationTypeEnum: typeof IntegrationType;
    private destroy$;
    private propagateChange;
    private onTouched;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ThingsStackConnectionConfig): void;
    private currentValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThingsStackConnectionFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThingsStackConnectionFormComponent, "tb-things-stack-connection-form", never, { "routingKey": { "alias": "routingKey"; "required": false; }; "secret": { "alias": "secret"; "required": false; }; "integrationType": { "alias": "integrationType"; "required": false; }; }, {}, never, never, false, never>;
}
