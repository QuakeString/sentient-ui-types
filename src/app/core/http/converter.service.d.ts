import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Converter, ConverterTestResult, TestDownlinkRequest, TestUplinkRequest } from '@shared/models/converter.models';
import * as i0 from "@angular/core";
export declare class ConverterService {
    private http;
    constructor(http: HttpClient);
    getConverters(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Converter>>;
    getConverter(converterId: string, config?: RequestConfig): Observable<Converter>;
    saveConverter(converter: Converter, config?: RequestConfig): Observable<Converter>;
    deleteConverter(converterId: string, config?: RequestConfig): Observable<Object>;
    testUpLink(request: TestUplinkRequest, config?: RequestConfig): Observable<ConverterTestResult>;
    testDownLink(request: TestDownlinkRequest, config?: RequestConfig): Observable<ConverterTestResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConverterService>;
}
