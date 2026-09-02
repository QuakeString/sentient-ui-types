import { EventEmitter } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export declare class ViewButtonComponent {
    icon: string;
    tooltipText: string;
    tooltipPosition: TooltipPosition;
    style: {
        [key: string]: any;
    };
    disabled: boolean;
    miniButton: boolean;
    viewClick: EventEmitter<Event>;
    onViewClick($event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewButtonComponent, "tb-view-button", never, { "icon": { "alias": "icon"; "required": false; }; "tooltipText": { "alias": "tooltipText"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "style": { "alias": "style"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "miniButton": { "alias": "miniButton"; "required": false; }; }, { "viewClick": "viewClick"; }, never, never, false, never>;
}
