import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export type MqttCredentialsType = 'anonymous' | 'basic' | 'pem';
export interface MqttTopicFilter {
    filter: string;
    qos: number;
}
export interface MqttConnectionConfig {
    host?: string;
    port?: number;
    credentials?: {
        type: MqttCredentialsType;
        username?: string;
        password?: string;
        caCert?: string;
        cert?: string;
        privateKey?: string;
    };
    ssl?: boolean;
    topicFilters?: MqttTopicFilter[];
    protocolVersion?: string;
    clientId?: string;
    maxBytesInMessage?: number;
    connectTimeoutSec?: number;
    downlinkTopicPattern?: string;
    cleanSession?: boolean;
    retained?: boolean;
    remote?: boolean;
    description?: string;
    metadata?: {
        [key: string]: string;
    };
}
export declare class MqttConnectionFormComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private store;
    private translate;
    routingKey: string;
    secret: string;
    configForm: UntypedFormGroup;
    disabled: boolean;
    readonly credentialsTypes: {
        value: MqttCredentialsType;
        label: string;
    }[];
    readonly qosOptions: {
        value: number;
        label: string;
    }[];
    readonly protocolVersions: string[];
    private destroy$;
    private propagateChange;
    private onTouched;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get topicFilters(): UntypedFormArray;
    get credentialsType(): MqttCredentialsType;
    get remote(): boolean;
    copied(): void;
    private createTopicFilter;
    addTopicFilter(): void;
    removeTopicFilter(index: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MqttConnectionConfig): void;
    private currentValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttConnectionFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttConnectionFormComponent, "tb-mqtt-connection-form", never, { "routingKey": { "alias": "routingKey"; "required": false; }; "secret": { "alias": "secret"; "required": false; }; }, {}, never, never, false, never>;
}
