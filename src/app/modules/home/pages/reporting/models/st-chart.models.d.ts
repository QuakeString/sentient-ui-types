/**
 * Sentient Report Chart Models
 *
 * These models define the configuration for Sentient report chart widgets.
 * Designed to be compatible with both:
 * - Frontend: ECharts (ThingsBoard fork 5.5.1-TB)
 * - Backend: Charming (Rust crate for server-side rendering)
 *
 * All charts use the `st-` prefix (Sentient).
 */
import { Datasource } from '@shared/models/widget.models';
import { Timewindow } from '@shared/models/time/time.models';
/**
 * Supported chart types - only those compatible with Charming backend
 * 'table' is included for time series table widget
 * 'richtext' is included for rich text editor widget
 * 'image' is included for static image widget
 */
export type StChartType = 'line' | 'bar' | 'pie' | 'doughnut' | 'gauge' | 'radar' | 'table' | 'richtext' | 'image' | 'time_series_chart' | 'state_chart' | 'bar_chart_with_labels' | 'range_chart' | 'bars' | 'horizontal_doughnut' | 'entity_table' | 'alarm_table' | 'batch_analysis' | 'page_break' | 'shape_line' | 'shape_rectangle' | 'shape_circle' | 'shape_ellipse' | 'shape_triangle' | 'shape_hexagon' | 'shape_star' | 'shape_arrow' | 'created_time' | 'page_number' | 'divider' | 'dashboard' | 'subreport';
/**
 * Chart type metadata for UI
 */
export interface StChartTypeInfo {
    type: StChartType;
    name: string;
    icon: string;
    hasAxes: boolean;
}
export declare const ST_CHART_TYPES: StChartTypeInfo[];
/**
 * Font configuration (matches ThingsBoard Font interface)
 */
export interface StFont {
    family: string;
    size: number;
    sizeUnit: 'px' | 'em' | 'rem' | '%';
    style: 'normal' | 'italic' | 'oblique';
    weight: 'normal' | 'bold' | 'bolder' | 'lighter' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    lineHeight?: string;
}
/**
 * Main chart configuration interface
 * Used by both frontend (ECharts) and backend (Charming)
 */
export interface StChartConfig {
    chartType: StChartType;
    dataConfig?: StDataConfig;
    appearanceConfig?: StAppearanceConfig;
    axisConfig?: StAxisConfig;
    cardConfig: StCardConfig;
    layoutConfig?: StLayoutConfig;
    thresholds?: StThreshold[];
    contentConfig?: StContentConfig;
    imageConfig?: StImageConfig;
    shapeConfig?: StShapeConfig;
    infoConfig?: StInfoConfig;
    dividerConfig?: StDividerConfig;
    dashboardConfig?: StDashboardConfig;
    subreportConfig?: StSubreportConfig;
    entityTableConfig?: StEntityTableConfig;
    alarmTableConfig?: StAlarmTableConfig;
    batchAnalysisConfig?: StBatchAnalysisConfig;
    pageBreakConfig?: StPageBreakConfig;
}
/** UI-friendly comparison operators; mirror the backend `CmpOp`. */
export type StBatchCmpOp = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';
/** Math symbols for the comparison operators — used by selects and by the
 *  trigger summary renderer. Symbols, deliberately not translated. */
export declare const BatchCmpOpSymbols: Map<StBatchCmpOp, string>;
/** Aggregation functions computable per batch for a telemetry key.
 *  Distinct from the CF `AggFunction` enum — the batch operator's own set. */
