import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Tells the server which page a value change came from, for the audit log.
 *
 * Writes of attributes, time series and RPC calls carry an `X-Sentient-Source`
 * header: `{"ui":"dashboard","dashboardId":…,"dashboardName":…,"state":…}` on a
 * dashboard, `{"ui":"entity","page":…}` on an entity page, `{"ui":"ui","page":…}`
 * elsewhere. A call without the header (scripts, integrations) is recorded as
 * an API call. The header only describes the page; it grants nothing.
 */
export declare const VALUE_SOURCE_HEADER = "X-Sentient-Source";
/** Remember a dashboard's title so changes made on it name the dashboard. */
export declare function rememberDashboardTitle(id: string, title: string): void;
/** Whether a request writes a value the audit log records with its source. */
export declare function isValueWrite(method: string, url: string): boolean;
/** The source description of the page at `pathname` + `search`. */
export declare function describeValueSource(pathname: string, search: string): Record<string, string>;
/** JSON with every non-ASCII character escaped, so it is a valid header value. */
export declare function asciiJson(value: unknown): string;
export declare class ValueSourceInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueSourceInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
