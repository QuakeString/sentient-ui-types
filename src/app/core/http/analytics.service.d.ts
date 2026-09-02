import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import * as i0 from "@angular/core";
export declare class AnalyticsService {
    private http;
    constructor(http: HttpClient);
    /** Transform types the running backend build can execute (palette gating). */
    getAnalyticsCapabilities(config?: RequestConfig): Observable<{
        enabled: boolean;
        transforms: string[];
    }>;
    /** Enqueue windowed jobs for a pipeline over [startTs, endTs). */
    backfillAnalyticsPipeline(pipelineId: string, startTs: number, endTs: number, config?: RequestConfig): Observable<{
        jobs: number;
    }>;
    getAnalyticsPipelines(pageLink: PageLink, config?: RequestConfig): Observable<PageData<AnalyticsPipeline>>;
    getAnalyticsPipeline(pipelineId: string, config?: RequestConfig): Observable<AnalyticsPipeline>;
    saveAnalyticsPipeline(pipeline: AnalyticsPipeline, config?: RequestConfig): Observable<AnalyticsPipeline>;
    deleteAnalyticsPipeline(pipelineId: string, config?: RequestConfig): Observable<void>;
    private toPipeline;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnalyticsService>;
}
