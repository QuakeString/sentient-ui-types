import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as echarts from 'echarts/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
/** Chart plumbing shared by the condition-monitoring chart widgets: the
 *  echarts instance on `#chartShape`, resizing, and re-theming when the
 *  platform switches between light and dark. */
export declare abstract class CmChartBase implements AfterViewInit, OnDestroy {
    widgetComponent: WidgetComponent;
    protected cd: ChangeDetectorRef;
    chartShape: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    /** Shown inside another card (the Analysis tabs): no title row of its own. */
    embedded: boolean;
    /** The widget draws its own title row (not when embedded). */
    get titled(): boolean;
    protected chart: echarts.ECharts;
    protected dark: boolean;
    protected destroy$: Subject<void>;
    private resize$;
    private darkObserver;
    protected constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    /** Draws the chart; called on data, resize and theme change. */
    protected abstract render(): void;
    /** The layout is worked out in pixels from the chart's size, so a resize
     *  must draw again (a plain resize only rescales percentage layouts). */
    protected redrawOnResize: boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    protected get ready(): boolean;
    /** Axis, text and tooltip colours of the current theme. */
    protected get theme(): {
        text: string;
        line: string;
        split: string;
        series: string;
        tooltip: {
            confine: boolean;
            backgroundColor: string;
            borderWidth: number;
            padding: number[];
            extraCssText: string;
            textStyle: {
                color: string;
                fontSize: number;
            };
        };
    };
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmChartBase, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmChartBase, never, never, { "ctx": { "alias": "ctx"; "required": false; }; "embedded": { "alias": "embedded"; "required": false; }; }, {}, never, never, false, never>;
}
