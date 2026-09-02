import { NgZone } from '@angular/core';
import * as echarts from 'echarts/core';
import { GridComponentOption, TooltipComponentOption, LegendComponentOption, TitleComponentOption } from 'echarts/components';
import { LineSeriesOption, BarSeriesOption, PieSeriesOption } from 'echarts/charts';
import { ReportChartWidgetConfig, ReportChartData } from '../models/report-chart.models';
import * as i0 from "@angular/core";
type EChartsOption = echarts.ComposeOption<GridComponentOption | TooltipComponentOption | LegendComponentOption | TitleComponentOption | LineSeriesOption | BarSeriesOption | PieSeriesOption>;
/**
 * Service for rendering report charts using ECharts.
 * Converts report chart configuration to ECharts options
 * and manages chart instances.
 */
export declare class ReportChartService {
    private ngZone;
    private initialized;
    private chartInstances;
    constructor(ngZone: NgZone);
    /**
     * Initialize ECharts modules
     */
    private initECharts;
    /**
     * Render a chart into a DOM element
     */
    renderChart(element: HTMLElement, config: ReportChartWidgetConfig, data: ReportChartData, chartId?: string): echarts.ECharts;
    /**
     * Render chart for export (SVG for PDF quality)
     */
    renderChartForExport(element: HTMLElement, config: ReportChartWidgetConfig, data: ReportChartData, width: number, height: number): echarts.ECharts;
    /**
     * Get chart as base64 image (PNG)
     */
    getChartAsImage(chart: echarts.ECharts): string;
    /**
     * Get chart as SVG string
     */
    getChartAsSvg(chart: echarts.ECharts): string;
    /**
     * Resize a chart
     */
    resizeChart(chartId: string): void;
    /**
     * Dispose a chart
     */
    disposeChart(chartId: string): void;
    /**
     * Dispose all charts
     */
    disposeAllCharts(): void;
    /**
     * Convert report chart config to ECharts options
     */
    configToEChartsOptions(config: ReportChartWidgetConfig, data: ReportChartData): EChartsOption;
    /**
     * Convert line chart config to ECharts options
     */
    private lineChartToOptions;
    /**
     * Convert bar chart config to ECharts options
     */
    private barChartToOptions;
    /**
     * Convert pie chart config to ECharts options
     */
    private pieChartToOptions;
    /**
     * Convert doughnut chart config to ECharts options
     */
    private doughnutChartToOptions;
    /**
     * Generate ECharts option JSON for backend rendering
     * This JSON can be sent to the Rust backend for charming to render
     */
    getOptionsForBackend(config: ReportChartWidgetConfig, data: ReportChartData): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportChartService>;
}
export {};
