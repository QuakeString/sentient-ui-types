import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PageComponent } from '@shared/components/page.component';
import { AppState } from '@core/core.state';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthState } from '@core/auth/auth.models';
import { ISearchableComponent } from '@home/models/searchable-component.models';
import { ActiveComponentService } from '@core/services/active-component.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LicenseService } from '@core/http/license.service';
import { HomeService } from '@core/services/home.service';
import { CommandPaletteService } from '@home/components/command-palette/command-palette.service';
import * as i0 from "@angular/core";
export declare class HomeComponent extends PageComponent implements AfterViewInit, OnInit, OnDestroy {
    protected store: Store<AppState>;
    private window;
    private activeComponentService;
    private fb;
    private router;
    breakpointObserver: BreakpointObserver;
    private dialog;
    private licenseService;
    homeService: HomeService;
    private elementRef;
    private cd;
    private commandPalette;
    private ngZone;
    authState: AuthState;
    forceFullscreen: boolean;
    activeComponent: any;
    searchableComponent: ISearchableComponent;
    sidenavMode: 'over' | 'push' | 'side';
    sidenavOpened: boolean;
    sidenavDesktop: import("@angular/core").WritableSignal<boolean>;
    sidenavCollapsed: import("@angular/core").WritableSignal<boolean>;
    /** The content's offset: set with the menu's state, animated in step with it (see toggleSidenav). */
    contentCollapsed: import("@angular/core").WritableSignal<boolean>;
    private sidenavToggleTimer;
    menuCollapsed: import("@angular/core").Signal<boolean>;
    logo: SafeUrl;
    collapsedLogo: SafeUrl;
    sidenav: MatSidenav;
    searchInputField: ElementRef;
    menuScroll: ElementRef<HTMLElement>;
    private menuScrollObserver;
    fullscreenEnabled: boolean;
    searchEnabled: boolean;
    showSearch: boolean;
    textSearch: import("@angular/forms").FormControl<string>;
    hideLoadingBar: boolean;
    private destroy$;
    constructor(store: Store<AppState>, window: Window, activeComponentService: ActiveComponentService, fb: FormBuilder, router: Router, breakpointObserver: BreakpointObserver, dialog: MatDialog, licenseService: LicenseService, homeService: HomeService, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef, commandPalette: CommandPaletteService, ngZone: NgZone, sanitizer: DomSanitizer);
    /**
     * One-shot license-prompt dialog (Phase 5C+5E). Fires after sys_admin
     * login when no license is active. Tenant-scoped users never see it
     * — they can't activate a license anyway. Only opens once per
     * sessionStorage entry to avoid nagging on every route change.
     *
     * Two flavors depending on whether the install has any data yet:
     *   - LOAD_DEMO=true (or already-used): "License required" — standard
     *     copy, the customer is presumably already familiar with SENTIENT.
     *   - LOAD_DEMO=false (truly fresh): "Welcome to SENTIENT" — warmer
     *     copy positioning the dialog as a welcome screen rather than a
     *     barrier. Detected by usage.devices+assets+customers all zero.
     */
    private maybeShowLicensePrompt;
    navigateHome(): void;
    ngOnInit(): void;
    /** Marks the menu while items are hidden below it, so the profile casts
     *  its shadow only when the menu actually scrolls under it. */
    private watchMenuOverflow;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    /**
     * Ctrl/Cmd+K anywhere opens (or closes) the command palette; "/" opens it
     * when not typing. Code editors keep their own Ctrl+K.
     */
    onDocumentKeydown(event: KeyboardEvent): void;
    private isEditable;
    sidenavClicked(): void;
    toggleSidenav(): void;
    toggleFullscreen(): void;
    isFullscreen(): boolean;
    goBack(): void;
    activeComponentChanged(activeComponent: any): void;
    private updateActiveComponent;
    displaySearchMode(): boolean;
    openSearch(): void;
    closeSearch(): void;
    private searchTextUpdated;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeComponent, "tb-home", never, {}, {}, never, never, false, never>;
}
