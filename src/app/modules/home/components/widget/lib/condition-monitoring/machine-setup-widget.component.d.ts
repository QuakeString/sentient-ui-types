import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { Axis, BearingMultipliers, BearingSearchRow, LibraryBearing, KinematicsResult, MachinePhoto, CustomFeature, MachineModel, MeasurementPoint, MissingField, PassElement, ZonePreset } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export declare const MACHINE_TYPES: string[];
export declare const MACHINE_ROLES: string[];
export declare const FOUNDATIONS: string[];
export declare const MOUNTINGS: string[];
export declare const ORIENTATIONS: string[];
export declare const ROTOR_SUPPORTS: string[];
export declare const STAGE_TYPES: string[];
export declare const TRAIN_TYPES: string[];
export declare const LUBRICATIONS: string[];
export declare const COUPLINGS: string[];
/** Counted parts that pass once per element per turn (marked as count × shaft speed). */
export declare const PASS_ELEMENTS: string[];
/** Which machine axes a sensor's X, Y and Z face (H horizontal, V vertical, A axial). */
export declare const AXIS_ORIENTATIONS: string[];
/** Device attribute holding the orientation; uploads of vib_x/y/z are stored under vib_h/v/a. */
export declare const AXIS_ORIENTATION_ATTRIBUTE = "axisOrientation";
/** The vibration standard a machine's power and support point to (as the server suggests it). */
export declare const suggestedZonePreset: (kw: number, foundation: string, mounting: string) => string | null;
/** Standard sensor locations offered in the pickers; "others" takes a custom name. */
export declare const MOUNT_POINTS: string[];
export declare const isStandardMountPoint: (v: string) => boolean;
export declare const AXES: Axis[];
export declare const AXIS_KEY: {
    [a in Axis]: string;
};
/** The vibration pipeline's standard keys of an axis. */
export declare const axisKeys: (a: Axis) => {
    spectrumKey: string;
    envelopeKey: string;
    overallKey: string;
};
/** Machine setup form: what the machine is (type, speed, class), its
 *  moving parts (bearings, gears, vanes, belt) and where its sensors sit.
 *  Saves the `machineModel` server attribute that the diagnosis reads, and
 *  previews the fault frequencies while you type. */
