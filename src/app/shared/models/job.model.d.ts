import { BaseData } from './base-data';
import { JobId } from './id/job-id';
import { TenantId } from './id/tenant-id';
import { EntityId } from './id/entity-id';
export declare enum JobStatus {
    COMPLETED = "COMPLETED",
    RUNNING = "RUNNING",
    QUEUED = "QUEUED",
    PENDING = "PENDING",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED"
}
export declare enum JobType {
    CF_REPROCESSING = "CF_REPROCESSING",
    DUMMY = "DUMMY",
    OTA_UPDATE = "OTA_UPDATE",
    REPORT_GENERATION = "REPORT_GENERATION",
    DATA_EXPORT = "DATA_EXPORT"
}
export interface JobEntityInfo {
    entityId: string;
    entityType: string;
    name?: string;
}
/**
 * Per-target task outcome inside the job result. Backend serialises as
 * a discriminated union on `jobType`, but the UI only ever consumes
 * the CF_REPROCESSING shape today.
 */
export interface TaskResult {
    jobType: JobType;
    key?: string;
    success: boolean;
    discarded: boolean;
    finishTs: number;
    entityInfo?: JobEntityInfo;
    error?: string;
}
export interface JobResult {
    successfulCount: number;
    failedCount: number;
    discardedCount: number;
    /** Set once fan-out completes — until then the dialog shows an indeterminate bar. */
    totalCount?: number;
    generalError?: string;
    /** Up to first 100 non-success per-target outcomes; counter-only for successes. */
    results?: TaskResult[];
    startTs?: number;
    finishTs?: number;
    cancellationTs?: number;
}
export interface Job extends BaseData<JobId> {
    tenantId: TenantId;
    type: string;
    key: string;
    entityId?: EntityId;
    /** Read-only enrichment for the Task Manager grid. */
    entityName?: string;
    status: JobStatus;
    configuration: any;
    result?: JobResult;
}
export interface JobFilter {
    statuses?: JobStatus[];
    types?: JobType[];
    entityType?: string;
    entityIds?: string[];
}
export declare const jobStatusTranslations: Map<JobStatus, string>;
export declare const jobStatusColors: Map<JobStatus, string>;
export declare const jobTypeTranslations: Map<JobType, string>;
export declare function isTerminalJobStatus(s: JobStatus): boolean;
/** Best-effort progress percentage based on the running counters. */
export declare function jobProgress(job: Job): number;
