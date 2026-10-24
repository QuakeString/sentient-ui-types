import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Timewindow } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
/**
 * A user's own default time window for one place (a dashboard, a widget, a
 * table), kept in their user settings. Only what the user picks is saved:
 * the window, aggregation and timezone. The hide and allowed-values options
 * stay those of the place, so a later change by its author still applies.
 */
export declare class TimewindowPreferenceService {
    private store;
    constructor(store: Store<AppState>);
    static dashboardKey(dashboardId: string): string;
    static widgetKey(dashboardId: string, widgetId: string): string;
    has(key: string): boolean;
    /** The user unticked "save as default" here last time. */
    optedOut(key: string): boolean;
    /** The place's time window with the user's saved choice on top, or the
     *  place's own when there is none. */
    apply(key: string, timewindow: Timewindow): Timewindow;
    save(key: string, timewindow: Timewindow): void;
    /** Drops the saved default here and remembers that the user does not
     *  want one, so the panel opens with the box unticked. */
    optOut(key: string): void;
    private put;
    private saved;
    private choiceOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowPreferenceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimewindowPreferenceService>;
}
