import { SchedulerEventType } from '@home/pages/reporting/models/report.models';
export type CalendarViewType = 'table' | 'calendar';
export interface EventTypeColor {
    backgroundColor: string;
    textColor: string;
}
export declare const EVENT_TYPE_COLORS: {
    [key in SchedulerEventType]: EventTypeColor;
};
export declare function getEventTypeColor(type: SchedulerEventType, enabled?: boolean): EventTypeColor;
