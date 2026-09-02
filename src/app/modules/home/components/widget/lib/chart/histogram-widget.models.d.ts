import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
export interface HistogramWidgetSettings {
    binCount: number;
    showNormalCurve: boolean;
    showStats: boolean;
    xAxisLabel: string;
    yAxisLabel: string;
    axisLabelFont: Font;
    axisLabelColor: string;
    axisTickLabelFont: Font;
    axisTickLabelColor: string;
    showGrid: boolean;
    barOpacity: number;
    barBorderRadius: number;
    barGap: string;
    showTooltip: boolean;
    showLegend: boolean;
    background: BackgroundSettings;
    padding: string;
}
export declare const histogramWidgetDefaultSettings: HistogramWidgetSettings;
export interface HistogramBin {
    min: number;
    max: number;
    count: number;
    label: string;
}
export interface HistogramStats {
    count: number;
    mean: number;
    stdDev: number;
    min: number;
    max: number;
}
export declare function computeHistogramBins(values: number[], binCount: number): {
    bins: HistogramBin[];
    stats: HistogramStats;
};
export declare function normalPdf(x: number, mean: number, stdDev: number): number;
