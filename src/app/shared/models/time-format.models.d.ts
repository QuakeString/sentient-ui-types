/**
 * 24-hour or 12-hour (AM/PM) clock for times shown in the app.
 *
 * The user picks it in Account › Profile; 'auto' falls back to the tenant
 * default (Settings › Home) and then to 24-hour, the app's long-standing look
 * (not the browser: most English browsers would silently switch to AM/PM). Only the app's own stock
 * patterns follow it: a format somebody chose for a widget keeps its clock.
 */
import { DatePipe } from '@angular/common';
export type TimeFormat = '24h' | '12h';
export type TimeFormatSetting = 'auto' | TimeFormat;
export declare const timeFormatSettings: TimeFormatSetting[];
export declare const timeFormatSettingTranslations: Map<TimeFormatSetting, string>;
/** Whose time window a Time format belongs to: what its Default follows differs. */
export type TimeFormatScope = 'widget' | 'dashboard';
export declare const isTimeFormat: (value: any) => value is TimeFormat;
/** Name of the tenant SERVER_SCOPE attribute that holds the tenant default. */
export declare const TENANT_TIME_FORMAT_ATTRIBUTE = "timeFormat";
/** The widget date format that counts as "not formatted": it follows the profile. */
export declare const STOCK_DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
/**
 * Patterns the app itself uses by default (tables, time window, chart axes,
 * the auto date format). They follow the time format; any other pattern is
 * shown as written.
 */
export declare const STOCK_TIME_PATTERNS: ReadonlySet<string>;
/**
 * The 12-hour form of a date pattern: HH/H become h, and " a" (AM/PM) follows
 * the last time field. Patterns without hours, or already 12-hour, stay as
 * they are.
 */
export declare const to12HourPattern: (pattern: string) => string;
/** The 24-hour form of a date pattern: h/hh become HH and the AM/PM field goes. */
export declare const to24HourPattern: (pattern: string) => string;
/** A stock pattern in the given clock; any other pattern unchanged. */
export declare const applyTimeFormat: (pattern: any, timeFormat: TimeFormat) => any;
/**
 * Formats a date exactly as the pattern says, without the time format
 * setting. Used for formats somebody chose on purpose (a widget's own format).
 */
export declare const formatDateAsWritten: (pipe: DatePipe, value: any, format?: string, timezone?: string, locale?: string) => string | null;
/**
 * Every date pipe in the app (templates and injected) follows the time format
 * for the app's stock patterns. Done once, before anything is formatted.
 */
export declare const patchDatePipe: () => void;
/**
 * Key in DATE_PIPE_DEFAULT_OPTIONS for a function that gives the clock of the
 * place the pipe belongs to (a widget). Every date pipe created inside that
 * place, injected or in a template, then follows it instead of the profile.
 */
export declare const SCOPED_TIME_FORMAT_OPTION = "stTimeFormat";
/** The clock a date pipe draws stock patterns in: its place's, else the profile's. */
export declare const pipeTimeFormat: (pipe: DatePipe) => TimeFormat;
/** Formats with a stock pattern in the given clock; other patterns as written. */
export declare const formatDateInClock: (pipe: DatePipe, value: any, format: string, timeFormat: TimeFormat, timezone?: string, locale?: string) => string | null;
/**
 * The clock of a widget: its own time window's Time format (only when it uses
 * its own time window), else the dashboard time window's, else the user's
 * clock (profile, tenant default, 24-hour). A date format chosen in the widget
 * settings is applied on top of this by the widget itself.
 */
export declare const resolveWidgetTimeFormat: (useDashboardTimewindow: boolean, widgetTimewindow: {
    timeFormat?: any;
}, dashboardTimewindow: {
    timeFormat?: any;
}, userTimeFormat: TimeFormat) => TimeFormat;
/**
 * 12-hour twins for a date format list: after each entry with hours in 24-hour
 * form comes the same entry in 12-hour form (fixed, drawn as written).
 */
export declare const withTwelveHourTwins: (formats: string[]) => string[];
/** Used when neither the user nor the tenant chose a time format. */
export declare const DEFAULT_TIME_FORMAT: TimeFormat;
/** User setting first, then the tenant default, then 24-hour. */
export declare const resolveTimeFormat: (user: any, tenantDefault: any) => TimeFormat;
export declare const getCurrentTimeFormat: () => TimeFormat;
/** Emits the user's clock whenever it changes (profile or tenant default). */
export declare const timeFormatChanges: import("rxjs").Observable<TimeFormat>;
export declare const setCurrentTimeFormat: (timeFormat: TimeFormat) => void;
