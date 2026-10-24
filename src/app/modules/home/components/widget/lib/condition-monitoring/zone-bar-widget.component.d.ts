import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
export interface ZoneBarWidgetSettings {
    kind: 'zoneBar';
    /** Preset id; empty = the machine setup's preset, else custom bands. */
    zonePreset: string;
    /** Custom bands when no preset applies: "1.4, 2.8, 4.5". */
    customBoundaries: string;
    customLabels: string;
    unit: string;
    decimals: number;
}
export declare const zoneBarDefaultSettings: ZoneBarWidgetSettings;
interface Band {
    label: string;
    from: number;
    to: number;
    color: string;
}
interface Row {
    label: string;
    value: number | null;
    zone: string;
    zoneIndex: number;
    position: number;
}
/** Zone bar with presets: each data key's latest value placed on its
 *  bands (ISO 10816 / 20816 vibration zones, or any custom bands such as
 *  voltage limits). */
export declare class ZoneBarWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private cd;
    ctx: WidgetContext;
    settings: ZoneBarWidgetSettings;
    preset: {
        name: string;
        unit: string;
        boundaries: number[];
        zones: string[];
    } | null;
    bands: Band[];
    rows: Row[];
    scaleMax: number;
    message: string;
    /** Without data keys the bars show each measurement point's overall level. */
    private diagnosis;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    private usePreset;
    private useCustom;
    private buildBands;
    private updateRows;
    bandWidth(b: Band): number;
    zoneColorOf(i: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ZoneBarWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ZoneBarWidgetComponent, "st-zone-bar-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
