/**
 * Sentient Chart Sample Data Generators
 *
 * These generators provide deterministic (non-random) sample data
 * for chart previews in the editor. The data is static to prevent
 * unnecessary re-renders during configuration changes.
 */
import { StChartData, StChartType } from './st-chart.models';
import { Datasource } from '@shared/models/widget.models';
/**
 * Generate sample data for line chart preview
 *
 * @param seriesCount Number of series to generate (default: 2)
 * @param pointCount Number of data points per series (default: 12)
 * @param datasources Optional datasources to extract settings from
 * @returns StChartData with deterministic time series data
 */
export declare function generateSampleLineData(seriesCount?: number, pointCount?: number, datasources?: Datasource[]): StChartData;
/**
 * Generate sample data for bar chart preview (time-series based)
 *
 * Bar charts in time-series reports use time-based x-axis like line charts.
 * Each bar represents a value at a specific time interval.
 *
 * @param seriesCount Number of series to generate (default: 3)
 * @param pointCount Number of data points per series (default: 12)
 * @param datasources Optional datasources to extract settings from
 * @returns StChartData with deterministic time series data
 */
export declare function generateSampleBarData(seriesCount?: number, pointCount?: number, datasources?: Datasource[]): StChartData;
/**
 * Generate sample data for pie chart preview
 *
 * @param sliceCount Number of pie slices (default: 5)
 * @returns StChartData with deterministic pie data
 */
export declare function generateSamplePieData(sliceCount?: number): StChartData;
/**
 * Generate sample data for gauge chart preview
 *
 * @param value Current value (default: 72)
 * @returns StChartData with single value
 */
export declare function generateSampleGaugeData(value?: number): StChartData;
/**
 * Generate sample data for radar chart preview
 *
 * @param seriesCount Number of series (default: 2)
 * @returns StChartData with radar chart data
 */
export declare function generateSampleRadarData(seriesCount?: number): StChartData;
/**
 * Generate sample data based on chart type
 *
 * @param chartType Type of chart
 * @param seriesCount Number of series (where applicable)
 * @param datasources Optional datasources to extract settings from
 * @returns Appropriate sample data for the chart type
 */
export declare function generateSampleData(chartType: StChartType, seriesCount?: number, datasources?: Datasource[]): StChartData;
/**
 * Generate sample data based on datasource count
 * Used when config has datasources defined
 *
 * @param chartType Type of chart
 * @param datasourceCount Number of configured datasources
 * @returns Sample data matching datasource count
 */
export declare function generateSampleDataForDatasources(chartType: StChartType, datasourceCount: number): StChartData;
