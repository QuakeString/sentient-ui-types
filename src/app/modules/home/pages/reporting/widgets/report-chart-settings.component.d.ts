import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ReportLineChartSettings, ReportBarChartSettings, LineType, SymbolType, BarLabelPosition, LegendPosition } from '../models/report-chart.models';
import * as i0 from "@angular/core";
export type ChartType = 'line' | 'bar';
/**
 * Comprehensive Chart Settings Component
 *
 * Configuration panel for report charts (Line and Bar).
 * Matches ThingsBoard widget configuration style with Basic/Advanced modes.
 *
 * Includes:
 * - Title configuration (with icon)
 * - Legend settings with fonts
 * - Chart-specific appearance (line/bar settings)
 * - Axis configuration
 * - Card appearance (background, padding, border)
 * - Color palette
 *
 * Excludes (not applicable for static reports):
 * - Tooltips
 * - Animations
 * - Actions
 */
export declare class ReportChartSettingsComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private fb;
    private cd;
    private destroy$;
    private propagateChange;
    private propagateTouched;
    chartType: ChartType;
    disabled: boolean;
    settingsForm: UntypedFormGroup;
    legendPositions: {
        value: LegendPosition;
        label: string;
    }[];
    axisTypes: {
        value: string;
        label: string;
    }[];
    lineTypes: {
        value: LineType;
        label: string;
    }[];
    symbolTypes: {
        value: SymbolType;
        label: string;
    }[];
    labelPositions: {
        value: string;
        label: string;
    }[];
    barLabelPositions: {
        value: BarLabelPosition;
        label: string;
    }[];
    defaultColors: string[];
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initForm;
    writeValue(value: ReportLineChartSettings | ReportBarChartSettings): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    private updateModel;
    updatePaletteColor(index: number, color: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportChartSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportChartSettingsComponent, "tb-report-chart-settings", never, { "chartType": { "alias": "chartType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
