import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/** One spot on the train drawing. */
export interface MountSpot {
    id: string;
    x: number;
    y: number;
}
/** A body of the train (motor or driven machine) with its label key. */
interface TrainBody {
    label: string;
    x: number;
    w: number;
}
/** Mount-point picker: a side view of the machine train with its standard
 *  sensor positions. Tap a spot to pick it; spots already used by another
 *  measurement point are marked. Used in phone commissioning. */
export declare class MountPointPickerComponent {
    set machineType(t: string);
    value: string | null;
    /** Mount points other measurement points already use. */
    used: string[];
    valueChange: EventEmitter<string>;
    drawing: {
        bodies: TrainBody[];
        spots: MountSpot[];
        belt: boolean;
    };
    readonly mountPoints: string[];
    readonly standard: (v: string) => boolean;
    /** "Others" picked: the custom name typed is the location. */
    custom: boolean;
    customName: string;
    get selectValue(): string | null;
    pick(id: string): void;
    pickFromList(id: string): void;
    pickCustom(name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MountPointPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MountPointPickerComponent, "st-mount-point-picker", never, { "machineType": { "alias": "machineType"; "required": false; }; "value": { "alias": "value"; "required": false; }; "used": { "alias": "used"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, false, never>;
}
export {};
