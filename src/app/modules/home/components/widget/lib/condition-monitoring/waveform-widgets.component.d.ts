import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { CmChartBase } from './cm-chart-base';
import { CaptureRequest, ConditionMonitoringApi, MeasurementPoint, PhaseAnalysis, SensorSettingsCheck, SpectrumRow, WaveformBlock, WaveformMeta } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface WaveformWidgetSettings {
    kind: 'waveform' | 'waterfall';
    /** Waveform key when the widget shows a device without a machine setup. */
    waveformKey: string;
    /** Unit of the raw samples. */
    sampleUnit: string;
    /** Offer "Capture now" and the settings check. */
    showCapture: boolean;
    /** Waterfall: spectrum key, number of captures, highest frequency. */
    spectrumKey: string;
    count: number;
    maxHz: number;
    amplitudeUnit: string;
}
export declare const waveformDefaultSettings: WaveformWidgetSettings;
/** Machine points with their sensor, shared by the two widgets. */
declare abstract class PointWidgetBase extends CmChartBase implements OnInit {
    settings: WaveformWidgetSettings;
    points: MeasurementPoint[];
    /** 1X phase of the machine's latest simultaneous capture (from the diagnosis). */
    phase: PhaseAnalysis | null;
    pointIndex: number;
    loading: boolean;
    message: string;
    protected api: ConditionMonitoringApi;
    protected abstract scopeName(): string;
    protected abstract loadData(): void;
    ngOnInit(): void;
    refresh(): void;
    selectPoint(i: number): void;
    get deviceId(): string | null;
    get point(): MeasurementPoint | undefined;
    private loadPoints;
    static ɵfac: i0.ɵɵFactoryDeclaration<PointWidgetBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PointWidgetBase, never, never, {}, {}, never, never, false, never>;
}
/** Envelope (demodulated) waveform: the Hilbert magnitude of the capture
 *  band-passed to [lo, hi] Hz, as the server's envelope spectrum (500 Hz up). */
export declare const envelopeWaveform: (x: number[], fs: number, lo?: number, hi?: number) => number[];
/** Time waveform: one raw capture of a measurement point with its
 *  statistics, the list of earlier captures, "Capture now" and the check
 *  that the sensor runs with the settings it was sent. */
export declare class TimeWaveformWidgetComponent extends PointWidgetBase {
    captures: WaveformMeta[];
    captureId: string | null;
    block: WaveformBlock | null;
    stats: {
        rms: number;
        peak: number;
        crest: number;
        kurtosis: number;
        min: number;
        max: number;
    } | null;
    /** Raw capture or its envelope (demodulated, 500 Hz up: bearing impacts). */
    view: 'raw' | 'envelope';
    private envelope;
    capture: CaptureRequest | null;
    settingsCheck: SensorSettingsCheck | null;
    capturing: boolean;
    /** The capture is playing as sound. */
    playing: boolean;
    private audio;
    private source;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    /** Plays the capture as sound at its own sample rate (normalised), the way
     *  an analyst listens to a bearing: impacts click, rubs hiss, gears whine. */
    listen(): void;
    private stopListening;
    ngOnDestroy(): void;
    protected scopeName(): string;
    get waveformKey(): string;
    protected loadData(): void;
    selectCapture(id: string): void;
    captureNow(): void;
    get settingsTooltip(): string;
    private pollCapture;
    private loadBlock;
    /** Phase differences at 1X that involve this point, when the shown
     *  capture is the one the diagnosis read the phase from. */
    get phasePairs(): {
        label: string;
        diffDeg: number;
    }[];
    /** Envelope view is offered when the capture reaches above the envelope band. */
    get canEnvelope(): boolean;
    setView(v: 'raw' | 'envelope'): void;
    /** Samples of the current view (the envelope is computed once per capture). */
    private get viewSamples();
    private statistics;
    protected render(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeWaveformWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeWaveformWidgetComponent, "st-time-waveform-widget", never, {}, {}, never, never, false, never>;
}
/** Waterfall: the last N spectra of a measurement point as a spectrogram
 *  (frequency across, capture time down, amplitude as colour), so a line
 *  that grows or a band that rises over the weeks stands out. */
export declare class WaterfallWidgetComponent extends PointWidgetBase implements OnDestroy {
    surface3d: ElementRef<HTMLElement>;
    view: 'velocity' | 'envelope';
    /** Colour map (spectrogram), stacked lines, or a surface to turn in 3-D. */
    mode: 'map' | 'lines' | '3d';
    rows: SpectrumRow[];
    private view3d;
    setMode(m: 'map' | 'lines' | '3d'): void;
    ngOnDestroy(): void;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    protected scopeName(): string;
    setView(v: 'velocity' | 'envelope'): void;
    get hasEnvelope(): boolean;
    protected loadData(): void;
    protected render(): void;
    /** 3-D surface on its own canvas over the (then empty) chart. */
    private render3d;
    /** Stacked-line waterfall: newest capture in front, each older one drawn
     *  further back (up and to the right), filled with the card colour so the
     *  lines behind hide where a front line rises over them. */
    private renderLines;
    static ɵfac: i0.ɵɵFactoryDeclaration<WaterfallWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WaterfallWidgetComponent, "st-waterfall-widget", never, {}, {}, never, never, false, never>;
}
export {};
