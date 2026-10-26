import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { BreadCrumb } from '@shared/components/breadcrumb';
import { ActiveComponentService } from '@core/services/active-component.service';
import { MenuService } from '@core/services/menu.service';
import { CustomerNavigationService } from '@core/services/customer-navigation.service';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
/**
 * The breadcrumb trail of the current route, built once for the whole app.
 *
 * It used to be built by each tb-breadcrumb from its own injected route, which
 * only worked for the one in the app bar. A dashboard now shows the trail in
 * its own toolbar (the app bar is hidden there), so the trail is built here,
 * from the root route, and every tb-breadcrumb just renders it.
 */
export declare class BreadcrumbService {
    private router;
    private activatedRoute;
    private translate;
    private menuService;
    private activeComponentService;
    private customerNavService;
    private store;
    private breadcrumbsSubject;
    private updateBreadcrumbsSubscription;
    private activeComponent;
    private crumbMenuIds;
    readonly breadcrumbs$: Observable<Array<BreadCrumb>>;
    readonly lastBreadcrumb$: Observable<BreadCrumb>;
    constructor(router: Router, activatedRoute: ActivatedRoute, translate: TranslateService, menuService: MenuService, activeComponentService: ActiveComponentService, customerNavService: CustomerNavigationService, store: Store<AppState>);
    private setActiveComponent;
    private update;
    /**
     * Drops a parent crumb the side menu no longer puts the page under. Routes
     * keep their old nesting when the menu is regrouped (recipes are still at
     * /features/recipes, device profiles at /profiles/deviceProfiles), so the
     * trail follows the menu, not the URL.
     */
    private followMenu;
    private lastChild;
    private buildBreadCrumbs;
    private fullscreenHomeBreadcrumb;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BreadcrumbService>;
}
