import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class TitleService {
    private translate;
    private title;
    private appTitle;
    private pageTitle;
    constructor(translate: TranslateService, title: Title);
    /** On an edge: the name of the Edge entity it is bound to, once known. */
    setEdgeName(edgeName: string): void;
    private apply;
    setTitle(snapshot: ActivatedRouteSnapshot, lazyTranslate?: TranslateService): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
