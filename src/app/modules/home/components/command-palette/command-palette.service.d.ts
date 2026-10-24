import { Injector, WritableSignal } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSettingsService } from '@core/http/user-settings.service';
import { UserDashboardsInfo } from '@shared/models/user-settings.models';
import * as i0 from "@angular/core";
/**
 * How the palette is shown: 'attached' — the results drop down beneath a
 * search field that owns the input (the top bar's field); 'dialog' — a
 * centred panel with its own input (when no field is on screen).
 */
export type CommandPaletteMode = 'attached' | 'dialog';
export interface CommandPaletteRect {
    left: number;
    top: number;
    width: number;
}
/**
 * A search field the palette attaches to (CommandPaletteTriggerComponent).
 * The field's input is the palette's input; the palette reports its scope
 * chip and loading state back for the field to show.
 */
export interface CommandPaletteHost {
    readonly input: HTMLInputElement;
    readonly scopeChip: WritableSignal<{
        label: string;
        icon: string;
    } | null>;
    readonly loading: WritableSignal<boolean>;
    /** Set by the palette while it is open. */
    removeScope?: () => void;
    clear?: () => void;
    /** On screen and usable now. */
    isAvailable(): boolean;
    /** Expands the field and opens the palette under it (Ctrl/Cmd+K, "/"). */
    activate(): void;
    /** Where the results go (viewport coordinates, under the expanded field). */
    panelRect(): CommandPaletteRect;
    /** The bottom of the bar: the scrim covers the page below it. */
    scrimTop(): number;
    /** The palette has closed. */
    closed(): void;
}
/** Handed to the palette component: its mode, field, and how to close it. */
export declare abstract class CommandPaletteRef {
    abstract readonly mode: CommandPaletteMode;
    abstract readonly host: CommandPaletteHost | null;
    abstract close(): void;
}
/**
 * Opens the "Go to…" command palette. The palette itself is a separate chunk,
 * loaded on first use, so the shell does not carry its code.
 */
export declare class CommandPaletteService {
    private overlay;
    private injector;
    private store;
    private router;
    private userSettingsService;
    private hosts;
    private overlayRef;
    private activeHost;
    private opening;
    /** Starred and last-opened dashboards, kept warm so the palette opens at its final height. */
    private recentDashboards;
    private recentRequest;
    private navigationWatch;
    constructor(overlay: Overlay, injector: Injector, store: Store<AppState>, router: Router, userSettingsService: UserSettingsService);
    get isOpen(): boolean;
    /** A search field on screen; the latest registered wins. Returns the unregister function. */
    register(host: CommandPaletteHost): () => void;
    toggle(): void;
    /** Ctrl/Cmd+K, "/": through the visible search field, else as a centred dialog. */
    open(): void;
    /** Opens the results under a field (called by the field when it expands). */
    openAttached(host: CommandPaletteHost): void;
    close(): void;
    /** The field moved or resized (window resize). */
    reposition(): void;
    private show;
    /** The cached recent dashboards of the signed-in user, if loaded. */
    cachedRecentDashboards(): UserDashboardsInfo | null;
    /** Fetches the recent dashboards and updates the cache. */
    fetchRecentDashboards(): Observable<UserDashboardsInfo | null>;
    /** Loads the palette's code and data ahead of the first open, and keeps the data fresh. */
    private warmUp;
    private refreshRecentDashboards;
    private userId;
    /** The scrim dims the page below the bar, not the bar itself. */
    private placeScrim;
    private isAuthenticated;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandPaletteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommandPaletteService>;
}
