import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Counts the widgets still waiting for their first data, so the app shows one
 * bar for all of them instead of an animation in each.
 */
export declare class WidgetFirstLoadService {
    private ngZone;
    private router;
    private pending;
    private loading;
    readonly loading$: Observable<boolean>;
    private navigating$;
    /** For a page that hides the app bar: widgets are loading, or the page is being left. */
    readonly busy$: Observable<boolean>;
    constructor(ngZone: NgZone, router: Router);
    /** One more widget is waiting; call the returned function when it is not. */
    begin(): () => void;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetFirstLoadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
