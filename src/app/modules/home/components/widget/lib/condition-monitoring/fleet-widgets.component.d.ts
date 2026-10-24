import { ChangeDetectorRef, OnInit } from '@angular/core';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { CmChartBase } from './cm-chart-base';
import { FleetFinding, FleetMachine } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface FleetWidgetSettings {
    kind: 'fleetHeatmap' | 'faultSunburst' | 'fleetSummary' | 'attention';
    /** Dashboard state a machine opens (empty = none). */
    targetState: string;
    /** Refresh period, seconds (0 = only on load). */
    refreshSeconds: number;
    /** Heatmap colour: health score, risk, or remaining life. */
    colorBy: 'score' | 'risk' | 'rul';
    /** Fleet summary: the rings shown, in order. */
    rings?: SummaryRing[];
    /** Fleet summary: the period of the uptime ring, days. */
    uptimeDays?: number;
    /** Fleet summary: rings (donuts) or labelled bars. */
    summaryStyle?: 'rings' | 'bars';
    /** Heatmap: the counts line above the tiles. */
    showKpis?: boolean;
    /** Heatmap: tiles or a list. */
    view?: 'tiles' | 'list';
}
export type SummaryRing = 'risk' | 'sensors' | 'score' | 'uptime';
export declare const fleetDefaultSettings: FleetWidgetSettings;
/** Loads the fleet under the widget's entity (or the whole tenant). */
declare abstract class FleetWidgetBase extends CmChartBase implements OnInit {
    settings: FleetWidgetSettings;
    machines: FleetMachine[];
    loading: boolean;
    error: string;
    protected abstract scopeName(): string;
    /** Days of uptime to load with the fleet (none by default: it reads history). */
    protected uptimeDays(): number | null;
    /** Days of health-score trend to load with the fleet (none by default). */
    protected trendDays(): number | null;
    ngOnInit(): void;
    protected onFleet(): void;
    protected render(): void;
    get canOpen(): boolean;
    open(m: FleetMachine): void;
    group(m: FleetMachine): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FleetWidgetBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FleetWidgetBase, never, never, {}, {}, never, never, false, never>;
}
interface TileGroup {
    name: string;
    machines: FleetMachine[];
}
/** Fleet heatmap: every machine as a tile coloured by health score, risk or
 *  remaining life, grouped by line or area, worst first; a tile opens the
 *  machine. */
export declare class FleetHeatmapWidgetComponent extends FleetWidgetBase implements OnInit {
    groups: TileGroup[];
    colorBy: 'score' | 'risk' | 'rul';
    view: 'tiles' | 'list';
    readonly listColumns: string[];
    kpi: {
        machines: number;
        atRisk: number;
        findings: number;
        openWorkOrders: number;
    };
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    ngOnInit(): void;
    protected trendDays(): number | null;
    /** The label over the tile's big value in the current view. */
    get valueLabel(): string;
    /** The tile's colour for text: on a light page the yellow and light green
     *  give way to darker shades that stay readable. */
    textColor(m: FleetMachine): string;
    /** A tile that needs someone: outlined and tinted in its colour. */
    alert(m: FleetMachine): boolean;
    /** Change of the health score over the trend period ("▼ 8 in 7 days"). */
    deltaText(m: FleetMachine): string;
    deltaColor(m: FleetMachine): string;
    private delta;
    /** Line and fill of the score trend on a 120 × 40 box (0–100). */
    spark(m: FleetMachine): {
        line: string;
        fill: string;
    } | null;
    setView(v: 'tiles' | 'list'): void;
    /** Every machine, worst first, for the list view. */
    get sorted(): FleetMachine[];
    /** "Unbalance at Motor DE H", else the state's reason. */
    reason(m: FleetMachine): string;
    overall(m: FleetMachine): string;
    workOrderOf(m: FleetMachine): string;
    /** The tile's last line: overall level, open work order, time to critical. */
    tileFoot(m: FleetMachine): string;
    /** SVG points of the score trend on a 100 × 24 box (0..100 score). */
    sparkline(m: FleetMachine): string;
    setColorBy(c: 'score' | 'risk' | 'rul'): void;
    /** The tile's big value in the current view: score, risk level or days left. */
    value(m: FleetMachine): string;
    /** The tile's line under the name in the current view. */
    detail(m: FleetMachine): string;
    protected onFleet(): void;
    color(m: FleetMachine): string;
    rulText(m: FleetMachine): string;
    /** Days to the critical limit, only while the machine is on a rising trend
     *  (a stable machine keeps its last estimate as telemetry, which no longer
     *  holds) and the estimate is worth showing: a day of readings stretched
     *  into "critical in 51 d" at 1 % confidence is a guess, not a date. */
    private criticalDays;
    static ɵfac: i0.ɵɵFactoryDeclaration<FleetHeatmapWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FleetHeatmapWidgetComponent, "st-fleet-heatmap-widget", never, {}, {}, never, never, false, never>;
}
/** Fault sunburst: area → fault → machine, each fault coloured by its worst
 *  severity, so where the trouble sits and what it is read at a glance. */
