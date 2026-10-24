import { Timewindow } from '@shared/models/time/time.models';
/**
 * A split view is a kind of dashboard (dashboardType SPLIT_VIEW) that shows
 * several other dashboards side by side on one screen. Its layout lives in
 * configuration.splitView. Everything else (permissions, groups, owner,
 * public, home dashboard, starred/recent) is the dashboard's.
 *
 * Kept free of Angular so the list, the command palette and import/export can
 * use it without pulling the lazily loaded split view screen in.
 */
export type DashboardType = 'DASHBOARD' | 'SPLIT_VIEW';
export declare const SPLIT_VIEW_ICON = "view_quilt";
export declare enum SplitViewLayout {
    SINGLE = "SINGLE",
    SIDE_BY_SIDE = "SIDE_BY_SIDE",
    TOP_BOTTOM = "TOP_BOTTOM",
    GRID_2X2 = "GRID_2X2",
    ONE_PLUS_TWO = "ONE_PLUS_TWO",
    THREE_COLUMNS = "THREE_COLUMNS"
}
export interface SplitViewSizes {
    cols?: number[];
    rows?: number[];
}
export interface SplitViewPane {
    id: string;
    dashboardId: string | null;
    stateId: string | null;
}
export interface SplitViewPage {
    id: string;
    name: string;
    layout: SplitViewLayout;
    sizes?: SplitViewSizes;
    panes: SplitViewPane[];
}
export type SplitViewTimewindowMode = 'SHARED' | 'PER_PANE';
/**
 * What the split view's top bar shows. The edit button and the more-actions
 * menu always show for users who may edit. With `hidden`, there is no top bar
 * (and no app bar) at all, only a floating edit button for those users.
 */
export interface SplitViewToolbarSettings {
    hidden: boolean;
    showLayoutSwitcher: boolean;
    showTimewindow: boolean;
    showSlideshowControl: boolean;
    showFullscreen: boolean;
    showSearch: boolean;
    showNotifications: boolean;
}
export declare const defaultSplitViewToolbar: () => SplitViewToolbarSettings;
/** Stored toolbar settings with defaults filled in (a missing or non-boolean value is the default). */
export declare const normalizeSplitViewToolbar: (raw: any) => SplitViewToolbarSettings;
export interface SplitViewConfig {
    version: number;
    pages: SplitViewPage[];
    slideshow: {
        enabled: boolean;
        intervalSec: number;
    };
    timewindow: {
        mode: SplitViewTimewindowMode;
        value: Timewindow | null;
    };
    showPaneHeaders: boolean;
    openFullscreen: boolean;
    toolbar: SplitViewToolbarSettings;
}
export interface SplitViewLayoutDef {
    layout: SplitViewLayout;
    /** Translation key of the layout's name. */
    name: string;
    cols: number[];
    rows: number[];
    /** CSS grid-area of each pane, in pane order. */
    areas: string[];
    /** Row dividers: the columns (1-based, [start, end)) a horizontal divider spans. */
    rowDividerCols?: [number, number];
}
export declare const SPLIT_VIEW_LAYOUTS: SplitViewLayoutDef[];
export declare const SPLIT_VIEW_SLIDESHOW_PRESETS: number[];
export declare const SPLIT_VIEW_SLIDESHOW_MIN = 10;
export declare const SPLIT_VIEW_SLIDESHOW_MAX = 3600;
export declare const splitViewLayoutDef: (layout: SplitViewLayout | string) => SplitViewLayoutDef;
export declare const splitViewPaneCount: (layout: SplitViewLayout | string) => number;
export declare const isSplitView: (dashboard: {
    dashboardType?: string | null;
} | null | undefined) => boolean;
export declare const emptySplitViewPane: () => SplitViewPane;
export declare const createSplitViewPage: (name: string, layout?: SplitViewLayout) => SplitViewPage;
export declare const defaultSplitViewConfig: (firstPageName: string) => SplitViewConfig;
/** A page with its pane list fitted to its layout: extra panes dropped, missing ones added empty. */
export declare const fitPageToLayout: (page: SplitViewPage, layout: SplitViewLayout) => SplitViewPage;
/** The configuration as stored, made safe to render: defaults filled in, pane counts matching layouts. */
export declare const normalizeSplitViewConfig: (raw: any, firstPageName?: string) => SplitViewConfig;
/** Every distinct dashboard id the panes of a configuration point to. */
export declare const splitViewDashboardIds: (config: SplitViewConfig | null | undefined) => string[];
/** The state parameter a dashboard page takes to open a given state (the state controller's own format). */
export declare const splitViewStateParam: (stateId: string | null) => string | undefined;
export declare const escapeHtml: (text: string) => string;
/** ZIP export of a split view with its dashboards. */
export declare const SPLIT_VIEW_ZIP_FORMAT = "sentient-split-view";
export interface SplitViewZipManifest {
    format: typeof SPLIT_VIEW_ZIP_FORMAT;
    version: number;
    splitView: string;
    dashboards: {
        id: string;
        title: string;
        file: string;
    }[];
}
/** What GET /api/dashboard/{splitViewId}/paneDashboards returns per dashboard. */
export interface SplitViewPaneDashboardInfo {
    id: string | {
        id: string;
    };
    title: string;
    assignedToCustomer?: boolean;
    public?: boolean;
}
