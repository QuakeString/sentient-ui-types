/**
 * Sentient Chart Default Values
 *
 * These defaults match ThingsBoard's chart styling for visual consistency.
 * Colors, fonts, and spacing are derived from TB's chartColorScheme and widget defaults.
 */
import { StFont, StLegendConfig, StGridConfig, StAxisSettings, StCardConfig, StLineSettings, StLineSeriesSettings, StBarSettings, StBarSeriesSettings, StPieSettings, StGaugeSettings, StRadarSettings, StChartConfig, StAppearanceConfig, StDataConfig, StAxisConfig, StTableConfig, StTableAppearance, StTableHeaderStyle, StTableRowStyle, StImageConfig, StShapeConfig, StBatchAnalysisConfig, StBatchMetricFn, StBatchMetricRow, StBatchTrigger, StSummaryMetricDef } from './st-chart.models';
/**
 * Default color palette - matches ThingsBoard's chart colors
 */
export declare const ST_DEFAULT_COLOR_PALETTE: string[];
/**
 * Axis colors (matches TB chartColorScheme exactly)
 */
export declare const ST_AXIS_COLORS: {
    label: string;
    tickLabel: string;
    line: string;
    ticks: string;
    splitLine: string;
};
/**
 * Threshold colors
 */
export declare const ST_THRESHOLD_COLORS: {
    line: string;
    label: string;
};
/**
 * Default font (matches TB's Roboto styling)
 */
export declare const ST_DEFAULT_FONT: StFont;
/**
 * Title font
 */
export declare const ST_TITLE_FONT: StFont;
/**
 * Small/tick label font
 */
export declare const ST_SMALL_FONT: StFont;
/**
 * Legend font
 */
export declare const ST_LEGEND_FONT: StFont;
/**
 * Legend value font
 */
export declare const ST_LEGEND_VALUE_FONT: StFont;
/**
 * Default legend configuration
 */
export declare const ST_DEFAULT_LEGEND: StLegendConfig;
/**
 * Default grid/margin configuration
 * Note: top margin is auto-calculated based on title/timewindow/legend height
 * These values will be visible in the editor and can be customized
 */
export declare const ST_DEFAULT_GRID: StGridConfig;
/**
 * Default X-axis configuration (matches TB defaultTimeSeriesChartXAxisSettings)
 */
export declare const ST_DEFAULT_X_AXIS: StAxisSettings;
/**
 * Default Y-axis configuration (matches TB defaultTimeSeriesChartYAxisSettings)
 */
export declare const ST_DEFAULT_Y_AXIS: StAxisSettings;
/**
 * Default axis config (X + Y)
 */
export declare const ST_DEFAULT_AXIS_CONFIG: StAxisConfig;
/**
 * Default card/widget container configuration
 */
export declare const ST_DEFAULT_CARD: StCardConfig;
/**
 * Default line series settings
 */
export declare const ST_DEFAULT_LINE_SERIES: StLineSeriesSettings;
/**
 * Default line chart settings
 */
export declare const ST_DEFAULT_LINE_SETTINGS: StLineSettings;
/**
 * Default bar series settings
 */
export declare const ST_DEFAULT_BAR_SERIES: StBarSeriesSettings;
/**
 * Default bar chart settings
 */
export declare const ST_DEFAULT_BAR_SETTINGS: StBarSettings;
/**
 * Default pie chart settings
 * Styled to match ThingsBoard dashboard pie chart appearance
 */
export declare const ST_DEFAULT_PIE_SETTINGS: StPieSettings;
/**
 * Default doughnut chart settings
 * Styled to match ThingsBoard dashboard doughnut appearance
 */
export declare const ST_DEFAULT_DOUGHNUT_SETTINGS: StPieSettings;
/**
 * Default horizontal doughnut chart settings
 */
export declare const ST_DEFAULT_HORIZONTAL_DOUGHNUT_SETTINGS: StPieSettings;
/**
 * Default gauge chart settings
 */
export declare const ST_DEFAULT_GAUGE_SETTINGS: StGaugeSettings;
/**
 * Default radar chart settings
 */
export declare const ST_DEFAULT_RADAR_SETTINGS: StRadarSettings;
/**
 * Default data configuration - matches tb-timewindow-config-panel defaults
 */
export declare const ST_DEFAULT_DATA_CONFIG: StDataConfig;
/**
 * Default appearance configuration for line chart
 */
export declare const ST_DEFAULT_LINE_APPEARANCE: StAppearanceConfig;
/**
 * Default appearance configuration for bar chart
 */
export declare const ST_DEFAULT_BAR_APPEARANCE: StAppearanceConfig;
/**
 * Default appearance configuration for pie chart
 * Legend at bottom with values shown (matches ThingsBoard style)
 */
