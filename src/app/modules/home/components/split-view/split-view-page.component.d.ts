import { TimewindowPreferenceService } from '@core/services/timewindow-preference.service';
import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { DashboardService } from '@core/http/dashboard.service';
import { PermissionService } from '@core/services/permission.service';
import { TimeService } from '@core/services/time.service';
import { HomeService } from '@core/services/home.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { Dashboard } from '@shared/models/dashboard.models';
import { Timewindow } from '@shared/models/time/time.models';
import { SplitViewConfig, SplitViewLayout, SplitViewLayoutDef, SplitViewPage, SplitViewTimewindowMode, SplitViewToolbarSettings } from '@shared/models/split-view.models';
import { SplitViewPickedDashboard } from './split-view-dashboard-picker.component';
import { SplitViewEditorResult } from './split-view-editor.component';
import * as i0 from "@angular/core";
interface SplitViewLayer {
    key: string;
    pageId: string;
    role: 'current' | 'next' | 'leaving';
    fadeIn: boolean;
}
interface SplitViewDivider {
    kind: 'col' | 'row';
    index: number;
    style: {
        [key: string]: string;
    };
    value: number;
    /** Where its grips sit along it (percent): the middle of each pane edge it runs along. */
    grips: number[];
}
/**
 * The split view screen: several live dashboards on one (big) screen, a top
 * bar that stands in for the app bar, pages with an optional slideshow, and
 * the setup screen for users who may change the split view.
 *
 * Loaded on demand by DashboardPageComponent when the opened dashboard is a
 * split view, so none of this is in the initial bundle.
 */
export declare class SplitViewPageComponent implements OnInit, OnChanges, OnDestroy {
    private store;
    private dashboardService;
    private permissionService;
    private timeService;
    private homeService;
    private importExport;
    private translate;
    private router;
    private route;
    private breakpointObserver;
    private ngZone;
    private cd;
    private timewindowPreference;
    elRef: ElementRef<HTMLElement>;
    dashboard: Dashboard;
    embedded: boolean;
    /** The dashboard page's own read-only rule (customer users, kiosk, mobile app, embedded, ?readonly=true). */
    readonly: boolean;
    /** This screen is the page: its top bar replaces the app bar. */
    ownsMainToolbar: boolean;
    forceFullscreen: boolean;
    startInEdit: boolean;
    dashboardSaved: EventEmitter<Dashboard>;
    readonly hostClass = true;
    stage: ElementRef<HTMLElement>;
    readonly splitIcon = "view_quilt";
    readonly layouts: SplitViewLayoutDef[];
    saved: SplitViewConfig;
    pages: SplitViewPage[];
    currentPageId: string;
    layers: SplitViewLayer[];
    maxPaneId: string;
    sharedTimewindow: Timewindow;
    timewindowMode: SplitViewTimewindowMode;
    slideshowOn: boolean;
    paused: boolean;
    isFullscreen: boolean;
    editing: boolean;
    private parked;
    editorDirty: boolean;
    saving: boolean;
    phone: boolean;
    canWrite: boolean;
    isPublic: boolean;
    announcement: string;
    dragSourcePaneId: string;
    dropTargetPaneId: string;
    private personal;
    private liveSizes;
    private userId;
    private subscriptions;
    private timer;
    private lastTick;
    private elapsedMs;
    private lastInteraction;
    private removeListeners;
    private fadeTimers;
    constructor(store: Store<AppState>, dashboardService: DashboardService, permissionService: PermissionService, timeService: TimeService, homeService: HomeService, importExport: ImportExportService, translate: TranslateService, router: Router, route: ActivatedRoute, breakpointObserver: BreakpointObserver, ngZone: NgZone, cd: ChangeDetectorRef, timewindowPreference: TimewindowPreferenceService, elRef: ElementRef<HTMLElement>);
    get isDirty(): boolean;
    get currentPage(): SplitViewPage;
    get currentPageIndex(): number;
    get paneTimewindow(): Timewindow | null;
    get hasPersonal(): boolean;
    get slideshowActive(): boolean;
    get toolbar(): SplitViewToolbarSettings;
    /**
     * The split view's settings hide its top bar: no bar at all (the app bar
     * stays hidden too, see DashboardPageComponent.hidesMainToolbar), the panes
     * take the full height, and users who may edit get a floating edit button.
     */
    get barHidden(): boolean;
    /** Search and bell at the end of the bar, also in full screen and kiosk (as on a dashboard). */
    get showAppChrome(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /** Runs while the router decides whether to park this page: full screen lives in an overlay. */
    prepareToPark(): void;
    /** Off screen in the keep-alive cache: the slideshow stops. */
    park(): void;
    unpark(): void;
    private noteInteraction;
    /** Where this user's own default shared time window is kept. */
    timewindowPreferenceKey(dashboard?: Dashboard): string;
    private applyDashboard;
    private recompute;
    pageById(pageId: string): SplitViewPage;
    private storageKey;
    private readPersonal;
    private writePersonal;
    /** A viewer's change to one page: kept for this viewer only. */
    private updatePage;
    setLayout(layout: SplitViewLayout): void;
    pickDashboard(page: SplitViewPage, index: number, picked: SplitViewPickedDashboard): void;
    toggleMaximize(paneId: string): void;
    movePane(page: SplitViewPage, index: number, delta: number): void;
    private swapPanes;
    setTimewindowMode(mode: SplitViewTimewindowMode): void;
    onSharedTimewindowChange(timewindow: Timewindow): void;
    resetToSaved(): void;
    saveForEveryone(): void;
    exportSplitView(): void;
    toggleSlideshow(): void;
    toggleSidenav(): void;
    enterEdit(): void;
    exitEdit(): void;
    onEditorSave(result: SplitViewEditorResult): void;
    private save;
    private clearEditParam;
    goToPage(index: number): void;
    private prepareNext;
    private tick;
    private reducedMotion;
    slideshowLabel(): string;
    layoutDef(page: SplitViewPage): SplitViewLayoutDef;
    private fractions;
    /**
     * A maximised pane is laid over the grid; the other panes keep their size
     * underneath, hidden, so their dashboards never re-render at zero size.
     */
    isMaximized(page: SplitViewPage): boolean;
    gridStyle(page: SplitViewPage): {
        [key: string]: string;
    };
    paneArea(page: SplitViewPage, index: number): string;
    dividers(page: SplitViewPage): SplitViewDivider[];
    dividerLabel(page: SplitViewPage, divider: SplitViewDivider): string;
    private resized;
    onDividerPointerDown(event: PointerEvent, page: SplitViewPage, divider: SplitViewDivider): void;
    /** Pins every pane's dashboard to its current pixel size; returns the undo. */
    private freezePaneContent;
    onDividerKeydown(event: KeyboardEvent, page: SplitViewPage, divider: SplitViewDivider): void;
    onPaneHandleDown(event: PointerEvent, page: SplitViewPage, index: number): void;
    frs(values: number[]): string;
    trackLayer(_index: number, layer: SplitViewLayer): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewPageComponent, "st-split-view-page", never, { "dashboard": { "alias": "dashboard"; "required": false; }; "embedded": { "alias": "embedded"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "ownsMainToolbar": { "alias": "ownsMainToolbar"; "required": false; }; "forceFullscreen": { "alias": "forceFullscreen"; "required": false; }; "startInEdit": { "alias": "startInEdit"; "required": false; }; }, { "dashboardSaved": "dashboardSaved"; }, never, never, true, never>;
}
export {};
