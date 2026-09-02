import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class ThemeSwitcherWidgetComponent implements AfterViewInit, OnDestroy {
    private elementRef;
    private zone;
    private cd;
    ctx: WidgetContext;
    private static readonly PILL_MIN_WIDTH;
    compact: boolean;
    private resizeObserver?;
    constructor(elementRef: ElementRef<HTMLElement>, zone: NgZone, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeSwitcherWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeSwitcherWidgetComponent, "tb-theme-switcher-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
