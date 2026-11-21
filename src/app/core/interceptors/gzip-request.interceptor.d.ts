import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Marks a request whose JSON body may be sent gzip-compressed. The server
 * unpacks `Content-Encoding: gzip` request bodies; browsers never compress
 * what they send on their own.
 */
export declare const GZIP_REQUEST_BODY: HttpContextToken<boolean>;
/** The JSON text gzip-compressed. */
export declare const gzipText: (text: string) => Promise<ArrayBuffer>;
/**
 * Sends the JSON body of a marked request gzip-compressed (a 2 MB dashboard
 * becomes about 0.1 MB), so a save also goes through on a slow link.
 *
 * Runs after the other interceptors, so they still see the body as an object
 * (the version conflict dialog re-sends it). A server that refuses the
 * encoding (415) gets the same request uncompressed.
 */
export declare class GzipRequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GzipRequestInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
