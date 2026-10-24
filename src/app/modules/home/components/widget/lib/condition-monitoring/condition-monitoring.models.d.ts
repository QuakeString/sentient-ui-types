/** Shared models and REST calls of the condition-monitoring widgets
 *  (spectrum chart, zone bar, score card, diagnosis panel, machine setup,
 *  limits editor). The backend lives in `api/src/controllers/machine.rs`
 *  and `analytics_waveform.rs`. */
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { WidgetContext } from '@home/models/widget-component.models';
export declare const MACHINE_MODEL_ATTRIBUTE = "machineModel";
export declare const LIMITS_ATTRIBUTE = "limits";
/** Photos of the machine: `[{link, title, caption, ts}]`, images in the image library. */
export declare const MACHINE_PHOTOS_ATTRIBUTE = "machinePhotos";
/** A person's comment on a finding. */
export interface FindingComment {
    id: string;
    ts: number;
    text: string;
    author: string;
    /** Id of the comment this one answers (one level: replies hang off a top-level comment). */
    replyTo?: string;
    /** Answers to this comment, oldest first (filled for top-level comments). */
    replies?: FindingComment[];
}
export interface MachinePhoto {
    link: string;
    title?: string;
    caption?: string;
    ts: number;
}
/** Device attribute: `{[spectrumKey]: ts}` of the spectrum kept as the baseline. */
export declare const SPECTRUM_BASELINE_ATTRIBUTE = "spectrumBaseline";
/** Device attribute: `{[soundKey]: blockId}` of the clip marked as the baseline. */
export declare const SOUND_BASELINE_ATTRIBUTE = "soundBaseline";
export type Axis = 'HORIZONTAL' | 'VERTICAL' | 'AXIAL';
export interface BearingGeometry {
    rollingElements: number;
    elementDiameter: number;
    pitchDiameter: number;
    contactAngleDeg?: number;
}
export interface BearingMultipliers {
    bpfo: number;
    bpfi: number;
    bsf: number;
    ftf: number;
}
export interface BearingRef {
    name?: string;
    designation?: string;
    geometry?: BearingGeometry;
    multipliers?: BearingMultipliers;
    /** Shaft of the machine train the bearing carries (absent: the input shaft). */
    shaft?: string;
    /** Counted (or maker's) rolling elements, replacing the catalogue's estimate. */
    rollingElements?: number;
    /** "friction": plain (journal) bearing, no defect frequencies. Absent: anti-friction. */
    kind?: 'friction';
}
export interface GearStage {
    name?: string;
    teeth: number;
    matingTeeth?: number;
    /** Shaft the driving gear sits on (absent: the input shaft). */
    shaft?: string;
}
/** A counted part whose pass frequency is count × its shaft's speed. */
export interface PassElement {
    kind: 'blades' | 'lobes' | 'screws' | 'pistons' | 'sprocket' | 'bolts' | 'jaws' | string;
    count: number;
    shaft?: string;
}
/** A shaft of the machine train other than the input shaft. */
export interface Shaft {
    name: string;
    /** Input rpm divided by this shaft's rpm (35 for a 1:35 gearbox output). */
    ratio: number;
    vanes?: number;
}
export interface Belt {
    driverPulleyMm: number;
    drivenPulleyMm: number;
    lengthMm: number;
}
export interface MeasurementPoint {
    name: string;
    mountPoint?: string;
    axis?: Axis;
    deviceId?: string;
    /** Sensor by name, used until a device is picked (Solution hub templates). */
    deviceName?: string;
    spectrumKey?: string;
    envelopeKey?: string;
    overallKey?: string;
    /** Sound channel of the sensor (clips from `/api/v1/{token}/sound`). */
    soundKey?: string;
    /** Shaft of the machine train the sensor measures (absent: the input shaft). */
    shaft?: string;
    /** Names of the machine's bearings this sensor sits on (up to three). */
    bearings?: string[];
}
export type FlowUnit = 'm3/h' | 'l/s' | 'gpm';
export type PressureUnit = 'bar' | 'kpa' | 'psi' | 'm';
export type PowerUnit = 'kw' | 'w' | 'hp';
export declare const FLOW_UNITS: FlowUnit[];
export declare const PRESSURE_UNITS: PressureUnit[];
export declare const POWER_UNITS: PowerUnit[];
/** To m³/h, the unit the performance figures use. */
export declare const flowToM3h: (unit: FlowUnit | undefined, v: number) => number;
export interface CurvePoint {
    flow: number;
    /** m */
    head: number;
    /** % */
    efficiency?: number;
}
/** The pump section of a machine setup. */
export interface PumpSetup {
    flowKey?: string;
    flowUnit?: FlowUnit;
    headKey?: string;
    suctionPressureKey?: string;
    dischargePressureKey?: string;
    pressureUnit?: PressureUnit;
    powerKey?: string;
    powerUnit?: PowerUnit;
    /** kg/m³, default water 998. */
    density?: number;
    bepFlow?: number;
    bepHead?: number;
    bepEfficiency?: number;
    /** %, default 92. */
    motorEfficiency?: number;
    curve?: CurvePoint[];
    energyPrice?: number;
    currency?: string;
    /** kWh/m³ when the pump was known good, to compare against. */
    baselineSpecificEnergy?: number;
}
export type PumpState = 'NO_DATA' | 'STOPPED' | 'LOW_FLOW' | 'NEAR_BEP' | 'HIGH_FLOW' | 'RUNNING';
export interface PumpPerformance {
    state: PumpState;
    ts?: number;
    flowM3h?: number;
    headM?: number;
    powerKw?: number;
    hydraulicKw?: number;
    efficiency?: number;
    expectedEfficiency?: number;
    specificEnergy?: number;
    bepRatio?: number;
    expectedHead?: number;
    headDeviation?: number;
    costPerHour?: number;
    lossCostPerDay?: number;
    /** Specific energy against the baseline, %, and what the extra costs per day. */
    baselineDeviation?: number;
    baselineCostPerDay?: number;
    currency?: string;
    findings: Finding[];
}
/** Status colour of a pump state. */
export declare const pumpStateColor: (s?: PumpState) => string;
export interface MachineModel {
    machineType?: string;
    /** Rated power (kW), for the ISO class. */
    powerKw?: number;
    role?: string;
    /** rigid | flexible (ISO 20816-3 support class). */
    foundation?: string;
    mounting?: string;
    orientation?: string;
    /** between-bearings, overhung (cantilever) or direct-coupled. */
    rotorSupport?: string;
    /** single or multi. */
    stageType?: string;
    /** direct, gearbox, belt, chain, variable-speed. */
    trainType?: string;
    /** Tailors the bearing advice. */
    lubrication?: string;
    /** Tailors the misalignment advice. */
    coupling?: string;
    rpm?: number;
    rpmKey?: string;
    lineFrequencyHz?: number;
    bearings?: BearingRef[];
    gears?: GearStage[];
    vanes?: number;
    /** Other counted parts (blades, lobes, screws, pistons, sprocket teeth, coupling bolts or jaws). */
    passElements?: PassElement[];
    belt?: Belt;
    shaftHarmonics?: number;
    /** Further shafts of the machine train, each with its speed ratio. */
    shafts?: Shaft[];
    zonePreset?: string;
    idleBelow?: number;
    points?: MeasurementPoint[];
    customFeatures?: CustomFeature[];
    pump?: PumpSetup;
}
/** A user-defined band of the velocity or envelope spectrum with limits. */
export interface CustomFeature {
    name: string;
    bandHz?: [number, number];
    /** In orders of running speed; wins over bandHz. */
    bandOrders?: [number, number];
    spectrum?: 'velocity' | 'envelope';
    measure?: 'rms' | 'peak';
    /** Lowest of the three levels: above it the value is watched. */
    operational?: number;
    warning?: number;
    critical?: number;
    /** Unit of the value and limits, for the messages. */
    unit?: string;
    /** Axis it applies to; absent = every axis. */
    axis?: Axis;
    recommendation?: string;
    /** Point indexes; empty = every point. */
    points?: number[];
}
export interface CatalogueBearing {
    designation: string;
    manufacturer?: string;
    type?: string;
    rollingElements: number;
    elementDiameter: number;
    pitchDiameter: number;
    contactAngleDeg?: number;
    boreMm?: number;
    outsideDiameterMm?: number;
    widthMm?: number;
    /** Rolling elements estimated from the ISO size, not taken from a maker. */
    estimated?: boolean;
    source?: string;
}
export interface BearingSearchRow {
    bearing: CatalogueBearing;
    multipliers?: BearingMultipliers;
    /** Tenant library (maker data), published geometry, or estimated from the ISO size. */
    origin?: 'TENANT' | 'PUBLISHED' | 'ESTIMATED';
}
/** One bearing of the tenant's own library (from the maker's data sheet). */
export interface LibraryBearing {
    designation: string;
    manufacturer?: string;
    multipliers?: BearingMultipliers;
    geometry?: BearingGeometry;
    boreMm?: number;
    outsideDiameterMm?: number;
    source?: string;
}
/** Columns of the bearing library CSV. */
export declare const BEARING_LIBRARY_CSV_COLUMNS: string[];
export type MarkerFamily = 'shaft' | 'bearing' | 'gear' | 'vane' | 'belt' | 'electrical';
export interface FrequencyMarker {
    id: string;
    family: MarkerFamily;
    label: string;
    hz: number;
    order: number;
}
export interface KinematicsResult {
    shaftHz: number;
    markers: FrequencyMarker[];
    bearings: (BearingMultipliers | null)[];
    warnings: string[];
    /** Rolling elements behind each bearing's frequencies (null: given as multipliers). */
    ballSets?: ({
        rollingElements: number;
        estimated: boolean;
    } | null)[];
}
export interface ZonePreset {
    id: string;
    name: string;
    standard: string;
    quantity: string;
    unit: string;
    boundaries: number[];
    zones: string[];
    description: string;
}
export interface LimitPair {
    warning: number;
    critical: number;
}
export interface LimitSuggestion {
    samples: number;
    spanMs: number;
    min?: number;
    max?: number;
    median?: number;
    p95?: number;
    robustSpread?: number;
    statistical?: LimitPair;
    zonePreset?: LimitPair;
    suggested?: LimitPair;
    reason?: string;
}
export interface LimitSuggestionResponse {
    startTs: number;
    endTs: number;
    zonePreset?: string;
    keys: {
        [key: string]: LimitSuggestion;
    };
}
/** Stored limits per key: `{ key: { warning, critical, operational } }`.
 *  Below the operational level the machine counts as idle. */
