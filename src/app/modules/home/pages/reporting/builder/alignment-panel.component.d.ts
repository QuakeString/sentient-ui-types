import { EventEmitter } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export type AlignmentType = 'horizontal' | 'vertical';
export interface AlignmentOption {
    value: string;
    icon: string;
}
/**
 * Alignment panel component for selecting horizontal/vertical alignment.
 * Used in report builder for text alignment options.
 */
export declare class AlignmentPanelComponent {
    popover: TbPopoverComponent;
    alignmentType: AlignmentType;
    currentValue: string;
    alignmentSelected: EventEmitter<string>;
    get options(): AlignmentOption[];
    selectAlignment(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlignmentPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlignmentPanelComponent, "tb-alignment-panel", never, { "popover": { "alias": "popover"; "required": false; }; "alignmentType": { "alias": "alignmentType"; "required": false; }; "currentValue": { "alias": "currentValue"; "required": false; }; }, { "alignmentSelected": "alignmentSelected"; }, never, never, false, never>;
}
