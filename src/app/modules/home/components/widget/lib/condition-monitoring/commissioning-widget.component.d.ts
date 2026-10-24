import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { Axis, MachineModel, MeasurementPoint, SoundUploadResult } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface CommissioningWidgetSettings {
    kind: 'commissioning';
    /** Offer the phone sound recording step. */
    recordSound: boolean;
    /** Recording length, seconds. */
    recordSeconds: number;
    /** Sound channel the recording goes to on the sensor. */
    soundKey: string;
}
export declare const commissioningDefaultSettings: CommissioningWidgetSettings;
/** Phone commissioning: walk up to the machine, pick the measurement point
 *  (or add one), tap where the sensor sits on the train drawing, pick the
 *  axis and the sensor, and record how the machine sounds today as the
 *  baseline. Saves the point into the machine setup. */
export declare class CommissioningWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private store;
    private cd;
    ctx: WidgetContext;
    readonly axes: Axis[];
    readonly deviceType = EntityType.DEVICE;
    settings: CommissioningWidgetSettings;
    entity: EntityId | null;
    model: MachineModel;
    loaded: boolean;
    /** Index of the point being edited; -1 = a new point. */
    pointIndex: number;
    name: string;
    mountPoint: string | null;
    axis: Axis | null;
    deviceId: string | null;
    recording: boolean;
    recordedS: number;
    sound: SoundUploadResult | null;
    soundError: string;
    saving: boolean;
    private api;
    private recorder;
    private tick;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    get points(): MeasurementPoint[];
    get usedMountPoints(): string[];
    get canRecord(): boolean;
    get canSave(): boolean;
    selectPoint(i: number): void;
    onDevice(id: any): void;
    record(): Promise<void>;
    stopRecording(): Promise<void>;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommissioningWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommissioningWidgetComponent, "st-commissioning-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
