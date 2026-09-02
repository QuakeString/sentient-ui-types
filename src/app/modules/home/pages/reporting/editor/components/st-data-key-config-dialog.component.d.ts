import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DataKey } from '@shared/models/widget.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { AlarmSeverity } from '@shared/models/alarm.models';
import { StChartType } from '../../models/st-chart.models';
import { ToggleHeaderOption } from '@shared/components/toggle-header.component';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/**
 * Dynamic style for severity-based styling
 */
export interface StDynamicStyle {
    severity: AlarmSeverity;
    font?: any;
    color?: string;
    backgroundColor?: string;
}
export type ThresholdLogic = 'gt' | 'lt' | 'gte' | 'lte' | 'eq';
export interface StDataKeyThreshold {
    logic: ThresholdLogic;
    value: number;
    color: string;
    backgroundColor?: string;
}
export declare const THRESHOLD_LOGIC_OPTIONS: {
    value: ThresholdLogic;
    symbol: string;
    label: string;
}[];
export interface StDataKeyConfigDialogData {
    dataKey: DataKey;
    chartType?: StChartType;
    latestDataKeys?: boolean;
    initialMode?: 'general' | 'advanced';
    simpleMode?: boolean;
    isHorizontal?: boolean;
}
type ConfigMode = 'general' | 'advanced';
/**
 * Sentient Data Key Configuration Dialog
 *
 * Styled to match ThingsBoard's tb-data-key-config-dialog:
 * - Primary toolbar with title and General/Advanced toggle
 * - 900px width, proper form layout
 * - Chart-specific settings in Advanced mode
 */
export declare class StDataKeyConfigDialogComponent implements OnInit {
    data: StDataKeyConfigDialogData;
    dialogRef: MatDialogRef<StDataKeyConfigDialogComponent, DataKey>;
    private fb;
    private translate;
    dataKeyForm: FormGroup;
    dataKeyTypes: typeof DataKeyType;
    thresholdLogicOptions: {
        value: ThresholdLogic;
        symbol: string;
        label: string;
    }[];
    configMode: ConfigMode;
    configModeOptions: ToggleHeaderOption[];
    hasAdvanced: boolean;
    simpleMode: boolean;
    chartSettingsForm: FormGroup;
    labelPositionOptions: Array<{
        value: string;
        label: string;
    }>;
    /**
     * Check if the current key is the 'severity' alarm key
     */
    get isSeverityKey(): boolean;
    /**
     * Check if the chart type is alarm_table (Dynamic Styling available for all keys)
     */
    get isAlarmTable(): boolean;
    /**
     * Check if the chart type is entity_table
     */
    get isEntityTable(): boolean;
    /**
     * Check if the chart type is any table type
     */
    get isTableType(): boolean;
    /**
     * Available severity options for dynamic styling (from alarm models)
     */
    availableSeverities: Array<{
        value: AlarmSeverity;
        label: string;
    }>;
    /**
     * Get the dynamic styles FormArray
     */
    get dynamicStylesArray(): FormArray;
    constructor(data: StDataKeyConfigDialogData, dialogRef: MatDialogRef<StDataKeyConfigDialogComponent, DataKey>, fb: FormBuilder, translate: TranslateService);
    ngOnInit(): void;
    /**
     * Initialize chart-specific settings based on chart type
     */
    private initChartSettings;
    /**
     * Setup configuration mode toggle options
     */
    private setupConfigModeOptions;
    /**
     * Get thresholds FormArray
     */
    get thresholdsArray(): FormArray;
    /**
     * Create a threshold form group
     */
    createThresholdFormGroup(threshold?: StDataKeyThreshold): FormGroup;
    /**
     * Get logic symbol for display
     */
    getLogicSymbol(logic: ThresholdLogic): string;
    /**
     * Initialize label position options based on horizontal bar orientation
     */
    private initializeLabelPositionOptions;
    /**
     * Add a new threshold
     */
    addThreshold(): void;
    /**
     * Remove a threshold at index
     */
    removeThreshold(index: number): void;
    /**
     * Get display label for key type
     */
    getKeyTypeLabel(): string;
    /**
     * Get chart type display name
     */
    get chartTypeName(): string;
    cancel(): void;
    save(): void;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<StDataKeyConfigDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StDataKeyConfigDialogComponent, "st-data-key-config-dialog", never, {}, {}, never, never, false, never>;
}
export {};
