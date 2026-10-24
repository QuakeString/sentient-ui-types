import { NgZone, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** A media query with every px width condition moved up by `inset`. */
export declare function insetMediaQuery(query: string, inset: number): string;
/**
 * Space taken from the right edge of the window by a pinned side panel (the
 * AI assistant). The application's layouts react to the window width — CSS
 * media queries (`@media (min-width: 960px)`, the gt-sm: classes) and the CDK
 * BreakpointObserver — so with a panel pinned they believed they had the whole
 * window: toolbars overflowed and buttons overlapped. While an inset is set,
 * every width condition is moved up by it, so the layouts answer for the width
 * they really have:
 * - CSS: the width conditions of `@media` rules are rewritten in place,
 *   including style sheets added later (lazy components);
 * - JS: {@link InsetMediaMatcher} gives BreakpointObserver the same answers.
 */
export declare class ViewportInsetService implements OnDestroy {
    private zone;
    private readonly inset$;
    /** The media text each rewritten rule had originally. */
    private readonly originals;
    private headObserver;
    constructor(zone: NgZone);
    get inset(): number;
    readonly changes$: Observable<number>;
    /** Sets the width (px) a pinned panel takes from the right edge; 0 when none. */
    setInset(px: number): void;
    ngOnDestroy(): void;
    /** Style sheets added later (lazy-loaded components) get the same rewrite. */
    private watchNewStyleSheets;
    private rewriteSheet;
    private rewriteRules;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewportInsetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ViewportInsetService>;
}
/** MediaMatcher for the CDK BreakpointObserver that honours {@link ViewportInsetService}. */
export declare class InsetMediaMatcher {
    private insets;
    constructor(insets: ViewportInsetService);
    matchMedia(query: string): MediaQueryList;
    static ɵfac: i0.ɵɵFactoryDeclaration<InsetMediaMatcher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InsetMediaMatcher>;
}
/** Provider replacing the CDK MediaMatcher application-wide. */
export declare const INSET_MEDIA_MATCHER_PROVIDER: {
    provide: typeof MediaMatcher;
    useClass: typeof InsetMediaMatcher;
};
