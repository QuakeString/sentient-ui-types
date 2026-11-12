import { UrlMatchResult, UrlSegment } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/** The login flow's other pages: /login/<page>, /activationLinkExpired, /passwordResetLinkExpired. */
export declare function loginPagesMatcher(segments: UrlSegment[]): UrlMatchResult | null;
export declare class LoginRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LoginRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LoginRoutingModule>;
}
