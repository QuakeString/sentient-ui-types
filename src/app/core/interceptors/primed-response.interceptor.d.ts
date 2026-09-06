import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrimedResponseService } from '@core/http/primed-response.service';
import * as i0 from "@angular/core";
export declare class PrimedResponseInterceptor implements HttpInterceptor {
    private primed;
    constructor(primed: PrimedResponseService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrimedResponseInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrimedResponseInterceptor>;
}
