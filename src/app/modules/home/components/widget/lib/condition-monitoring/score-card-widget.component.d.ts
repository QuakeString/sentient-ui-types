import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { ConditionMonitoringApi, DiagnosisResult, Evidence, Finding, KeyRul, MachineDiagnosis, MeasurementPoint, PointTrend, FleetFinding } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface ScoreCardWidgetSettings {
    kind: 'scoreCard' | 'diagnosisPanel';
    /** Dashboard state opened from "Not configured: X" (empty = none). */
    setupState: string;
    /** Refresh period, seconds (0 = only on load). */
    refreshSeconds: number;
    /** Diagnosis panel: also list the points without a finding. */
    showAllPoints: boolean;
    /** Score card: the classic card, or the machine summary (one sentence and the next step). */
    layout?: 'card' | 'summary';
    /** Diagnosis panel: a table of the bearings, H/V/A side by side, with the point cards on demand. */
    bearingsTable?: boolean;
}
export declare const scoreCardDefaultSettings: ScoreCardWidgetSettings;
/** Shared loading and navigation of the score card and diagnosis panel. */
declare abstract class DiagnosisWidgetBase implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    protected cd: ChangeDetectorRef;
    ctx: WidgetContext;
    settings: ScoreCardWidgetSettings;
    diagnosis: MachineDiagnosis | null;
    loading: boolean;
    error: string;
    protected destroy$: Subject<void>;
    protected api: ConditionMonitoringApi;
    protected entity: EntityId | null;
    protected constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected abstract scopeName(): string;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    protected onDiagnosis(_d: MachineDiagnosis): void;
    color(code?: string): string;
    scoreColor(score: number): string;
    /** How long a finding has stood ("3 d", "today"), from its alarm. */
    since(label: string): string;
    canOpenSetup(r?: DiagnosisResult): boolean;
    openSetup(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DiagnosisWidgetBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DiagnosisWidgetBase, never, never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
/** Score card: the machine's health score, state with its reason, the top
 *  finding with its recommendation, and what lowers the score. */
export declare class ScoreCardWidgetComponent extends DiagnosisWidgetBase {
    topFinding: Finding | null;
    rul: KeyRul | null;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    protected onDiagnosis(d: MachineDiagnosis): void;
    private presets;
    /** The machine's active finding as the fleet knows it (alarm id, work order). */
    alarmFinding: FleetFinding | null;
    trendText: string;
    creatingWo: boolean;
    summaryOpen: boolean;
    /** The machine's state over the last 30 days, as bar segments (percent of the span). */
    stateSegments: {
        code: string;
        left: number;
        width: number;
        tip: string;
    }[];
    /** The latest state changes in words ("High risk since 21 Oct 09:00 · before: Medium risk"). */
    stateChanges: string;
    /** What the bar spans ("Last 30 days", or "Since 21 Oct" with less history). */
    stateSpan: string;
    private loadStateTimeline;
    private loadSummary;
    /** The point the top finding was found at. */
    private findingPoint;
    /** "the motor drive end" for the top finding's point. */
    get findingWhere(): string;
    private get preset();
    /** The one sentence: what, where, since when, how serious. */
    get story(): string;
    /** The facts under the sentence. */
    get facts(): {
        label: string;
        value: string;
    }[];
    /** The first sentence of the top finding's recommendation. */
    get nextStep(): string;
    showWorkOrder(): void;
    createWorkOrder(): void;
    /** Days until a limit, rounded; null when not estimated. */
    days(ms?: number): number | null;
    get rulColor(): string;
    get score(): number | null;
    /** Ring arc length for the score (0..100) on a circle of radius 42. */
    get dash(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScoreCardWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScoreCardWidgetComponent, "st-score-card-widget", never, {}, {}, never, never, false, never>;
}
/** Diagnosis panel: every measurement point with its state, findings,
 *  evidence peaks and recommended actions. */
export declare class DiagnosisPanelWidgetComponent extends DiagnosisWidgetBase {
    readonly evidenceColumns: string[];
    readonly phaseColumns: string[];
    expanded: Set<string>;
    /** Trend of each point's overall level over the last 30 days, by point index. */
    trends: Map<number, PointTrend>;
    readonly trendDays = 30;
    /** Remaining life and trend of every feature: overall levels, the sensors'
     *  other readings (acceleration, temperature, sound) and custom features. */
    featureRows: {
        label: string;
        rul?: KeyRul;
        trend?: PointTrend['trend'];
    }[];
    readonly featureColumns: string[];
    private rulRows;
    private trendRows;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    protected onDiagnosis(_d: MachineDiagnosis): void;
    /** A remaining-life cell: "12 d", "now" past the limit, a word when it cannot be told. */
    rulCell(r: KeyRul | undefined, level: 'warning' | 'critical'): string;
    /** "Motor DE · Temperature": where, then what. */
    featureLabel(point: string | undefined, key: string): string;
    private buildFeatureRows;
    /** Days until a limit, rounded; null when not estimated. */
    days(ms?: number): number | null;
    trendIcon(dir: string): string;
    /** Bearing locations whose point cards are open under the bearings table. */
    openGroups: Set<string>;
    /** Where a point sits, without its axis: "Motor DE". */
    locationOf(p: MeasurementPoint): string;
    /** One row per bearing location: H, V and A side by side, the trend of the
     *  worst axis and the findings there. */
    get bearingRows(): {
        key: string;
        cells: {
            [a: string]: {
                value: number | null;
                zone: string | null;
                index: number;
            } | undefined;
        };
        findings: {
            label: string;
            risk: string;
        }[];
        trend: number | null;
        state: string;
        worst: number;
    }[];
    toggleGroup(key: string): void;
    zoneOf(z: string | null): string;
    get visiblePoints(): {
        index: number;
        point: MeasurementPoint;
        result: DiagnosisResult;
    }[];
    toggle(key: string): void;
    percent(v: number): string;
    /** Show this evidence peak on the spectrum widget of the same dashboard. */
    showPeak(pointIndex: number, fault: string, e: Evidence): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DiagnosisPanelWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DiagnosisPanelWidgetComponent, "st-diagnosis-panel-widget", never, {}, {}, never, never, false, never>;
}
export {};
