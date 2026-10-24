import { ChangeDetectorRef, EventEmitter, Injector, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { Dashboard } from '@shared/models/dashboard.models';
import { SplitViewPane } from '@shared/models/split-view.models';
import { Timewindow } from '@shared/models/time/time.models';
import { SplitViewPickedDashboard } from './split-view-dashboard-picker.component';
import * as i0 from "@angular/core";
export type SplitViewPaneStatus = 'empty' | 'loading' | 'ready' | 'forbidden' | 'removed' | 'nested' | 'error';
/**
 * One pane of a split view: a slim header and a full, live dashboard below it
 * (the same dashboard page every other embedding uses). The dashboard is
 * loaded with the viewer's own permissions; a dashboard the viewer may not
 * open, or one that is gone, shows a message in the pane instead.
 */
export declare class SplitViewPaneComponent implements OnChanges, OnDestroy {
    private dashboardService;
    private dashboardUtils;
    private injector;
    private cd;
    pane: SplitViewPane;
    index: number;
    total: number;
    /** The split view's shared time window; null when each pane keeps its dashboard's own. */
    sharedTimewindow: Timewindow | null;
    showHeader: boolean;
    /**
     * Live (real-time) / History chip in the header. Only with a time window
     * per pane: a shared one is shown, once, in the top bar.
     */
    showLiveChip: boolean;
    maximized: boolean;
    canMove: boolean;
    dashboardPicked: EventEmitter<SplitViewPickedDashboard>;
    toggleMaximize: EventEmitter<void>;
    moveBy: EventEmitter<number>;
    dragHandleDown: EventEmitter<PointerEvent>;
    get paneIdAttr(): string;
    dashboardHost: ViewContainerRef;
    status: SplitViewPaneStatus;
    dashboard: Dashboard;
    stateName: string;
    private dashboardRef;
    private ownTimewindow;
    private loadSubscription;
    constructor(dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, injector: Injector, cd: ChangeDetectorRef);
    get title(): string;
    get live(): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    retry(): void;
    private load;
    private mount;
    private unmount;
    onHandleKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewPaneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewPaneComponent, "st-split-view-pane", never, { "pane": { "alias": "pane"; "required": false; }; "index": { "alias": "index"; "required": false; }; "total": { "alias": "total"; "required": false; }; "sharedTimewindow": { "alias": "sharedTimewindow"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "showLiveChip": { "alias": "showLiveChip"; "required": false; }; "maximized": { "alias": "maximized"; "required": false; }; "canMove": { "alias": "canMove"; "required": false; }; }, { "dashboardPicked": "dashboardPicked"; "toggleMaximize": "toggleMaximize"; "moveBy": "moveBy"; "dragHandleDown": "dragHandleDown"; }, never, never, true, never>;
}
