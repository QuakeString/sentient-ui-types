import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * The page of the separate help window: one help text, full size, with no app
 * menus. Opened by HelpWindowService from the open-in-window button of a help
 * popover. Theme and language follow the app (same origin, same storage).
 */
export declare class HelpViewComponent implements OnInit {
    private route;
    private translate;
    private title;
    private host;
    private destroyRef;
    readonly helpId: import("@angular/core").WritableSignal<string>;
    readonly helpContent: import("@angular/core").WritableSignal<string>;
    /** False until the app language is known, so the help loads in that language. */
    readonly ready: import("@angular/core").WritableSignal<boolean>;
    /** Bumped to load the help again (language changed, new inline text). */
    readonly version: import("@angular/core").WritableSignal<number>;
    private localSource;
    ngOnInit(): void;
    onMarkdownReady(): void;
    private readLocalContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HelpViewComponent, "st-help-view", never, {}, {}, never, never, false, never>;
}
