/**
 * Report Chart Widget Models
 *
 * These models define the configuration for report-specific chart widgets.
 * Charts use ECharts for frontend rendering and charming (Rust) for backend PDF generation.
 *
 * Key differences from dashboard chart widgets:
 * - No real-time data updates
 * - No interactive features (tooltips, data zoom, click handlers)
 * - No animations
 * - Static data passed at render time
 * - Configuration optimized for PDF output
 */
import { Font, TimewindowStyle } from "@shared/models/widget-settings.models";
import { Datasource, DataKey, DatasourceType, WidgetConfigMode } from "@shared/models/widget.models";
import { Timewindow } from "@shared/models/time/time.models";
export interface ReportFont {
    family?: string;
    size?: number;
    sizeUnit?: "px" | "em" | "rem" | "%";
    style?: "normal" | "italic" | "oblique";
    weight?: "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    lineHeight?: string;
}
export declare const defaultFont: ReportFont;
export { Datasource, DataKey, DatasourceType, WidgetConfigMode };
export { Timewindow, TimewindowStyle };
/**
 * Data configuration for report widgets - matches ThingsBoard's widget data config
 * Timewindow is at config level (not per datasource) like in ThingsBoard
 */
export interface ReportWidgetDataConfig {
    useDashboardTimewindow?: boolean;
    displayTimewindow?: boolean;
    timewindow?: Timewindow;
    timewindowStyle?: TimewindowStyle;
    datasources?: Datasource[];
    pageSize?: number;
}
export type LegendPosition = "top" | "bottom" | "left" | "right";
export interface ReportLegendConfig {
    showLegend: boolean;
    legendPosition: LegendPosition;
    legendLabelFont: ReportFont;
    legendLabelColor: string;
    legendValueFont: ReportFont;
    legendValueColor: string;
}
export declare const defaultLegendConfig: ReportLegendConfig;
export interface ReportTitleConfig {
    showTitle: boolean;
    title: string;
    titleFont: ReportFont;
    titleColor: string;
    showTitleIcon: boolean;
    titleIcon: string;
    iconColor: string;
}
export declare const defaultTitleConfig: ReportTitleConfig;
export type BackgroundType = "color" | "image";
export interface ReportBackgroundSettings {
    type: BackgroundType;
    color?: string;
    imageUrl?: string;
}
export interface ReportCardAppearance {
    background: ReportBackgroundSettings;
    borderRadius: string;
    padding: string;
}
export declare const defaultCardAppearance: ReportCardAppearance;
export type AxisType = "value" | "category" | "time" | "log";
export interface ReportAxisConfig {
    show: boolean;
    name?: string;
    nameFont?: ReportFont;
    nameColor?: string;
    type: AxisType;
    min?: number | null;
    max?: number | null;
    tickCount?: number;
    showGrid: boolean;
    gridColor: string;
    tickLabelFont: ReportFont;
    tickLabelColor: string;
    labelFormat?: string;
}
export declare const defaultXAxisConfig: ReportAxisConfig;
export declare const defaultYAxisConfig: ReportAxisConfig;
export interface ReportSeriesConfig {
    key: string;
    label: string;
    color: string;
    units?: string;
    decimals?: number;
}
export type LineType = "solid" | "dashed" | "dotted";
export type SymbolType = "circle" | "rect" | "roundRect" | "triangle" | "diamond" | "pin" | "arrow" | "none";
export interface ReportLineSettings {
    showLine: boolean;
    lineType: LineType;
    lineWidth: number;
    showPoints: boolean;
    pointShape: SymbolType;
    pointSize: number;
    smooth: boolean;
    showLabel: boolean;
    labelPosition: "top" | "bottom" | "left" | "right" | "inside";
    labelFont: ReportFont;
    labelColor: string;
    showArea: boolean;
    areaOpacity: number;
    connectNulls: boolean;
}
export declare const defaultLineSettings: ReportLineSettings;
export type BarLabelPosition = "top" | "inside" | "insideTop" | "insideBottom" | "bottom";
export interface ReportBarSettings {
    showBorder: boolean;
    borderWidth: number;
    borderRadius: number;
    barWidth: number;
    showLabel: boolean;
    labelPosition: BarLabelPosition;
    labelFont: ReportFont;
    labelColor: string;
    enableLabelBackground: boolean;
    labelBackground: string;
    horizontal: boolean;
    stacked: boolean;
}
export declare const defaultBarSettings: ReportBarSettings;
export interface ReportChartWidgetSettings extends ReportWidgetDataConfig {
    series?: ReportSeriesConfig[];
    titleConfig: ReportTitleConfig;
    legendConfig: ReportLegendConfig;
    xAxis: ReportAxisConfig;
    yAxis: ReportAxisConfig;
    sortSeries: boolean;
    units: string;
    decimals: number;
    cardAppearance: ReportCardAppearance;
    colorPalette: string[];
}
export interface ReportLineChartSettings extends ReportChartWidgetSettings {
    lineSettings: ReportLineSettings;
}
export declare const defaultLineChartSettings: ReportLineChartSettings;
export interface ReportBarChartSettings extends ReportChartWidgetSettings {
    barSettings: ReportBarSettings;
}
export declare const defaultBarChartSettings: ReportBarChartSettings;
export interface ReportChartConfig {
    title?: string;
    showTitle?: boolean;
    titleFont?: Font;
    titleColor?: string;
    entityAliasId?: string;
    dataKeys?: string[];
    showLegend?: boolean;
    legendPosition?: "top" | "bottom" | "left" | "right";
    colorPalette?: string[];
    gridLeft?: number;
    gridRight?: number;
    gridTop?: number;
    gridBottom?: number;
    backgroundColor?: string;
}
export type LineChartLineType = "solid" | "dashed" | "dotted";
export type LineChartSymbol = "circle" | "rect" | "roundRect" | "triangle" | "diamond" | "pin" | "arrow" | "none";
export interface LineChartSeriesConfig {
    name: string;
    dataKey: string;
    color?: string;
    lineWidth?: number;
    lineType?: LineChartLineType;
    showSymbol?: boolean;
    symbolType?: LineChartSymbol;
    symbolSize?: number;
    smooth?: boolean;
    areaFill?: boolean;
    areaOpacity?: number;
}
export interface LineChartAxisConfig {
    show?: boolean;
    name?: string;
    nameFont?: Font;
    nameColor?: string;
    type?: AxisType;
    min?: number | "auto";
    max?: number | "auto";
    tickCount?: number;
    showGrid?: boolean;
    gridColor?: string;
    labelFont?: Font;
    labelColor?: string;
    labelFormat?: string;
}
export interface ReportLineChartConfig extends ReportChartConfig {
    type: "line";
    series?: LineChartSeriesConfig[];
    xAxis?: LineChartAxisConfig;
    yAxis?: LineChartAxisConfig;
    yAxisSecondary?: LineChartAxisConfig;
    connectNulls?: boolean;
    showValues?: boolean;
    valueFont?: Font;
}
export interface BarChartSeriesConfig {
    name: string;
    dataKey: string;
    color?: string;
    barWidth?: number | string;
    borderRadius?: number;
    showValues?: boolean;
    valueFont?: Font;
    valuePosition?: "top" | "inside" | "bottom";
}
export interface ReportBarChartConfig extends ReportChartConfig {
    type: "bar";
    series?: BarChartSeriesConfig[];
    xAxis?: LineChartAxisConfig;
    yAxis?: LineChartAxisConfig;
    horizontal?: boolean;
    stacked?: boolean;
    barGap?: string;
    barCategoryGap?: string;
}
export interface PieChartSeriesConfig {
    name: string;
    dataKey: string;
    color?: string;
}
export interface ReportPieChartConfig extends ReportChartConfig {
    type: "pie";
    series?: PieChartSeriesConfig[];
    innerRadius?: number | string;
    outerRadius?: number | string;
    startAngle?: number;
    endAngle?: number;
    roseType?: "radius" | "area" | false;
    showLabels?: boolean;
    labelPosition?: "inside" | "outside" | "center";
    labelFont?: Font;
    labelFormat?: string;
    showCenterLabel?: boolean;
    centerLabelText?: string;
    centerLabelFont?: Font;
}
export interface ReportDoughnutChartConfig extends Omit<ReportPieChartConfig, "type"> {
    type: "doughnut";
}
export type TimeSeriesDataPoint = [number, number | null];
export interface CategoryDataPoint {
    name: string;
    value: number;
}
export interface ChartSeriesData {
    name: string;
    dataKey: string;
    data: TimeSeriesDataPoint[] | CategoryDataPoint[];
}
export interface ReportChartData {
    series: ChartSeriesData[];
    timeRange?: {
        start: number;
        end: number;
    };
    categories?: string[];
}
export type ReportChartWidgetConfig = ReportLineChartConfig | ReportBarChartConfig | ReportPieChartConfig | ReportDoughnutChartConfig;
export declare function getDefaultLineChartConfig(): ReportLineChartConfig;
export declare function getDefaultBarChartConfig(): ReportBarChartConfig;
export declare function getDefaultPieChartConfig(): ReportPieChartConfig;
export declare function getDefaultDoughnutChartConfig(): ReportDoughnutChartConfig;
export declare function getDefaultChartConfig(chartType: string): ReportChartWidgetConfig;
