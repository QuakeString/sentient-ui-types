import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { User } from '@shared/models/user.model';
import { Authority } from '@shared/models/authority.enum';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class UserMenuComponent implements OnInit, OnDestroy {
    private store;
    private router;
    private authService;
    private http;
    private elementRef;
    private cd;
    private document;
    displayUserInfo: boolean;
    /** Rendered at the bottom of the left menu (full-width button, menu opens upward). */
    sidenav: boolean;
    /** Left menu collapsed to the icon rail: avatar only. */
    collapsed: boolean;
    /** An item was chosen (the mobile drawer closes). */
    menuClicked: EventEmitter<void>;
    authorities: typeof Authority;
    authority$: import("rxjs").Observable<Authority>;
    authorityName$: import("rxjs").Observable<string>;
    /** The signed-in user, for the avatar (photo version in additionalInfo). */
    userDetails$: import("rxjs").Observable<User>;
    userDisplayName$: import("rxjs").Observable<string>;
    userTrigger: MatMenuTrigger;
    /** Left menu too wide for the popup to open beside it (the mobile drawer):
     *  the popup opens above the profile row instead, its notch pointing down. */
    stacked: boolean;
    private hoverTimer;
    private openedByHover;
    constructor(store: Store<AppState>, router: Router, authService: AuthService, http: HttpClient, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef, document: Document);
    ngOnInit(): void;
    ngOnDestroy(): void;
    sidenavClick(event: MouseEvent, trigger: MatMenuTrigger): void;
    sidenavKey(event: Event, trigger: MatMenuTrigger): void;
    hoverOpen(trigger: MatMenuTrigger): void;
    hoverKeep(): void;
    hoverClose(trigger: MatMenuTrigger): void;
    onMenuClosed(): void;
    onDocumentClick(event: MouseEvent): void;
    private open;
    private clearHoverTimer;
    private resolveRoleName;
    getUserDisplayName(user: User): string;
    openAccount(): void;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserMenuComponent, "tb-user-menu", never, { "displayUserInfo": { "alias": "displayUserInfo"; "required": false; }; "sidenav": { "alias": "sidenav"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, { "menuClicked": "menuClicked"; }, never, never, false, never>;
}
