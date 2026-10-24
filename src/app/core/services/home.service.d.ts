import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveComponentService } from '@core/services/active-component.service';
import * as i0 from "@angular/core";
export declare class HomeService {
    private activeComponentService;
    private hideMainToolbarSubject;
    private mainToolbarOwner;
    private mainToolbarValue;
    private shellElement;
    readonly hideMainToolbar$: Observable<boolean>;
    private shellResizingSubject;
    /**
     * The left menu is animating and the content's width changes on every frame.
     * The grid follows it, but widgets hold back redrawing their contents (and
     * the breadcrumb and fit-to-screen their measuring) until this turns false,
     * so that heavy work runs once instead of on every frame.
     */
    readonly shellResizing$: Observable<boolean>;
    get shellResizing(): boolean;
    setShellResizing(resizing: boolean): void;
    /** The mobile hamburger in a dashboard toolbar opens the left menu drawer. */
    readonly toggleSideBar: EventEmitter<void>;
    /** Collapses or expands the desktop left menu (the command palette's command). */
    readonly toggleMenuCollapse: EventEmitter<void>;
    /** The left menu's state, kept in this browser: collapsed until the user expands it. */
    menuCollapsedPreference(): boolean;
    saveMenuCollapsed(collapsed: boolean): void;
    constructor(activeComponentService: ActiveComponentService);
    /** Whether owner is the page currently deciding the app bar, with value as its decision. */
    ownsMainToolbar(owner: any, hide: boolean): boolean;
    setHideMainToolbar(owner: any, hide: boolean): void;
    /** Owner leaves (destroyed): the app bar comes back if it was the one hiding it. */
    releaseMainToolbar(owner: any): void;
    /** The home layout's host element (HomeComponent registers it). */
    registerShellElement(element: HTMLElement | null): void;
    private publish;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HomeService>;
}
