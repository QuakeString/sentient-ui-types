import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { StLayoutConfig, StChartType } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Layout Configuration Component
 *
 * Handles widget layout settings:
 * - Paddings (2x2 icon layout)
 * - Margins (2x2 icon layout)
 * - Background (color picker)
 * - Border (width, color, radius)
 */
export declare class StLayoutConfigComponent implements OnInit, OnChanges {
    private cd;
    config: StLayoutConfig;
    chartType: StChartType;
    configChange: EventEmitter<StLayoutConfig>;
    widthMode: 'fit' | 'custom';
    customWidth: number;
    /**
     * Whether to use simple labels (Height, Width, Alignment) vs chart labels (Chart height, etc.)
     * For richtext, table, and image, use simple labels
     */
    get useSimpleLabels(): boolean;
    private margins;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Parse margins from config (could be stored as string or object)
     */
    private parseMargins;
    /**
     * Parse width mode from config
     */
    private parseWidthMode;
    /**
     * Handle width mode change
     */
    onWidthModeChange(mode: 'fit' | 'custom'): void;
    /**
     * Handle custom width change
     */
    onCustomWidthChange(value: number): void;
    /**
     * Get margin value for a specific side
     */
    getMarginValue(side: 'top' | 'right' | 'bottom' | 'left'): number;
    /**
     * Handle padding changes
     */
    onPaddingChange(key: string, value: number): void;
    /**
     * Handle margin changes
     */
    onMarginChange(key: string, value: number): void;
    /**
     * Handle layout setting changes
     */
    onLayoutChange(key: string, value: any): void;
    private emitChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<StLayoutConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StLayoutConfigComponent, "st-layout-config", never, { "config": { "alias": "config"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; }, { "configChange": "configChange"; }, never, never, false, never>;
}
