import { TimewindowPreferenceService } from '@core/services/timewindow-preference.service';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, Injector, NgZone, DoCheck, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '@core/services/utils.service';
import { Dashboard, DashboardConfiguration, LayoutType, WidgetLayout } from '@app/shared/models/dashboard.models';
import { DashboardContext, DashboardPageLayoutContext, DashboardPageLayouts, DashboardPageScope, IDashboardController } from './dashboard-page.models';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthUser } from '@shared/models/user.model';
import { Widget, WidgetInfo, WidgetPosition, widgetType } from '@shared/models/widget.models';
import { DialogService } from '@core/services/dialog.service';
import { EntityService } from '@core/http/entity.service';
import { BehaviorSubject } from 'rxjs';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardContextMenuItem, IDashboardComponent, WidgetContextMenuItem } from '../../models/dashboard-component.models';
import { WidgetComponentService } from '../../components/widget/widget-component.service';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { MatDialog } from '@angular/material/dialog';
import { EditWidgetComponent } from '@home/components/dashboard-page/edit-widget.component';
import { TranslateService } from '@ngx-translate/core';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { AuthState } from '@app/core/auth/auth.models';
import { Overlay } from '@angular/cdk/overlay';
import { DashboardWidgetSelectComponent } from '@home/components/dashboard-page/dashboard-widget-select.component';
import { MobileService } from '@core/services/mobile.service';
import { DashboardReuseService } from '@core/services/dashboard-reuse.service';
import { HomeService } from '@core/services/home.service';
import { DashboardSelectComponent } from '@shared/components/dashboard-select.component';
import { IAliasController } from '@core/api/widget-api.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { ILayoutController } from '@home/components/dashboard-page/layout/layout.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { HasDirtyFlag } from '@core/guards/confirm-on-exit.guard';
import { Timewindow } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class DashboardPageComponent extends PageComponent implements IDashboardController, HasDirtyFlag, OnInit, AfterViewInit, DoCheck, OnDestroy {
    protected store: Store<AppState>;
    private window;
    private document;
    private breakpointObserver;
    private route;
    private router;
    private utils;
    private dashboardUtils;
    private entityService;
    private dialogService;
    private widgetComponentService;
    private dashboardService;
    private itembuffer;
    private importExport;
    private mobileService;
    private dialog;
    translate: TranslateService;
    private popoverService;
    private renderer;
    private ngZone;
    private timewindowPreference;
    private embeddedValue;
    private overlay;
    private viewContainerRef;
    private cd;
    elRef: ElementRef;
    private injector;
    private dashboardReuseService;
    private homeService;
    LayoutType: typeof LayoutType;
    private destroyed;
    private forcePristine;
    get isDirty(): boolean;
    set isDirty(value: boolean);
    private configDirtyValue;
    private get configDirty();
    private set configDirty(value);
    get dashboardDirty(): boolean;
    onBeforeUnload(event: BeforeUnloadEvent): void;
    authState: AuthState;
    authUser: AuthUser;
    dashboardPageClass: string;
    /** Lets the AI assistant's point mode tell which dashboard a widget is on. */
    get stDashboardId(): string | null;
    embedded: boolean;
    currentState: string;
    private hideToolbarValue;
    set hideToolbar(hideToolbar: boolean);
    get hideToolbar(): boolean;
    get scadaZoomCtrl(): ILayoutController | null;
    syncStateWithQueryParam: boolean;
    /**
     * This page's toolbar replaces the app bar (breadcrumb, bell, AI assistant,
     * expand). Pass false where the dashboard is not the page: dialogs,
     * previews, a dashboard state inside a widget. Popover and nested
     * dashboards (popoverComponent / parentDashboard set) never take the bar.
     * When this toolbar is not shown (hideToolbar, or closed when it is not
     * always open), the app bar stays, so the page always has a top bar.
     */
    hideMainToolbar: boolean;
    dashboard: Dashboard;
    dashboardConfiguration: DashboardConfiguration;
    parentDashboard?: IDashboardComponent;
    popoverComponent?: TbPopoverComponent;
    parentAliasController?: IAliasController;
    dashboardContainer: ElementRef<HTMLElement>;
    /**
     * The dashboard is a split view (dashboardType SPLIT_VIEW): this page renders
     * the split view screen, loaded on demand, instead of the widget grid. Every
     * place a dashboard opens (the dashboards list, /dashboard/:id full screen,
     * the home dashboard, public links, entity groups) comes through here.
     */
    splitViewMode: boolean;
    splitViewHost: ViewContainerRef;
    private splitViewRef;
    private splitViewLoad;
    dashboardSelect: DashboardSelectComponent;
    dashboardContent: ElementRef<HTMLElement>;
    saving: boolean;
    private static readonly SAVE_TIMEOUT_MS;
    prevDashboard: Dashboard;
    private undoStack;
    private redoStack;
    private pendingUndoSnapshot;
    private static readonly UNDO_DEPTH;
    iframeMode: boolean;
    widgetEditMode: boolean;
    singlePageMode: boolean;
    forceFullscreen: boolean;
    readonly: boolean;
    isMobileApp: boolean;
    /** The mobile app shows the AI assistant button in its own top bar. */
    nativeAiButton$: BehaviorSubject<boolean>;
    private isFullscreenValue;
    get isFullscreen(): boolean;
    set isFullscreen(value: boolean);
    isEdit: boolean;
    /** The tenant's content languages, and the one shown: "Preview in" while
     *  editing, and the toolbar's language menu when the dashboard shows it. */
    previewLanguages: {
        code: string;
        name: string;
    }[];
    previewLang: string;
    isEditingWidget: boolean;
    isEditingWidgetClosed: boolean;
    isMobile: boolean;
    forceDashboardMobileMode: boolean;
    isAddingWidget: boolean;
    isAddingWidgetClosed: boolean;
    editDetailsShrink: boolean;
    filterWidgetTypes: widgetType[];
    activeLayer: number;
    hiddenLayers: Set<number>;
    lockedLayers: Set<number>;
    private lastPastePosition;
    private static readonly PASTE_CASCADE_OFFSET;
    private static readonly DEFAULT_LAYER_DEFINITIONS;
    isToolbarOpened: boolean;
    sentientVersion: string;
    isToolbarOpenedAnimate: boolean;
    isRightLayoutOpened: boolean;
    editingWidget: Widget;
    editingWidgetLayout: WidgetLayout;
    editingWidgetOriginal: Widget;
    editingWidgetLayoutOriginal: WidgetLayout;
    editingWidgetSubtitle: string;
    editingLayoutCtx: DashboardPageLayoutContext;
    thingsboardVersion: string;
    translatedDashboardTitle: string;
    currentDashboardId: string;
    currentCustomerId: string;
    currentDashboardScope: DashboardPageScope;
    setStateDashboardId: boolean;
    addingLayoutCtx: DashboardPageLayoutContext;
    mainLayoutSize: {
        width: string;
        height: string;
        maxWidth: string;
        minWidth: string;
    };
    rightLayoutSize: {
        width: string;
        height: string;
    };
    private dashboardLogoCache;
    private defaultDashboardLogo;
    private dashboardResize$;
    dashboardCtx: DashboardContext;
    layouts: DashboardPageLayouts;
    updateBreadcrumbs: EventEmitter<any>;
    private rxSubscriptions;
    get toolbarOpened(): boolean;
    set toolbarOpened(toolbarOpened: boolean);
    get rightLayoutOpened(): boolean;
    set rightLayoutOpened(rightLayoutOpened: boolean);
    get mobileDisplayRightLayoutFirst(): boolean;
    set mobileDisplayRightLayoutFirst(mobileDisplayRightLayoutFirst: boolean);
    editWidgetComponent: EditWidgetComponent;
    dashboardWidgetSelectComponent: DashboardWidgetSelectComponent;
    widgetBarSearchRef: ElementRef<HTMLInputElement>;
    set widgetDrawerBarRef(ref: ElementRef<HTMLElement>);
    widgetSearchOpen: boolean;
    propSearchOpen: boolean;
    propSearchText: string;
    propSearchCount: number;
    private propertySearch;
    propBarSearchRef: ElementRef<HTMLInputElement>;
    propWindowSearchRef: ElementRef<HTMLInputElement>;
    propsFloating: boolean;
    propsWindowPos: {
        left: number;
        top: number;
    };
    propsWindowSize: {
        width: number;
        height: number;
    };
    private lastDrawerBarMode;
    private widgetDrawerBarEl;
    private observedDrawer;
    private widgetBarObserver;
    readonly shortcutLabel: string;
    private widgetBarTitle;
    private swallowKeypress;
    private readonly widgetBarShortcut;
    private readonly widgetBarKeypress;
    private readonly widgetBarKeyup;
    private changeMobileSize;
    constructor(store: Store<AppState>, window: Window, document: Document, breakpointObserver: BreakpointObserver, route: ActivatedRoute, router: Router, utils: UtilsService, dashboardUtils: DashboardUtilsService, entityService: EntityService, dialogService: DialogService, widgetComponentService: WidgetComponentService, dashboardService: DashboardService, itembuffer: ItemBufferService, importExport: ImportExportService, mobileService: MobileService, dialog: MatDialog, translate: TranslateService, popoverService: TbPopoverService, renderer: Renderer2, ngZone: NgZone, timewindowPreference: TimewindowPreferenceService, embeddedValue: any, overlay: Overlay, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef, elRef: ElementRef, injector: Injector, dashboardReuseService: DashboardReuseService, homeService: HomeService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private prefetchWidgetTypes;
    private routeReattaching;
    private pristineConfiguration;
    private pristineEtag;
    private routeDetached;
    /** Embedded: the dashboard input the page was last initialised from. */
    private embeddedInitFor;
    tbOnRouteReattached(): void;
    private init;
    private initSplitView;
    private destroySplitView;
    /**
     * Shows every widget that follows the dashboard time window with this one
     * (a split view's shared time window drives each pane this way).
     */
    setDashboardTimewindow(timewindow: Timewindow): void;
    private updateDashboardCss;
    private cleanupDashboardCss;
    private reset;
    /**
     * Open the state that holds the widget (or the given state), scroll the
     * widget into view and pulse it a few times with a label naming the text.
     * Waits for the dashboard to render; gives up quietly after 15 s.
     */
    private showHighlightTarget;
    private clearHighlightParams;
    ngDoCheck(): void;
    /** This dashboard is the page, so its toolbar may stand in for the app bar. */
    ownsMainToolbar(): boolean;
    /**
     * The app bar is hidden while this page's own toolbar is shown, and also
     * when the dashboard (opened as its own page) is set to hide its toolbar:
     * then the page has no top bar at all, only the floating edit button,
     * which brings the toolbar back in edit mode.
     */
    private hidesMainToolbar;
    toggleSidenav(): void;
    ngOnDestroy(): void;
    runChangeDetection(): void;
    openToolbar(): void;
    closeToolbar(): void;
    showCloseToolbar(): boolean;
    hideFullscreenButton(): boolean;
    toolbarAlwaysOpen(): boolean;
    private hideToolbarSetting;
    displayTitle(): boolean;
    private getTranslatedDashboardTitle;
    dashboardTitleColor(): string;
    dashboardTitleStyle(): {
        [key: string]: string;
    };
    onDashboardTitleChanged(): void;
    onEditTimewindowChanged(): void;
    private isDefaultBlackTitleColor;
    displayExport(): boolean;
    displayDashboardReload(): boolean;
    reloadDashboard(): void;
    displayDashboardLanguage(): boolean;
    displayUpdateDashboardImage(): boolean;
    displayDashboardTimewindow(): boolean;
    displayDashboardsSelect(): boolean;
    displayEntitiesSelect(): boolean;
    displayFilters(): boolean;
    showDashboardLogo(): boolean;
    get dashboardLogo(): string;
    showRightLayoutSwitch(): boolean;
    toggleLayouts(): void;
    openRightLayout(): void;
    updateLayoutSizes(): void;
    private updateMainLayoutSize;
    private updateRightLayoutSize;
    private calculateWidth;
    isPublicUser(): boolean;
    /** Show the dashboard's texts in another content language while editing; nothing is saved. */
    previewIn(lang: string | null): void;
    private loadPreviewLanguages;
    private endPreview;
    /** Widgets translate their texts when created, so recreate them. */
    private rebuildWidgets;
    isTenantAdmin(): boolean;
    isSystemAdmin(): boolean;
    exportDashboard($event: Event): void;
    openEntityAliases($event: Event): void;
    openFilters($event: Event): void;
    openDashboardSettings($event: Event): void;
    manageDashboardStates($event: Event): void;
    isCurrentLayoutScada(): boolean;
    getActiveLayerName(): string;
    getCurrentLayerDefinitions(): {
        id: number;
        name?: string;
    }[];
    setActiveLayer(layer: number): void;
    isLayerHidden(layer: number): boolean;
    isLayerLocked(layer: number): boolean;
    toggleLayerHidden(layer: number): void;
    toggleLayerLocked(layer: number): void;
    private refreshLayerStateOnDashboards;
    getLayerWidgetCounts(): {
        [layerId: number]: number;
    };
    openLayerSettings(): void;
    /** A List breakpoint stacks its widgets in their mobile order, so they
     *  cannot be dragged or resized; switching it to Grid lets them be placed. */
    switchBreakpointToGrid(layoutCtx: DashboardPageLayoutContext): void;
    manageDashboardLayouts($event: Event): void;
    private moveWidgets;
    private updateDashboardLayouts;
    private updateStates;
    importWidget($event: Event): void;
    private editMissingAliases;
    currentDashboardIdChanged(dashboardId: string): void;
    toggleDashboardEditMode(): void;
    saveDashboard(closeEditMode?: boolean): void;
    openDashboardState(state: string, openRightLayout?: boolean): void;
    /** The resolved dashboard is the one this page was built from. */
    private isPristine;
    private initRouteChrome;
    private updateLayouts;
    private updateLayout;
    private updateReuseCacheability;
    private leaveFullscreenForParking;
    private mobileToggleLayoutFn;
    private registerMobileToggleLayout;
    private unregisterMobileToggleLayout;
    private announcePageVisibility;
    tbOnRouteDetached(): void;
    private setEditMode;
    private resetHighlight;
    private canCapture;
    private undoEnabled;
    canUndo(): boolean;
    canRedo(): boolean;
    private resetUndo;
    private pushSnapshot;
    pushUndoSnapshot(): void;
    beginWidgetChange(): void;
    commitWidgetChange(): void;
    undo(): void;
    redo(): void;
    /** Where this user's own default time window for the dashboard is kept. */
    timewindowPreferenceKey(): string;
    private restoreDashboardSnapshot;
    private entityAliasesUpdated;
    private filtersUpdated;
    private notifyDashboardToggleEditMode;
    private notifyDashboardUpdated;
    helpLinkIdForWidgetType(): string;
    addWidget($event: Event, layoutCtx?: DashboardPageLayoutContext): void;
    onAddWidgetClosed(): void;
    detailsDrawerOpened(): void;
    detailsDrawerClosed(): void;
    private focusEditingWidget;
    private addWidgetToLayout;
    private isAddingToScadaLayout;
    private selectTargetLayout;
    private addWidgetToDashboard;
    addWidgetFromType(widget: WidgetInfo): void;
    onRevertWidgetEdit(): void;
    saveWidget(): void;
    onEditWidgetClosed(): void;
    editWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    showLayoutConfigInEdit(layoutCtx: DashboardPageLayoutContext): boolean;
    replaceReferenceWithWidgetCopy($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    copyWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    copyWidgetReference($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    copyWidgetsReference($event: Event, layoutCtx: DashboardPageLayoutContext, widgets: Widget[]): void;
    pasteWidgetDimensions($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    pasteWidgetStyle($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    copyWidgets($event: Event, layoutCtx: DashboardPageLayoutContext, widgets: Widget[]): void;
    pasteWidget($event: Event, layoutCtx: DashboardPageLayoutContext, pos: WidgetPosition): void;
    private selectPastedWidgets;
    private scadaKeyboardPastePosition;
    pasteWidgetReference($event: Event, layoutCtx: DashboardPageLayoutContext, pos: WidgetPosition): void;
    removeWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    removeWidgets($event: Event, layoutCtx: DashboardPageLayoutContext, widgets: Widget[]): void;
    /** The widget open in the properties panel was deleted: close the panel. */
    private closeEditorIfRemoved;
    moveWidgetToLayer(layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    moveWidgetsToLayer(layoutCtx: DashboardPageLayoutContext, widgets: Widget[]): void;
    changeWidgetLayer(layoutCtx: DashboardPageLayoutContext, widget: Widget, mode: 'front' | 'back' | 'forward' | 'backward'): void;
    private renormalizeLayerZOrders;
    exportWidget($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget, widgetTitle: string): void;
    dashboardMouseDown($event: Event, layoutCtx: DashboardPageLayoutContext): void;
    widgetClicked($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    widgetMouseDown($event: Event, layoutCtx: DashboardPageLayoutContext, widget: Widget): void;
    prepareDashboardContextMenu(layoutCtx: DashboardPageLayoutContext): Array<DashboardContextMenuItem>;
    private contextMenuTargets;
    prepareWidgetContextMenu(layoutCtx: DashboardPageLayoutContext, widget: Widget, isReference: boolean): Array<WidgetContextMenuItem>;
    /** The add-widget drawer is open and the top bar is its toolbar. */
    addWidgetInBar(): boolean;
    /** The widget-properties drawer is open (docked) and the top bar is its toolbar. */
    editWidgetInBar(): boolean;
    drawerBarActive(): boolean;
    drawerBarMode(): 'add' | 'edit';
    /** The properties drawer, docked at the side. */
    propsDocked(): boolean;
    private lastSizedWidget;
    /** The properties, in their window over the dashboard. */
    propsFloatingNow(): boolean;
    /** Widgets whose settings need room (charts, tables, maps) get the wide drawer. */
    editingWidgetWide(): boolean;
    /** The docked drawer's width when the user has set one for this widget type. */
    propsDrawerWidth(): number;
    /** The widget the drawer is sized for: kept while it slides out after a close,
     *  so its width doesn't jump mid-slide. */
    private sizedWidget;
    setPropsFloating(floating: boolean): void;
    /** The properties' search: replaces their toolbar with a field, focused. */
    openPropSearch(): void;
    private focusPropSearch;
    closePropSearch(): void;
    onPropSearch(text: string): void;
    /** Esc in the properties' search: clears it first, then closes the search. */
    onPropSearchEscape(event: Event): void;
    propSearchCountLabel(): string;
    /** Drag the docked drawer's edge: its width, remembered for this widget type. */
    startPropsResize(event: PointerEvent): void;
    readonly propsWindowEdges: {
        name: string;
        x: -1 | 0 | 1;
        y: -1 | 0 | 1;
    }[];
    /** Resize the properties window from any edge or corner; the opposite side stays put. */
    startPropsWindowResize(event: PointerEvent, sideX: -1 | 0 | 1, sideY: -1 | 0 | 1): void;
    /** Where the window shows: its saved place, pulled back so its header stays grabbable. */
    propsWindowLeft(): number;
    propsWindowTop(): number;
    /** Drag the properties window by its header, anywhere on screen (part of the header stays on it). */
    startPropsDrag(event: PointerEvent): void;
    /** The picker's mode; "bundles" before the picker exists (its first frame). */
    widgetBarMode(): 'bundles' | 'allWidgets';
    addWidgetBarCanGoBack(): boolean;
    addWidgetBarTitle(): string;
    addWidgetBarPlaceholder(): string;
    onWidgetBarSearch(text: string): void;
    /** Esc in the drawer's search: clears it first, then closes the search. */
    onWidgetBarEscape(event: Event): void;
    /** The search icon: the field takes the drawer toolbar's place, focused. */
    openWidgetSearch(): void;
    /** Its back button (or Esc on an empty field): back to the toolbar, search cleared. */
    closeWidgetSearch(): void;
    /** Lines the drawer's toolbar up with the drawer: the width left of it shows
     *  the dashboard, the rest is the drawer's (measured from the drawer's own
     *  width, so its slide-in does not move the split). */
    private syncWidgetBarSplit;
    clearSelectedWidgetBundle(): void;
    editWidgetsTypesToDisplay($event: Event): void;
    updateDashboardImage($event: Event): void;
    toggleVersionControl($event: Event, versionControlButton: MatButton): void;
    get showMainLayoutFiller(): boolean;
    get currentBreakpointValue(): string;
    private parseBreakpointsResponse;
    private isMobileSize;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardPageComponent, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, { optional: true; }, null, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardPageComponent, "tb-dashboard-page", never, { "embedded": { "alias": "embedded"; "required": false; }; "currentState": { "alias": "currentState"; "required": false; }; "hideToolbar": { "alias": "hideToolbar"; "required": false; }; "syncStateWithQueryParam": { "alias": "syncStateWithQueryParam"; "required": false; }; "hideMainToolbar": { "alias": "hideMainToolbar"; "required": false; }; "dashboard": { "alias": "dashboard"; "required": false; }; "parentDashboard": { "alias": "parentDashboard"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; "parentAliasController": { "alias": "parentAliasController"; "required": false; }; }, {}, never, never, false, never>;
}
