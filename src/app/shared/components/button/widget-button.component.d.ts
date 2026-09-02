import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { UtilsService } from '@core/services/utils.service';
import { Observable } from 'rxjs';
import { WidgetContext } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class WidgetButtonComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    private renderer;
    private elementRef;
    private cd;
    private utils;
    widgetButton: ElementRef<HTMLElement>;
    widgetButtonContent: ElementRef<HTMLElement>;
    appearance: import("@shared/components/button/widget-button.models").WidgetButtonAppearance;
    borderRadius: string;
    autoScale: boolean;
    disabled: boolean;
    activated: boolean;
    hovered: boolean;
    pressed: boolean;
    disableEvents: boolean;
    ctx: WidgetContext;
    clicked: EventEmitter<MouseEvent>;
    pressStart: EventEmitter<PointerEvent>;
    pressEnd: EventEmitter<PointerEvent>;
    label$: Observable<string>;
    iconStyle: ComponentStyle;
    computedBorderRadius: string;
    mousePressed: boolean;
    /** Pointer press/release pass-through for momentary (push-button)
     *  widgets. The pointer is captured on press — only when someone
     *  actually listens — so the release event still fires when the
     *  pointer is let go outside the button. */
    onPointerDown(event: PointerEvent): void;
    private buttonResize$;
    private appearanceCssClass;
    private themeChangeSubscription;
    constructor(renderer: Renderer2, elementRef: ElementRef, cd: ChangeDetectorRef, utils: UtilsService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    validateSize(): void;
    private updateAppearance;
    private updateBorderRadius;
    private clearAppearanceCss;
    private updateAutoScale;
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetButtonComponent, "tb-widget-button", never, { "appearance": { "alias": "appearance"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "autoScale": { "alias": "autoScale"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "activated": { "alias": "activated"; "required": false; }; "hovered": { "alias": "hovered"; "required": false; }; "pressed": { "alias": "pressed"; "required": false; }; "disableEvents": { "alias": "disableEvents"; "required": false; }; "ctx": { "alias": "ctx"; "required": false; }; }, { "clicked": "clicked"; "pressStart": "pressStart"; "pressEnd": "pressEnd"; }, never, never, false, never>;
}
