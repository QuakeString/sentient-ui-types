import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AiAssistantStore } from './ai-assistant.store';
import { ViewportInsetService } from '@core/services/viewport-inset.service';
import * as i0 from "@angular/core";
type ResizeEdge = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
/**
 * Hosts the AI assistant at the application root, next to the router outlet,
 * so it is there on every page, including full-screen dashboards that have no
 * home toolbar.
 *
 * - Docked: the host takes a column on the right and the page shrinks.
 * - Floating: a movable, resizable window over the page.
 * - On narrow screens the docked panel slides over the page instead.
 * - The right-edge tab (an arrow; hover shows its label) opens the panel when
 *   there is no toolbar button, or when the user turned the tab on.
 * - While a dashboard or widget is expanded (the `tb-fullscreen` overlay covers
 *   the page), the host moves itself into that overlay so the tab and a
 *   floating panel stay on top; it moves back when the overlay closes.
 */
export declare class AiAssistantHostComponent implements OnInit, OnDestroy {
    store: AiAssistantStore;
    private insets;
    private cd;
    private zone;
    private elRef;
    available: boolean;
    open: boolean;
    floating: boolean;
    narrow: boolean;
    showTab: boolean;
    rect: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    /** An expanded dashboard/widget overlay is open. */
    inOverlay: boolean;
    private drag;
    private resize;
    readonly resizeEdges: ResizeEdge[];
    private destroy$;
    private overlayWatcher;
    private homeParent;
    private homeNext;
    private lastPrefs;
    private lastButtons;
    constructor(store: AiAssistantStore, insets: ViewportInsetService, cd: ChangeDetectorRef, zone: NgZone, elRef: ElementRef<HTMLElement>);
    get docked(): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** Floating vs docked, and whether the edge tab shows, for the current situation. */
    private applyMode;
    /** Follows the expanded-dashboard overlay (tb-fullscreen) in and out. */
    private watchOverlay;
    private enterOverlay;
    private leaveOverlay;
    openFromTab(): void;
    private clampRect;
    startDrag(event: PointerEvent): void;
    private onMove;
    private onUp;
    /** Resizes from any edge or corner; the opposite edge stays put. */
    startResize(event: PointerEvent, edge: ResizeEdge): void;
    private onResizeMove;
    private onResizeUp;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantHostComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAssistantHostComponent, "st-ai-assistant-host", never, {}, {}, never, never, false, never>;
}
export {};
