/**
 * Sentient Chart Service
 *
 * Provides chart rendering functionality using ECharts.
 * Converts StChartConfig to ECharts options and manages chart instances.
 *
 * This service produces ECharts options that are compatible with
 * the Charming Rust crate for server-side rendering.
 */
import { NgZone } from '@angular/core';
import * as echarts from 'echarts/core';
import { GridComponentOption, TooltipComponentOption, LegendComponentOption, TitleComponentOption, MarkLineComponentOption } from 'echarts/components';
import { LineSeriesOption, BarSeriesOption, PieSeriesOption, GaugeSeriesOption, RadarSeriesOption } from 'echarts/charts';
import { StChartConfig, StChartData } from '../models/st-chart.models';
import * as i0 from "@angular/core";
type EChartsOption = echarts.ComposeOption<GridComponentOption | TooltipComponentOption | LegendComponentOption | TitleComponentOption | MarkLineComponentOption | LineSeriesOption | BarSeriesOption | PieSeriesOption | GaugeSeriesOption | RadarSeriesOption>;
/**
 * Sentient Chart Service
 */
export declare class StChartService {
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
    renderChart(element: HTMLElement, config: StChartConfig, data: StChartData, chartId?: string): echarts.ECharts;
    /**
     * Render chart for export (SVG for better PDF quality)
     */
    renderChartForExport(element: HTMLElement, config: StChartConfig, data: StChartData, width: number, height: number): echarts.ECharts;
    /**
     * Update chart with new data
     */
    updateChartData(chartId: string, data: StChartData, config: StChartConfig): void;
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
     * Get chart as base64 PNG image
     */
    getChartAsImage(chart: echarts.ECharts, pixelRatio?: number): string;
    /**
     * Get chart as SVG string
     */
    getChartAsSvg(chart: echarts.ECharts): string;
    /**
     * Convert StChartConfig to ECharts options
     */
    configToEChartsOptions(config: StChartConfig, data: StChartData): EChartsOption;
    /**
     * Generate JSON for backend rendering (Charming)
     */
    getOptionsForBackend(config: StChartConfig, data: StChartData): string;
    private lineChartToOptions;
    private barChartToOptions;
    private barChartWithLabelsToOptions;
    /**
     * Time Series Chart - supports mixed line and bar series
     * Each data key can be configured as either 'line' or 'bar' via seriesType setting
     */
    private timeSeriesChartToOptions;
    private pieChartToOptions;
    private createXAxisOption;
    private createYAxisOption;
    private createThresholdSeries;
    /**
     * Create area style for line chart
     * Supports: none, solid (with opacity), gradient
     */
    private createAreaStyle;
    /**
     * Create gradient area style
     */
    private createGradientAreaStyle;
    /**
     * Convert hex color to rgba string
     */
    private hexToRgba;
    /**
     * Build font size for ECharts with unit conversion
     * ECharts only reliably supports px, so convert all units to px
     * If font is undefined or doesn't have a size, returns the default value
     * Accepts both Font and StFont types
     */
    private buildFontSize;
    /**
     * Build lineHeight for ECharts (in pixels)
     * ECharts lineHeight expects pixel values, not CSS-style multipliers
     *
     * @param lineHeight - String multiplier value (e.g., "1.2", "1.5")
     * @param fontSizeInPx - Font size in pixels (already converted by buildFontSize)
     * @returns lineHeight in pixels, or undefined if not specified
     *
     * Example: lineHeight "1.5" with fontSize 16px → returns 24 (16 * 1.5)
     */
    private buildLineHeight;
    /**
     * Convert font weight string to ECharts compatible type
     * ECharts expects 'normal', 'bold', 'bolder', 'lighter' or number (100-900)
     */
    private convertFontWeight;
    /**
     * Build grid configuration with margins and optional background/border
     * Automatically calculates top margin to prevent overlap with title, timewindow, and legend
     */
    private buildGridConfig;
    /**
     * Calculate chart top margin to prevent overlap with title, timewindow, and legend
     * Returns the calculated top margin in pixels
     */
    private calculateChartTopMargin;
    /**
     * Calculate chart bottom margin to prevent overlap with bottom legend
     * Returns the calculated bottom margin in pixels
     */
    private calculateChartBottomMargin;
    /**
     * Calculate legend top offset based on title/timewindow configuration
     * Accounts for title font size, timewindow position, and icon size
     */
    private calculateLegendTopOffset;
    /**
     * Build title configuration with optional timewindow display
     * Uses ECharts rich text for separate styling of title and timewindow
     */
    private buildTitleConfig;
    /**
     * Format time range for display
     */
    private formatTimeRange;
    static ɵfac: i0.ɵɵFactoryDeclaration<StChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StChartService>;
}
export {};
