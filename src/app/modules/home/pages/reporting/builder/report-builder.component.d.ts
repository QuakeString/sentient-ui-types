import { OnInit, OnDestroy, AfterViewInit, ElementRef, Renderer2, ViewContainerRef, NgZone, Injector, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "@core/core.state";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { MatMenuTrigger } from "@angular/material/menu";
import { TbPopoverService } from "@shared/components/popover.service";
import { ReportService } from "@core/http/report.service";
import { WidgetService } from "@core/http/widget.service";
import { EntityService } from "@core/http/entity.service";
import { AttributeService } from "@core/http/attribute.service";
import { UtilsService } from "@core/services/utils.service";
import { DashboardUtilsService } from "@core/services/dashboard-utils.service";
import { Widget, Datasource, DatasourceType, DataKey, widgetType, WidgetConfigMode } from "@shared/models/widget.models";
import { DataKeyType } from "@shared/models/telemetry/telemetry.models";
import { WidgetLayout } from "@shared/models/dashboard.models";
import { WidgetComponentService } from "@home/components/widget/widget-component.service";
import { DataKeysCallbacks, DataKeySettingsFunction } from "@home/components/widget/lib/settings/common/key/data-keys.component.models";
import { FilterSelectCallbacks } from "@home/components/widget/lib/settings/common/filter/filter-select.component.models";
import { EntityAliasSelectCallbacks } from "@home/components/widget/lib/settings/common/alias/entity-alias-select.component.models";
import { EntityType } from "@shared/models/entity-type.models";
import { Filter } from "@shared/models/query/query.models";
import { EntityAlias } from "@shared/models/alias.models";
import { ReportWidgetConfigProvider } from "./report-widget-config.provider";
import { WidgetConfigCallbacks } from "@home/components/widget/config/widget-config.component.models";
import { EditWidgetComponent } from "@home/components/dashboard-page/edit-widget.component";
import { Dashboard } from "@shared/models/dashboard.models";
import { IAliasController, IStateController } from "@core/api/widget-api.models";
import { HasDirtyFlag } from "@core/guards/confirm-on-exit.guard";
import { ReportTemplate, ReportComponent as ReportComponentModel, ComponentType, ReportConfiguration } from "@home/pages/reporting/models/report.models";
import { GridsterConfig, GridsterComponent } from "angular-gridster2";
import { Timewindow } from "@shared/models/time/time.models";
import { TimeService } from "@core/services/time.service";
import { FormProperty } from "@shared/models/dynamic-form.models";
import { ScriptReportEditorComponent } from '@home/pages/reporting/script/script-report-editor.component';
import { ReportLineChartConfig, ReportBarChartConfig, ReportChartData } from "../models/report-chart.models";
import { StChartConfig, StChartType, StChartData, StTableConfig } from "../models/st-chart.models";
import * as i0 from "@angular/core";
interface ComponentCategory {
    name: string;
    expanded: boolean;
    components: PaletteComponent[];
}
interface PaletteComponent {
    type: ComponentType;
    icon: string;
    label: string;
    preview?: string;
    image?: string;
}
type SectionType = "header" | "content" | "footer";
interface Section {
    type: SectionType;
    enabled: boolean;
    firstPageEnabled: boolean;
    collapsed: boolean;
    showFirstPage: boolean;
    components: ReportComponentModel[];
    firstPageComponents: ReportComponentModel[];
}
export declare class ReportBuilderComponent implements OnInit, OnDestroy, AfterViewInit, HasDirtyFlag {
    private store;
    private route;
    private router;
    private translate;
    private reportService;
    private widgetService;
    private entityService;
    utils: UtilsService;
    private dashboardUtils;
    private widgetComponentService;
    private dialog;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private injector;
    private ngZone;
    private fb;
    elRef: ElementRef;
    private timeService;
    private cd;
    private reportWidgetConfigProvider;
    private attributeService;
    /**
     * Prevent browser refresh/close when there are unsaved changes
     * Shows browser's native confirmation dialog
     */
    onBeforeUnload(event: BeforeUnloadEvent): string | void;
    /**
     * Escape key handler to cancel stuck drag/resize operations.
     */
    onEscapeKey(event: KeyboardEvent): void;
    /**
     * Delete key handler to delete selected component(s)
     */
    onDeleteKey(event: KeyboardEvent): void;
    /**
     * Track Ctrl key press to enable pan mode and handle keyboard shortcuts
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * Track Ctrl key release to disable pan mode
     */
    onKeyUp(event: KeyboardEvent): void;
    /**
     * Handle window blur to reset Ctrl state (user switched windows while holding Ctrl)
     */
    onWindowBlur(): void;
    private destroy$;
    private searchText$;
    templateId: string;
    template: ReportTemplate;
    isLoading: boolean;
    isDirty: boolean;
    isFullscreen: boolean;
    private _searchText;
    filteredCategories: ComponentCategory[];
    private readonly FAVORITES_STORAGE_KEY;
    private readonly RECENTLY_USED_STORAGE_KEY;
    private readonly MAX_RECENTLY_USED;
    favoriteComponentTypes: Set<ComponentType>;
    recentlyUsedComponents: PaletteComponent[];
    favoriteComponents: PaletteComponent[];
    showFavoritesSection: boolean;
    headerGridster: GridsterComponent;
    contentGridster: GridsterComponent;
    scriptPanel: ScriptReportEditorComponent;
    footerGridster: GridsterComponent;
    headerSectionContentRef: ElementRef;
    footerSectionContentRef: ElementRef;
    tbEditWidget: EditWidgetComponent;
    dashboardContainerRef: ElementRef;
    componentMenuTrigger: MatMenuTrigger;
    componentMenuPosition: {
        x: string;
        y: string;
    };
    componentMenuContext: {
        component: ReportComponentModel;
        sectionType: SectionType;
        index: number;
        isFirstPage: boolean;
    };
    headerGridsterOpts: GridsterConfig;
    contentGridsterOpts: GridsterConfig;
    footerGridsterOpts: GridsterConfig;
    isDraggingFromPalette: boolean;
    draggedComponentType: ComponentType;
    draggedPaletteComponent: PaletteComponent;
    dropPreview: {
        [key: string]: {
            x: number;
            y: number;
            cols: number;
            rows: number;
            show: boolean;
        };
    };
    get dropPreviewX(): number;
    set dropPreviewX(val: number);
    get dropPreviewY(): number;
    set dropPreviewY(val: number);
    get dropPreviewCols(): number;
    set dropPreviewCols(val: number);
    get dropPreviewRows(): number;
    set dropPreviewRows(val: number);
    get showDropPreview(): boolean;
    set showDropPreview(val: boolean);
    get searchText(): string;
    set searchText(value: string);
    isEditingComponent: boolean;
    isEditingComponentClosed: boolean;
    editingComponent: ReportComponentModel;
    editingComponentOriginal: ReportComponentModel;
    editingComponentOriginalConfig: any;
    editingComponentSection: SectionType;
    editingComponentIndex: number;
    editingComponentIsFirstPage: boolean;
    isEditingWidget: boolean;
    isEditingWidgetClosed: boolean;
    isToolbarAnimated: boolean;
    showMobilePalette: boolean;
    isPaletteCollapsed: boolean;
    togglePaletteCollapsed(): void;
    get isPaletteHidden(): boolean;
    /**
     * Returns true when toolbar should be visible (drawer is closed)
     */
    get toolbarOpened(): boolean;
    editingWidget: Widget;
    editingWidgetOriginal: Widget;
    editingWidgetLayout: WidgetLayout;
    editingWidgetComponent: ReportComponentModel;
    editingWidgetSubtitle: string;
    reportDashboard: Dashboard;
    isEditingStChart: boolean;
    isEditingStChartClosed: boolean;
    editingStChartConfig: StChartConfig;
    editingStChartConfigOriginal: StChartConfig;
    editingStChartType: StChartType;
    editingStChartComponent: ReportComponentModel;
    stChartConfigMode: "basic" | "advanced";
    editingStChartSelectedTab: string;
    private editorStateCache;
    selectedComponentId: string;
    selectedComponentSection: SectionType;
    selectedComponentIndex: number;
    selectedComponentIsFirstPage: boolean;
    hasComponentChanges: boolean;
    selectedComponents: Map<string, {
        component: ReportComponentModel;
        sectionType: SectionType;
        index: number;
        isFirstPage: boolean;
    }>;
    clipboard: {
        components: ReportComponentModel[];
        sectionType: SectionType;
        isCut: boolean;
    };
    cutComponentIds: Set<string>;
    activeSection: SectionType;
    activeSectionIsFirstPage: boolean;
    templateVariables: {
        name: string;
        value: string;
    }[];
    sections: {
        [key in SectionType]: Section;
    };
    templateSettings: {
        name: string;
        namePattern: string;
        timeDataPattern: string;
        description: string;
        pageSize: string;
        pageOrientation: "PORTRAIT" | "LANDSCAPE";
        pageMargins: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        backgroundColor: string;
    };
    paperSizes: string[];
    readonly PAGE_SIZES_MM: {
        [key: string]: {
            width: number;
            height: number;
        };
    };
    private canvasResizeObserver;
    private lastCanvasWidth;
    readonly BASE_DPI = 96;
    readonly CELL_SIZE_MM = 5;
    readonly GRID_MARGIN = 0;
    readonly MAJOR_GRID_INTERVAL = 2;
    /**
     * Get MM to PX conversion factor accounting for device pixel ratio
     */
    get MM_TO_PX(): number;
    /**
     * Get the number of grid columns for the current page size
     * Calculated from: content_width_mm / cell_size_mm
     */
    getGridColumns(): number;
    contentZoomLevel: number;
    isFitWidthMode: boolean;
    private exactFitCellSize;
    readonly MIN_ZOOM = 25;
    readonly MAX_ZOOM = 300;
    readonly ZOOM_STEP = 10;
    panOffsetX: number;
    isPanning: boolean;
    isCtrlHeld: boolean;
    private panStartX;
    private panStartOffsetX;
    componentCategories: ComponentCategory[];
    aliasController: IAliasController;
    stateController: IStateController;
    dataKeysCallbacks: DataKeysCallbacks;
    entityAliasSelectCallbacks: EntityAliasSelectCallbacks;
    filterSelectCallbacks: FilterSelectCallbacks;
    widgetTypes: typeof widgetType;
    datasourceTypes: typeof DatasourceType;
    entityTypes: typeof EntityType;
    widgetConfigModes: typeof WidgetConfigMode;
    availableDatasourceTypes: DatasourceType[];
    datasourceTypeTranslations: Map<DatasourceType, string>;
    contentTimewindow: Timewindow;
    widgetConfigCallbacks: WidgetConfigCallbacks;
    timewindowConfigForm: UntypedFormGroup;
    private timewindowConfigSub;
    private entityKeyImageUrlCache;
    private entityKeyImageUrlFetching;
    constructor(store: Store<AppState>, route: ActivatedRoute, router: Router, translate: TranslateService, reportService: ReportService, widgetService: WidgetService, entityService: EntityService, utils: UtilsService, // Made public for IDashboardComponent
    dashboardUtils: DashboardUtilsService, widgetComponentService: WidgetComponentService, dialog: MatDialog, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector, ngZone: NgZone, fb: FormBuilder, elRef: ElementRef, timeService: TimeService, cd: ChangeDetectorRef, reportWidgetConfigProvider: ReportWidgetConfigProvider, attributeService: AttributeService);
    private reportDashboardCtrl;
    /**
     * Create a minimal state controller for reports
     * Reports don't have dashboard states, so most methods are no-ops
     */
    private createReportStateController;
    /**
     * Get or create alias controller for widget configuration
     */
    getAliasController(): IAliasController;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Called when content layout changes (component moved/resized)
     */
    private onContentLayoutChanged;
    /**
     * Update the content gridster minRows to ensure drop space below widgets
     * Ensures there's always at least 20mm (4 rows at 5mm) of empty space below the last widget
     */
    private updateContentContainerHeight;
    /**
     * Get the usable page dimensions in mm (page size minus margins)
     */
    getUsablePageDimensions(): {
        widthMm: number;
        heightMm: number;
    };
    /**
     * Get the canvas width in pixels
     */
    getCanvasWidth(): number;
    /**
     * Calculate page height in pixels based on canvas width and page aspect ratio
     */
    getPageHeightPx(): number;
    /**
     * Initialize ResizeObserver for canvas width changes
     */
    private initCanvasResizeObserver;
    /**
     * Get the true cell size at 100% zoom (fixed 5mm cells)
     * This is the "print size" - what the cell would be on paper
     * 5mm at 96 DPI = 18.898... pixels
     */
    getTrueCellSizePx(): number;
    /**
     * Get the true page width at 100% zoom (in pixels)
     */
    getTruePageWidthPx(): number;
    /**
     * Calculate the zoom level to make grid width match container width
     * With mm-based grid (no margins), grid width scales linearly with zoom
     * gridWidth(Z) = cellSize * Z/100 * columns
     */
    calculateAutoFitZoom(): number;
    /**
     * Get the current cell size based on zoom level
     */
    getCurrentCellSizePx(): number;
    /**
     * Update gridster cell sizes based on current zoom level
     * When in fit width mode with exactFitCellSize set, uses that exact value
     * to avoid rounding errors that cause gaps
     */
    private updateGridsterCellSizes;
    pageBreakPositions: number[];
    /**
     * Calculate content rows per page (accounting for header/footer)
     */
    getContentRowsPerPage(): number;
    /**
     * Get the maximum row used by components (y + rows)
     */
    private getMaxRowFromComponents;
    /**
     * Get the maximum row used by content components
     */
    getContentMaxRow(): number;
    /**
     * Calculate and update page break positions
     */
    updatePageBreaks(): void;
    /**
     * Get style for a page break line (only dynamic top position, rest is in CSS)
     */
    getPageBreakStyle(position: number): {
        [key: string]: string;
    };
    /**
     * Get style for page break label (only dynamic top position, rest is in CSS)
     */
    getPageBreakLabelStyle(position: number): {
        [key: string]: string;
    };
    zoomIn(): void;
    zoomOut(): void;
    zoomTo100(): void;
    fitWidth(): void;
    /**
     * Get the current grid width in pixels based on zoom level
     * With mm-based grid: width = cellSize * columns (no margins)
     */
    getGridWidthPx(): number;
    /**
     * Get the maximum pan offset (how far left user can pan)
     * Returns 0 if grid fits within container (no panning needed)
     */
    getMaxPanOffset(): number;
    /**
     * Get the transform string for panning the grid
     */
    getGridTransform(): string;
    /**
     * Start panning (called on Ctrl+mousedown or right-click)
     */
    onPanStart(event: MouseEvent): void;
    /**
     * Continue panning (called on mousemove when isPanning)
     */
    onPanMove(event: MouseEvent): void;
    /**
     * Stop panning (called on mouseup)
     */
    onPanEnd(event: MouseEvent): void;
    /**
     * Prevent context menu when right-clicking for pan
     */
    onContextMenu(event: MouseEvent): void;
    ngOnDestroy(): void;
    private initGridsterOptions;
    private onGridItemChange;
    /**
     * Clamp all widget dimensions to fit within the current grid columns.
     * Called when:
     * 1. Loading a template (to handle templates saved with different page settings)
     * 2. Changing page settings (orientation/size/margins) that reduce grid columns
     *
     * For each widget:
     * - If cols > gridColumns, shrink cols to fit
     * - If x + cols > gridColumns, adjust x to fit (or shrink cols if needed)
     */
    private clampWidgetsToGrid;
    private addComponentAtPosition;
    /**
     * Add component at specific grid position from palette component
     */
    private addComponentAtPositionFromPalette;
    onPaletteDragStarted(paletteComponent: PaletteComponent): void;
    onPaletteDragEnded(): void;
    onDropFromPalette(event: CdkDragDrop<any>, sectionType: SectionType, isFirstPage?: boolean): void;
    getGridsterOptions(sectionType: SectionType): GridsterConfig;
    /**
     * Assign a stable id to any loaded component that lacks one. Idempotent —
     * components that already have an id (UI-authored) are left untouched.
     */
    private ensureComponentIds;
    loadTemplate(): void;
    loadConfiguration(config: ReportConfiguration): void;
    private getAvailableCategoriesForFormat;
    private updateFilteredCategories;
    trackByCategory(index: number, category: ComponentCategory): string;
    trackByComponent(index: number, component: PaletteComponent): string;
    toggleCategory(category: ComponentCategory): void;
    /**
     * Load favorites from localStorage
     */
    private loadFavoritesFromStorage;
    /**
     * Save favorites to localStorage
     */
    private saveFavoritesToStorage;
    /**
     * Load recently used components from localStorage
     */
    private loadRecentlyUsedFromStorage;
    /**
     * Save recently used to localStorage
     */
    private saveRecentlyUsedToStorage;
    /**
     * Update favoriteComponents array from favoriteComponentTypes set
     */
    private updateFavoriteComponents;
    /**
     * Get PaletteComponent by ComponentType
     */
    private getPaletteComponentByType;
    /**
     * Toggle favorite status for a component
     */
    toggleFavorite(comp: PaletteComponent, event: Event): void;
    /**
     * Check if a component is favorited
     */
    isFavorite(comp: PaletteComponent): boolean;
    /**
     * Add component to recently used list
     */
    private addToRecentlyUsed;
    /**
     * Remove component from recently used list
     */
    removeFromRecentlyUsed(comp: PaletteComponent, event: Event): void;
    /**
     * Get filtered favorites based on current report format
     */
    getFilteredFavorites(): PaletteComponent[];
    /**
     * Get filtered recently used based on current report format
     * Excludes components that are already in favorites
     */
    getFilteredRecentlyUsed(): PaletteComponent[];
    /**
     * Check if favorites/recently used section should be shown
     */
    hasFavoritesOrRecentlyUsed(): boolean;
    /**
     * Toggle favorites section visibility
     */
    toggleFavoritesSection(): void;
    onDrop(event: CdkDragDrop<ReportComponentModel[]>, sectionType: SectionType, isFirstPage?: boolean): void;
    createComponent(type: ComponentType): ReportComponentModel;
    /**
     * Get the icon name for alignment values
     */
    getAlignmentIcon(value: string, type: "horizontal" | "vertical"): string;
    deleteComponent(sectionType: SectionType, index: number, isFirstPage?: boolean): void;
    duplicateComponent(sectionType: SectionType, index: number, isFirstPage?: boolean): void;
    toggleSectionEnabled(sectionType: SectionType, isFirstPage?: boolean): void;
    toggleSectionCollapsed(sectionType: SectionType): void;
    toggleFirstPage(sectionType: SectionType): void;
    onSettingsChange(): void;
    getComponentIcon(type: ComponentType): string;
    getComponentLabel(type: ComponentType, component?: ReportComponentModel): string;
    /**
     * Get formatted created time for preview
     * In preview, shows current time formatted according to component config
     */
    getFormattedCreatedTime(component: ReportComponentModel): string;
    /**
     * Get formatted page number for preview
     * In preview, shows sample page number
     */
    getFormattedPageNumber(component: ReportComponentModel): string;
    /**
     * Get SVG points for triangle shape based on direction
     */
    getTrianglePoints(direction: string): string;
    /**
     * Get SVG points for star shape
     */
    getStarPoints(numPoints: number, innerRadiusPercent: number): string;
    /**
     * Get SVG points for arrow shape based on direction
     */
    getArrowPoints(direction: string): string;
    /**
     * Get shape config from component - reads from stChartConfig.shapeConfig if available
     */
    getShapeConfig(component: ReportComponentModel): any;
    /**
     * Get transform string for rotated shape that scales to fit within container
     */
    getShapeTransform(component: ReportComponentModel): string;
    /**
     * Get divider config from component - reads from stChartConfig.dividerConfig if available
     */
    getDividerConfig(component: ReportComponentModel): any;
    /**
     * Get the CSS class for toolbar position based on component's position
     * Toolbar appears above by default, but switches to right/bottom/inside if no space
     */
    getToolbarPositionClass(component: ReportComponentModel): string;
    /**
     * Format date according to format string
     */
    private formatDate;
    private chartConfigCache;
    /**
     * Get line chart config from component, merging with defaults.
     * Caches the result to prevent constant re-rendering.
     */
    getLineChartConfig(component: ReportComponentModel): ReportLineChartConfig;
    /**
     * Clear cached chart config for a component (call when config changes)
     */
    clearChartConfigCache(componentId?: string): void;
    private chartSampleDataCache;
    /**
     * Get sample data for line chart preview based on component config.
     * Caches the result to prevent constant re-rendering.
     */
    getLineChartSampleData(component: ReportComponentModel): ReportChartData;
    /**
     * Clear cached sample data for a component (call when config changes)
     */
    clearChartSampleDataCache(componentId?: string): void;
    private stChartConfigCache;
    private stChartSampleDataCache;
    /**
     * Get StChartConfig from component for canvas rendering.
     * Returns CACHED config - canvas only updates when clearStChartConfigCache is called (on save).
     */
    getStChartConfig(component: ReportComponentModel): StChartConfig;
    /**
     * Get sample data for st-line-chart canvas rendering.
     * Returns CACHED data to prevent re-renders on every change detection cycle.
     */
    getStChartSampleData(component: ReportComponentModel): StChartData;
    /**
     * Clear cached StChartConfig and sample data for a component (call when config is saved)
     */
    clearStChartConfigCache(componentId?: string): void;
    private stTableConfigCache;
    /**
     * Get StTableConfig from component for canvas rendering.
     * Returns CACHED config - canvas only updates when clearStChartConfigCache is called (on save).
     */
    getStTableConfig(component: ReportComponentModel): StTableConfig;
    /**
     * Get configuration for bar chart preview based on component settings.
     * Caches the result to prevent constant re-rendering.
     */
    getBarChartConfig(component: ReportComponentModel): ReportBarChartConfig;
    /**
     * Get sample data for bar chart preview based on component config.
     * Caches the result to prevent constant re-rendering.
     */
    getBarChartSampleData(component: ReportComponentModel): ReportChartData;
    /**
     * Check if a component is a widget-based component (from dashboard widgets)
     * LINE_CHART, BAR_CHART, IMAGE, etc. use st-edit-widget for editing
     */
    isWidgetComponent(component: ReportComponentModel): boolean;
    /**
     * Get list of entity alias IDs from the template configuration
     */
    getEntityAliasKeys(): string[];
    /**
     * Get entity alias name by ID
     */
    getEntityAliasName(aliasId: string): string;
    /**
     * Get a Material icon name based on widget type
     */
    getWidgetTypeIcon(type: string): string;
    /**
     * Handle entity alias selection change for widget-based components
     */
    onWidgetEntityAliasChange(aliasId: string): void;
    /**
     * Handle data keys input change for widget-based components
     */
    onWidgetDataKeysChange(dataKeys: string): void;
    /**
     * Handle widget settings change (title, background, etc.)
     */
    onWidgetSettingChange(setting: string, value: any): void;
    /**
     * Build dynamic styles for widget preview in canvas
     * Applies widget settings like backgroundColor, padding, borderRadius
     */
    getWidgetPreviewStyles(component: ReportComponentModel): {
        [key: string]: string;
    };
    /**
     * Build dynamic styles for canvas component preview (live preview)
     * Uses 'pt' units for better PDF/print scaling
     */
    getComponentPreviewStyles(component: ReportComponentModel): {
        [key: string]: string;
    };
    /**
     * Get styles for IMAGE component's img element
     * Handles width mode (auto, original, fill, custom) and object-fit
     */
    getImageStyles(component: ReportComponentModel): {
        [key: string]: string;
    };
    /**
     * Get image URL from component config
     * Checks both stChartConfig.imageConfig.imageUrl and legacy config.url
     * For entity key mode, fetches from device telemetry/attribute
     */
    getImageUrl(component: ReportComponentModel): string;
    /**
     * Fetch image URL from entity key (telemetry/attribute)
     */
    private fetchEntityKeyImageUrl;
    /** SCRIPT templates render the script panel instead of the canvas; the
     *  shared toolbar (settings, aliases, filters, versions, save, fullscreen)
     *  stays fully functional on the template entity. */
    get isScriptTemplate(): boolean;
    onScriptDirty(): void;
    buildConfiguration(): ReportConfiguration;
    save(): void;
    decline(): void;
    generateTestReport(): Promise<void>;
    /**
     * Get latest data from a widget if available
     */
    private getLatestWidgetData;
    openEntityAliases($event: Event): void;
    openFilters($event: Event): void;
    toggleVersionControl($event: Event, versionControlButton: MatButton): void;
    goBack(): void;
    editComponent($event: Event, component: ReportComponentModel, sectionType: SectionType, index: number, isFirstPage?: boolean): void;
    /**
     * Open context menu for component right-click
     */
    onComponentContextMenu(event: MouseEvent, component: ReportComponentModel, sectionType: SectionType, index: number, isFirstPage: boolean): void;
    /**
     * Open the right-side drawer with st-edit-report-widget for editing chart components
     * Uses our custom Sentient chart editor instead of tb-edit-widget
     */
    private readonly COMPONENT_TYPE_TO_ST_CHART_TYPE;
    private openEditWidgetDialog;
    /**
     * Save Sentient chart config changes (Apply button)
     * Note: This only applies changes without closing the edit panel
     */
    saveStChartConfig(): void;
    /**
     * Get subtitle for the editor panel based on chart type
     */
    getEditorSubtitle(): string;
    /**
     * Revert Sentient chart config changes
     */
    onRevertStChartEdit(): void;
    /**
     * Handle config changes from st-edit-report-widget
     */
    onStChartConfigChange(config: StChartConfig): void;
    /**
     * Close Sentient chart editing drawer
     */
    onEditStChartClosed(): void;
    /**
     * Save current editor state to cache (for state preservation when switching components)
     */
    private saveCurrentEditorStateToCache;
    /**
     * Restore editor state from cache if available
     */
    private restoreEditorStateFromCache;
    /**
     * Handle tab change from st-edit-widget
     */
    onStChartTabChange(tab: string): void;
    /**
     * Sentient chart drawer opened callback
     */
    stChartDrawerOpenedStart(): void;
    /**
     * Sentient chart drawer closed callback
     */
    stChartDrawerClosed(): void;
    /**
     * Sync entity aliases from the dialog back to the report configuration
     */
    private syncEntityAliasesFromDialog;
    /**
     * Save widget changes from tb-edit-widget
     */
    saveWidgetConfig(): void;
    /**
     * Revert widget changes from tb-edit-widget
     */
    onRevertWidgetEdit(): void;
    /**
     * Close widget editing drawer
     */
    onEditWidgetClosed(): void;
    /**
     * Widget drawer opened callback
     */
    widgetDrawerOpenedStart(): void;
    /**
     * Widget drawer closed callback
     */
    widgetDrawerClosed(): void;
    /**
     * Get help link ID based on widget type (same as dashboard editor)
     */
    helpLinkIdForWidgetType(): string;
    /**
     * Fall back to legacy property panel for non-widget components
     */
    private openLegacyEditPanel;
    /**
     * Called when chart config changes from the settings component
     */
    onChartConfigChange(chartConfig: any): void;
    /**
     * Called when chart settings change from the new comprehensive settings component
     */
    onChartSettingsChange(chartSettings: any): void;
    /**
     * Called when chart entity alias changes
     */
    onChartEntityAliasChange(entityAliasId: string): void;
    /**
     * Called when chart data keys change
     */
    onChartDataKeysChange(dataKeys: string): void;
    /**
     * Called when chart aggregation settings change
     */
    onChartAggregationChange(property: string, value: any): void;
    /**
     * Called when chart timewindow settings change
     */
    onChartTimewindowChange(property: string, value: any): void;
    /**
     * Called when chart datasource settings change (generic)
     */
    onChartDatasourceChange(property: string, value: any): void;
    /**
     * Ensure chart datasource object exists
     */
    private ensureChartDatasource;
    /**
     * Called when widget's timewindow changes
     */
    onWidgetTimewindowChange(timewindow: Timewindow): void;
    /**
     * Get widget's own timewindow (or default)
     */
    getWidgetTimewindow(): Timewindow;
    /**
     * Initialize timewindow config form for chart components.
     * Syncs the form with the editing component's config and subscribes to changes.
     */
    private initTimewindowConfigForm;
    /**
     * Update enabled/disabled state of timewindow config form controls.
     * - When "Display time window" is OFF: disable timewindow style button
     */
    private updateTimewindowConfigEnabledState;
    /**
     * Get datasources array (or create default with one empty datasource)
     * Returns ThingsBoard Datasource[] format
     */
    getDatasources(): Datasource[];
    /**
     * Create an empty datasource with ThingsBoard's Datasource structure
     */
    private createEmptyDatasource;
    /**
     * Ensure datasources array exists with proper structure
     */
    private ensureDatasourcesArray;
    /**
     * Add a new datasource
     */
    addDatasource(): void;
    /**
     * Remove a datasource by index
     */
    removeDatasource(index: number): void;
    /**
     * Update datasources array (called from tb-datasources component)
     */
    onDatasourcesChange(datasources: Datasource[]): void;
    /**
     * Update a specific datasource property
     */
    onDatasourcePropertyChange(index: number, property: string, value: any): void;
    /**
     * Track datasource by index for ngFor
     */
    trackByDatasourceIndex(index: number): number;
    /**
     * Generate a DataKey from a chip value (string or DataKey object)
     */
    generateDataKey(chip: any, type: DataKeyType, dataKeySettingsForm: FormProperty[], isLatestDataKey: boolean, dataKeySettingsFunction: DataKeySettingsFunction): DataKey;
    /**
     * Fetch available entity keys for an entity alias
     */
    fetchEntityKeys(entityAliasId: string, dataKeyTypes: Array<DataKeyType>): Observable<Array<DataKey>>;
    /**
     * Fetch available entity keys for a specific device
     */
    fetchEntityKeysForDevice(deviceId: string, dataKeyTypes: Array<DataKeyType>): Observable<Array<DataKey>>;
    /**
     * Generate next color for a data key from the material palette
     */
    private genNextDataKeyColor;
    /**
     * Create a new entity alias via dialog
     */
    createEntityAlias(alias: string, allowedEntityTypes: Array<EntityType>): Observable<EntityAlias>;
    /**
     * Edit an existing entity alias via dialog
     */
    editEntityAlias(alias: EntityAlias, allowedEntityTypes: Array<EntityType>): Observable<EntityAlias>;
    /**
     * Create a new filter via dialog
     */
    createFilter(filterName: string): Observable<Filter>;
    onEditComponentClosed(): void;
    detailsDrawerOpenedStart(): void;
    detailsDrawerClosed(): void;
    isComponentSelected(component: ReportComponentModel): boolean;
    /**
     * Select a component (for Delete key support and visual highlighting)
     * If shiftKey is true, add to multi-selection instead of replacing
     */
    selectComponent(component: ReportComponentModel, sectionType: SectionType, index: number, isFirstPage?: boolean, shiftKey?: boolean): void;
    /**
     * Find a component by ID across all sections
     */
    private findComponentById;
    /**
     * Clear all component selections (single and multi)
     */
    clearComponentSelection(): void;
    /**
     * Select all components in the active section
     */
    selectAllComponents(): void;
    /**
     * Get components array for the active section
     */
    getActiveSectionComponents(): ReportComponentModel[];
    /**
     * Set the active section (called when clicking on a section)
     */
    setActiveSection(sectionType: SectionType, isFirstPage?: boolean): void;
    /**
     * Check if a section is the active one
     */
    isSectionActive(sectionType: SectionType, isFirstPage?: boolean): boolean;
    /**
     * Check if a component is marked for cut (visual effect)
     */
    isComponentCut(component: ReportComponentModel): boolean;
    /**
     * Copy or cut selected components to clipboard
     */
    copySelectedComponents(isCut: boolean): void;
    /**
     * Paste components from clipboard into the active section
     */
    pasteComponents(): void;
    /**
     * Delete all selected components (for cut operation and Delete key)
     */
    deleteSelectedComponents(): void;
    /**
     * Delete components that were cut (based on cutComponentIds)
     */
    deleteCutComponents(): void;
    /**
     * Get the count of selected components
     */
    getSelectionCount(): number;
    /**
     * Check if multiple components are selected
     */
    hasMultiSelection(): boolean;
    /**
     * Check if a component is part of multi-selection (for styling)
     */
    isMultiSelected(component: ReportComponentModel): boolean;
    /**
     * Check if a component is currently being edited (editor panel is open for this component)
     */
    isComponentBeingEdited(component: ReportComponentModel): boolean;
    /**
     * Handle mousedown on component body - this fires BEFORE gridster drag starts
     * Used to ensure selection state is correct before drag begins
     */
    onComponentMouseDown($event: Event, component: ReportComponentModel, sectionType: SectionType, index: number, isFirstPage?: boolean): void;
    /**
     * Handle click on component body - mainly for opening editor
     * Selection is handled by onComponentMouseDown (fires before drag)
     */
    onComponentBodyClick($event: Event, component: ReportComponentModel, sectionType: SectionType, index: number, isFirstPage?: boolean): void;
    /**
     * Handle click on canvas background - clear selection if not clicking on a component
     */
    onCanvasBackgroundClick($event: Event): void;
    /**
     * Handle right-click context menu on canvas background
     */
    onCanvasBackgroundContextMenu(event: MouseEvent): void;
    /**
     * Handle timewindow changes from toolbar
     * This will trigger widgets to refresh with new time range
     */
    onTimewindowChanged(): void;
    /**
     * Handle edit widget action from tb-dashboard
     */
    private onDashboardEditWidget;
    /**
     * Handle copy/duplicate widget action from tb-dashboard
     * Creates a copy of the widget and places it below the original
     */
    private onDashboardCopyWidget;
    /**
     * Handle remove widget action (legacy - was for tb-dashboard)
     */
    private onDashboardRemoveWidget;
    /**
     * Find a content component by widget ID
     */
    private findComponentByWidgetId;
    /**
     * Generic drag over handler for any section
     */
    onSectionDragOver(event: DragEvent, sectionType: SectionType, gridsterElement: HTMLElement): void;
    /**
     * Generic drag leave handler for any section
     */
    onSectionDragLeave(event: DragEvent, sectionType: SectionType, containerElement: HTMLElement): void;
    /**
     * Generic drop handler for any section
     */
    onSectionDrop(event: DragEvent, sectionType: SectionType, isFirstPage?: boolean): void;
    /**
     * Get drop preview style for a section
     * Uses mm-based grid with no margins between cells
     */
    getDropPreviewStyleForSection(sectionType: SectionType): {
        [key: string]: string;
    };
    onContentDragOver(event: DragEvent): void;
    onContentDragLeave(event: DragEvent): void;
    onContentDrop(event: DragEvent): void;
    getDropPreviewStyle(): {
        [key: string]: string;
    };
    onHeaderDragOver(event: DragEvent): void;
    onHeaderDragLeave(event: DragEvent): void;
    onHeaderDrop(event: DragEvent): void;
    onFooterDragOver(event: DragEvent): void;
    onFooterDragLeave(event: DragEvent): void;
    onFooterDrop(event: DragEvent): void;
    openSettings($event: Event): void;
    onComponentConfigChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportBuilderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportBuilderComponent, "tb-report-builder", never, {}, {}, never, never, false, never>;
}
export {};
