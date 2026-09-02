import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Integration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class IntegrationService {
    private http;
    constructor(http: HttpClient);
    getIntegrations(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Integration>>;
    getIntegration(integrationId: string, config?: RequestConfig): Observable<Integration>;
    getIntegrationByRoutingKey(routingKey: string, config?: RequestConfig): Observable<Integration>;
    saveIntegration(integration: Integration, config?: RequestConfig): Observable<Integration>;
    deleteIntegration(integrationId: string, config?: RequestConfig): Observable<Object>;
    checkConnection(integration: Integration, config?: RequestConfig): Observable<any>;
    getIntegrationDebugEvents(integrationId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntegrationService>;
}
