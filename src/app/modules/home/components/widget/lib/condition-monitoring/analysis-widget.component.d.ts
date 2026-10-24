import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import * as i0 from "@angular/core";
export interface AnalysisWidgetSettings {
    kind: 'analysis';
}
type AnalysisTab = 'spectrum' | 'waveform' | 'waterfall' | 'sound' | 'pump';
/** Analysis: the spectrum, time waveform, waterfall, sound clips and pump
 *  performance of a machine in one card with tabs, so the page shows one
 *  analysis at a time. Sound and Pump appear only when the machine has them. */
export declare class AnalysisWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private cd;
    ctx: WidgetContext;
    tab: AnalysisTab;
    tabs: AnalysisTab[];
    private destroy$;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    setTab(t: AnalysisTab): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalysisWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalysisWidgetComponent, "st-analysis-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
