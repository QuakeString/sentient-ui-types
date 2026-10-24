import { AfterViewInit, ChangeDetectorRef, DestroyRef, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { UserSettingsService } from '@core/http/user-settings.service';
import { LanguageChoice } from '@shared/models/script.models';
import * as i0 from "@angular/core";
export type LanguageSwitcherDisplay = 'auto' | 'buttons' | 'menu';
export interface LanguageSwitcherWidgetSettings {
    /** Languages offered (locales); empty = every language the app offers. */
    languages: string[];
    display: LanguageSwitcherDisplay;
    /** Save the choice to the signed-in user's profile. */
    saveForUser: boolean;
}
export declare const languageSwitcherDefaultSettings: LanguageSwitcherWidgetSettings;
export declare class LanguageSwitcherWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private store;
    private userSettingsService;
    private elementRef;
    private zone;
    private cd;
    private destroyRef;
    ctx: WidgetContext;
    /** Above this many languages the pill is never used. */
    private static readonly MAX_BUTTONS;
    /** Above this many languages the menu gets a search box. */
    static readonly SEARCH_FROM = 9;
    settings: LanguageSwitcherWidgetSettings;
    choices: LanguageChoice[];
    filtered: LanguageChoice[];
    filter: string;
    current: string;
    showButtons: boolean;
    /** Too narrow for the language's name: the menu button shows only its icon. */
    iconOnly: boolean;
    private width;
    private resizeObserver?;
    constructor(store: Store<AppState>, userSettingsService: UserSettingsService, elementRef: ElementRef<HTMLElement>, zone: NgZone, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    get searchable(): boolean;
    currentChoice(): LanguageChoice;
    choose(locale: string): void;
    onFilter(text: string): void;
    /** Typing stays in the search box; Escape still closes the menu. */
    onSearchKey(event: KeyboardEvent): void;
    onMenuClosed(): void;
    langOf(locale: string): string;
    dirOf(locale: string): string;
    private refreshFilter;
    private updateLayout;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageSwitcherWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LanguageSwitcherWidgetComponent, "tb-language-switcher-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
