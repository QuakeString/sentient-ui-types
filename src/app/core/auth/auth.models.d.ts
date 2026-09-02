import { AuthUser, User } from '@shared/models/user.model';
import { UserSettings } from '@shared/models/user-settings.models';
import { TrendzSettings } from '@shared/models/trendz-settings.models';
export interface SysParamsState {
    userTokenAccessEnabled: boolean;
    allowedDashboardIds: string[];
    edgesSupportEnabled: boolean;
    hasRepository: boolean;
    tbelEnabled: boolean;
    rhaiEnabled: boolean;
    persistDeviceStateToTelemetry: boolean;
    mobileQrEnabled: boolean;
    userSettings: UserSettings;
    maxResourceSize: number;
    maxDebugModeDurationMinutes: number;
    maxDataPointsPerRollingArg: number;
    maxArgumentsPerCF: number;
    minAllowedDeduplicationIntervalInSecForCF: number;
    minAllowedAggregationIntervalInSecForCF: number;
    minAllowedScheduledUpdateIntervalInSecForCF: number;
    maxRelationLevelPerCfArgument: number;
    maxRelatedEntitiesToReturnPerCfArgument: number;
    intermediateAggregationIntervalInSecForCF: number;
    ruleChainDebugPerTenantLimitsConfiguration?: string;
    calculatedFieldDebugPerTenantLimitsConfiguration?: string;
    trendzSettings: TrendzSettings;
}
export interface SysParams extends SysParamsState {
    maxDatapointsLimit: number;
}
export interface AuthPayload extends SysParamsState {
    authUser: AuthUser;
    userDetails: User;
    forceFullscreen: boolean;
}
export interface AuthState extends AuthPayload {
    isAuthenticated: boolean;
    isUserLoaded: boolean;
    lastPublicDashboardId: string;
}
