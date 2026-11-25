import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { CloudEventInfo, CloudEventStatus, CloudEventStream, CloudStatus, EdgeLimit, EdgeScope, ForkResult, PublicCloudStatus } from '@shared/models/cloud.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
/** The REST API a SENTIENT Edge offers about its server (docs/edge plan P3b, P4.3, P5). */
export declare class CloudService {
    private http;
    constructor(http: HttpClient);
    getCloudStatus(config?: RequestConfig): Observable<CloudStatus>;
    getEdgeLimits(config?: RequestConfig): Observable<EdgeLimit[]>;
    getPublicCloudStatus(config?: RequestConfig): Observable<PublicCloudStatus>;
    /** The scopes of those of `ids` the server sent; ids created here are absent. */
    getScopes(ids: string[], config?: RequestConfig): Observable<{
        [id: string]: EdgeScope;
    }>;
    getCloudEvents(pageLink: PageLink, stream: CloudEventStream, status?: CloudEventStatus, config?: RequestConfig): Observable<PageData<CloudEventInfo>>;
    getCloudEvent(stream: CloudEventStream, seqId: number, config?: RequestConfig): Observable<CloudEventInfo>;
    /** Give this edge its own copy of a SHARED dashboard or rule chain. */
    fork(entityType: EntityType, entityId: string, config?: RequestConfig): Observable<ForkResult>;
    private toEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CloudService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
