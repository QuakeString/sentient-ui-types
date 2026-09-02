import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { StAppearanceConfig, StLegendConfig, StGridSettings, StCardConfig, StPieSettings, StChartType } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Appearance Configuration Component
 *
 * Handles visual appearance settings for report charts.
 * Styled to match ThingsBoard's widget settings panels.
 */
export declare class StAppearanceConfigComponent implements OnInit, OnChanges {
    private cd;
    config: StAppearanceConfig;
    cardConfig: StCardConfig;
    chartType: StChartType;
    showSections: ('cardTitle' | 'cardStyle' | 'legend' | 'grid' | 'gridSettings' | 'pieSettings')[];
    configChange: EventEmitter<StAppearanceConfig>;
    cardConfigChange: EventEmitter<StCardConfig>;
    shadowSizeOptions: {
        value: import("../../models/st-chart.models").StDropShadow;
        label: string;
    }[];
    private parsedPadding;
    constructor(cd: ChangeDetectorRef);
    get showCardTitle(): boolean;
    get showCardStyle(): boolean;
    get showLegend(): boolean;
    get showGrid(): boolean;
    get showGridSettings(): boolean;
    get showPieSettings(): boolean;
    get isPieChart(): boolean;
    get isDoughnut(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Parse CSS padding string into individual values
     * Supports: "12px", "12px 16px", "12px 16px 12px 16px"
     */
    private parsePadding;
    /**
     * Get padding value for a specific side
     */
    getPaddingValue(side: 'top' | 'right' | 'bottom' | 'left'): number;
    /**
     * Handle card padding change
     */
    onCardPaddingChange(side: 'top' | 'right' | 'bottom' | 'left', value: number): void;
    /**
     * Handle legend changes
     */
    onLegendChange(key: keyof StLegendConfig, value: any): void;
    /**
     * Handle grid/margin changes
     */
    onGridChange(key: string, value: any): void;
    /**
     * Handle grid visual settings changes (background, border)
     */
    onGridSettingsChange(key: keyof StGridSettings, value: any): void;
    /**
     * Handle pie settings changes
     */
    onPieSettingsChange(key: keyof StPieSettings, value: any): void;
    /**
     * Get pie settings with defaults
     */
    getPieSettings(): StPieSettings;
    /**
     * Handle card config changes
     */
    onCardChange(key: keyof StCardConfig, value: any): void;
    /**
     * Handle drop shadow toggle
     */
    onDropShadowToggle(enabled: boolean): void;
    /**
     * Get show values as array for mat-chip-listbox
     */
    getShowValuesArray(): string[];
    /**
     * Handle show values change from mat-chip-listbox
     */
    onShowValuesChange(values: string[]): void;
    private emitChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<StAppearanceConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StAppearanceConfigComponent, "st-appearance-config", never, { "config": { "alias": "config"; "required": false; }; "cardConfig": { "alias": "cardConfig"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; "showSections": { "alias": "showSections"; "required": false; }; }, { "configChange": "configChange"; "cardConfigChange": "cardConfigChange"; }, never, never, false, never>;
}
