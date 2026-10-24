import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from '@core/http/http-utils';
import { TenantId } from '@shared/models/id/tenant-id';
import * as i0 from "@angular/core";
/** Limits on a tenant's use of the system-wide AI models (0 = unlimited), from its tenant profile. */
export interface SystemModelLimits {
    maxTokensPerMonth: number;
    maxRequestsPerMinute: number;
}
/** One tenant's AI usage this month, own or system-wide models. */
export interface AiUsageRow {
    tenantId: TenantId;
    tenantName?: string;
    systemModel: boolean;
    requests: number;
    inputTokens: number;
    outputTokens: number;
}
/** `GET /api/ai/usage`: this month (yyyymm), and the caller's system-model limits (tenant admins). */
export interface AiUsage {
    period: number;
    data: AiUsageRow[];
    systemModelLimits?: SystemModelLimits;
}
export declare class AiUsageService {
    private http;
    constructor(http: HttpClient);
    getUsage(config?: RequestConfig): Observable<AiUsage>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiUsageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiUsageService>;
}
