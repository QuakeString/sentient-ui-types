import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DashboardToolbarComponent implements OnInit {
    toolbarOpened: boolean;
    forceFullscreen: boolean;
    /** The toolbar is a top bar in the page's colours (see .st-shell-bar), not teal. */
    shellBar: import("@angular/core").InputSignal<boolean>;
    triggerClick: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onTriggerClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardToolbarComponent, "tb-dashboard-toolbar", never, { "toolbarOpened": { "alias": "toolbarOpened"; "required": false; }; "forceFullscreen": { "alias": "forceFullscreen"; "required": false; }; "shellBar": { "alias": "shellBar"; "required": false; "isSignal": true; }; }, { "triggerClick": "triggerClick"; }, never, ["*"], false, never>;
}