export type KeyLimits = {
    [key: string]: {
        warning?: number;
        critical?: number;
        operational?: number;
    };
};
export type Risk = 'LOW' | 'MEDIUM' | 'HIGH' | 'HIGHEST';
export type StateCode = 'NOT_OPERATIONAL' | 'NOT_CONFIGURED' | 'NO_SPECTRUM' | 'LOW_RISK' | 'MEDIUM_RISK' | 'HIGH_RISK' | 'HIGHEST_RISK';
export interface DiagnosisState {
    code: StateCode;
    label: string;
    reason: string;
    field?: string;
}
export interface Evidence {
    markerId: string;
    label: string;
    expectedHz: number;
    hz: number;
    amplitude: number;
    aboveFloor: number;
    /** true: envelope spectrum (g); false: velocity spectrum (mm/s); absent on evidence stored before the flag. */
    envelope?: boolean;
}
export interface Finding {
    fault: string;
    label: string;
    confidence: number;
    risk: Risk;
    evidence: Evidence[];
    recommendation: string;
}
export interface ScoreDeduction {
    reason: string;
    points: number;
}
export interface DiagnosisResult {
    state: DiagnosisState;
    risk?: Risk;
    zone?: string;
    /** The overall level the zone and score were taken from. */
    overall?: number;
    score?: {
        score: number;
        deductions: ScoreDeduction[];
    };
    findings: Finding[];
    markers: FrequencyMarker[];
    warnings: string[];
}
export interface MissingField {
    field: string;
    message: string;
    blocking: boolean;
}
export interface PointTrend {
    index: number;
    point: string;
    key: string;
    trend?: {
        min: number;
        max: number;
        avg: number;
        start: number;
        end: number;
        changePct?: number;
        slopePerDay: number;
        direction: 'RISING' | 'FALLING' | 'STEADY';
        samples: number;
    } | null;
}
export interface MachineDiagnosis {
    machine: DiagnosisResult;
    points: {
        index: number;
        point: MeasurementPoint;
        result: DiagnosisResult;
    }[];
    missing: MissingField[];
    /** The setup's zone preset id. */
    zonePreset?: string;
    /** Overall levels below this mean the machine is standing. */
    idleBelow?: number;
    /** Pump energy and efficiency, when the setup has a pump section. */
    pump?: PumpPerformance;
    /** 0–100 per bearing of the setup, from its defect findings. */
    bearingHealth?: {
        name: string;
        score: number;
        defects: string[];
    }[];
    /** Since when (ms) each active finding stands, by its label. */
    findingSince?: {
        [label: string]: number;
    };
    /** 1X phase between channels captured together. */
    phase?: PhaseAnalysis;
}
/** 1X phase of one capture taken on several channels at once. */
export interface PhaseAnalysis {
    captureTs: number;
    readings: {
        point: number;
        name: string;
        location: string;
        axis?: string;
        hz: number;
        amplitude: number;
        phaseDeg: number;
        reliable: boolean;
    }[];
    pairs: {
        a: number;
        b: number;
        label: string;
        diffDeg: number;
    }[];
    notes: {
        fault: string;
        supports: boolean;
        text: string;
        locations: string[];
    }[];
}
export type SensorHealthState = 'OK' | 'ATTENTION' | 'OFFLINE' | 'UNKNOWN';
/** `GET /api/sensor/{deviceId}/health`: what the sensor reports about itself. */
export interface SensorHealth {
    state: SensorHealthState;
    issues: string[];
    /** Housekeeping worth a look but not a problem with the data (restarts). */
    notes?: string[];
    active: boolean | null;
    lastActivityTs: number | null;
    lastConnectTs: number | null;
    rssi: {
        value: number;
        ts: number;
        level: 'GOOD' | 'FAIR' | 'POOR';
    } | null;
    /** Wi-Fi and Bluetooth signal, when the sensor reports both. */
    wifiRssi?: {
        value: number;
        ts: number;
        level: 'GOOD' | 'FAIR' | 'POOR';
    } | null;
    bleRssi?: {
        value: number;
        ts: number;
        level: 'GOOD' | 'FAIR' | 'POOR';
    } | null;
    snr: {
        value: number;
        ts: number;
    } | null;
    battery: {
        value: number;
        unit: '%' | 'V';
        ts: number;
        low: boolean;
    } | null;
    reboots: {
        count: number;
        days: number;
    } | null;
    firmware: {
        version: any;
        ts: number;
    } | null;
    lastCaptureTs: number | null;
    settings: {
        state: string;
        pending: boolean;
        mismatches: number;
    };
    /** What the sensor says about itself: hardware version, network, MAC addresses. */
    device?: {
        [field: string]: any;
    };
    /** The sensor's own offline timeout (server attribute inactivityTimeout), ms. */
    inactivityTimeoutMs?: number | null;
    /** Bluetooth on or off and the status LED's code, as the sensor reports them. */
    bluetooth?: {
        on: boolean;
        ts: number;
    } | null;
    led?: {
        value: number;
        ts: number;
    } | null;
    /** Link to the maker's datasheet (server attribute datasheetUrl). */
    datasheetUrl?: string | null;
    /** The sensor reports a supply (high-voltage) fault. */
    hvFault?: boolean | null;
    /** The sensor's own rating of its readings against the limits it holds (iVibe Detail). */
    sensorVerdict?: {
        items: SensorVerdictItem[];
        ts: number;
    } | null;
}
export interface SensorVerdictItem {
    key: string;
    value: number | null;
    state: 'NORMAL' | 'CAUTION' | 'WARNING';
    limit: number | null;
}
export interface SpectrumRow {
    id: string;
    pipelineId: string;
    entityId: string;
    key: string;
    ts: number;
    freqStartHz: number;
    freqStepHz: number;
    binCount: number;
    bins: number[];
}
/** Amplitudes of a stored spectrum: pipeline FFTs store power, sensors
 *  upload amplitudes (the same rule the diagnosis applies). */
