import { ChangeDetectorRef, OnInit } from '@angular/core';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { CmChartBase } from './cm-chart-base';
import { PumpPerformance, PumpSetup } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface PumpPerformanceWidgetSettings {
    kind: 'pump';
    /** Refresh period, seconds (0 = only on load). */
    refreshSeconds: number;
    /** Show the datasheet curve chart (off = figures only). */
    showCurve: boolean;
}
export declare const pumpPerformanceDefaultSettings: PumpPerformanceWidgetSettings;
/** Pump energy and efficiency: where the pump runs on its datasheet curve
 *  (operating point against the head and efficiency curves and the best
 *  efficiency point), wire-to-water efficiency against what the datasheet
 *  expects, energy per cubic metre and what the lost efficiency costs. */
export declare class PumpPerformanceWidgetComponent extends CmChartBase implements OnInit {
    settings: PumpPerformanceWidgetSettings;
    pump: PumpPerformance | null;
    setup: PumpSetup | null;
    loading: boolean;
    message: string;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    stateColor(): string;
    riskColor(risk: string): string;
    /** Efficiency points below the datasheet (positive = worse). */
    get efficiencyGap(): number | null;
    get hasCurve(): boolean;
    has(v: unknown): boolean;
    protected render(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PumpPerformanceWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PumpPerformanceWidgetComponent, "st-pump-performance-widget", never, {}, {}, never, never, false, never>;
}
