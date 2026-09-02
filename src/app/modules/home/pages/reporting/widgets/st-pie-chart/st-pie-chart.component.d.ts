import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as echarts from 'echarts/core';
import { StChartService } from '../../services/st-chart.service';
import { StChartConfig, StChartData } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Pie/Doughnut Chart Component
 *
 * A static pie/doughnut chart component for use in reports.
 * Uses ECharts for rendering with no interactivity.
 *
 * Features:
 * - Pie and Doughnut modes
 * - Configurable inner/outer radius
 * - Customizable labels and legend
 * - Center label for doughnut
 * - Rose type (nightingale chart) support
 * - No animations (optimized for PDF export)
 */
export declare class StPieChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
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
     * Skeleton mode - show only chart structure without data
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
     * Setup resize observer
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
    static ɵfac: i0.ɵɵFactoryDeclaration<StPieChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StPieChartComponent, "st-pie-chart", never, { "config": { "alias": "config"; "required": false; }; "data": { "alias": "data"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "chartId": { "alias": "chartId"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "useSampleData": { "alias": "useSampleData"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; }, { "chartRendered": "chartRendered"; }, never, never, false, never>;
}