export declare const spectrumAmplitudes: (row: SpectrumRow) => number[];
/** CSS colour per state or risk, for dots and status labels. */
export declare const stateColor: (code?: StateCode | Risk) => string;
/** Zone colours A..D (green, yellow, orange, red); extra zones reuse red. */
export declare const ZONE_COLORS: string[];
export declare const zoneColor: (index: number) => string;
export interface WaveformMeta {
    id: string;
    entityId: string;
    key: string;
    captureTs: number;
    sampleRateHz: number;
    sampleCount: number;
    metadata?: any;
}
export type RulState = 'INSUFFICIENT_DATA' | 'NO_LIMITS' | 'STABLE' | 'DEGRADING' | 'BEYOND_WARNING' | 'BEYOND_CRITICAL';
/** Remaining life of one key (`GET /api/machine/rul/...`). */
export interface KeyRul {
    point?: string;
    key: string;
    state: RulState;
    reason: string;
    timeToWarningMs?: number;
    timeToCriticalMs?: number;
    confidence: number;
}
export interface SoundUploadResult {
    blockId: string;
    key: string;
    ts: number;
    durationS?: number;
    levelDb?: number;
    peakDb?: number;
    crest?: number;
}
export interface WaveformBlock extends WaveformMeta {
    samples: number[];
}
export type CaptureState = 'NONE' | 'SENT' | 'RECEIVED' | 'PARTLY_RECEIVED' | 'TIMEOUT';
export interface CaptureRequest {
    state: CaptureState;
    requestId?: string;
    ts?: number;
    timeoutTs?: number;
    keys?: string[];
    received?: {
        key: string;
        captureTs: number;
        sampleRateHz: number;
        samples: number;
    }[];
}
export interface SensorSettingsCheck {
    state: 'IN_SYNC' | 'MISMATCH' | 'NOT_REPORTED' | 'NOTHING_SENT';
    pending: boolean;
    sent?: any;
    sentTs?: number;
    reported?: any;
    reportedTs?: number;
    lastWaveform?: {
        sampleRateHz: number;
        samples: number;
        key: string;
        captureTs: number;
    };
    mismatches: {
        key: string;
        sent: any;
        reported: any;
        source: 'reported' | 'waveform';
    }[];
    /** The sensor reports its settings under its own names (Fmax, LOR…). */
    standardNames?: boolean;
}
export interface FleetFinding {
    alarmId: string;
    type: string;
    label: string;
    severity: 'CRITICAL' | 'MAJOR' | 'MINOR' | 'WARNING' | 'INDETERMINATE';
    acknowledged: boolean;
    startTs: number;
    fault?: string;
    risk?: Risk;
    confidence?: number;
    point?: string;
    points?: string[];
    recommendation?: string;
    evidence?: Evidence[];
    details?: any;
    workOrder?: {
        id: string;
        code: string;
        status: WorkOrderStatus;
        team?: string;
    } | null;
}
export interface FleetMachine {
    entityType: 'ASSET' | 'DEVICE';
    id: string;
    name: string;
    label?: string;
    path: {
        entityType: string;
        id: string;
        name: string;
    }[];
    health: {
        [key: string]: any;
    };
    healthTs?: number;
    findings: FleetFinding[];
    /** Share of the asked period the machine ran, % (fleet summary). */
    uptimePct?: number;
    /** Health score over the asked period, oldest first (fleet tiles). */
    scoreTrend?: number[];
}
/** A machine of the overview page: the fleet machine plus, over the period
 *  (rolling days, oldest first), its mean health score, findings opened and
 *  closed per day, its open work orders and how many were closed. */
