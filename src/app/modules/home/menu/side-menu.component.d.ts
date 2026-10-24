import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { MenuService } from '@core/services/menu.service';
import { MenuSection } from '@core/services/menu.models';
import * as i0 from "@angular/core";
/** One section's pages in the flyout; the outgoing one fades out as the next fades in. */
interface FlyoutLayer {
    key: number;
    section: MenuSection;
    width: number;
    leaving: boolean;
}
export declare class SideMenuComponent implements OnChanges, OnDestroy {
    private menuService;
    private overlay;
    private elementRef;
    private cd;
    private router;
    private document;
    /** Icon-only rail (desktop, collapsed left menu). */
    collapsed: boolean;
    menuSections$: import("rxjs").Observable<MenuSection[]>;
    flyoutTpl: TemplateRef<any>;
    flyoutHost: ViewContainerRef;
    /**
     * The rail's sections share one flyout. Hovering another section moves it
     * there, resizes it and cross-fades its pages, instead of opening a new menu.
     */
    readonly flyoutSectionId: import("@angular/core").WritableSignal<string>;
    flyoutOpen: boolean;
    flyoutNoAnim: boolean;
    flyoutTop: number;
    flyoutWidth: number;
    flyoutHeight: number;
    notchTop: number;
    layers: FlyoutLayer[];
    private overlayRef;
    private anchor;
    private pinned;
    private layerKey;
    private closeTimer;
    private switchTimer;
    private routerSubscription;
    constructor(menuService: MenuService, overlay: Overlay, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef, router: Router, document: Document);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    sectionHoverEnter(section: MenuSection, anchor: HTMLElement): void;
    sectionHoverLeave(): void;
    sectionClick(section: MenuSection, anchor: HTMLElement): void;
    sectionKey(section: MenuSection, anchor: HTMLElement): void;
    /** A plain link in the rail: the flyout gives way to its tooltip. */
    linkHoverEnter(): void;
    flyoutEnter(): void;
    flyoutLeave(): void;
    flyoutKeydown(event: KeyboardEvent): void;
    closeFlyout(): void;
    trackLayer(index: number, layer: FlyoutLayer): number;
    onDocumentMousedown(event: MouseEvent): void;
    onEscape(): void;
    private open;
    private ensureOverlay;
    private positionPane;
    private flyoutItems;
    private scheduleClose;
    private clearCloseTimer;
    private clearSwitchTimer;
    private clearTimers;
    static ɵfac: i0.ɵɵFactoryDeclaration<SideMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SideMenuComponent, "tb-side-menu", never, { "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
