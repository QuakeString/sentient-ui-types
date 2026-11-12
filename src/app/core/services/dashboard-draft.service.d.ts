import * as i0 from "@angular/core";
/**
 * A dashboard's unsaved edits, kept in the browser so a crashed or killed tab
 * doesn't lose them. One per user and dashboard; the newest write wins.
 */
export interface DashboardDraft {
    key: string;
    dashboardId: string;
    userId: string;
    title: string;
    /** When the draft was written (ms since epoch). */
    savedAt: number;
    /** Fingerprint of the server copy the edits started from; a different one now means someone saved since. */
    baseHash: string;
    /** The whole edited dashboard, as JSON. */
    dashboard: string;
}
/**
 * IndexedDB rather than localStorage: a big dashboard is megabytes of JSON,
 * past localStorage's ~5 MB per-origin limit, and IndexedDB writes don't
 * block the page. Every call tolerates IndexedDB being unavailable (private
 * windows, blocked site data) — drafts are then simply not kept.
 */
export declare class DashboardDraftService {
    private dbPromise;
    private readonly liveKeys;
    private channel;
    private pendingAsks;
    constructor();
    /** This tab is writing the draft under `key`. */
    markLive(key: string): void;
    unmarkLive(key: string): void;
    /** Whether another open tab is editing the dashboard of this draft right now. */
    isEditedElsewhere(key: string, timeoutMs?: number): Promise<boolean>;
    static key(userId: string, dashboardId: string): string;
    /**
     * Identifies a dashboard's content, so a later save elsewhere can be noticed
     * (the server keeps no version or update time for dashboards). Keys are sorted
     * because the server may return them in a different order than it was sent.
     */
    static fingerprint(title: string, configuration: any): string;
    get(key: string): Promise<DashboardDraft | null>;
    put(draft: DashboardDraft): Promise<boolean>;
    delete(key: string): Promise<void>;
    private request;
    private open;
    private pruneOld;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardDraftService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
