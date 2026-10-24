import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';
/**
 * The UI locale a user ends up in: their saved language, else the browser's,
 * narrowed to a supported locale. `updateUserLang` switches to it.
 */
export declare function resolveUserLang(translate: TranslateService, userLang: string, translations?: any): string;
export declare function updateUserLang(translate: TranslateService, document: Document, userLang: string, translations?: any, dir?: Directionality): Observable<any>;
/**
 * Mirror the layout for right-to-left languages: `dir` on <html> for CSS and
 * the browser, and the CDK Directionality for Material components and
 * overlays opened from now on.
 */
export declare function applyDirection(document: Document, lang: string, dir?: Directionality): void;
/** Link the CJK Noto faces for Chinese, Japanese and Korean (about 100 KB of CSS each). */
export declare function loadCjkFonts(document: Document, lang: string): void;