export interface OverviewMachine extends FleetMachine {
    dailyScore: (number | null)[];
    opened: number[];
    closed: number[];
    openWorkOrders: {
        id: string;
        code: string;
        title: string;
        status: WorkOrderStatus;
        priority: string;
        team?: string;
        dueTime?: number | null;
        createdTime: number;
    }[];
    workOrdersClosed: number;
}
export interface FleetOverview {
    days: number;
    fromTs: number;
    ts: number;
    machines: OverviewMachine[];
}
export type WorkOrderStatus = 'OPEN' | 'IN_PROGRESS' | 'ON_HOLD' | 'DONE' | 'CANCELLED';
export type WorkOrderPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
export declare const WORK_ORDER_STATUSES: WorkOrderStatus[];
export declare const WORK_ORDER_PRIORITIES: WorkOrderPriority[];
export declare const ACTION_OUTCOMES: string[];
export interface WorkOrderActivity {
    ts: number;
    userId?: string;
    userName?: string;
    kind: 'CREATED' | 'STATUS' | 'ASSIGN' | 'COMMENT' | 'ACTION' | 'EDIT' | 'SYSTEM';
    text?: string;
    from?: WorkOrderStatus;
    to?: WorkOrderStatus;
    team?: string;
    assigneeId?: string;
    parts?: string;
    downtimeMinutes?: number;
    outcome?: string;
}
export interface WorkOrder {
    id: string;
    code: string;
    number: number;
    title: string;
    description: string;
    entityType: string;
    entityId: string;
    entityName: string;
    alarmId?: string;
    priority: WorkOrderPriority;
    status: WorkOrderStatus;
    assigneeId?: string;
    assigneeName?: string;
    team?: string;
    dueTime?: number;
    source: string;
    evidence: any;
    activity: WorkOrderActivity[];
    createdBy?: string;
    createdByName?: string;
    createdTime: number;
    updatedTime: number;
    closedTime?: number;
}
export interface WorkOrderPage {
    data: WorkOrder[];
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
}
/** Which next statuses a work order offers (mirrors the server's flow). */
export declare const nextStatuses: (s: WorkOrderStatus) => WorkOrderStatus[];
/** Alarm severity colour, as in the alarms table. */
export declare const severityColor: (s?: string) => string;
/** Risk 0..3 as a colour for canvas charts (CSS variables do not reach them). */
export declare const riskHex: (risk: number | null | undefined, dark: boolean) => string;
/** Health score 0..100 as a risk colour. */
export declare const scoreHex: (score: number | null | undefined, dark: boolean) => string;
/** The platform's default series colours (the ones new data keys get). */
export declare const seriesColor: (i: number) => string;
/** Tooltip look of the platform's time-series chart. */
export declare const chartTooltip: (dark: boolean) => {
    confine: boolean;
    backgroundColor: string;
    borderWidth: number;
    padding: number[];
    extraCssText: string;
    textStyle: {
        color: string;
        fontSize: number;
    };
};
/** The waveform key behind a point: its axis, or its spectrum key without the suffix. */
export declare const waveformKeyOf: (p?: MeasurementPoint, fallback?: string) => string;
export declare const downloadText: (name: string, text: string, type?: string) => void;
export declare const downloadBlob: (name: string, blob: Blob) => void;
export declare class ConditionMonitoringApi {
    private http;
    constructor(http: HttpClient);
    zonePresets(): Observable<ZonePreset[]>;
    searchBearings(text: string, limit?: number): Observable<BearingSearchRow[]>;
    sensorCommand(deviceId: string, command: 'reboot' | 'syncTime'): Observable<{
        command: string;
        rpcRequestId: string;
        rpcStatus: string;
    }>;
    /** Writes the limits to the sensor under its own threshold names. */
    pushLimits(deviceId: string, limits: any): Observable<{
        orientation: string;
        sent: {
            [name: string]: number;
        };
    }>;
    bearingLibrary(): Observable<{
        bearing: LibraryBearing;
        multipliers?: BearingMultipliers;
    }[]>;
    saveLibraryBearing(b: LibraryBearing): Observable<{
        count: number;
    }>;
    deleteLibraryBearing(designation: string): Observable<{
        count: number;
    }>;
    importBearingLibrary(csv: string, replace: boolean): Observable<{
        added: number;
        updated: number;
        errors: string[];
        count: number;
    }>;
    frequencies(model: MachineModel): Observable<KinematicsResult>;
    sensorHealth(deviceId: string): Observable<SensorHealth | null>;
    diagnosis(entityId: EntityId): Observable<MachineDiagnosis>;
    suggestLimits(entityId: EntityId, keys: string[], zonePreset?: string, days?: number): Observable<LimitSuggestionResponse>;
    latestSpectrum(entityId: string, key: string): Observable<SpectrumRow | null>;
    /** The spectrum stored at exactly `ts`. */
    spectrumAt(entityId: string, key: string, ts: number): Observable<SpectrumRow | null>;
    /** Numeric history of one key, oldest first. */
    history(entityType: string, entityId: string, key: string, startTs: number, endTs: number, limit?: number): Observable<{
        ts: number;
        value: number;
    }[]>;
    /** Text history of one key, oldest first (e.g. the machine's health_state_code). */
    textHistory(entityType: string, entityId: string, key: string, startTs: number, endTs: number, limit?: number): Observable<{
        ts: number;
        value: string;
    }[]>;
    /** Times of the spectra in a range, newest first (no bins: a long timeline stays light). */
    spectrumTimes(entityId: string, key: string, fromTs: number, toTs: number | null, limit: number): Observable<number[]>;
    spectra(entityId: string, key: string, limit?: number): Observable<SpectrumRow[]>;
    waveforms(deviceId: string, key: string, fromTs: number): Observable<WaveformMeta[]>;
    waveformBlock(id: string): Observable<WaveformBlock>;
    captureNow(deviceId: string, keys: string[]): Observable<CaptureRequest>;
    captureStatus(deviceId: string): Observable<CaptureRequest>;
    sensorSettings(deviceId: string): Observable<SensorSettingsCheck>;
    fleet(root?: EntityId | null, uptimeDays?: number | null, trendDays?: number | null): Observable<{
        machines: FleetMachine[];
        ts: number;
    }>;
    /** The fleet under `root` with what the overview page shows per machine. */
    overview(root?: EntityId | null, days?: number): Observable<FleetOverview>;
    /** The same, shared by the widgets of one page: the KPI cards, the trend
     *  and the open work orders ask once per refresh, not once each. */
    overviewShared(root?: EntityId | null, days?: number, maxAgeMs?: number): Observable<FleetOverview>;
    historyCsv(entity: EntityId, fromTs: number, toTs: number): Observable<string>;
    historyFile(entity: EntityId, fromTs: number, toTs: number, format: 'pdf' | 'xlsx'): Observable<Blob>;
    workOrders(params: {
        entity?: EntityId;
        includeChildren?: boolean;
        status?: string;
        textSearch?: string;
        page?: number;
        pageSize?: number;
    }): Observable<WorkOrderPage>;
    createWorkOrder(body: {
        alarmId?: string;
        entityId?: EntityId;
        title?: string;
        description?: string;
        priority?: WorkOrderPriority;
        team?: string;
    }): Observable<WorkOrder>;
    workOrderStatus(id: string, status: WorkOrderStatus, note?: string): Observable<WorkOrder>;
    workOrderAssign(id: string, team: string, assigneeId?: string): Observable<WorkOrder>;
    workOrderActivity(id: string, body: {
        kind: 'COMMENT' | 'ACTION';
        text: string;
        parts?: string;
        downtimeMinutes?: number;
        outcome?: string;
    }): Observable<WorkOrder>;
    /** Each point's overall level over `days`: range, average, change, direction. */
    trends(entityId: EntityId, days?: number): Observable<{
        days: number;
        points: PointTrend[];
    }>;
    rul(entityId: EntityId, days?: number): Observable<{
        points: KeyRul[];
        soonest?: KeyRul;
    }>;
    /** A sound clip as a 16-bit WAV blob (the auth header comes from the interceptor). */
    soundWav(deviceId: string, blockId: string): Observable<Blob>;
    /** Upload a WAV clip to a sensor's sound channel. */
    uploadSound(deviceId: string, wav: Blob, key: string): Observable<SoundUploadResult>;
    ackAlarm(alarmId: string): Observable<any>;
    /** People's comments on a finding's alarm, newest first (system notes left out). */
    alarmComments(alarmId: string): Observable<FindingComment[]>;
    commentAlarm(alarmId: string, text: string, replyTo?: string): Observable<any>;
}
/** The entity a condition-monitoring widget works on: the first datasource
 *  entity (an alias, or the dashboard state entity). */
export declare const widgetEntityId: (ctx: WidgetContext) => EntityId | null;
/** Ticks for a category axis whose categories are numbers (a heatmap's bins):
 *  about `target` round values (1, 2, 2.5, 5 × 10ⁿ), each placed on the
 *  nearest category. Returns category index → label. */
export declare const roundCategoryTicks: (values: number[], format: (v: number) => string, target?: number) => Map<number, string>;
/** Watches body.tb-dark so charts can re-theme. */
export declare const isDarkMode: () => boolean;
/** The machine setup stored on the entity (empty when there is none). */
export declare const loadMachineModel: (ctx: WidgetContext, entity: EntityId) => Observable<MachineModel>;
/** A finding's peak to show: the diagnosis panel asks the spectrum chart of
 *  the same machine to zoom to it. */
export interface SpectrumFocus {
    entityId: string;
    pointIndex: number;
    hz: number;
    label: string;
    envelope: boolean;
}
export declare const spectrumFocus$: Subject<SpectrumFocus>;
/** Ask the findings and work orders card on the page to show a work order. */
export declare const workOrderFocus$: Subject<string>;