export type StBatchMetricFn = 'min' | 'max' | 'avg' | 'stddev' | 'first' | 'last' | 'delta' | 'count' | 'sum';
/** One per-batch metric: aggregate `key` with `fn` over the batch window. */
export interface StBatchMetricRow {
    key: string;
    fn: StBatchMetricFn;
}
export declare const BatchMetricFnTranslations: Map<StBatchMetricFn, string>;
/** Which telemetry transition fires a trigger; mirrors the backend `EdgeMode`. */
export type StBatchEdge = 'rising' | 'falling' | 'level';
export declare const BatchEdgeTranslations: Map<StBatchEdge, string>;
/** Short edge labels for the one-line trigger summary, e.g. "(rising)". */
export declare const BatchEdgeShortTranslations: Map<StBatchEdge, string>;
/** How a batch is bucketed for the rollup dataset; mirrors the backend `GroupBy`. */
export type StBatchGroupBy = 'none' | 'period' | 'shift';
export declare const BatchGroupByTranslations: Map<StBatchGroupBy, string>;
/** Which end of a batch assigns it to a period; mirrors the backend `Attribution`. */
export type StBatchAttribution = 'start' | 'end';
export declare const BatchAttributionTranslations: Map<StBatchAttribution, string>;
/** Condition value types offered by the trigger condition editor. */
export type StBatchValueType = 'boolean' | 'number' | 'string';
export declare const BatchValueTypeTranslations: Map<StBatchValueType, string>;
/** Datasets a widget can render from a materialised EVENT definition. */
export type StBatchDataset = 'batches' | 'rollup' | 'detail' | 'summary';
export declare const BatchDatasetTranslations: Map<StBatchDataset, string>;
/** Per-metric attribution policy for fleet-summary metrics. */
export type StSummaryAttribution = 'start' | 'end' | 'prorated';
export declare const BatchSummaryAttributionTranslations: Map<StSummaryAttribution, string>;
/**
 * One fleet-summary metric of the definition's pack: id + label + formula.
 * Mirrors the backend `metric_pack::MetricDef` (camelCase serde).
 */
export type StBatchContextCapture = 'atOpen' | 'atClose' | 'delta';
export declare const BatchContextCaptureTranslations: Map<StBatchContextCapture, string>;
/** Conventional ISA-95 context names offered as suggestions. */
export declare const BATCH_CONTEXT_NAME_SUGGESTIONS: string[];
export type StBatchIntegralKind = 'timeWeighted' | 'lethality';
export type StBatchInterpolation = 'trapezoid' | 'zoh';
export declare const BatchIntegralKindTranslations: Map<StBatchIntegralKind, string>;
/** Lethality parameter presets (tRef / z / threshold). */
export declare const BATCH_LETHALITY_PRESETS: Array<{
    id: string;
    label: string;
    tRef: number;
    z: number;
    threshold: number;
}>;
/** One per-batch integral (mirrors the backend IntegralConfig). */
export interface StBatchIntegral {
    name: string;
    key: string;
    kind: StBatchIntegralKind;
    /** timeWeighted */
    scale?: number | null;
    interpolation?: StBatchInterpolation;
    /** lethality — mandatory, no defaults */
    tRef?: number | null;
    z?: number | null;
    threshold?: number | null;
    /** Limit to one phase's window. */
    within?: string | null;
}
/** A probe/zone set computed per member then reduced (backend KeyGroupConfig). */
export interface StBatchKeyGroup {
    name: string;
    keys: string[];
    metrics: StBatchMetricFn[];
    /** Per-member integral, reduced like the aggregates. */
    integral?: {
        kind: StBatchIntegralKind;
        scale?: number | null;
        interpolation?: StBatchInterpolation;
        tRef?: number | null;
        z?: number | null;
        threshold?: number | null;
    } | null;
    within?: string | null;
}
/** Time-in-each-value of a state/reason key (backend CategoricalConfig). */
export interface StBatchCategorical {
    name: string;
    key: string;
    within?: string | null;
    maxCategories?: number | null;
}
/** One captured metadata-bag field (mirrors the backend ContextField). */
export interface StBatchContextField {
    name: string;
    key: string;
    capture?: StBatchContextCapture;
}
export interface StSummaryMetricDef {
    id: string;
    label: string;
    unit?: string;
    expr: string;
    decimals?: number | null;
    range?: {
        min?: number | null;
        max?: number | null;
    };
    /** null/undefined: the definition's own attribution (start/end). */
    attribution?: StSummaryAttribution | null;
}
/** Fleet-summary (cross-tab) metric choices. */
export declare const BatchSummaryMetricTranslations: Map<string, string>;
/** Footer aggregates a widget column can show. */
export declare const BatchColumnSummaryTranslations: Map<string, string>;
/**
 * The reporting period grid — an anchored span of arbitrary length. Any
 * "day span" is expressible: a 06:00→06:00 day is `anchor '06:00', lengthHours 24`;
 * 12-hour halves are `lengthHours 12`; a week is `168`.
 */
export interface StBatchPeriod {
    /** Local time the grid is anchored to, "HH:MM". */
    anchor: string;
    /** Period length in hours. */
    lengthHours: number;
}
/**
 * A named sub-window inside a batch (e.g. a ramp-up stage, then a hold stage).
 * A phase may inherit the batch's own start or end instead of using a trigger.
 */
