import { OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { StChartConfig, StChartData, StChartType } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Chart Preview Component
 *
 * Provides a preview of charts in the editor using static sample data.
 * The preview updates when configuration changes but uses deterministic
 * data to avoid unnecessary re-renders.
 */
export declare class StChartPreviewComponent implements OnChanges {
    private cd;
    /**
     * Chart type to preview
     */
    chartType: StChartType;
    /**
     * Chart configuration
     */
    config: StChartConfig;
    /**
     * Sample data for preview (generated if not provided)
     */
    sampleData: StChartData;
    /**
     * Unique ID for preview chart
     */
    previewChartId: string;
    /**
     * Icon for chart type
     */
    get chartIcon(): string;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Update sample data based on current config
     */
    private updateSampleData;
    static ɵfac: i0.ɵɵFactoryDeclaration<StChartPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StChartPreviewComponent, "st-chart-preview", never, { "chartType": { "alias": "chartType"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, {}, never, never, false, never>;
}
