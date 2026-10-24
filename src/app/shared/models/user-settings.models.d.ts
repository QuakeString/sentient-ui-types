import { Timewindow } from '@shared/models/time/time.models';
export interface UserSettings {
    openedMenuSections?: string[];
    /** Left menu shown as an icon-only rail (desktop). Absent = expanded. */
    menuCollapsed?: boolean;
    notDisplayConnectivityAfterAddDevice?: boolean;
    notDisplayInstructionsAfterAddEdge?: boolean;
    notDisplayConfigurationAfterAddMobileBundle?: boolean;
    includeBundleWidgetsInExport?: boolean;
    includeResourcesInExportWidgetTypes?: boolean;
    includeResourcesInExportDashboard?: boolean;
    /** Dashboards kept alive in memory after navigating away (route keep-alive
     *  depth). 0 = off. Absent = the limit (DASHBOARD_KEEP_ALIVE_MAX, or
     *  DEFAULT_DASHBOARD_KEEP_ALIVE_MAX when there is none). Ignored inside the
     *  mobile app, which always keeps one. */
    dashboardKeepAliveDepth?: number;
    /** The user's own default time windows, by place (see TimewindowPreferenceService). */
    savedTimewindows?: {
        [key: string]: SavedTimewindow;
    };
    /** The user hid the "connect mobile app" QR card on their home page. */
    hideMobileQrOnHome?: boolean;
    /** Widget bundles and widgets (ids) this user starred in the widget picker. */
    favoriteWidgetsBundles?: string[];
    favoriteWidgetTypes?: string[];
}
export interface SavedTimewindow {
    /** Only the user's choice: window, aggregation, timezone. Null when the
     *  user unticked "save as default" here, so the box stays unticked. */
    timewindow: Timewindow | null;
    savedAt: number;
}
/** The keep-alive limit when the server sets none; also the depth used when
 *  the limit is "no limit" and the user left the field empty. */
export declare const DEFAULT_DASHBOARD_KEEP_ALIVE_MAX = 10;
export declare const initialUserSettings: UserSettings;
export declare enum UserSettingsType {
    GENERAL = "GENERAL",
    QUICK_LINKS = "QUICK_LINKS",
    DOC_LINKS = "DOC_LINKS",
    DASHBOARDS = "DASHBOARDS",
    GETTING_STARTED = "GETTING_STARTED"
}
export interface DocumentationLink {
    icon: string;
    name: string;
    link: string;
}
export interface DocumentationLinks {
    links?: DocumentationLink[];
}
export interface QuickLinks {
    links?: string[];
}
export interface GettingStarted {
    maxSelectedIndex?: number;
    lastSelectedIndex?: number;
}
export interface AbstractUserDashboardInfo {
    id: string;
    title: string;
    starred: boolean;
    /** DASHBOARD (or missing) or SPLIT_VIEW. */
    dashboardType?: string;
}
export interface LastVisitedDashboardInfo extends AbstractUserDashboardInfo {
    lastVisited: number;
}
export interface StarredDashboardInfo extends AbstractUserDashboardInfo {
    starredAt: number;
}
export interface UserDashboardsInfo {
    last: Array<LastVisitedDashboardInfo>;
    starred: Array<StarredDashboardInfo>;
}
export declare enum UserDashboardAction {
    VISIT = "VISIT",
    STAR = "STAR",
    UNSTAR = "UNSTAR"
}
