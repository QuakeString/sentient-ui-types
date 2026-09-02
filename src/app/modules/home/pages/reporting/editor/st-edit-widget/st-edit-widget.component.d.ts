import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { AttributeService } from "@core/http/attribute.service";
import { ImageService } from "@core/http/image.service";
import { StChartConfig, StChartType, StChartData, StImageConfig, StShapeConfig } from "../../models/st-chart.models";
import { IAliasController } from "@core/api/widget-api.models";
import { DataKeysCallbacks } from "@home/components/widget/lib/settings/common/key/data-keys.component.models";
import { EntityService } from "@core/http/entity.service";
import { RawEditorOptions } from "tinymce";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import * as i0 from "@angular/core";
/**
 * Sentient Edit Widget Component
 *
 * Main editor component for configuring chart widgets.
 * Styled to match ThingsBoard's tb-edit-widget/tb-widget-config interface exactly.
 */
export declare class StEditWidgetComponent implements OnInit, OnDestroy, OnChanges {
    private cd;
    private entityService;
    private attributeService;
    private imageService;
    private dialog;
    private translate;
    /**
     * Chart type being edited
     */
    chartType: StChartType;
    /**
     * Initial configuration (pass existing config for editing)
     */
    config: StChartConfig;
    /**
     * Widget title for header display
     */
    widgetTitle: string;
    /**
     * Alias controller for entity alias and filter selection
     */
    aliasController: IAliasController;
    /**
     * Data key callbacks for fetching entity keys
     */
    dataKeyCallbacks: DataKeysCallbacks;
    /**
     * Initial selected tab (for restoring state when switching between components)
     */
    initialSelectedTab: string;
    /**
     * Emitted when configuration changes
     */
    configChange: EventEmitter<StChartConfig>;
    /**
     * Emitted when selected tab changes (for state preservation)
     */
    selectedTabChange: EventEmitter<string>;
    /**
     * Emitted when user applies changes
     */
    applied: EventEmitter<StChartConfig>;
    /**
     * Emitted when user cancels editing
     */
    cancelled: EventEmitter<void>;
    /**
     * Current configuration being edited
     */
    currentConfig: StChartConfig;
    /**
     * Original configuration (for discarding changes)
     */
    private originalConfig;
    /**
     * Configuration mode: basic or advanced (matches tb-widget-config)
     */
    configMode: "basic" | "advanced";
    /**
     * Selected tab option for advanced mode (matches tb-widget-config headerOptions)
     */
    selectedOption: string;
    /**
     * Header options for tb-toggle-select (matches tb-widget-config)
     */
    headerOptions: Array<{
        name: string;
        value: string;
    }>;
    /**
     * Whether to display data tab
     */
    displayData: boolean;
    /**
     * Preview mode toggle (matches tb-edit-widget)
     */
    previewMode: boolean;
    /**
     * Sample data for preview
     */
    sampleData: StChartData;
    /**
     * Unique ID for preview chart
     */
    previewChartId: string;
    /**
     * Whether the form has unsaved changes
     */
    isDirty: boolean;
    /**
     * Validity of the embedded tab editor that reports one (currently the batch
     * analysis tab). Apply is gated on validity AND dirtiness, matching the
     * dashboard widget editor.
     */
    isConfigValid: boolean;
    /**
     * TinyMCE editor options for rich text content
     */
    tinyMceOptions: Partial<RawEditorOptions>;
    /**
     * Destroy subject for cleanup
     */
    private destroy$;
    /**
     * Config change subject for debouncing
     */
    private configChange$;
    /**
     * Cached device name for device type datasources (looked up via EntityService)
     */
    private cachedDeviceName;
    /**
     * Last device ID that was looked up (to avoid redundant lookups)
     */
    private lastLookedUpDeviceId;
    /**
     * Resolved image URL for entity key mode (fetched from device telemetry/attribute)
     */
    resolvedEntityKeyImageUrl: string;
    constructor(cd: ChangeDetectorRef, entityService: EntityService, attributeService: AttributeService, imageService: ImageService, dialog: MatDialog, translate: TranslateService);
    ngOnInit(): void;
    /**
     * Initialize TinyMCE options with custom image dialog
     */
    private initTinyMceOptions;
    /**
     * Open the image insert/edit dialog for TinyMCE
     */
    private openImageInsertEditDialog;
    /**
     * Fetch image URL from entity key for TinyMCE insertion
     */
    private fetchEntityKeyImageUrlForTinyMce;
    /**
     * Insert image into TinyMCE editor
     */
    private insertImageIntoTinyMce;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Look up device name via EntityService if we have a deviceId but no name.
     * This is called when config changes to resolve the device name for variable substitution.
     */
    private lookupDeviceNameIfNeeded;
    /**
     * Get chart type display name
     */
    get chartTypeName(): string;
    /**
     * Get chart type icon
     */
    get chartTypeIcon(): string;
    /**
     * Whether chart has axes (line/bar)
     */
    get hasAxes(): boolean;
    /**
     * Get header title
     */
    get headerTitle(): string;
    /**
     * Get resolved entity name from datasource for variable substitution
     */
    get resolvedEntityName(): string;
    /**
     * Initialize configuration
     * Always starts with defaults, merges user config on top
     */
    private initializeConfig;
    /**
     * Update header options based on chart type
     */
    private updateHeaderOptions;
    /**
     * Handle tab selection change - emit for state preservation
     */
    onTabChange(tab: string): void;
    /**
     * Check if this is a rich text type
     */
    get isRichText(): boolean;
    /**
     * Check if this is an image type
     */
    get isImage(): boolean;
    /**
     * Check if this is a primitive shape type
     */
    get isShape(): boolean;
    /**
     * Check if this is an info/layout type (created_time, page_number, divider)
     */
    get isInfoLayout(): boolean;
    /**
     * Check if this is a divider type
     */
    get isDivider(): boolean;
    /**
     * Check if this is an advanced type (dashboard, subreport)
     */
    get isAdvanced(): boolean;
    /**
     * Check if this is a table type (entity_table, alarm_table)
     */
    get isTable(): boolean;
    /**
     * Check if this is a batch analysis type
     */
    get isBatchAnalysis(): boolean;
    /**
     * Telemetry key names available to the batch config (from the datasource the
     * user picked in the Data tab).
     */
    get batchAvailableKeys(): string[];
    /**
     * The datasource device uuid for the batch widget (definition listing).
     */
    get batchEntityUuid(): string | null;
    /**
     * Batch widget: the chosen device — keep the data config's datasource in
     * sync so the backend resolves the entity (no keys are fetched).
     */
    onBatchEntityChange(deviceUuid: string | null): void;
    /**
     * Batch widget: time window chosen in the Batch tab.
     */
    onBatchTimewindowChange(timewindow: any): void;
    /**
     * Handle batch analysis config changes
     */
    onBatchConfigChange(batchAnalysisConfig: any): void;
    /**
     * Check if this is a page break type
     */
    get isPageBreak(): boolean;
    /**
     * Handle content config changes (for rich text)
     */
    onContentConfigChange(content: string): void;
    /**
     * Handle image config changes (for image type)
     */
    onImageConfigChange(imageConfig: StImageConfig): void;
    /**
     * Handle shape config changes (for primitive shape types)
     */
    onShapeConfigChange(property: keyof StShapeConfig, value: any): void;
    /**
     * Handle info config changes (for created_time and page_number types)
     */
    onInfoConfigChange(property: string, value: any): void;
    /**
     * Handle info font changes (nested font properties inside infoConfig)
     */
    onInfoFontChange(property: string, value: any): void;
    /**
     * Handle divider config changes
     */
    onDividerConfigChange(property: string, value: any): void;
    /**
     * Handle dashboard config changes
     */
    onDashboardConfigChange(property: string, value: any): void;
    /**
     * Handle subreport config changes
     */
    onSubreportConfigChange(property: string, value: any): void;
    /**
     * Handle entity table config changes
     */
    onEntityTableConfigChange(property: string, value: any): void;
    /**
     * Handle alarm table config changes (single property)
     */
    onAlarmTableConfigChange(property: string, value: any): void;
    /**
     * Handle alarm table config update (full config object from st-data-config)
     */
    onAlarmTableConfigUpdate(alarmTableConfig: any): void;
    /**
     * Handle entity table config update (full config object from st-data-config)
     */
    onEntityTableConfigUpdate(entityTableConfig: any): void;
    /**
     * Handle page break config changes
     */
    onPageBreakConfigChange(property: string, value: any): void;
    /**
     * Fetch image URL from entity key (telemetry/attribute)
     */
    private fetchEntityKeyImageUrl;
    /**
     * Update sample data based on current config
     * Counts total data keys across all datasources for accurate preview
     */
    private updateSampleData;
    /**
     * Handle data config changes
     */
    onDataConfigChange(dataConfig: any): void;
    /**
     * Handle alarm filter config changes (for alarm_table)
     */
    onAlarmFilterConfigChange(alarmFilterConfig: any): void;
    /**
     * Reset alarm filter to empty state
     */
    resetAlarmFilter(): void;
    /**
     * Handle appearance config changes
     */
    onAppearanceConfigChange(appearanceConfig: any): void;
    /**
     * Handle stack mode change
     */
    onStackModeChange(stack: boolean): void;
    /**
     * Get current bar settings with defaults
     */
    private getBarSettings;
    /**
     * Handle bar horizontal orientation change
     */
    onBarHorizontalChange(horizontal: boolean): void;
    /**
     * Handle bar gap change
     */
    onBarGapChange(barGap: number): void;
    /**
     * Handle category gap change
     */
    onCategoryGapChange(categoryGap: number): void;
    /**
     * Handle bar border radius change
     */
    onBarBorderRadiusChange(borderRadius: number): void;
    /**
     * Handle axis config changes
     */
    onAxisConfigChange(axisConfig: any): void;
    /**
     * Handle card config changes
     */
    onCardConfigChange(cardConfig: any): void;
    /**
     * Handle thresholds changes
     */
    onThresholdsChange(thresholds: any[]): void;
    /**
     * Handle layout config changes
     */
    onLayoutConfigChange(layoutConfig: any): void;
    /**
     * Get styles for rich text preview based on layout config and card config
     */
    getRichTextPreviewStyles(): {
        [key: string]: string;
    };
    /**
     * Get styles for image preview based on card config (Appearance tab)
     */
    getImagePreviewStyles(): {
        [key: string]: string;
    };
    /**
     * The batch tab reported its validity. Nothing else in this editor validates,
     * so a non-batch widget stays permanently valid.
     */
    onBatchConfigValidChange(valid: boolean): void;
    /**
     * Called when any config changes
     */
    private onConfigChanged;
    /**
     * Deep merge two objects - b overwrites a where defined
     * Null/undefined values in b are SKIPPED (defaults from a are kept)
     * Used during initialization to merge user config with defaults
     */
    private deepMerge;
    /**
     * Apply changes
     * Config is already merged with defaults at initialization, so just emit as-is
     */
    applyChanges(): void;
    /**
     * Discard unsaved changes (reset to original config)
     */
    discardChanges(): void;
    /**
     * Reset to default configuration
     */
    resetToDefault(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StEditWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StEditWidgetComponent, "st-edit-widget", never, { "chartType": { "alias": "chartType"; "required": false; }; "config": { "alias": "config"; "required": false; }; "widgetTitle": { "alias": "widgetTitle"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "initialSelectedTab": { "alias": "initialSelectedTab"; "required": false; }; }, { "configChange": "configChange"; "selectedTabChange": "selectedTabChange"; "applied": "applied"; "cancelled": "cancelled"; }, never, never, false, never>;
}
