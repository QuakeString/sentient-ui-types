import { MenuSection } from '@core/services/menu.models';
import { SideMenuComponent } from '@home/menu/side-menu.component';
import * as i0 from "@angular/core";
export declare class MenuLinkComponent {
    sideMenu: SideMenuComponent;
    section: MenuSection;
    /** Icon only; the name shows as a tooltip. */
    collapsed: boolean;
    /** In the rail, hovering a link closes the sections' flyout. */
    constructor(sideMenu: SideMenuComponent);
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuLinkComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuLinkComponent, "tb-menu-link", never, { "section": { "alias": "section"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; }, {}, never, never, false, never>;
}
