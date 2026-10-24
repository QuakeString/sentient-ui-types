import { ChangeDetectorRef, OnInit } from '@angular/core';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { CmChartBase } from './cm-chart-base';
import { ConditionMonitoringApi, FleetFinding, FleetOverview, OverviewMachine } from './condition-monitoring.models';
import * as i0 from "@angular/core";
/** What a fleet KPI card counts. */
export type FleetKpiMetric = 'health' | 'atRisk' | 'findings' | 'workOrders' | 'sensors';
export interface FleetOverviewWidgetSettings {
    kind: 'fleetKpi' | 'fleetWeek' | 'openWorkOrders';
    /** KPI card: what it counts. */
    metric?: FleetKpiMetric;
    /** Where a click goes: a dashboard state, else the widget with this title on the page. */
    target?: string;
    /** Dashboard state a machine opens (open work orders). */
    targetState?: string;
    /** Days of the change and the trend. */
    days: number;
    /** Refresh period, seconds (0 = only on load). */
    refreshSeconds: number;
}
export declare const fleetOverviewDefaultSettings: FleetOverviewWidgetSettings;
/** A machine at risk: medium risk or worse, or a score under 60. */
export declare const atRisk: (m: OverviewMachine) => boolean;
/** Mean health score now, and its change against the first day of the period. */
export declare const fleetHealth: (machines: OverviewMachine[]) => {
    now: number | null;
    change: number | null;
};
/** Loads the shared overview of the widget's entity (or the whole tenant). */
declare abstract class FleetOverviewBase extends CmChartBase implements OnInit {
    settings: FleetOverviewWidgetSettings;
    data: FleetOverview | null;
    loading: boolean;
    error: string;
    protected api: ConditionMonitoringApi;
    protected abstract scopeName(): string;
    protected abstract onData(): void;
    ngOnInit(): void;
    protected render(): void;
    get machines(): OverviewMachine[];
    protected t(k: string, p?: any): string;
    /** Goes to a dashboard state, or brings the widget with that title into view. */
    protected go(target: string | undefined, params?: any): void;
    openMachine(m: OverviewMachine): void;
    levelColor(level: 'plan' | 'healthy'): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FleetOverviewBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FleetOverviewBase, never, never, {}, {}, never, never, false, never>;
}
/** One headline number about the machines under the widget's entity: fleet
 *  health, machines at risk, open findings, open work orders or sensors
 *  online. Put several side by side; a click goes to the card's target. */
export declare class FleetKpiWidgetComponent extends FleetOverviewBase {
    label: string;
    value: string;
    suffix: string;
    note: string;
    valueColor: string | null;
    noteColor: string | null;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    go(target: string | undefined): void;
    protected onData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FleetKpiWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FleetKpiWidgetComponent, "st-fleet-kpi-widget", never, {}, {}, never, never, false, never>;
}
/** The last days of the machines under the widget's entity: fleet health per
 *  day as a line, findings opened and closed per day as bars, and one line
 *  that says what moved. */
export declare class FleetWeekWidgetComponent extends FleetOverviewBase {
    health: (number | null)[];
    opened: number[];
    closed: number[];
    labels: string[];
    summary: string;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    protected onData(): void;
    /** Score axis: from a round 10 under the lowest day up to 100. */
    get low(): number;
    x(i: number): number;
    y(v: number): number;
    get ticks(): number[];
    get path(): string;
    get last(): {
        x: number;
        y: number;
        v: number;
    } | null;
    /** Bar of findings opened (left) or closed (right) on day i, 8 px each, 32 at most. */
    bar(i: number, closed: boolean): {
        x: number;
        y: number;
        h: number;
    } | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FleetWeekWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FleetWeekWidgetComponent, "st-fleet-week-widget", never, {}, {}, never, never, false, never>;
}
/** Open work orders on the machines under the widget's entity, newest
 *  first; when there are none, offers to raise one for the most urgent
 *  finding that has none yet. */
export declare class OpenWorkOrdersWidgetComponent extends FleetOverviewBase {
    orders: {
        id: string;
        code: string;
        title: string;
        status: string;
        due?: number | null;
        machine: OverviewMachine;
        createdTime: number;
    }[];
    /** Findings without a work order, most urgent first. */
    pending: {
        finding: FleetFinding;
        machine: OverviewMachine;
    }[];
    creating: boolean;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    protected onData(): void;
    dueColor(due?: number | null): string | null;
    create(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpenWorkOrdersWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpenWorkOrdersWidgetComponent, "st-open-work-orders-widget", never, {}, {}, never, never, false, never>;
}
export {};