export interface StBatchPhase {
    name: string;
    /** Start with the batch rather than on a condition. */
    startsWithBatch: boolean;
    open: StBatchTrigger;
    /** End with the batch rather than on a condition. */
    endsWithBatch: boolean;
    close: StBatchTrigger;
    /** Also aggregate the metric keys inside this phase's window
     *  (`<phase>.<key>.<metric>` columns). Off by default. */
    aggregates?: boolean;
}
/**
 * A tolerance band around a setpoint. Reports whether the measurement left the
 * band during the batch, and the time ranges when it did.
 */
export interface StBatchDeviation {
    name: string;
    /** Measured key. */
    actual: string;
    /** Compare against another key, or against a fixed number. */
    setpointMode: 'key' | 'value';
    setpoint?: string;
    setpointValue?: number;
    /** Half-width of the acceptable band (±). */
    tolerance: number;
    /** Restrict the check to one phase; blank = the whole batch. */
    within?: string | null;
    /** Ignore excursions shorter than this. */
    minDurationSeconds: number;
}
/** One output column: a produced field OR a rhai expression over the row,
 *  with an optional footer summary. */
export interface StBatchColumn {
    field?: string;
    /** rhai expression, e.g. `row["Actual.avg"] - row["Set.last"]`. Wins over field. */
    expression?: string;
    label: string;
    /** Footer aggregate over this column: sum | avg | min | max | count. */
    summary?: string | null;
}
/** Per-batch detail sampling (one LOCF row per interval inside each batch). */
export interface StBatchDetail {
    enabled: boolean;
    intervalMinutes: number;
    /** Keys to include; empty ⇒ the metric keys. */
    keys: string[];
}
/** A single leaf condition (key <op> value) in a trigger predicate. */
export interface StBatchCondition {
    key: string;
    op: StBatchCmpOp;
    valueType: 'number' | 'boolean' | 'string';
    value: any;
}
/** A trigger: a group of conditions (all/any) evaluated on a chosen edge. */
export interface StBatchTrigger {
    match: 'all' | 'any';
    conditions: StBatchCondition[];
    edge: StBatchEdge;
    /** Close-only: auto-close a batch left open this long (minutes). */
    timeoutMinutes?: number | null;
}
/** A named shift: start time and, optionally, an explicit span. */
export interface StBatchShift {
    name: string;
    /** "HH:MM" local start. */
    start: string;
    /** Explicit length in minutes (480 = 8 h, 720 = 12 h). Blank ⇒ runs until the next shift. */
    durationMinutes?: number | null;
    /** Planned downtime inside the shift (minutes) — subtracted to give the
     *  bucket's planned busy time (`bucket.plannedBusyMs` in formulas). */
    plannedDowntimeMinutes?: number | null;
}
/**
 * The Batch Analysis widget config. This is the UI-facing shape; the report
 * builder translates it into the backend operator `BatchConfig` (config.batchConfig)
 * at save time via `buildOperatorBatchConfig`.
 */
