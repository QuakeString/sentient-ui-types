import { TbContextMenuEvent } from '@shared/models/jquery-event.models';
import { Widget } from '@shared/models/widget.models';
import { CopiedWidgetStyleInfo } from '@core/services/item-buffer.service';
export interface ILayoutController {
    reload(): any;
    resetHighlight(): any;
    highlightWidget(widgetId: string, delay?: number): any;
    focusWidgetForEdit?(widgetId: string, drawerLeftX?: number, verticalOnly?: boolean): void;
    selectWidget(widgetId: string, delay?: number, mode?: 'replace' | 'toggle'): any;
    isWidgetSelected?(widgetId: string): boolean;
    captureZoomBeforeEdit?(): void;
    getSelectedWidgets?(): Widget[];
    selectAllWidgets?(): void;
    pasteWidget($event: TbContextMenuEvent | KeyboardEvent): any;
    pasteWidgetReference($event: TbContextMenuEvent | KeyboardEvent): any;
    notifyGridsterOptionsChanged?(): any;
    rotateWidget?(widgetId: string): any;
    setWidgetDimensions?(widgetId: string, sizeX: number, sizeY: number): any;
    applyWidgetStyle?(widgetId: string, style: CopiedWidgetStyleInfo): any;
    alignWidgets?(widgets: Widget[], mode: 'left' | 'centerH' | 'right' | 'top' | 'middleV' | 'bottom' | 'distributeH' | 'distributeV'): any;
    zoomScale?: number;
    zoomPercent?: number;
    zoomMin?: number;
    zoomMax?: number;
    zoomIn?(): void;
    zoomOut?(): void;
    zoomReset?(): void;
    zoomFit?(): void;
}
export declare enum LayoutWidthType {
    PERCENTAGE = "percentage",
    FIXED = "fixed"
}
export declare enum LayoutPercentageSize {
    MIN = 10,
    MAX = 90
}
export declare enum LayoutFixedSize {
    MIN = 150,
    MAX = 4000
}
