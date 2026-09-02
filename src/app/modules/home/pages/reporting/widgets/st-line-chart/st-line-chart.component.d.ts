import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as echarts from 'echarts/core';
import { StChartService } from '../../services/st-chart.service';
import { StChartConfig, StChartData, StLegendConfig } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Statistics for a single series
 */
interface SeriesStats {
    name: string;
    color: string;
    min: string;
    max: string;
    avg: string;
    total: string;
    latest: string;
}
/**
 * Sentient Line Chart Component
 *
 * A static line chart component for use in reports.
 * Uses ECharts for rendering with no interactivity.
 *
 * Features:
 * - Multiple series support
 * - Time-based X-axis
 * - Configurable colors, line styles, and symbols
 * - Area fill option
 * - Legend
 * - Threshold lines
 * - No animations (optimized for PDF export)
 */
export declare class StLineChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private chartService;
    private cd;
    chartContainer: ElementRef<HTMLDivElement>;
    /**
     * Chart configuration
     */
    config: StChartConfig;
    /**
     * Chart data
     */
    data: StChartData;
    /**
     * Width override (optional)
     */
    width: number;
    /**
     * Height override (optional)
     */
    height: number;
    /**
     * Unique ID for this chart instance
     */
    chartId: string;
    /**
     * Show loading indicator
     */
    loading: boolean;
    /**
     * Use sample data if no data provided
     */
    useSampleData: boolean;
    /**
     * Skeleton mode - show only chart structure (title, legend, axes, grid) without data
     * Used for canvas preview where we don't want to show sample data
     */
    skeletonMode: boolean;
    /**
     * Emitted when chart is rendered
     */
    chartRendered: EventEmitter<echarts.ECharts>;
    private chart;
    private resizeObserver;
    /**
     * Calculated series statistics for stats panel
     */
    seriesStats: SeriesStats[];
    /**
     * Get legend config
     */
    get legendConfig(): StLegendConfig | undefined;
    /**
     * Check if stats panel should be shown
     */
    get showStatsPanel(): boolean;
    /**
     * Computed styles for stats panel based on value font settings
     */
    get statsPanelStyles(): {
        [key: string]: string;
    };
    /**
     * Parse card padding to get right padding value in pixels
     */
    private parseCardPaddingRight;
    /**
     * Computed card styles from config
     */
    get cardStyles(): {
        [key: string]: string;
    };
    constructor(chartService: StChartService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Render the chart
     */
    private renderChart;
    /**
     * Calculate statistics for each series
     */
    private calculateSeriesStats;
    /**
     * Setup resize observer to handle container size changes
     */
    private setupResizeObserver;
    /**
     * Get chart as base64 PNG image
     */
    getChartImage(pixelRatio?: number): string;
    /**
     * Get chart as SVG string
     */
    getChartSvg(): string;
    /**
     * Manually trigger resize
     */
    resize(): void;
    /**
     * Update chart with new data
     */
    updateData(data: StChartData): void;
    /**
     * Update chart configuration
     */
    updateConfig(config: StChartConfig): void;
    /**
     * Get ECharts instance
     */
    getChartInstance(): echarts.ECharts | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<StLineChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StLineChartComponent, "st-line-chart", never, { "config": { "alias": "config"; "required": false; }; "data": { "alias": "data"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "chartId": { "alias": "chartId"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "useSampleData": { "alias": "useSampleData"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; }, { "chartRendered": "chartRendered"; }, never, never, false, never>;
}
export {};