export declare const ST_DEFAULT_PIE_APPEARANCE: StAppearanceConfig;
/**
 * Default appearance configuration for doughnut chart
 * Legend at bottom with values and total (matches ThingsBoard style)
 */
export declare const ST_DEFAULT_DOUGHNUT_APPEARANCE: StAppearanceConfig;
/**
 * Create default line chart configuration
 */
export declare function createDefaultLineChartConfig(): StChartConfig;
/**
 * Create default bar chart configuration
 */
export declare function createDefaultBarChartConfig(): StChartConfig;
/**
 * Create default pie chart configuration
 */
export declare function createDefaultPieChartConfig(): StChartConfig;
/**
 * Create default doughnut chart configuration
 */
export declare function createDefaultDoughnutChartConfig(): StChartConfig;
/**
 * Create default chart configuration by type
 */
export declare function createDefaultChartConfig(chartType: string): StChartConfig;
/**
 * Create default rich text configuration
 * Note: Rich text doesn't need chart-specific settings (colorPalette, legend, grid)
 */
export declare function createDefaultRichTextConfig(): StChartConfig;
/**
 * Default image configuration
 */
export declare const ST_DEFAULT_IMAGE_CONFIG: StImageConfig;
/**
 * Create default image widget configuration
 * Note: Image widgets don't need chart-specific settings (colorPalette, legend, grid)
 */
export declare function createDefaultImageConfig(): StChartConfig;
/**
 * Default table header style
 */
export declare const ST_DEFAULT_TABLE_HEADER_STYLE: StTableHeaderStyle;
/**
 * Default table row style
 */
export declare const ST_DEFAULT_TABLE_ROW_STYLE: StTableRowStyle;
/**
 * Default table appearance
 */
export declare const ST_DEFAULT_TABLE_APPEARANCE: StTableAppearance;
/**
 * Default timestamp column settings for tables
 * This ensures the backend receives explicit styling for the timestamp column
 */
