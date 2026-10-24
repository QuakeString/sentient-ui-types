import { NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { AiReference } from '@core/http/ai-assistant.service';
import * as i0 from "@angular/core";
/** A reference as the composer holds it: what is sent, plus a picture of the widget. */
export interface AiPointedReference extends AiReference {
    /** JPEG of the widget (data URL), sent along as an attachment. */
    image?: string;
}
/**
 * Point mode: the user clicks a dashboard widget, or a part of one (title,
 * chart axis, plot area, table column), and it becomes a reference in the
 * assistant's message box. Dragging across the page picks every widget the box
 * touches. Esc or Done ends it.
 *
 * Works on the DOM, not on component state: widget containers carry
 * `data-st-widget-id` and the dashboard page `data-st-dashboard-id`. While
 * pointing, clicks on the page are swallowed (so no widget action runs); the
 * assistant panel itself stays usable. The outline, the label, the drag box
 * and the mode pill are plain elements on top of the page.
 */
export declare class AiPointService {
    private zone;
    private translate;
    readonly active$: BehaviorSubject<boolean>;
    readonly references$: BehaviorSubject<AiPointedReference[]>;
    private layer;
    private outline;
    private tag;
    private box;
    private pill;
    private drag;
    private listeners;
    constructor(zone: NgZone, translate: TranslateService);
    get active(): boolean;
    toggle(): void;
    start(): void;
    stop(): void;
    remove(index: number): void;
    clear(): void;
    /** Briefly outlines the widget a reference points at, if it is on the page. */
    flash(ref: AiReference): void;
    private listen;
    private buildLayer;
    private setPill;
    private hideOutline;
    private showOutline;
    /** Events on the assistant (panel, its window) and the pill pass through untouched. */
    private ours;
    private onMove;
    private onDown;
    private onUp;
    private onClick;
    private onKey;
    private updateBox;
    private widgetsInBox;
    private widgetTarget;
    private targetAt;
    /** On an ECharts chart: the Y axis, X axis or plot area under the pointer. */
    private chartPart;
    private label;
    private add;
    /** A picture of the widget as it looks now, at most 800 px wide. */
    private snapshot;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiPointService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiPointService>;
}
