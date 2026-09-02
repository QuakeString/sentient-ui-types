import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { LineChartSeriesConfig, LineChartLineType, LineChartSymbol } from '../models/report-chart.models';
import * as i0 from "@angular/core";
/**
 * Report Line Series Settings Component
 *
 * Configuration for individual line series in a report chart.
 * Simplified from dashboard series settings - excludes:
 * - Point labels (too detailed for reports)
 * - Step types (complex for static output)
 * - Fill area gradients
 *
 * Focused on:
 * - Series name and color
 * - Line type (solid, dashed, dotted) and width
 * - Symbol type and size
 * - Smooth lines
 * - Area fill (simple opacity-based)
 */
export declare class ReportLineSeriesSettingsComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private fb;
    private cd;
    private destroy$;
    private propagateChange;
    disabled: boolean;
    dataKey: string;
    seriesForm: FormGroup;
    lineTypes: {
        value: LineChartLineType;
        label: string;
    }[];
    symbolTypes: {
        value: LineChartSymbol;
        label: string;
    }[];
    constructor(fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initForm;
    writeValue(value: LineChartSeriesConfig): void;
    registerOnChange(fn: (value: LineChartSeriesConfig) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportLineSeriesSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportLineSeriesSettingsComponent, "tb-report-line-series-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "dataKey": { "alias": "dataKey"; "required": false; }; }, {}, never, never, false, never>;
}