export declare class MachineSetupWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private fb;
    private store;
    private cd;
    ctx: WidgetContext;
    readonly machineTypes: string[];
    readonly roles: string[];
    readonly foundations: string[];
    readonly mountings: string[];
    readonly orientations: string[];
    readonly rotorSupports: string[];
    readonly stageTypes: string[];
    readonly trainTypes: string[];
    readonly passKinds: string[];
    readonly lubrications: string[];
    readonly couplings: string[];
    readonly axisOrientations: string[];
    readonly mountPoints: string[];
    readonly axes: Axis[];
    readonly deviceType = EntityType.DEVICE;
    readonly markerColumns: string[];
    readonly flowUnits: import("./condition-monitoring.models").FlowUnit[];
    readonly pressureUnits: import("./condition-monitoring.models").PressureUnit[];
    readonly powerUnits: import("./condition-monitoring.models").PowerUnit[];
    form: FormGroup;
    /** One tri-axial sensor at one position, added as its H, V and A points. */
    triaxial: FormGroup;
    /** The stored setup as this page last loaded or saved it (stable JSON): a
     *  save first checks the store still holds exactly that. */
    private baseline;
    entity: EntityId | null;
    zonePresets: ZonePreset[];
    preview: KinematicsResult | null;
    previewError: string;
    missing: MissingField[];
    bearingOptions: Observable<BearingSearchRow[]>[];
    section: 'machine' | 'components' | 'sensors' | 'features' | 'pump' | 'photos';
    photos: MachinePhoto[];
    photoBusy: boolean;
    saving: boolean;
    loaded: boolean;
    /** The tenant's own bearings (maker data), shown under the bearings. */
    library: {
        bearing: LibraryBearing;
        multipliers?: BearingMultipliers;
    }[];
    libraryForm: FormGroup;
    libraryBusy: boolean;
    importReplace: boolean;
    private api;
    /** The stored setup, so fields this form does not edit survive a save. */
    private original;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, fb: FormBuilder, store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    /** Reads the stored setup (and photos) into the form. */
    load(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    get shafts(): FormArray;
    get bearings(): FormArray;
    get gears(): FormArray;
    get points(): FormArray;
    get features(): FormArray;
    get curve(): FormArray;
    /** The Pump tab shows for pumps, or when a pump section is already stored. */
    get showPump(): boolean;
    addCurvePoint(c?: any): void;
    removeCurvePoint(i: number): void;
    /** A unit as people write it (m³/h, kW, bar…). */
    unitLabel(kind: 'flow' | 'pressure' | 'power', u: string): string;
    /** A standard mount point by its name ("Motor DE"), a custom one as typed. */
    mountPointLabel: (v: string) => string;
    /** The ISO class last filled in from power and support (replaced while the user has not picked another). */
    private autoZone;
    /** "More about the machine" opened. */
    moreOpen: boolean;
    /** The essentials of a setup, each with where it is filled in. */
    get setupSteps(): {
        key: string;
        done: boolean;
        section: 'machine' | 'components' | 'sensors';
    }[];
    get setupDone(): number;
    /** Names of the machine's bearings, for the "bearings at this point" picker. */
    get bearingNames(): string[];
    /** Names of the train's shafts, for the "on shaft" pickers. */
    get shaftNames(): string[];
    /** Speed of a train shaft in rpm, from the input speed and its ratio. */
    shaftRpm(i: number): number | null;
    addShaft(sh?: any): void;
    removeShaft(i: number): void;
    addBearing(b?: any): void;
    removeBearing(i: number): void;
    addGear(g?: any): void;
    removeGear(i: number): void;
    addPoint(p?: Partial<MeasurementPoint>): void;
    addFeature(f?: Partial<CustomFeature>): void;
    get passElements(): FormArray;
    addPassElement(e?: Partial<PassElement>): void;
    removePassElement(i: number): void;
    removeFeature(i: number): void;
    /** A shaft below 600 rpm: the capture length (s) the sensors need so the
     *  spectrum resolves its running speed (4 bins per 1x), else null. */
    get slowCaptureSeconds(): number | null;
    /** Adds the horizontal, vertical and axial points of one tri-axial sensor,
     *  named after the position (e.g. "Motor NDE H"), with the pipeline's keys. */
    addTriaxial(): void;
    removePoint(i: number): void;
    /** Tenant administrators keep the bearing library. */
    get canEditLibrary(): boolean;
    loadLibrary(): void;
    /** Adds (or replaces, by designation) one bearing from the maker's factors. */
    addLibraryBearing(): void;
    removeLibraryBearing(designation: string): void;
    /** Reads a CSV of the maker's bearings into the library. */
    importLibrary(input: HTMLInputElement): void;
    /** The library as CSV (an empty one is the template to fill in). */
    exportLibrary(): void;
    /** Rolling elements the diagnosis uses for bearing i, and whether that count is estimated. */
    ballSet(i: number): {
        rollingElements: number;
        estimated: boolean;
    } | null;
    pickBearing(i: number, row: BearingSearchRow): void;
    missingFor(field: string): MissingField | undefined;
    /** Uploads the picked pictures to the image library and lists them on the machine. */
    addPhotos(input: HTMLInputElement): void;
    removePhoto(i: number): void;
    setCaption(i: number, caption: string): void;
    private savePhotos;
    save(): void;
    private write;
    /** The form as the stored setup (empty values left out). */
    toModel(): MachineModel;
    private pumpModel;
    private parse;
    private buildForm;
    private watchPreview;
    private refreshMissing;
    static ɵfac: i0.ɵɵFactoryDeclaration<MachineSetupWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MachineSetupWidgetComponent, "st-machine-setup-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
