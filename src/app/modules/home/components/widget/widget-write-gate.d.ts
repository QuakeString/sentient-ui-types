import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActionProtection, ActionProtectionContext } from '@shared/models/action-protection.models';
import { PlannedWrite } from '@shared/models/critical-parameter.models';
import type { WidgetContext } from '@home/models/widget-component.models';
/** A write the user did not confirm: nothing was sent. Not an error to show. */
export declare class WriteCancelledError extends Error {
    readonly writeCancelled = true;
    constructor(message?: string);
}
export declare const isWriteCancelled: (err: any) => boolean;
export interface WriteTarget {
    entityType: string;
    id: string;
    name?: string;
}
/**
 * The one place every value a widget writes goes through, whatever wrote it:
 * a control widget, a SCADA symbol, a widget action, a legacy or custom widget
 * using the widget's HTTP client, attribute service or RPC API.
 *
 * It asks once per click for the widget's protection (its own Protection row,
 * or the shared one every widget has) merged with the critical parameters of
 * the target device or asset. The server still enforces critical parameters on
 * every write, so a path that bypasses this (a dialog the widget opens on the
 * root injector) is refused rather than let through.
 */
export declare class WidgetWriteGate {
    private readonly ctx;
    private readonly checked;
    private actionPassUntil;
    constructor(ctx: WidgetContext);
    /** The protection every write of this widget asks for. */
    protection(): ActionProtection | null;
    /** The device or asset the widget writes to by default. */
    defaultTarget(): WriteTarget | null;
    /** Where a protected write runs, for the prompt and its audit entry. */
    context(target?: WriteTarget | null): ActionProtectionContext;
    /** A protected widget action just passed its prompt: its writes don't ask the widget's protection again. */
    actionPassed(): void;
    /**
     * Asks for everything one click needs before it writes. Emits true when the
     * writes may run; they are then remembered so the requests they make don't
     * ask a second time.
     */
    check(writes: PlannedWrite[], target?: WriteTarget | null): Observable<boolean>;
    /** Runs `write` once the click is confirmed; a refused click errors with WriteCancelledError. */
    guarded<T>(writes: PlannedWrite[], target: WriteTarget | null | undefined, write: () => Observable<T>): Observable<T>;
    /** A write request about to leave the widget: asks unless the click that makes it already did. */
    guardRequest<T>(method: string, url: string, body: any, send: () => Observable<T>): Observable<T>;
    private simulated;
    private namedTarget;
    private remember;
    /** True when every write was already confirmed by its click; those are used up. */
    private consume;
}
/**
 * The value writes a request makes (attribute saves, time-series saves and
 * one-way RPCs), or null for anything else. Reads, deletes and two-way RPCs
 * (which widgets also use to read values) are not asked for here.
 */
export declare const parseWriteRequest: (method: string, url: string, body: any) => {
    target: WriteTarget;
    writes: PlannedWrite[];
} | null;
/**
 * The HTTP client a widget gets (its `ctx.http`, and the one behind the
 * attribute and device services it injects): sends every value write through
 * the widget's write gate first.
 */
export declare class WidgetGuardedHttpClient extends HttpClient {
    private readonly gate;
    constructor(handler: HttpHandler, gate: WidgetWriteGate);
    request(first: any, url?: any, options?: any): Observable<any>;
}
