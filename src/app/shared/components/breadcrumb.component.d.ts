import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadCrumb } from './breadcrumb';
import { BroadcastService } from '@core/services/broadcast.service';
import { UtilsService } from '@core/services/utils.service';
import { BreadcrumbService } from '@core/services/breadcrumb.service';
import { HomeService } from '@core/services/home.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent implements OnInit, AfterViewInit, OnDestroy {
    private broadcast;
    private breadcrumbService;
    private cd;
    private translate;
    private elementRef;
    private zone;
    utils: UtilsService;
    private homeService;
    /** Rendered after the trail (a dashboard puts its state selector here). */
    componentBreadcrumbsTpl?: TemplateRef<any>;
    trailRef: ElementRef<HTMLElement>;
    rulerRef: ElementRef<HTMLElement>;
    extraRef: ElementRef<HTMLElement>;
    lastBreadcrumb$: import("rxjs").Observable<BreadCrumb>;
    breadcrumbs: BreadCrumb[];
    /** Per crumb: shown as its icon only (the name in a tooltip) because the trail does not fit. */
    compact: boolean[];
    private subscriptions;
    private resizeObserver;
    private fitFrame;
    private fitPending;
    constructor(broadcast: BroadcastService, breadcrumbService: BreadcrumbService, cd: ChangeDetectorRef, translate: TranslateService, elementRef: ElementRef<HTMLElement>, zone: NgZone, utils: UtilsService, homeService: HomeService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    label(breadcrumb: BreadCrumb): string;
    private scheduleFit;
    /**
     * Crumbs drop their names, first to last, until the trail fits; the
     * current page keeps its name longest. Names are never cut to a few letters.
     */
    private fit;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "tb-breadcrumb", never, { "componentBreadcrumbsTpl": { "alias": "componentBreadcrumbsTpl"; "required": false; }; }, {}, never, never, false, never>;
}
