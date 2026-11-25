import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Fades the end of a one-line text box instead of an ellipsis, only while its
 * text is cut off. Used where the text is painted with a gradient
 * (background-clip: text), which no browser draws an ellipsis for correctly.
 */
export declare class FadeOverflowDirective implements OnDestroy {
    private elementRef;
    private renderer;
    enabled: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    private readonly resizeObserver;
    private readonly mutationObserver;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2);
    ngOnDestroy(): void;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<FadeOverflowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FadeOverflowDirective, "[stFadeOverflow]", never, { "enabled": { "alias": "stFadeOverflow"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
