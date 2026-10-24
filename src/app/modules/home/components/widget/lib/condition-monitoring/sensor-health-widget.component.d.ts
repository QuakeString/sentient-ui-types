import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SensorHealth, SensorHealthState } from './condition-monitoring.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
/** Shared attribute the sensor reads its capture settings from (and reports back as a client attribute). */
export declare const SENSOR_CONFIG_ATTRIBUTE = "sensorConfig";
export interface SensorHealthWidgetSettings {
    kind: 'sensorHealth';
    refreshSeconds: number;
    /** One quiet summary line; the sensor rows open on "Details" (machine page). */
    compact?: boolean;
    /** Dashboard state with a sensor's readings and limits (opened per sensor). */
    sensorState?: string;
}
export declare const sensorHealthDefaultSettings: SensorHealthWidgetSettings;
interface SensorRow {
    deviceId: string;
    name: string;
    /** Measurement points this sensor serves. */
    points: string[];
    health: SensorHealth | null;
}
/** Sensor health strip: online and last seen, signal, battery, reboots,
 *  firmware, last capture and the settings check, for one sensor (a device)
 *  or every sensor of a machine (an asset with a machine setup). */
export declare class SensorHealthWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private cd;
    private fb;
    private store;
    ctx: WidgetContext;
    settings: SensorHealthWidgetSettings;
    rows: SensorRow[];
    loading: boolean;
    error: string;
    /** Sensor whose capture settings are being edited. */
    editing: string | null;
    configForm: FormGroup;
    saving: boolean;
    readonly fmaxOptions: number[];
    readonly linesOptions: number[];
    /** Spectrum capture interval, min: 5 and 15 for commissioning, then every 30 min up to 24 h. */
    readonly intervalOptions: number[];
    readonly baudOptions: number[];
    private storedConfig;
    /** Sensor a command is being sent to. */
    commandBusy: string | null;
    /** The sensor reports its settings under its own names (Fmax, LOR…): send them that way too. */
    private standardNames;
    private wasFullscreen;
    private api;
    private destroy$;
    /** "1 h 30 min" for 90. */
    intervalLabel(m: number): string;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef, fb: FormBuilder, store: Store<AppState>);
    /** Opens the capture settings of one sensor (what was last sent to it). */
    editSettings(r: SensorRow): void;
    closeSettings(): void;
    /** Capture length (s) and spectrum resolution (Hz) of the settings on screen. */
    get captureInfo(): {
        seconds: number;
        resolution: number;
        sampleRate: number;
        samples: number;
    } | null;
    /** Sends the settings to the sensor (shared attribute); the settings check then follows what it reports. */
    saveSettings(r: SensorRow): void;
    /** The sensor's identity (hardware, network) as label/value rows. */
    deviceInfo(h: SensorHealth): {
        key: string;
        value: string;
    }[];
    /** Sends a command to the sensor (one-way RPC, queued while it is offline). */
    sendCommand(r: SensorRow, command: 'reboot' | 'syncTime'): void;
    private nearest;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    stateColor(s?: SensorHealthState): string;
    /** "5 min ago", "3 h ago", "2 d ago". */
    /** Opens a sensor's own page (its readings and limits). */
    openSensor(r: SensorRow): void;
    /** Compact mode: the sensor rows shown. */
    detailsOpen: boolean;
    /** "Sensors OK", or how many need a look, for the summary line. */
    get summaryState(): SensorHealthState;
    /** The summary line's facts: sensors sending, last data, weakest signal, notes. */
    get summaryFacts(): string[];
    /** Issues (problems with the data) and notes (housekeeping) of every sensor. */
    get summaryIssues(): string[];
    get summaryNotes(): string[];
    /** The sensor's name, else where it measures ("Motor DE"). */
    rowLabel(r: SensorRow): string;
    ago(ts?: number | null): string;
    firmware(h: SensorHealth): string;
    /** A device shows itself; a machine shows the sensors of its measurement points. */
    private sensors;
    /** A reading the sensor names in its own words (x_rms_vel, temp_c, SPL_dB) as people say it. */
    verdictKey(key: string): string;
    /** The readings the sensor itself rates above normal, as one line. */
    verdictAlerts(h: SensorHealth): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SensorHealthWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SensorHealthWidgetComponent, "st-sensor-health-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
