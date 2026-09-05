import { Observable } from 'rxjs/internal/Observable';
export declare function beautifyJs(source: string, options?: any): Observable<string>;
/** Tidy for Rhai scripts: js-beautify with the Rhai-only tokens (`..`,
 *  `..=`, closure `|params|`) shielded from it. See rhai-beautify.models.ts. */
export declare function beautifyRhai(source: string, options?: any): Observable<string>;
export declare function beautifyCss(source: string, options?: any): Observable<string>;
export declare function beautifyHtml(source: string, options?: any): Observable<string>;