export declare class FaultSunburstWidgetComponent extends FleetWidgetBase {
    totals: {
        machines: number;
        faulty: number;
    };
    /** Sunburst (area → fault → machine), faults per machine, or machines per fault. */
    view: 'sunburst' | 'machines' | 'faults';
    private byId;
    setView(v: 'sunburst' | 'machines' | 'faults'): void;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    protected onFleet(): void;
    protected render(): void;
    /** Horizontal bars: active faults per machine, or machines per fault,
     *  coloured by the worst risk; the longest bar on top. */
    private renderBars;
    static ɵfac: i0.ɵɵFactoryDeclaration<FaultSunburstWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FaultSunburstWidgetComponent, "st-fault-sunburst-widget", never, {}, {}, never, never, false, never>;
}
/** Sensor states counted per machine by the health monitor. */
export declare const SENSOR_STATES: readonly ["CRITICAL", "WARNING", "OPERATIONAL", "IDLE", "DISCONNECTED"];
export type SensorStateCode = typeof SENSOR_STATES[number];
export declare const sensorStateColor: (s: SensorStateCode, dark: boolean) => string;
interface Ring {
    title: string;
    total: number;
    slices: {
        key: string;
        label: string;
        value: number;
        machines: FleetMachine[];
    }[];
    /** Slice colour in the current theme. */
    color: (key: string, dark: boolean) => string;
}
/** Fleet summary: two rings, machines by risk and sensors by state, with the
 *  count in the middle; a slice lists its machines. */
export declare class FleetSummaryWidgetComponent extends FleetWidgetBase {
    protected redrawOnResize: boolean;
    rings: Ring[];
    /** Machines of the picked slice. */
    picked: {
        label: string;
        machines: FleetMachine[];
    } | null;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    /** Ring slice of a machine: its risk, or why it is not diagnosed. */
    private riskKey;
    private riskOf;
    private sensorCount;
    protected uptimeDays(): number | null;
    protected onFleet(): void;
    /** Labelled bars instead of rings. */
    get bars(): boolean;
    barColor(ring: number, key: string): string;
    barLabel(r: Ring): string;
    pick(ring: number, key: string, label: string): void;
    /** Back to the legend. */
    clearPick(): void;
    private sliceColor;
    protected render(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FleetSummaryWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FleetSummaryWidgetComponent, "st-fleet-summary-widget", never, {}, {}, never, never, false, never>;
}
/** One line of the attention card. */
interface AttentionItem {
    level: 'bad' | 'warn' | 'info';
    title: string;
    detail: string;
    machine?: FleetMachine;
    action?: string;
    /** The finding has no work order yet: offer to raise one. */
    finding?: FleetFinding;
}
/** Needs attention: the few things that need someone now, each with what,
 *  where, since when and the next click; quiet one-line "all fine" otherwise.
 *  Machines at medium risk or worse, offline sensors, overdue work orders,
 *  and machines that cannot be diagnosed yet (setup unfinished). */
export declare class AttentionWidgetComponent extends FleetWidgetBase {
    items: AttentionItem[];
    /** Machines with nothing to report. */
    fine: number;
    private overdue;
    private api2;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    ngOnInit(): void;
    protected onFleet(): void;
    creating: Set<string>;
    /** Raises a work order for the item's finding; the line then names it. */
    createWorkOrder(it: AttentionItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttentionWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttentionWidgetComponent, "st-attention-widget", never, {}, {}, never, never, false, never>;
}
export {};
