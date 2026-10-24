import { AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AiApprovalDecision, AiConversation, AiPendingAction } from '@core/http/ai-assistant.service';
import { AiAssistantService } from '@core/http/ai-assistant.service';
import { AiApprovalMode, AiAssistantStore } from './ai-assistant.store';
import { AiPointService } from './ai-point.service';
import { AiReference } from '@core/http/ai-assistant.service';
import * as i0 from "@angular/core";
/** One line in the thread, derived from the stored messages. */
interface ThreadItem {
    kind: 'user' | 'text' | 'step';
    key: string;
    text?: string;
    files?: {
        name: string;
    }[];
    references?: AiReference[];
    contextLabel?: string;
    tool?: string;
    summary?: string;
    state?: 'running' | 'done' | 'error' | 'denied' | 'cancelled' | 'waiting';
    args?: string;
    result?: string;
    /** Text the assistant wrote on the way (a tool call follows in the same turn): shown dimmed. */
    interim?: boolean;
    /** Steps run in groups; the group draws one rule down its left side. */
    groupStart?: boolean;
    groupEnd?: boolean;
}
/**
 * The assistant panel: header, conversation, approval card and the input bar
 * (attach, voice, approval mode, model, effort, usage). Holds no state of its
 * own beyond the text being typed: everything lives in {@link AiAssistantStore},
 * so the panel can move between docked and floating without losing anything.
 */
export declare class AiAssistantPanelComponent implements OnInit, OnDestroy, AfterViewChecked {
    store: AiAssistantStore;
    point: AiPointService;
    private api;
    private translate;
    private cd;
    private zone;
    dragStart: EventEmitter<PointerEvent>;
    threadRef: ElementRef<HTMLElement>;
    promptRef: ElementRef<HTMLTextAreaElement>;
    fileInputRef: ElementRef<HTMLInputElement>;
    items: ThreadItem[];
    expanded: Set<string>;
    showChanges: boolean;
    text: string;
    history: AiConversation[];
    listening: boolean;
    readonly speechSupported: boolean;
    readonly fileTypes: string;
    /** When the current run started (ms) and the conversation's token total then. */
    private runStartedAt;
    private runStartTokens;
    private ticker;
    now: number;
    private recognition;
    private scrollPending;
    private lastCount;
    private destroy$;
    constructor(store: AiAssistantStore, point: AiPointService, api: AiAssistantService, translate: TranslateService, cd: ChangeDetectorRef, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    get conversation(): AiConversation | null;
    get running(): boolean;
    get pending(): AiPendingAction | null;
    get customerUser(): boolean;
    get floating(): boolean;
    get contextFill(): number;
    get starters(): string[];
    canSend(): boolean;
    private tokensOf;
    /** Starts the clock when a run starts and stops it when the run ends. */
    private trackRun;
    private stopTicker;
    get elapsedLabel(): string;
    get runTokens(): number;
    /** What the assistant is doing now: the running tool, or thinking. */
    get workingLabel(): string;
    /** "save_dashboard" → "Saving dashboard…", "get_latest_values" → "Reading latest values…". */
    private toolActivity;
    private buildItems;
    /**
     * What matters to the user is their message and the assistant's answer.
     * Narration before a tool call ("Let me read the dashboard first") and the
     * steps themselves are progress, drawn quieter; consecutive steps form one
     * group.
     */
    private markStructure;
    /** A few words about a call's arguments: a name, a title or a key list. */
    private summarize;
    /** The usage popover's notes, behind its (i): who pays for the model, and that it acts as the user. */
    usageInfoText(): string;
    toggleStep(item: ThreadItem): void;
    trackItem(_index: number, item: ThreadItem): string;
    /** A reference's label for the thread: what the user saw when pointing. */
    referenceLabel(ref: AiReference & {
        title?: string;
    }): string;
    send(): void;
    useStarter(key: string): void;
    onKeydown(event: KeyboardEvent): void;
    resizePrompt(): void;
    decide(decision: AiApprovalDecision): void;
    setApprovalMode(mode: AiApprovalMode): void;
    setModel(id: string): void;
    setEffort(effort: string): void;
    toggleMode(): void;
    loadHistory(): void;
    onHeaderPointerDown(event: PointerEvent): void;
    pickFiles(): void;
    onFiles(event: Event): void;
    /** Files are being dragged over the panel (counted: dragleave fires for every child). */
    dropActive: boolean;
    private dragDepth;
    onDragEnter(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    /** Images or PDFs pasted into the input are attached; text pastes as usual. */
    onPaste(event: ClipboardEvent): void;
    private hasFiles;
    private addFiles;
    /**
     * Frames of a video, taken by the browser's own decoder: most models read images, not video.
     * Fails when the browser cannot play the file.
     */
    private videoFrames;
    fileIcon(name: string): string;
    toggleListening(): void;
    private stopListening;
    percent(used: number, max: number): number;
    compact(n: number): string;
    nextReset(): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAssistantPanelComponent, "st-ai-assistant-panel", never, {}, { "dragStart": "dragStart"; }, never, never, false, never>;
}
export {};