export interface StBatchAnalysisConfig {
    /** Which produced dataset the widget renders. */
    datasetName: StBatchDataset;
    /** The EVENT calculated field id when sourceMode = 'definition'. */
    eventDefinitionId?: string | null;
    /** Fleet summary (cross-tab) settings, when datasetName = 'summary'. */
    summary?: {
        metrics: string[];
        bucket: 'shift' | 'period';
    };
    /** The definition's fleet-summary metric pack. Empty: the built-in six
     *  classic metrics apply (mirrored in BUILTIN_SUMMARY_METRICS). */
    summaryMetrics?: StSummaryMetricDef[];
    /** The batch metadata bag: context fields captured per batch (product id,
     *  lot id, operator id, counters). */
    context?: StBatchContextField[];
    /** Per-batch integrals: energy, amp-hours, lethality (F₀/PU/A₀). */
    integrals?: StBatchIntegral[];
    /** Probe/zone sets computed per member then reduced. */
    groups?: StBatchKeyGroup[];
    /** Categorical time maps (downtime Pareto shape). */
    categoricals?: StBatchCategorical[];
    /** Which end of a batch assigns it to a period / the report's time range. */
    attribution: StBatchAttribution;
    /** Drop batches whose attributed time falls outside the report's time range. */
    restrictToTimeframe: boolean;
    /** The period grid used for bucketing (and the day-span definition). */
    period: StBatchPeriod;
    /** Per-batch detail sampling. */
    detail: StBatchDetail;
    /** Named sub-windows inside each batch. */
    phases: StBatchPhase[];
    /** Tolerance-band checks reported per batch. */
    deviations: StBatchDeviation[];
    /** Explicit column layout for the per-batch table; empty = every field. */
    columns: StBatchColumn[];
    open: StBatchTrigger;
    close: StBatchTrigger;
    /** Metric keys aggregated per batch (subset of the datasource keys).
     *  LEGACY twin of `metricRows` — kept emitted (as the distinct key union)
     *  so the backend operator config and older configs stay compatible. */
    keys: string[];
    /** Metrics computed for each metric key. LEGACY twin of `metricRows`
     *  (distinct function union) — see `keys`. */
    metrics: StBatchMetricFn[];
    /** Per-batch metrics as explicit (key, fn) rows — the editable source of
     *  truth. Absent on configs saved before rows existed; synthesized then as
     *  the cartesian product keys × metrics. */
    metricRows?: StBatchMetricRow[];
    guards: {
        minDurationMinutes: number;
        debounceSeconds: number;
        cooldownSeconds: number;
        /** Flag the batch when any metric key goes silent longer than this
         *  inside the batch window (0 = off). */
        maxGapSeconds?: number;
    };
    rollup: {
        groupBy: StBatchGroupBy;
        timezone: string;
        shifts: StBatchShift[];
    };
}
/**
 * Content configuration for rich text widgets
 */
export interface StContentConfig {
    content: string;
}
/**
 * Image source type
 */
export type ImageSourceType = 'image' | 'entityKey';
/**
 * Image configuration for image widgets
 */
export interface StImageConfig {
    sourceType: ImageSourceType;
    imageUrl?: string;
    resourceId?: string;
    resourceKey?: string;
    imageType: 'gallery' | 'upload' | 'url';
    datasourceMode?: 'device' | 'entityAlias';
    deviceId?: string;
    entityAliasId?: string;
    entityKey?: string;
    entityKeyType?: 'attribute' | 'timeseries';
    altText?: string;
    objectFit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    objectPosition: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    preserveAspectRatio: boolean;
    backgroundColor?: string;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    shadow?: boolean;
    linkUrl?: string;
    linkTarget?: '_blank' | '_self';
    imageWidthMode?: 'auto' | 'original' | 'fill' | 'custom';
    customWidth?: number;
}
/**
 * Shape configuration for primitive shape widgets
 */
export interface StShapeConfig {
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWidth?: number;
    strokeStyle?: 'solid' | 'dashed' | 'dotted';
    borderRadius?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'horizontal' | 'vertical';
    points?: number;
    innerRadius?: number;
    rotation?: number;
}
/**
 * Info configuration for created time and page number widgets
 */
export interface StInfoConfig {
    format?: string;
    prefix?: string;
    suffix?: string;
    font?: StFont;
    color?: string;
    alignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'middle' | 'bottom';
}
/**
 * Divider configuration
 */
export interface StDividerConfig {
    color?: string;
    thickness?: number;
    style?: 'solid' | 'dashed' | 'dotted';
    margin?: number;
}
/**
 * Entity table configuration
 * Similar to Alarm table but for entity data without timestamp column.
 */
export interface StEntityTableConfig {
    tableHeading?: StTableHeadingConfig;
    columnsConfig?: any;
}
/**
 * Alarm table configuration
 */
export interface StAlarmTableConfig {
    alarmFilterConfig?: any;
    tableHeading?: StTableHeadingConfig;
    columnsConfig?: any;
}
/**
 * Page break configuration
 */
export interface StPageBreakConfig {
    showInEditor?: boolean;
    label?: string;
}
/**
 * Dashboard configuration
 */
export interface StDashboardConfig {
    dashboardId?: string;
    dashboardName?: string;
}
/**
 * Subreport configuration
 */
export interface StSubreportConfig {
    templateId?: string;
    templateName?: string;
}
/**
 * Layout configuration for widget sizing and PDF/print behavior
 */
export interface StLayoutConfig {
    width?: number | string;
    height?: number | string;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    alignment?: 'left' | 'center' | 'right';
    verticalAlignment?: 'top' | 'middle' | 'bottom';
    pageBreakBefore?: boolean;
    pageBreakAfter?: boolean;
    keepTogether?: boolean;
    responsive?: boolean;
    maintainAspectRatio?: boolean;
    aspectRatio?: number;
    padding?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    margin?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    backgroundColor?: string;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    dropShadow?: boolean;
}
/**
 * Data configuration - uses TB's Datasource/DataKey
 * Matches tb-timewindow-config-panel structure
 */
