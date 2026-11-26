import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** The page the help window shows (route in app.module.ts). */
export declare const HELP_VIEW_PATH = "help-view";
/** localStorage key holding help text that has no help id (inline or computed help). */
export declare const HELP_VIEW_CONTENT_KEY = "sentient-help-view-content";
/** True in the separate help window. */
export declare function isHelpViewPage(): boolean;
export interface HelpWindowSource {
    helpId?: string;
    helpContent?: string;
    helpContentBase64?: string;
    asyncHelpContent?: Observable<string>;
}
/**
 * Opens a help text in its own browser popup window (in the desktop client:
 * its own OS window), so it stays open while the person keeps working on the
 * page. The window is same-origin, so it shares the session, theme and
 * language with the app.
 */
export declare class HelpWindowService {
    open(source: HelpWindowSource): void;
    private storeContent;
    /** A real popup (not a tab), placed at the right edge of the app window. */
    private windowFeatures;
    static ɵfac: i0.ɵɵFactoryDeclaration<HelpWindowService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
