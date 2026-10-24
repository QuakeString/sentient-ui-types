import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { EntityId } from '@shared/models/id/entity-id';
import { FindingComment, FleetFinding, FleetMachine, WorkOrder, WorkOrderStatus } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface WorkOrdersWidgetSettings {
    kind: 'workOrders';
    /** Refresh period, seconds (0 = only on load). */
    refreshSeconds: number;
    /** Show the Findings tab (active asset-health findings). */
    showFindings: boolean;
    /** Findings as one line each, opened on click (overview). */
    compactFindings?: boolean;
}
export declare const workOrdersDefaultSettings: WorkOrdersWidgetSettings;
interface FindingRow {
    machine: FleetMachine;
    finding: FleetFinding;
}
/** Findings and work orders: the active findings of a machine (or of every
 *  machine under a plant) with their recommendation and evidence, and the
 *  maintenance work raised from them. A finding is acknowledged, commented
 *  or turned into a work order; a work order opens in a side panel with its
 *  evidence, status flow, actions taken and activity log. */
export declare class WorkOrdersWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private cd;
    private fb;
    private store;
    private host;
    ctx: WidgetContext;
    readonly evidenceColumns: string[];
    settings: WorkOrdersWidgetSettings;
    entity: EntityId | null;
    tab: 'findings' | 'workOrders';
    filter: 'open' | 'closed' | 'all';
    search: string;
    machines: FleetMachine[];
    findings: FindingRow[];
    orders: WorkOrder[];
    total: number;
    loading: boolean;
    error: string;
    busy: boolean;
    selected: WorkOrder | null;
    creating: boolean;
    /** The routing rules of the widget's entity are being edited. */
    routing: boolean;
    routingRules: FormArray;
    /** Capture on finding, under the routing of the widget's asset. */
    captureForm: FormGroup;
    /** Capture-on-finding clip being played (request id). */
    playingCapture: string | null;
    private clip;
    private audioCtx;
    private clipSub;
    private clipTimer;
    /** Stored rules, so fields this editor does not show survive a save. */
    private storedRules;
    readonly severities: string[];
    commentFor: string | null;
    commentText: string;
    /** The comment being answered while the comment box is open, if it is a reply. */
    replyTo: FindingComment | null;
    /** People's comments per finding (alarm id), newest first; findings whose whole thread is shown. */
    comments: {
        [alarmId: string]: FindingComment[];
    };
    commentsOpen: Set<string>;
    readonly priorities: import("./condition-monitoring.models").WorkOrderPriority[];
    readonly outcomes: string[];
    newForm: FormGroup;
    actionForm: FormGroup;
    noteForm: FormGroup;
    assignForm: FormGroup;
    /** The Team field is open for reassigning. */
    editingTeam: boolean;
    private api;
    private reload$;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef, fb: FormBuilder, store: Store<AppState>, host: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    load(): void;
    setTab(t: 'findings' | 'workOrders'): void;
    setFilter(f: 'open' | 'closed' | 'all'): void;
    /** Findings filter, typed in the same search box (no server round trip). */
    findingSearch: string;
    onFindingSearch(text: string): void;
    /** Findings matching the search: label, machine or point. */
    get shownFindings(): FindingRow[];
    onSearch(text: string): void;
    loadOrders(): void;
    severityColor(s: string): string;
    statusClass(s: WorkOrderStatus): string;
    overdue(o: WorkOrder): boolean;
    next(o: WorkOrder): WorkOrderStatus[];
    ack(r: FindingRow): void;
    /** Findings opened in compact mode. */
    openFindings: Set<string>;
    toggleFinding(id: string): void;
    /** "Since 21 Oct 20:09 · 95 % sure · acknowledged · 1 comment · sound clip" */
    findingLine(r: FindingRow): string;
    startComment(r: FindingRow, replyTo?: FindingComment | null): void;
    sendComment(r: FindingRow): void;
    /** The threads a finding card shows: the latest two, or all of them once opened. */
    shownComments(alarmId: string): FindingComment[];
    /** Comments and replies on a finding. */
    commentCount(alarmId: string): number;
    toggleComments(alarmId: string): void;
    private loadComments;
    raise(r: FindingRow): void;
    openOrder(id: string): void;
    startNew(): void;
    create(): void;
    select(o: WorkOrder): void;
    editTeam(): void;
    /** Routing is edited on the widget's own asset (a plant, area or line). */
    get canRoute(): boolean;
    openRouting(): void;
    ruleGroup(r?: any): FormGroup;
    addRule(): void;
    removeRule(i: number): void;
    saveRouting(): void;
    /** What a finding's sensors were asked to capture when it appeared. */
    captures(details: any): {
        deviceId: string;
        requestId: string;
        ts: number;
        keys: string[];
    }[];
    /** Elapsed / length of the clip playing, e.g. "0:03 / 0:10"; "…" while it downloads. */
    playPosition: string;
    /** Seconds played and clip length, for the player's slider (length 0 while it downloads). */
    playElapsed: number;
    playDuration: number;
    private clipBuffer;
    private clipStartedAt;
    private scrubbing;
    /**
     * Plays the sound clip recorded for a finding (the first one after its request); a second
     * click stops it. Audio is unlocked inside the click itself: the clip arrives over the network
     * later, when browsers no longer count it as the user's action and refuse to play it.
     */
    playCapture(c: {
        deviceId: string;
        requestId: string;
        ts: number;
    }): void;
    /** Dragging the player's slider: the time follows the thumb; the clip jumps on release. */
    scrubClip(value: number, commit: boolean): void;
    private startClipAt;
    private tickClip;
    private clipTime;
    private dropSource;
    private stopClip;
    close(): void;
    move(o: WorkOrder, s: WorkOrderStatus): void;
    assign(o: WorkOrder): void;
    comment(o: WorkOrder): void;
    logAction(o: WorkOrder): void;
    exportHistory(o: WorkOrder | null, format: 'csv' | 'xlsx' | 'pdf'): void;
    get canExport(): boolean;
    evidenceText(f: FleetFinding): string;
    activityText(a: WorkOrder['activity'][number]): string;
    private after;
    private run;
    static ɵfac: i0.ɵɵFactoryDeclaration<WorkOrdersWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WorkOrdersWidgetComponent, "st-work-orders-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