export interface StDataConfig {
    datasources: Datasource[];
    timewindow?: Timewindow;
    timewindowStyle?: any;
    useDashboardTimewindow?: boolean;
    displayTimewindow?: boolean;
    useReportTimewindow?: boolean;
    tableHeading?: StTableHeadingConfig;
}
/**
 * Table heading configuration
 */
export interface StTableHeadingConfig {
    enabled: boolean;
    text: string;
    font: StFont;
    color: string;
    backgroundColor?: string;
    horizontalAlign: 'left' | 'center' | 'right';
    verticalAlign: 'top' | 'middle' | 'bottom';
    height: number;
}
/**
 * Appearance configuration container
 */
export interface StAppearanceConfig {
    colorPalette: string[];
    legend: StLegendConfig;
    grid: StGridConfig;
    gridSettings?: StGridSettings;
    stack?: boolean;
    lineSettings?: StLineSettings;
    barSettings?: StBarSettings;
    pieSettings?: StPieSettings;
    gaugeSettings?: StGaugeSettings;
    radarSettings?: StRadarSettings;
}
/**
 * Legend configuration
 */
export interface StLegendConfig {
    show: boolean;
    position: 'top' | 'bottom' | 'left' | 'right';
    orient?: 'horizontal' | 'vertical';
    align?: 'left' | 'center' | 'right';
    labelFont: StFont;
    labelColor: string;
    valueFont?: StFont;
    valueColor?: string;
    showMin?: boolean;
    showMax?: boolean;
    showAverage?: boolean;
    showTotal?: boolean;
    showLatest?: boolean;
}
/**
 * Grid/margin configuration (chart padding)
 */
export interface StGridConfig {
    left: number;
    right: number;
    top: number;
    bottom: number;
    containLabel: boolean;
}
/**
 * Grid visual settings (background, border)
 */
export interface StGridSettings {
    show: boolean;
    backgroundColor?: string;
    borderWidth?: number;
    borderColor?: string;
}
/**
 * Area fill type
 */
export type StAreaFillType = 'none' | 'solid' | 'gradient';
/**
 * Gradient configuration for area fill
 */
export interface StGradientConfig {
    direction: 'vertical' | 'horizontal';
    startColor: string;
    startOpacity: number;
    endColor: string;
    endOpacity: number;
}
/**
 * Line chart global settings
 */
export interface StLineSettings {
    defaultSeriesSettings: StLineSeriesSettings;
    seriesOverrides?: {
        [dataKey: string]: Partial<StLineSeriesSettings>;
    };
    connectNulls: boolean;
}
/**
 * Line series settings
 */
export interface StLineSeriesSettings {
    showLine: boolean;
    lineType: 'solid' | 'dashed' | 'dotted';
    lineWidth: number;
    smooth: boolean;
    showPoints: boolean;
    pointShape: 'circle' | 'emptyCircle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
    pointSize: number;
    showArea: boolean;
    areaFillType: StAreaFillType;
    areaOpacity: number;
    areaGradient?: StGradientConfig;
}
/**
 * Bar chart global settings
 */
export interface StBarSettings {
    defaultSeriesSettings: StBarSeriesSettings;
    seriesOverrides?: {
        [dataKey: string]: Partial<StBarSeriesSettings>;
    };
    horizontal: boolean;
    stacked: boolean;
    barGap: number;
    categoryGap: number;
}
/**
 * Bar series settings
 */
export interface StBarSeriesSettings {
    borderRadius: number;
    borderWidth: number;
    borderColor?: string;
    showLabel: boolean;
    labelPosition: 'top' | 'inside' | 'insideTop' | 'insideBottom' | 'bottom' | 'left' | 'right' | 'insideLeft' | 'insideRight';
    labelFont?: StFont;
    labelColor?: string;
}
/**
 * Pie chart settings (also used for doughnut)
 */
