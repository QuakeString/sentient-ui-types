import { BaseData } from '@shared/models/base-data';
import { HasUUID } from '@shared/models/id/has-uuid';
export interface AnalyticsPipeline extends BaseData<HasUUID> {
    tenantId?: string;
    description?: string;
    configuration: any;
    enabled: boolean;
    debugMode?: boolean;
    status: string;
    lastError?: string;
    updatedTime?: number;
    additionalInfo?: any;
}
export type AnalyticsPipelineStatus = 'RUNNING' | 'STOPPED' | 'ERROR' | 'STARTING';
