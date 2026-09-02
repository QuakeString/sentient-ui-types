import { BaseData } from '@shared/models/base-data';
import { EntityGroupId } from '@shared/models/id/entity-group-id';
import { TenantId } from '@shared/models/id/tenant-id';
import { HasTenantId, HasVersion } from '@shared/models/entity.models';
export type EntityGroupType = 'DEVICE' | 'ASSET' | 'USER' | 'DASHBOARD' | 'CUSTOMER' | 'ENTITY_VIEW' | 'EDGE' | 'TENANT';
export declare const entityGroupTypes: EntityGroupType[];
export declare const entityGroupTypeTranslations: Map<EntityGroupType, string>;
export declare const entityGroupTypeSingularTranslations: Map<EntityGroupType, string>;
export declare const entityGroupTypeIcons: Map<EntityGroupType, string>;
export type EntityGroupColumnType = 'entityField' | 'clientAttribute' | 'sharedAttribute' | 'serverAttribute' | 'timeseries';
export type EntityGroupColumnSortOrder = 'ASC' | 'DESC' | 'NONE';
export declare const columnTypeTranslations: Map<EntityGroupColumnType, string>;
export declare const defaultEntityGroupColumns: EntityGroupColumn[];
export type EntityDetailsMode = 'rowClick' | 'actionButtonOnly' | 'disabled';
export type ActionSourceType = 'headerButton' | 'rowAction';
export declare const actionSourceTranslations: Map<ActionSourceType, string>;
export type EntityGroupActionType = 'openDashboard' | 'customFunction';
export declare const actionTypeTranslations: Map<EntityGroupActionType, string>;
export interface OpenDashboardActionConfig {
    dashboardId?: string;
    dashboardStateId?: string;
    openInNewTab?: boolean;
    setEntityFromWidget?: boolean;
    stateEntityParamName?: string;
}
export interface CustomActionConfig {
    customFunction?: string;
}
export interface EntityGroupColumn {
    type: EntityGroupColumnType;
    key: string;
    title?: string;
    sortOrder?: EntityGroupColumnSortOrder;
    disableSorting?: boolean;
    mobileHidden?: boolean;
    useCellStyleFunction?: boolean;
    cellStyleFunction?: string;
    useCellContentFunction?: boolean;
    cellContentFunction?: string;
}
export interface EntityGroupSettings {
    tableTitle?: string;
    enableSearch?: boolean;
    enableAdd?: boolean;
    enableDelete?: boolean;
    enableSelection?: boolean;
    enableGroupTransfer?: boolean;
    entityDetailsMode?: EntityDetailsMode;
    displayPagination?: boolean;
    pageStepIncrement?: number;
    numberOfSteps?: number;
    defaultPageSize?: number;
    enableCredentialsManagement?: boolean;
}
export interface EntityGroupAction {
    actionSource: ActionSourceType;
    name: string;
    icon: string;
    type: EntityGroupActionType;
    configuration?: OpenDashboardActionConfig | CustomActionConfig;
}
export interface EntityGroupConfiguration {
    columns?: EntityGroupColumn[];
    settings?: EntityGroupSettings;
    actions?: EntityGroupAction[];
}
export interface EntityGroup extends BaseData<EntityGroupId>, HasTenantId, HasVersion {
    tenantId: TenantId;
    ownerId: string;
    ownerType: string;
    type: EntityGroupType;
    name: string;
    additionalInfo?: any;
    isPublic: boolean;
    configuration?: EntityGroupConfiguration;
}
export interface EntityGroupMember {
    entityId: string;
    entityType: string;
    createdTime: number;
    entityName?: string;
}
export interface AddEntitiesToGroupRequest {
    entityIds: string[];
}
export interface RemoveEntitiesFromGroupRequest {
    entityIds: string[];
}
