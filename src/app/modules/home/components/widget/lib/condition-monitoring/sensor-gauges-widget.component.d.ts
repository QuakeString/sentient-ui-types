import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
export interface SensorGaugesWidgetSettings {
    kind: 'sensorGauges';
}
export declare const sensorGaugesDefaultSettings: SensorGaugesWidgetSettings;
interface KeyLimits {
    operational?: number;
    warning?: number;
    critical?: number;
}
/** One gauge: the key's latest value on an arc whose bands are the sensor's limits. */
interface Gauge {
    label: string;
    value: number | null;
    unit: string;
    decimals: number;
    min: number;
    max: number;
    limits: KeyLimits;
    state: 'ok' | 'warning' | 'critical' | 'none';
}
/** Sensor gauges: each data key's latest value (velocity and acceleration
 *  per axis, temperature, sound level…) on a gauge whose green, amber and red
 *  bands are that sensor's own operational / warning / critical limits (the
 *  `limits` attribute the limits editor writes), so a reading is read against
 *  the limits it is judged by. */
export declare class SensorGaugesWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private cd;
    ctx: WidgetContext;
    gauges: Gauge[];
    private limits;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    /** Limits of the entity: shared scope (pushed to the sensor) wins over server scope. */
    private loadLimits;
    private update;
    /** SVG arc from fraction a to b of the gauge (0 = start, 1 = end). */
    arc(a: number, b: number): string;
    /** The limit bands as fractions of the scale: green, amber, red. */
    bands(g: Gauge): {
        from: number;
        to: number;
        cls: string;
    }[];
    fraction(g: Gauge): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<SensorGaugesWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SensorGaugesWidgetComponent, "st-sensor-gauges-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