export declare const ST_DEFAULT_TIMESTAMP_SETTINGS: {
    header: {
        backgroundColor: string;
        color: string;
        font: {
            family: string;
            size: number;
            weight: string;
        };
        horizontalAlign: string;
        verticalAlign: string;
        borderWidth: number;
        borderColor: string;
        borderSides: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    cell: {
        backgroundColor: string;
        color: string;
        font: {
            family: string;
            size: number;
            weight: string;
        };
        horizontalAlign: string;
        verticalAlign: string;
        borderWidth: number;
        borderColor: string;
        borderSides: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        zebraStriping: boolean;
        zebraStripingMode: string;
        zebraStripingIntensity: number;
    };
};
/**
 * Default data key settings for table columns
 * This ensures the backend receives explicit styling instead of empty {}
 */
export declare const ST_DEFAULT_TABLE_DATA_KEY_SETTINGS: {
    header: {
        backgroundColor: string;
        color: string;
        font: {
            family: string;
            size: number;
            weight: string;
        };
        horizontalAlign: string;
        verticalAlign: string;
        borderWidth: number;
        borderColor: string;
        borderSides: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
    cell: {
        backgroundColor: string;
        color: string;
        font: {
            family: string;
            size: number;
            weight: string;
        };
        horizontalAlign: string;
        verticalAlign: string;
        borderWidth: number;
        borderColor: string;
        borderSides: {
            top: boolean;
            right: boolean;
            bottom: boolean;
            left: boolean;
        };
        padding: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        zebraStriping: boolean;
        zebraStripingMode: string;
        zebraStripingIntensity: number;
    };
};
/**
 * Create default time series table configuration
 */
export declare function createDefaultTableConfig(): StTableConfig;
/**
 * Default shape configuration
 */
export declare const ST_DEFAULT_SHAPE_CONFIG: StShapeConfig;
/**
 * Create default shape widget configuration
 * Note: Shapes don't need data, appearance, or axis settings
 */
export declare function createDefaultShapeConfig(chartType: string): StChartConfig;
/**
 * Create default created time configuration
 */
export declare function createDefaultCreatedTimeConfig(): StChartConfig;
/**
 * Create default page number configuration
 */
export declare function createDefaultPageNumberConfig(): StChartConfig;
/**
 * Create default divider configuration
 */
export declare function createDefaultDividerConfig(): StChartConfig;
/**
 * Create default dashboard configuration
 */
export declare function createDefaultDashboardConfig(): StChartConfig;
/**
 * Create default subreport configuration
 */
export declare function createDefaultSubreportConfig(): StChartConfig;
/**
 * Create default time series chart configuration (similar to line chart)
 */
export declare function createDefaultTimeSeriesChartConfig(): StChartConfig;
/**
 * Create default state chart configuration (similar to line chart)
 */
export declare function createDefaultStateChartConfig(): StChartConfig;
/**
 * Create default bar chart with labels configuration
 * This chart type shows vertically rotated labels inside bars with value and series name
 */
export declare function createDefaultBarChartWithLabelsConfig(): StChartConfig;
/**
 * Create default range chart configuration (similar to line chart)
 */
export declare function createDefaultRangeChartConfig(): StChartConfig;
/**
 * Create default bars configuration (similar to bar chart)
 */
export declare function createDefaultBarsConfig(): StChartConfig;
/**
 * Create default horizontal doughnut configuration (similar to doughnut chart)
 */
export declare function createDefaultHorizontalDoughnutConfig(): StChartConfig;
/**
 * Create default entity table configuration
 * Similar to alarm table but for entity data without timestamp column.
 */
/**
 * Default Batch Analysis config. Seeds a single device datasource (no keys yet —
 * the user picks telemetry keys in the Data tab) and a sensible open/close batch
 * definition (open when a signal goes high on its rising edge, close when it
 * returns low), with a per-day rollup.
 */
export declare function createDefaultBatchAnalysisConfig(): StChartConfig;
/** "HH:MM" validation for the period anchor and shift starts. */
export declare const BATCH_HHMM_PATTERN: RegExp;
/**
 * The editable (key, fn) rows for a config: its own `metricRows` when present,
 * otherwise the cartesian product of the legacy `keys × metrics` — exactly the
 * set of columns the backend produced for such configs, so pre-rows configs
 * load losslessly.
 */
export declare function synthesizeMetricRows(cfg: Partial<StBatchAnalysisConfig> | null | undefined): StBatchMetricRow[];
/**
 * The legacy pair emitted alongside `metricRows`: distinct key union in first
 * appearance order, distinct function union in the canonical metric order.
 * `buildOperatorBatchConfig` (and therefore the backend) keeps consuming this
 * shape — no backend change.
 */
export declare function metricRowsToLegacy(rows: StBatchMetricRow[]): {
    keys: string[];
    metrics: StBatchMetricFn[];
};
/**
 * Fill in sections a previously-saved config predates so forms bind safely,
 * and synthesize `metricRows` for configs that predate rows. Pure: returns a
 * deep-cloned, completed config; the input is never mutated.
 */
/**
 * Mirror of the backend's built-in pack (`packs/press_charge.json`): what a
 * definition with no summaryMetrics of its own effectively has. Used to seed
 * "customize" and to offer widget metric choices for legacy definitions.
 */
export declare const BUILTIN_SUMMARY_METRICS: StSummaryMetricDef[];
export declare function normalizeBatchAnalysisConfig(raw: Partial<StBatchAnalysisConfig> | null | undefined): StBatchAnalysisConfig;
/**
 * One-line human-readable rendering of a trigger predicate, e.g.
 * `auto = true AND press > 40 (rising) · auto-close after 90 min`.
 * Pure given `t` (a translate function, typically `TranslateService.instant`).
 * Returns '' for a trigger with no keyed condition — callers show their own
 * "add condition" prompt then.
 */
export declare function batchTriggerSummary(trigger: StBatchTrigger | null | undefined, t: (key: string, params?: object) => string): string;
/**
 * Translate the UI-facing `StBatchAnalysisConfig` into the backend analytics
 * operator `BatchConfig` JSON (the shape `api/src/analytics::BatchConfig`
 * deserializes). The report builder mirrors the result to `config.batchConfig`
 * so the report worker can run the operator at generation time.
 */
export declare function buildOperatorBatchConfig(ui: any): any;
export declare function createDefaultEntityTableConfig(): StChartConfig;
/**
 * Default severity color mapping for alarm tables
 * These colors match ThingsBoard's alarm severity colors
 */
export declare const ST_SEVERITY_COLORS: {
    CRITICAL: string;
    MAJOR: string;
    MINOR: string;
    WARNING: string;
    INDETERMINATE: string;
};
/**
 * Default dynamic styles for severity column (all 5 severities pre-configured)
 */
export declare const ST_DEFAULT_SEVERITY_DYNAMIC_STYLES: {
    severity: string;
    font: {
        family: string;
        size: number;
        sizeUnit: string;
        style: string;
        weight: string;
    };
    color: string;
    backgroundColor: any;
}[];
/**
 * Default severity cell settings for alarm table severity column
 */
export declare const ST_DEFAULT_SEVERITY_CELL_SETTINGS: {
    useDynamicStyling: boolean;
    dynamicStyles: {
        severity: string;
        font: {
            family: string;
            size: number;
            sizeUnit: string;
            style: string;
            weight: string;
        };
        color: string;
        backgroundColor: any;
    }[];
    font: {
        family: string;
        size: number;
        sizeUnit: string;
        style: string;
        weight: string;
    };
    color: string;
};
/**
 * Create default alarm table configuration
 */
export declare function createDefaultAlarmTableConfig(): StChartConfig;
/**
 * Create default page break configuration
 */
export declare function createDefaultPageBreakConfig(): StChartConfig;
