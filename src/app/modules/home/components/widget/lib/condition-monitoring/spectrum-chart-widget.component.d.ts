import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { FrequencyMarker, MarkerFamily, MeasurementPoint, SpectrumRow } from './condition-monitoring.models';
import * as i0 from "@angular/core";
/** Harmonic cursor: lines at 1x..10x the picked frequency. Sub-harmonic
 *  cursor: 1/2..1/10 of it (oil whirl, rubs, looseness). Sideband cursor:
 *  the picked frequency ± 1..4 × running speed. */
type CursorMode = 'off' | 'harmonic' | 'subharmonic' | 'sideband';
/** What the capture timeline's dots are coloured by. */
type TimelineColor = 'zone' | 'state';
/** Velocity (mm/s), acceleration derived from it (g), or envelope (g). */
export type SpectrumView = 'velocity' | 'acceleration' | 'envelope';
/** Summary of the spectrum on screen. */
interface SpectrumStats {
    overall: number;
    peak: number;
    peakHz: number;
    mean: number;
    median: number;
    std: number;
    min: number;
    mode: number;
    /** Velocity RMS (mm/s) and acceleration RMS (g) of the capture; absent on an envelope spectrum. */
    vrms?: number;
    arms?: number;
}
/** One capture on the timeline under the chart. */
interface TimelineDot {
    ts: number;
    overall: number | null;
    color: string;
    /** Running or standing at the capture, from the overall level and the idle threshold. */
    state: 'running' | 'idle' | null;
}
export interface SpectrumChartWidgetSettings {
    kind: 'spectrum';
    /** Spectrum key when the widget shows a device without a machine setup. */
    spectrumKey: string;
    envelopeKey: string;
    /** Unit label of the amplitude axis. */
    amplitudeUnit: string;
    /** hz | cpm | order */
    xUnit: 'hz' | 'cpm' | 'order';
    showMarkers: boolean;
    /** Highest frequency shown (0 = whole spectrum). */
    maxHz: number;
}
export declare const spectrumChartDefaultSettings: SpectrumChartWidgetSettings;
interface Peak {
    hz: number;
    amplitude: number;
}
/** Spectrum chart with marker sets: the latest spectrum of a channel, with
 *  the machine's fault frequencies drawn over it. Pointed at a machine
 *  (asset or device with a machine setup) it offers each measurement point;
 *  pointed at a plain device it shows the configured key. */
export declare class SpectrumChartWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    /** Shown inside another card (the Analysis tabs): no title row of its own. */
    embedded: boolean;
    get titled(): boolean;
    settings: SpectrumChartWidgetSettings;
    points: MeasurementPoint[];
    pointIndex: number;
    view: SpectrumView;
    xUnit: 'hz' | 'cpm' | 'order';
    families: MarkerFamily[];
    hiddenFamilies: Set<MarkerFamily>;
    /** Expert toggles (view, axis unit, cursor) shown; folded away when embedded. */
    moreOpen: boolean;
    /** The whole axis instead of the range where the lines are. */
    fullRange: boolean;
    /** Upper end (Hz) of the range shown when zoomed to the lines; 0 = whole axis. */
    fitHz: number;
    /** Marker preset: running speed lines, bearing lines, electrical, everything. */
    preset: 'shaft' | 'bearing' | 'electrical' | 'all';
    get showExpert(): boolean;
    setPreset(p: 'shaft' | 'bearing' | 'electrical' | 'all'): void;
    toggleFullRange(): void;
    readonly baselineColor: string;
    spectrum: SpectrumRow | null;
    amplitudes: number[];
    stats: SpectrumStats | null;
    peaks: Peak[];
    markers: FrequencyMarker[];
    evidenceIds: Set<string>;
    shaftHz: number;
    loading: boolean;
    message: string;
    cursor: CursorMode;
    cursorHz: number | null;
    focus: {
        hz: number;
        label: string;
    } | null;
    baseline: SpectrumRow | null;
    baselineAmps: number[];
    showBaseline: boolean;
    savingBaseline: boolean;
    timeline: TimelineDot[];
    /** ts of the spectrum shown; null = latest. */
    shownTs: number | null;
    private zonePresets;
    private api;
    private diagnosis;
    private chart;
    private resize$;
    private darkObserver;
    private dark;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    refresh(): void;
    selectPoint(i: number): void;
    setCursor(c: CursorMode): void;
    /** Cursor lines in Hz: harmonics of the picked frequency, or its sidebands. */
    get cursorLines(): {
        hz: number;
        label: string;
    }[];
    readonly focusColor: string;
    clearFocus(): void;
    toggleBaseline(): void;
    /** Keep the spectrum on screen as this channel's baseline. */
    setBaseline(): void;
    /** Show one capture of the timeline (or the latest again). */
    showCapture(ts: number | null): void;
    private get deviceId();
    private get key();
    private baselineMap;
    private onFocus;
    setView(v: SpectrumView): void;
    setXUnit(u: 'hz' | 'cpm' | 'order'): void;
    toggleFamily(f: MarkerFamily): void;
    familyColor(f: MarkerFamily): string;
    formatX(hz: number): string;
    get hasEnvelope(): boolean;
    private load;
    /** Markers and evidence of the selected point. */
    private applyPointResult;
    private loadSpectrum;
    private loadBaseline;
    /** Timeline dots coloured by ISO zone or by machine state (running / standing). */
    timelineColor: TimelineColor;
    readonly runningColor: string;
    dotColor(d: TimelineDot): string;
    /** Day the capture timeline shows (yyyy-mm-dd), or '' for the latest captures. */
    timelineDay: string;
    /** The day picker's range as dates (90 days back to today). */
    get dayDates(): {
        min: Date;
        max: Date;
    };
    /** The picked day as a local date, for the day picker. */
    get timelineDate(): Date | null;
    pickDay(d: Date | null): void;
    /** Shows the captures of one day (local time), or the latest again. */
    setTimelineDay(day: string): void;
    /** The captures of the picked day (or the last ones), coloured by the overall level's zone at that time. */
    private loadTimeline;
    /** Digits for amplitudes: g values are small. */
    /** One format per unit: mm/s with 2 decimals, g with 3 (as on every other card). */
    get ampFormat(): string;
    /** Unit of the amplitudes on screen. */
    get unit(): string;
    /** The row's amplitudes in the current view: acceleration is velocity
     *  (mm/s) times 2πf, in g. */
    private viewAmplitudes;
    private spectrumStats;
    /** Most frequent amplitude (rounded to 3 significant digits). */
    private modeOf;
    /** Velocity RMS (mm/s) and acceleration RMS (g) of a velocity spectrum. */
    private rmsLevels;
    private exportName;
    private download;
    /** The spectrum on screen as CSV: frequency, order, amplitude. */
    exportCsv(): void;
    /** The spectrum on screen as an Excel workbook: a summary sheet (point, time,
     *  statistics, top peaks) and the spectrum itself. */
    exportXlsx(): Promise<void>;
    private topPeaks;
    private onResize;
    private xValue;
    private fromX;
    private xName;
    private render;
    static ɵfac: i0.ɵɵFactoryDeclaration<SpectrumChartWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SpectrumChartWidgetComponent, "st-spectrum-chart-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "embedded": { "alias": "embedded"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
