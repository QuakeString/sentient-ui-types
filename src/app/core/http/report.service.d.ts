import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { RequestConfig } from './http-utils';
import { ReportTemplate, SchedulerEvent, Report, GenerateReportRequest, GenerateReportResponse, ReportStatusResponse } from '@home/pages/reporting/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportService {
    private http;
    private window;
    constructor(http: HttpClient, window: Window);
    getReportTemplates(pageLink: PageLink, config?: RequestConfig, filters?: {
        templateType?: string;
        format?: string;
        customerId?: string;
    }): Observable<PageData<ReportTemplate>>;
    getReportTemplate(templateId: string, config?: RequestConfig): Observable<ReportTemplate>;
    getReportTemplateInfo(templateId: string, config?: RequestConfig): Observable<ReportTemplate>;
    saveReportTemplate(template: ReportTemplate, config?: RequestConfig): Observable<ReportTemplate>;
    deleteReportTemplate(templateId: string, config?: RequestConfig): Observable<void>;
    /**
     * Generate a test report (uses job queue like regular reports).
     * Returns a job ID that can be polled for progress.
     */
    generateTestReport(templateId: string, timezone?: string, config?: RequestConfig): Observable<{
        jobId: string;
        format: string;
    }>;
    /**
     * Debug-run a report script server-side (no job, no files): returns a
     * structured outcome with errors or a preview of the produced output.
     */
    testReportScript(body: {
        script: string;
        timezone?: string;
        windowMs?: number;
        timewindow?: any;
        arguments?: any[];
        templateName?: string;
    }, config?: RequestConfig): Observable<any>;
    /**
     * Get test report generation status and progress.
     */
    getTestReportStatus(jobId: string, config?: RequestConfig): Observable<ReportStatusResponse>;
    /**
     * Download the generated test report.
     */
    downloadTestReport(jobId: string): Observable<Blob>;
    getSchedulerEvents(pageLink: PageLink, includeCustomers?: boolean, config?: RequestConfig, filters?: {
        userId?: string;
        reportTemplateId?: string;
        eventType?: string;
        enabled?: string;
    }): Observable<PageData<SchedulerEvent>>;
    getSchedulerEvent(eventId: string, config?: RequestConfig): Observable<SchedulerEvent>;
    saveSchedulerEvent(event: SchedulerEvent, config?: RequestConfig): Observable<SchedulerEvent>;
    enableSchedulerEvent(eventId: string, config?: RequestConfig): Observable<SchedulerEvent>;
    disableSchedulerEvent(eventId: string, config?: RequestConfig): Observable<SchedulerEvent>;
    deleteSchedulerEvent(eventId: string, config?: RequestConfig): Observable<void>;
    getReports(pageLink: PageLink, includeCustomers?: boolean, config?: RequestConfig, filters?: {
        userId?: string;
        reportTemplateId?: string;
        startTime?: number;
        endTime?: number;
    }): Observable<PageData<Report>>;
    getReport(reportId: string, config?: RequestConfig): Observable<Report>;
    generateReport(request: GenerateReportRequest, config?: RequestConfig): Observable<GenerateReportResponse>;
    getReportStatus(reportId: string, config?: RequestConfig): Observable<ReportStatusResponse>;
    downloadReport(reportId: string, entry?: string): Observable<Blob>;
    deleteReport(reportId: string, config?: RequestConfig): Observable<void>;
    makeReportPublic(reportId: string, config?: RequestConfig): Observable<Report>;
    makeReportPrivate(reportId: string, config?: RequestConfig): Observable<Report>;
    getPublicReportLink(report: Report): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportService>;
}
