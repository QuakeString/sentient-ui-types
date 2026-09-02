/** Runtime settings model for the Report Launcher widget. Lives in the
 *  widget's `ctx.settings` blob, parsed at ngOnInit.
 *
 *  - `reportTemplateIdFilter` — optional whitelist of report-template UUIDs
 *    the widget should offer. Empty / undefined = every template the current
 *    user is allowed to see (already customer-subtree-scoped by the backend).
 *  - `autoDownload` — when true (default) a completed report is downloaded
 *    automatically; when false the user downloads it from the history list.
 *  - `showHistory` — show the "My reports" section (recently generated reports
 *    the user can download). Default true.
 *  - `pageSize` — history table page size. */
export interface ReportLauncherWidgetSettings {
    reportTemplateIdFilter?: string[];
    autoDownload: boolean;
    showHistory: boolean;
    pageSize: number;
}
export declare const reportLauncherWidgetDefaultSettings: ReportLauncherWidgetSettings;
