import { BaseData } from '@shared/models/base-data';
import { RoleId } from '@shared/models/id/role-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { HasTenantId } from '@shared/models/entity.models';
export type RoleType = 'GENERIC' | 'GROUP';
export declare const roleTypes: RoleType[];
export declare const roleTypeTranslations: Map<RoleType, string>;
export declare const rbacResources: string[];
export declare const rbacResourceTranslations: Map<string, string>;
export declare const rbacOperations: string[];
export declare const rbacOperationTranslations: Map<string, string>;
/** Operations applicable per resource type for GENERIC roles */
export declare const RESOURCE_OPERATIONS: {
    [resource: string]: string[];
};
/** Default operations when resource is not found in RESOURCE_OPERATIONS */
export declare const DEFAULT_OPERATIONS: string[];
/** Operations available for GROUP role type (no resource scoping) */
export declare const GROUP_OPERATIONS: string[];
export interface Role extends BaseData<RoleId>, HasTenantId {
    tenantId: TenantId;
    ownerId?: string;
    ownerType?: string;
    name: string;
    type: RoleType;
    permissions: {
        [resource: string]: string[];
    };
    restrictions?: {
        [resource: string]: string[];
    };
    additionalInfo?: any;
}
export interface GroupPermission {
    id: string;
    createdTime: number;
    tenantId: {
        entityType: string;
        id: string;
    };
    userGroupId: {
        entityType: string;
        id: string;
    };
    roleId: {
        entityType: string;
        id: string;
    };
    entityGroupId?: {
        entityType: string;
        id: string;
    };
    isPublic: boolean;
}
export interface SaveGroupPermissionRequest {
    id?: string;
    userGroupId: string;
    roleId: string;
    entityGroupId?: string;
    isPublic: boolean;
}
