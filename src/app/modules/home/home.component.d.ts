import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
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
    authState: AuthState;
    forceFullscreen: boolean;
    activeComponent: any;
    searchableComponent: ISearchableComponent;
    sidenavMode: 'over' | 'push' | 'side';
    sidenavOpened: boolean;
    logo: string;
    sidenav: MatSidenav;
    searchInputField: ElementRef;
    fullscreenEnabled: boolean;
    searchEnabled: boolean;
    showSearch: boolean;
    textSearch: import("@angular/forms").FormControl<string>;
    hideLoadingBar: boolean;
    private destroy$;
    constructor(store: Store<AppState>, window: Window, activeComponentService: ActiveComponentService, fb: FormBuilder, router: Router, breakpointObserver: BreakpointObserver, dialog: MatDialog, licenseService: LicenseService);
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
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    sidenavClicked(): void;
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
