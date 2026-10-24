import { ElementRef, OnDestroy } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import * as i0 from "@angular/core";
/**
 * Opens the trigger's menu a small gap away from it, with a notch pointing at
 * the trigger's centre, like the time window panel and the left menu's popups.
 * Put it on the element that has [matMenuTriggerFor].
 */
export declare class MenuNotchDirective implements OnDestroy {
    private trigger;
    private elementRef;
    private subscription;
    constructor(trigger: MatMenuTrigger, elementRef: ElementRef<HTMLElement>);
    ngOnDestroy(): void;
    private placeNotch;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuNotchDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MenuNotchDirective, "[stMenuNotch]", never, {}, {}, never, never, false, never>;
}
