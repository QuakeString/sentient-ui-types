import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ReportChartService } from '../services/report-chart.service';
import { ReportBarChartConfig, ReportChartData } from '../models/report-chart.models';
import * as echarts from 'echarts/core';
import * as i0 from "@angular/core";
/**
 * Report Bar Chart Component
 *
 * A simple, static bar chart component for use in reports.
 * Uses ECharts for rendering with no interactivity.
 *
 * Features:
 * - Multiple series support
 * - Horizontal or vertical bars
 * - Stacked or grouped bars
 * - Configurable colors, bar width, and styling
 * - Legend
 * - No animations or interactivity (optimized for PDF export)
 */
export declare class ReportBarChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private chartService;
    private cd;
    chartContainer: ElementRef<HTMLDivElement>;
    /**
     * Chart configuration
     */
    config: ReportBarChartConfig;
    /**
     * Chart data
     */
    data: ReportChartData;
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
     * Emitted when chart is rendered
     */
    chartRendered: EventEmitter<echarts.ECharts>;
    private chart;
    private resizeObserver;
    constructor(chartService: ReportChartService, cd: ChangeDetectorRef);
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
    getChartImage(): string;
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
    updateData(data: ReportChartData): void;
    /**
     * Update chart configuration
     */
    updateConfig(config: ReportBarChartConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportBarChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportBarChartComponent, "tb-report-bar-chart", never, { "config": { "alias": "config"; "required": false; }; "data": { "alias": "data"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "chartId": { "alias": "chartId"; "required": false; }; }, { "chartRendered": "chartRendered"; }, never, never, false, never>;
}
/**
 * Helper function to create sample data for bar chart preview.
 * Uses deterministic values to avoid re-rendering on change detection.
 */
export declare function createSampleBarChartData(seriesCount?: number): ReportChartData;
