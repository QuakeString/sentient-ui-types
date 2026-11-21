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
/** Used when neither the user nor the tenant chose a time format. */
export declare const DEFAULT_TIME_FORMAT: TimeFormat;
/** User setting first, then the tenant default, then 24-hour. */
export declare const resolveTimeFormat: (user: any, tenantDefault: any) => TimeFormat;
export declare const getCurrentTimeFormat: () => TimeFormat;
export declare const setCurrentTimeFormat: (timeFormat: TimeFormat) => void;
