import { AfterViewInit, DestroyRef, ElementRef, Injector, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { MenuService } from '@core/services/menu.service';
import { PermissionService } from '@core/services/permission.service';
import { ThemeService } from '@core/services/theme.service';
import { UtilsService } from '@core/services/utils.service';
import { HomeService } from '@core/services/home.service';
import { GlobalSearchService } from '@core/http/global-search.service';
import { AiAssistantStore } from '@home/components/ai-assistant/ai-assistant.store';
import { CommandPaletteRef, CommandPaletteService } from './command-palette.service';
import { PaletteGroup, PaletteItem, PaletteScope, TextPart } from './command-palette.models';
import * as i0 from "@angular/core";
export declare class CommandPaletteComponent implements OnInit, AfterViewInit {
    paletteRef: CommandPaletteRef;
    private store;
    private router;
    private http;
    private translate;
    private menuService;
    private permissionService;
    private themeService;
    private utils;
    private homeService;
    private authService;
    private paletteService;
    private globalSearch;
    private aiStore;
    private breakpointObserver;
    private destroyRef;
    private injector;
    private window;
    /** The dialog's own input (in 'attached' mode the field's input is used). */
    inputRef: ElementRef<HTMLInputElement>;
    listRef: ElementRef<HTMLElement>;
    readonly modKey: string;
    readonly listboxId = "st-cp-listbox";
    readonly query: import("@angular/core").WritableSignal<string>;
    readonly scope: import("@angular/core").WritableSignal<PaletteScope>;
    readonly activeIndex: import("@angular/core").WritableSignal<number>;
    readonly loading: import("@angular/core").WritableSignal<boolean>;
    private readonly entityResult;
    private readonly basePages;
    private readonly otherDicts;
    /** The pages, with their names in the other languages once those are loaded. */
    private readonly pages;
    private readonly recentDashboards;
    private readonly recents;
    private readonly aiAvailable;
    private readonly menuCollapsed;
    private readonly authority;
    private readonly userId;
    /** Menu ids of the user's menu (filtered by authority and RBAC in MenuService). */
    private readonly menuIds;
    /** Entity types the user may search. */
    private readonly allowedTypesSig;
    private get allowedTypes();
    private readonly isDesktop;
    private readonly forceFullscreen;
    /** Scopes the user can use (entity scopes only for searchable types). */
    readonly availableScopes: import("@angular/core").Signal<PaletteScope[]>;
    readonly groups: import("@angular/core").Signal<PaletteGroup[]>;
    /** The rows in display order (the listbox's options). */
    readonly items: import("@angular/core").Signal<PaletteItem[]>;
    /** Each row's position in the list. */
    readonly indexOfItem: import("@angular/core").Signal<Map<PaletteItem, number>>;
    readonly activeItem: import("@angular/core").Signal<PaletteItem>;
    /** Shown in place of the list when it is empty. */
    readonly emptyText: import("@angular/core").Signal<any>;
    readonly statusText: import("@angular/core").Signal<any>;
    constructor(paletteRef: CommandPaletteRef, store: Store<AppState>, router: Router, http: HttpClient, translate: TranslateService, menuService: MenuService, permissionService: PermissionService, themeService: ThemeService, utils: UtilsService, homeService: HomeService, authService: AuthService, paletteService: CommandPaletteService, globalSearch: GlobalSearchService, aiStore: AiAssistantStore, breakpointObserver: BreakpointObserver, destroyRef: DestroyRef, injector: Injector, window: Window);
    ngOnInit(): void;
    /** Entities: debounced; a newer query cancels the request in flight. */
    private searchEntities;
    ngAfterViewInit(): void;
    /** The input typed in: the top bar field's, or the dialog's own. */
    get inputEl(): HTMLInputElement;
    /**
     * 'attached' mode: the field's input drives the palette; the palette marks
     * it up as the combobox of its listbox and reports scope and loading back.
     */
    private attachToHost;
    onInput(value: string): void;
    clear(): void;
    removeScope(): void;
    onKeydown(event: KeyboardEvent): void;
    optionId(index: number): string;
    indexOf(item: PaletteItem): number;
    /** Hover moves the selection (mousemove, so a list scrolled under a still pointer does not). */
    onHover(index: number): void;
    onClick(event: MouseEvent, item: PaletteItem): void;
    onAuxClick(event: MouseEvent, item: PaletteItem): void;
    parts(item: PaletteItem): TextPart[];
    private setActive;
    private scrollActiveIntoView;
    /** New results keep the selected row selected, when it is still there. */
    private setResultsKeepingActive;
    execute(item: PaletteItem, newTab: boolean): void;
    private buildGroups;
    private aiGroup;
    private scopeItems;
    private buildPages;
    private pageEntry;
    private label;
    private matchPages;
    private pageItem;
    /** Types the user may search: in their menu, readable (RBAC) and openable (route guard). */
    private computeAllowedTypes;
    private isTypeAllowed;
    private searchTypes;
    private entityGroups;
    private entityItem;
    private loadRecents;
    private addRecent;
    /** A stored place is shown only while the user may still open it. */
    private isRecentAllowed;
    private loadRecentDashboards;
    private recentItems;
    private dashboardItem;
    private commands;
    private commandLabels;
    private matchCommands;
    private suggestedCommands;
    private commandItem;
    private loadOtherLanguages;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandPaletteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommandPaletteComponent, "st-command-palette", never, {}, {}, never, never, true, never>;
}
