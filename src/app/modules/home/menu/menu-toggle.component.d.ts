import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MenuSection } from '@core/services/menu.models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SideMenuComponent } from '@home/menu/side-menu.component';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MenuToggleComponent implements OnDestroy {
    private router;
    private store;
    private translate;
    private customTranslate;
    private cd;
    sideMenu: SideMenuComponent;
    section: MenuSection;
    /** Icon-only rail: the pages open in a menu beside the icon. */
    collapsed: boolean;
    private routerSubscription;
    constructor(router: Router, store: Store<AppState>, translate: TranslateService, customTranslate: CustomTranslatePipe, cd: ChangeDetectorRef, sideMenu: SideMenuComponent);
    ngOnDestroy(): void;
    sectionName(): string;
    sectionHeight(): string;
    toggleSection(event: Event): void;
    sectionActive(): boolean;
    /** The side menu's flyout shows this section. */
    flyoutOpen(): boolean;
    railKey(event: Event, anchor: HTMLElement): void;
    trackBySectionPages(index: number, section: MenuSection): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuToggleComponent, "tb-menu-toggle", never, { "section": { "alias": "section"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, never, false, never>;
}
