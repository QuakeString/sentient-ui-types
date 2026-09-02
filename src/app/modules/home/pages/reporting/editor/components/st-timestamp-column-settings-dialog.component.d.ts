import { OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AppState } from "@core/core.state";
import { Store } from "@ngrx/store";
import { DialogComponent } from "@shared/components/dialog.component";
import { BorderSides } from "./st-border-picker.component";
import { StDynamicStyle } from "./st-data-key-config-dialog.component";
import { AlarmSeverity } from '@shared/models/alarm.models';
import * as i0 from "@angular/core";
export interface CellPadding {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface TimestampColumnSettings {
    columnWidth?: number;
    columnWidthUnit?: "px" | "%" | "auto";
    header?: {
        font?: any;
        color?: string;
        backgroundColor?: string;
        horizontalAlign?: string;
        verticalAlign?: string;
        height?: number;
        borderSides?: BorderSides;
        borderWidth?: number;
        borderColor?: string;
        padding?: CellPadding;
    };
    cell?: {
        font?: any;
        color?: string;
        backgroundColor?: string;
        horizontalAlign?: string;
        verticalAlign?: string;
        zebraStriping?: boolean;
        zebraStripingMode?: "darken" | "brighten";
        zebraStripingIntensity?: number;
        height?: number;
        borderSides?: BorderSides;
        borderWidth?: number;
        borderColor?: string;
        padding?: CellPadding;
        useDynamicStyling?: boolean;
        dynamicStyles?: StDynamicStyle[];
    };
}
export interface TimestampColumnSettingsDialogData {
    settings: TimestampColumnSettings;
    isAlarmTable: boolean;
}
export declare class StTimestampColumnSettingsDialogComponent extends DialogComponent<StTimestampColumnSettingsDialogComponent, TimestampColumnSettings> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private fb;
    protected dialogRef: MatDialogRef<StTimestampColumnSettingsDialogComponent, TimestampColumnSettings>;
    data: TimestampColumnSettingsDialogData;
    form: FormGroup;
    /**
     * Whether this is for an alarm table (shows dynamic styling section)
     */
    isAlarmTable: boolean;
    /**
     * Available severity levels for dynamic styling
     */
    availableSeverities: {
        value: AlarmSeverity;
        label: string;
    }[];
    /**
     * Get the dynamic styles FormArray
     */
    get dynamicStylesArray(): FormArray;
    constructor(store: Store<AppState>, router: Router, fb: FormBuilder, dialogRef: MatDialogRef<StTimestampColumnSettingsDialogComponent, TimestampColumnSettings>, data: TimestampColumnSettingsDialogData);
    ngOnInit(): void;
    onCancel(): void;
    onSave(): void;
    /**
     * Create a form group for a dynamic style
     */
    createDynamicStyleFormGroup(style?: StDynamicStyle): FormGroup;
    /**
     * Add a new dynamic style
     */
    addDynamicStyle(): void;
    /**
     * Remove a dynamic style at index
     */
    removeDynamicStyle(index: number): void;
    /**
     * Get severity label for font preview
     */
    getSeverityLabel(severity: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StTimestampColumnSettingsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StTimestampColumnSettingsDialogComponent, "st-timestamp-column-settings-dialog", never, {}, {}, never, never, false, never>;
}
