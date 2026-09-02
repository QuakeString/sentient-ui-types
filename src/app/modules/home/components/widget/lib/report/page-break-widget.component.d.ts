import { OnInit, TemplateRef } from '@angular/core';
import { PageBreakWidgetSettings } from './page-break-widget.models';
import { WidgetContext } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class PageBreakWidgetComponent implements OnInit {
    settings: PageBreakWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    showInEditor: boolean;
    label: string;
    isEditMode: boolean;
    ngOnInit(): void;
    onInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageBreakWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageBreakWidgetComponent, "tb-page-break-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; "widgetTitlePanel": { "alias": "widgetTitlePanel"; "required": false; }; }, {}, never, never, false, never>;
}
