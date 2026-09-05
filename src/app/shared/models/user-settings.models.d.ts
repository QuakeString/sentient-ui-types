export interface UserSettings {
    openedMenuSections?: string[];
    notDisplayConnectivityAfterAddDevice?: boolean;
    notDisplayInstructionsAfterAddEdge?: boolean;
    notDisplayConfigurationAfterAddMobileBundle?: boolean;
    includeBundleWidgetsInExport?: boolean;
    includeResourcesInExportWidgetTypes?: boolean;
    includeResourcesInExportDashboard?: boolean;
    /** Dashboards kept alive in memory after navigating away (route keep-alive
     *  depth). 0 = off. Absent = platform default (2). Ignored inside the mobile
     *  app, which always keeps one. */
    dashboardKeepAliveDepth?: number;
}
export declare const dashboardKeepAliveDepthOptions: Array<number>;
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