export interface StPieSettings {
    innerRadius: number | string;
    outerRadius: number | string;
    startAngle: number;
    clockwise?: boolean;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    showLabels: boolean;
    labelPosition: 'inside' | 'outside';
    labelFont?: StFont;
    labelColor?: string;
    labelFormat: string;
    showCenterLabel?: boolean;
    centerLabelText?: string;
    centerLabelFont?: StFont;
    centerLabelColor?: string;
    roseType?: 'radius' | 'area' | false;
    layout?: 'default' | 'with_total';
    autoScale?: boolean;
    totalValueFont?: StFont;
    totalValueColor?: string;
    sortSeries?: boolean;
}
/**
 * Gauge chart settings
 */
export interface StGaugeSettings {
    min: number;
    max: number;
    startAngle: number;
    endAngle: number;
    splitNumber: number;
    showPointer: boolean;
    pointerWidth: number;
    pointerColor?: string;
    showAxisLine: boolean;
    axisLineWidth: number;
    showAxisLabel: boolean;
    axisLabelFont?: StFont;
    axisLabelColor?: string;
    axisLabelDistance: number;
    showDetail: boolean;
    detailFont?: StFont;
    detailColor?: string;
    detailFormat: string;
}
/**
 * Radar chart settings
 */
export interface StRadarSettings {
    shape: 'polygon' | 'circle';
    indicators: StRadarIndicator[];
    showAxisLine: boolean;
    showSplitLine: boolean;
    splitNumber: number;
    showArea: boolean;
    areaOpacity: number;
}
/**
 * Radar chart indicator (axis)
 */
export interface StRadarIndicator {
    name: string;
    max?: number;
    min?: number;
}
/**
 * Axis configuration container
 */
export interface StAxisConfig {
    xAxis: StAxisSettings;
    yAxis: StAxisSettings;
}
/**
 * Single axis settings
 */
export interface StAxisSettings {
    show: boolean;
    type: 'time' | 'category' | 'value' | 'log';
    position?: 'top' | 'bottom' | 'left' | 'right';
    label?: string;
    labelFont?: StFont;
    labelColor?: string;
    min?: number | 'auto';
    max?: number | 'auto';
    showTickLabels: boolean;
    tickLabelFont: StFont;
    tickLabelColor: string;
    showGrid: boolean;
    gridColor: string;
    showLine: boolean;
    lineColor: string;
    showTicks: boolean;
    tickColor: string;
}
/**
 * Widget card/container configuration
 */
export interface StCardConfig {
    title: string;
    showTitle: boolean;
    titleFont: StFont;
    titleColor: string;
    titlePosition?: 'left' | 'center' | 'right';
    timewindowPosition?: 'inline' | 'below';
    backgroundColor: string;
    backgroundImage?: string;
    padding: string;
    margin?: string;
    borderRadius: string;
    borderRadiusValue?: number;
    borderWidth?: number;
    borderColor?: string;
    dropShadow?: StDropShadow;
}
/**
 * Drop shadow presets
 */
export type StDropShadow = 'none' | 'small' | 'medium' | 'large';
/**
 * Shadow preset options for UI
 */
export declare const ST_DROP_SHADOW_OPTIONS: {
    value: StDropShadow;
    label: string;
}[];
/**
 * Shadow CSS values for each preset
 */
export declare const ST_DROP_SHADOW_VALUES: Record<StDropShadow, string>;
/**
 * Threshold source type (matches ThingsBoard's ValueSourceType)
 */
export declare enum StThresholdType {
    constant = "constant",
    latestKey = "latestKey",
    entity = "entity"
}
/**
 * Threshold source types array for iteration
 */
export declare const stThresholdTypes: StThresholdType[];
/**
 * Threshold source type translations
 */
export declare const stThresholdTypeTranslations: Map<StThresholdType, string>;
/**
 * Data key type for threshold (attribute or timeseries)
 */
export type StDataKeyType = 'attribute' | 'timeseries';
/**
 * Threshold/reference line configuration
 * Supports constant values and latest data key values
 * Matches ThingsBoard's TimeSeriesChartThreshold interface
 */
export interface StThreshold {
    type: StThresholdType;
    value?: number;
    latestKeyType?: StDataKeyType;
    latestKey?: string;
    entityAlias?: string;
    entityKeyType?: StDataKeyType;
    entityKey?: string;
    yAxisId?: string;
    units?: string;
    decimals?: number;
    lineColor: string;
    lineType: 'solid' | 'dashed' | 'dotted';
    lineWidth: number;
    startSymbol: StChartShape;
    startSymbolSize: number;
    endSymbol: StChartShape;
    endSymbolSize: number;
    showLabel: boolean;
    label?: string;
    labelPosition: 'start' | 'middle' | 'end';
    labelFont?: StFont;
    labelColor?: string;
    enableLabelBackground: boolean;
    labelBackground?: string;
    color?: string;
}
/**
 * Chart shape types (matches ThingsBoard's ChartShape)
 */
