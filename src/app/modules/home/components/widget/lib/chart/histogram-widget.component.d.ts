import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { Observable } from 'rxjs';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { HistogramWidgetSettings } from '@home/components/widget/lib/chart/histogram-widget.models';
import * as i0 from "@angular/core";
interface LegendItem {
    label: string;
    color: string;
    hidden: boolean;
    dataKeyIndex: number;
}
export declare class HistogramWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    settings: HistogramWidgetSettings;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    legendItems: LegendItem[];
    statsText: string;
    private chart;
    private shapeResize$;
    private darkMode;
    private darkModeObserver;
    constructor(widgetComponent: WidgetComponent, imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    toggleLegendItem(item: LegendItem): void;
    private onResize;
    private drawChart;
    private rebuildChart;
    private updateChartOption;
    private extractValues;
    static ɵfac: i0.ɵɵFactoryDeclaration<HistogramWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HistogramWidgetComponent, "tb-histogram-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "widgetTitlePanel": { "alias": "widgetTitlePanel"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
