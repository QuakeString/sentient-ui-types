import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as echarts from 'echarts/core';
import { StChartService } from '../../services/st-chart.service';
import { StChartConfig, StChartData } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Bar Chart Component
 *
 * A static bar chart component for use in reports.
 * Uses ECharts for rendering with no interactivity.
 *
 * Features:
 * - Multiple series support
 * - Category-based X-axis
 * - Configurable colors, bar styles, and labels
 * - Horizontal/vertical orientation
 * - Stacked or grouped bars
 * - Legend
 * - Threshold lines
 * - No animations (optimized for PDF export)
 */
export declare class StBarChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
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
    static ɵfac: i0.ɵɵFactoryDeclaration<StBarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBarChartComponent, "st-bar-chart", never, { "config": { "alias": "config"; "required": false; }; "data": { "alias": "data"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "chartId": { "alias": "chartId"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "useSampleData": { "alias": "useSampleData"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; }, { "chartRendered": "chartRendered"; }, never, never, false, never>;
}
