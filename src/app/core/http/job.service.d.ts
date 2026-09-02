import { HttpClient } from '@angular/common/http';
import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { TimePageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Job, JobFilter } from '@shared/models/job.model';
import * as i0 from "@angular/core";
export declare class JobService {
    private http;
    constructor(http: HttpClient);
    getJobs(pageLink: TimePageLink, filter?: JobFilter, config?: RequestConfig): Observable<PageData<Job>>;
    getJob(jobId: string, config?: RequestConfig): Observable<Job>;
    cancelJob(jobId: string, config?: RequestConfig): Observable<void>;
    reprocessJob(jobId: string, config?: RequestConfig): Observable<Job>;
    deleteJob(jobId: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JobService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JobService>;
}
