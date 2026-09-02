import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { ReportLineChartConfig, LineChartLineType, LineChartSymbol } from '../models/report-chart.models';
import * as i0 from "@angular/core";
/**
 * Report Line Chart Settings Component
 *
 * Configuration panel for report line charts.
 * Simplified from dashboard chart settings - excludes:
 * - Interactive tooltips
 * - Animations
 * - Data zoom
 * - Comparison data
 * - States
 * - Custom JavaScript formatters
 *
 * Focused on static report generation with:
 * - Title configuration
 * - Legend settings
 * - Axis configuration (X and Y)
 * - Series styling (colors, line types, symbols, area fill)
 * - Grid/margin settings
 * - Thresholds (constant values only)
 */
export declare class ReportLineChartSettingsComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private fb;
    private cd;
    private destroy$;
    private propagateChange;
    private propagateTouched;
    disabled: boolean;
    settingsForm: FormGroup;
    legendPositions: {
        value: string;
        label: string;
    }[];
    axisTypes: {
        value: string;
        label: string;
    }[];
    lineTypes: {
        value: LineChartLineType;
        label: string;
    }[];
    symbolTypes: {
        value: LineChartSymbol;
        label: string;
    }[];
    defaultColors: string[];
    constructor(fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initForm;
    writeValue(value: ReportLineChartConfig): void;
    registerOnChange(fn: (value: ReportLineChartConfig) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModel;
    updatePaletteColor(index: number, color: string): void;
    resetToDefaults(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportLineChartSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportLineChartSettingsComponent, "tb-report-line-chart-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