export type StChartShape = 'none' | 'emptyCircle' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow';
/**
 * Time series data point [timestamp, value]
 */
export type StTimeSeriesDataPoint = [number, number | null];
/**
 * Category data point
 */
export interface StCategoryDataPoint {
    name: string;
    value: number;
}
/**
 * Series data
 */
export interface StChartSeriesData {
    name: string;
    dataKey: string;
    data: StTimeSeriesDataPoint[] | StCategoryDataPoint[];
    color?: string;
    settings?: Partial<StLineSeriesSettings>;
}
/**
 * Complete chart data
 */
export interface StChartData {
    series: StChartSeriesData[];
    timeRange?: {
        start: number;
        end: number;
    };
    categories?: string[];
}
/**
 * Check if chart type has axes
 */
export declare function stChartHasAxes(chartType: StChartType): boolean;
/**
 * Get chart type info
 */
export declare function getStChartTypeInfo(chartType: StChartType): StChartTypeInfo | undefined;
/**
 * Time series table column configuration
 */
export interface StTableColumn {
    key: string;
    label: string;
    width?: number;
    align?: 'left' | 'center' | 'right';
    format?: string;
    unit?: string;
    decimals?: number;
}
/**
 * Table header styling
 */
export interface StTableHeaderStyle {
    backgroundColor: string;
    textColor: string;
    font: StFont;
    borderColor?: string;
}
/**
 * Table row styling
 */
export interface StTableRowStyle {
    backgroundColor: string;
    alternateBackgroundColor?: string;
    textColor: string;
    font: StFont;
    borderColor?: string;
    hoverBackgroundColor?: string;
}
/**
 * Table appearance configuration
 */
export interface StTableAppearance {
    headerStyle: StTableHeaderStyle;
    rowStyle: StTableRowStyle;
    showBorder: boolean;
    borderWidth: number;
    borderColor: string;
    rowHeight: number;
    showGridLines: boolean;
    gridLineColor?: string;
}
/**
 * Main table configuration interface
 */
export interface StTableConfig {
    chartType: 'table';
    cardConfig: StCardConfig;
    dataConfig: StDataConfig;
    tableAppearance: StTableAppearance;
    columns?: StTableColumn[];
    layoutConfig?: StLayoutConfig;
    pagination?: {
        enabled: boolean;
        pageSize: number;
        pageSizeOptions?: number[];
    };
    defaultSort?: {
        column: string;
        direction: 'asc' | 'desc';
    };
    timestampFormat?: string;
    showTimestamp?: boolean;
    timestampSettings?: {
        header?: {
            backgroundColor?: string;
            color?: string;
            font?: {
                family?: string;
                size?: number;
                weight?: string;
            };
            horizontalAlign?: string;
            verticalAlign?: string;
            borderWidth?: number;
            borderColor?: string;
            borderSides?: {
                top?: boolean;
                right?: boolean;
                bottom?: boolean;
                left?: boolean;
            };
            padding?: {
                top?: number;
                right?: number;
                bottom?: number;
                left?: number;
            };
        };
        cell?: {
            backgroundColor?: string;
            color?: string;
            font?: {
                family?: string;
                size?: number;
                weight?: string;
            };
            horizontalAlign?: string;
            verticalAlign?: string;
            borderWidth?: number;
            borderColor?: string;
            borderSides?: {
                top?: boolean;
                right?: boolean;
                bottom?: boolean;
                left?: boolean;
            };
            padding?: {
                top?: number;
                right?: number;
                bottom?: number;
                left?: number;
            };
            zebraStriping?: boolean;
            zebraStripingMode?: string;
            zebraStripingIntensity?: number;
        };
        width?: number;
    };
    cellPaddingVertical?: {
        top: number;
        bottom: number;
    };
    headerPaddingVertical?: {
        top: number;
        bottom: number;
    };
}
/**
 * Time series table data
 */
export interface StTableData {
    columns: StTableColumn[];
    rows: StTableRow[];
    timeRange?: {
        start: number;
        end: number;
    };
}
/**
 * Single table row
 */
export interface StTableRow {
    timestamp: number;
    values: {
        [key: string]: number | string | null;
    };
}
