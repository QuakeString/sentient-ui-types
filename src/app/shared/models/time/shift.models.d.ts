/**
 * Shifts in the time window: "current shift", "previous shift", the
 * production day and one shift of a chosen day.
 *
 * A shift choice is stored as a self-describing quick interval string, so
 * every place that already handles quick intervals (live roll-over in the
 * widget subscriptions, the report generator on the server) resolves it
 * without knowing the time window's shift settings:
 *
 *   SHIFT|cur|06:00-14:00,14:00-22:00,22:00-06:00
 *   SHIFT|on|2026-11-20|2|06:00-14:00,14:00-22:00,22:00-06:00
 *
 * The production day starts at the first shift's start (not midnight).
 * All times are wall-clock times in the time window's time zone.
 */
import * as _moment from 'moment';
type Moment = _moment.Moment;
/** One shift as entered in the time window settings ("HH:mm" times). */
export interface TimewindowShift {
    name: string;
    start: string;
    end: string;
}
export type ShiftSelection = 'cur' | 'prev' | 'day' | 'pday';
export interface TimewindowShiftSettings {
    enabled?: boolean;
    shifts?: TimewindowShift[];
    /** What the Shift option selects first. */
    defaultSelection?: ShiftSelection;
}
export declare const shiftSelections: ShiftSelection[];
export declare const shiftSelectionTranslations: Map<ShiftSelection, string>;
export type ShiftPattern = '3x8' | '2x12';
export declare const shiftPatterns: Record<ShiftPattern, TimewindowShift[]>;
interface ShiftSpan {
    start: number;
    end: number;
}
export interface ParsedShiftInterval {
    mode: ShiftSelection | 'on';
    spans: ShiftSpan[];
    /** 'on' only: production day, "YYYY-MM-DD". */
    date?: string;
    /** 'on' only: shift index, or 'day' for the whole production day. */
    target?: number | 'day';
}
export interface ShiftRange {
    start: Moment;
    end: Moment;
    /** Index of the shift, or 'day' for a production day. */
    index: number | 'day';
}
/** "HH:mm" to minutes after midnight; null when not a time. */
export declare const parseShiftTime: (value: string) => number | null;
/** A shift that ends at or before its start runs into the next day. */
export declare const isNextDayShift: (shift: TimewindowShift) => boolean;
export type ShiftValidation = 'ok' | 'empty' | 'invalid-time' | 'gap' | 'overlap';
/** The shifts must cover the 24 hours exactly once: no gaps, no overlaps. */
export declare const validateShifts: (shifts: TimewindowShift[]) => ShiftValidation;
/** Shift selection is offered only when it is on and the shifts are valid. */
export declare const shiftsAvailable: (settings: TimewindowShiftSettings) => boolean;
export declare const isShiftInterval: (interval: any) => interval is string;
/** Quick interval for a live selection (current/previous shift or production day). */
export declare const encodeShiftInterval: (selection: ShiftSelection, shifts: TimewindowShift[]) => string;
/** Quick interval for one shift (or the whole production day) of a given day. */
export declare const encodeShiftOnDay: (date: string, target: number | "day", shifts: TimewindowShift[]) => string;
export declare const parseShiftInterval: (interval: string) => ParsedShiftInterval | null;
/** The shift that contains the moment (wall clock of its time zone). */
export declare const shiftContaining: (spans: ShiftSpan[], at: Moment) => ShiftRange;
/** The production day (from the first shift's start) that contains the moment. */
export declare const productionDayContaining: (spans: ShiftSpan[], at: Moment) => ShiftRange;
/** Start and end of a shift interval, at the given moment ("now"). */
export declare const shiftIntervalRange: (parsed: ParsedShiftInterval, now: Moment) => ShiftRange;
/** End of the shift interval that starts at the given moment. */
export declare const shiftIntervalEnd: (parsed: ParsedShiftInterval, start: Moment) => Moment;
/** Start of the interval before the one that starts at the given moment (comparison). */
export declare const shiftIntervalPreviousStart: (parsed: ParsedShiftInterval, start: Moment) => Moment;
export {};
