import { NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppState } from '@core/core.state';
import { EntityService } from '@core/http/entity.service';
import { DashboardReuseService } from '@core/services/dashboard-reuse.service';
import { MobileService } from '@core/services/mobile.service';
import { AiPointService } from './ai-point.service';
import { AiApprovalDecision, AiAssistantModel, AiAssistantService, AiAssistantStatus, AiAttachment, AiConversation, AiPageContext } from '@core/http/ai-assistant.service';
import * as i0 from "@angular/core";
/** Where the panel is: docked on the right, or a window over the page. */
export type AiPanelMode = 'pinned' | 'floating';
/** Ask before each change, or make changes without asking (deletes still ask). */
export type AiApprovalMode = 'ASK' | 'AUTO';
/** Per-user, per-browser choices (layout and defaults, never data). */
export interface AiAssistantPrefs {
    mode: AiPanelMode;
    rect?: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    edgeTab: boolean;
    approvalMode: AiApprovalMode;
    modelId?: string;
    effort?: string;
    open: boolean;
}
/** Name prefix of the widget pictures point mode attaches (the thread shows the references instead). */
export declare const SNAPSHOT_PREFIX = "snapshot \u00B7 ";
/**
 * State of the in-product AI assistant, shared by the toolbar button, the edge
 * tab and the panel (which is re-created when it moves between docked and
 * floating). Polls the open conversation while the assistant works.
 */
export declare class AiAssistantStore implements OnDestroy {
    private api;
    private store;
    private router;
    private title;
    private entityService;
    private dashboardReuse;
    private point;
    private http;
    private zone;
    private mobile;
    readonly status$: BehaviorSubject<AiAssistantStatus>;
    readonly conversation$: BehaviorSubject<AiConversation>;
    readonly prefs$: BehaviorSubject<AiAssistantPrefs>;
    readonly context$: BehaviorSubject<AiPageContext>;
    /** Whether the page context is sent with the next message. */
    readonly useContext$: BehaviorSubject<boolean>;
    readonly attachments$: BehaviorSubject<AiAttachment[]>;
    readonly sending$: BehaviorSubject<boolean>;
    readonly error$: BehaviorSubject<string>;
    /** Number of home toolbars showing the assistant button (0: the edge tab is the way in). */
    readonly toolbarButtons$: BehaviorSubject<number>;
    private userId;
    private stopPolling$;
    private destroy$;
    private subs;
    constructor(api: AiAssistantService, store: Store<AppState>, router: Router, title: Title, entityService: EntityService, dashboardReuse: DashboardReuseService, point: AiPointService, http: HttpClient, zone: NgZone, mobile: MobileService);
    ngOnDestroy(): void;
    get status(): AiAssistantStatus | null;
    get conversation(): AiConversation | null;
    get prefs(): AiAssistantPrefs;
    private prefsKey;
    private loadPrefs;
    updatePrefs(change: Partial<AiAssistantPrefs>): void;
    setOpen(open: boolean): void;
    toggle(): void;
    registerToolbarButton(): () => void;
    refreshStatus(): void;
    get model(): AiAssistantModel | undefined;
    /** The effort to send: the chosen one if the model accepts it, else the model's middle level. */
    get effort(): string | undefined;
    updateContext(): void;
    /** Names the item: "Dashboard · Press line 6" reads better than an id. */
    private nameContext;
    newConversation(): void;
    openConversation(id: string): void;
    deleteConversation(id: string): void;
    addAttachments(files: AiAttachment[]): void;
    removeAttachment(index: number): void;
    send(text: string): void;
    decide(decision: AiApprovalDecision): void;
    stop(): void;
    private lastSeq;
    /** Applies conversation fields; `fresh` replaces the messages, otherwise they are kept. */
    private mergeConversation;
    /** Dashboards the assistant just saved are reloaded where they are shown (history replays are not announced). */
    private announceChanges;
    private refreshMessages;
    /** Polls the open conversation once a second until the assistant stops working. */
    private poll;
    private reset;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiAssistantStore>;
}
