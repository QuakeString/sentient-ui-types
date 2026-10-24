import * as i0 from "@angular/core";
/**
 * Scrolls a tab bar that has more tabs than fit with the mouse wheel or a
 * trackpad, while the pointer is over the tabs, instead of only with the
 * header's arrow buttons. Applies to every `mat-tab-nav-bar` and
 * `mat-tab-group`; a bar whose tabs all fit is left alone (the page scrolls).
 */
export declare class TabWheelScrollDirective {
    private nav;
    private group;
    onWheel(event: WheelEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabWheelScrollDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabWheelScrollDirective, "[mat-tab-nav-bar], mat-tab-group", never, {}, {}, never, never, false, never>;
}
