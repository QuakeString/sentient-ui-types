import { Injector } from '@angular/core';
import { DashboardService } from '@core/http/dashboard.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BreakpointId, Dashboard, DashboardLayoutId } from '@shared/models/dashboard.models';
import { Converter } from '@shared/models/converter.models';
import { EntityAliases } from '@shared/models/alias.models';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { EntityService } from '@core/http/entity.service';
import { Widget, WidgetTypeDetails } from '@shared/models/widget.models';
import { ItemBufferService } from '@core/services/item-buffer.service';
import { BulkImportRequest, BulkImportResult, ImportWidgetResult, ZipExportItem, ZipImportExisting, ZipImportHandler, ZipImportOutcome } from './import-export.models';
import { EntityType } from '@shared/models/entity-type.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetService } from '@core/http/widget.service';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { ImportEntitiesResultInfo, ImportEntityData, VersionedEntity } from '@shared/models/entity.models';
import { RequestConfig } from '@core/http/http-utils';
import { RuleChainImport, RuleChainType } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { DeviceProfile } from '@shared/models/device.models';
import { TenantProfile } from '@shared/models/tenant.model';
import { TenantProfileService } from '@core/http/tenant-profile.service';
import { DeviceService } from '@core/http/device.service';
import { AssetService } from '@core/http/asset.service';
import { EdgeService } from '@core/http/edge.service';
import { AssetProfileService } from '@core/http/asset-profile.service';
import { AssetProfile } from '@shared/models/asset.models';
import { ImageService } from '@core/http/image.service';
import { ImageResourceInfo, ImageResourceType } from '@shared/models/resource.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { CalculatedField } from '@shared/models/calculated-field.models';
import { AlarmRulesService } from '@core/http/alarm-rules.service';
import { ConverterService } from '@core/http/converter.service';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export type editMissingAliasesFunction = (widgets: Array<Widget>, isSingleWidget: boolean, customTitle: string, missingEntityAliases: EntityAliases) => Observable<EntityAliases>;
/** How a calculated-field or alarm-rule table imports a ZIP. */
export interface CalculatedFieldZipImportOptions {
    /** Alarm rules table: only CF type ALARM is accepted, saved through the alarm rule API. */
    alarmRules?: boolean;
    /** The table is opened for one entity: every item is saved into it. */
    fixedOwner?: EntityId;
    /** The table's own normalisation of an imported item (tenant-ref fix-up). */
    normalize?: (calculatedField: CalculatedField) => CalculatedField;
}
export declare class ImportExportService {
    private window;
    private document;
    private store;
    private translate;
    private dashboardService;
    private dashboardUtils;
    private widgetService;
    private deviceProfileService;
    private assetProfileService;
    private tenantProfileService;
    private entityService;
    private ruleChainService;
    private deviceService;
    private assetService;
    private edgeService;
    private imageService;
    private utils;
    private itembuffer;
    private calculatedFieldsService;
    private alarmRulesService;
    private converterService;
    private dialog;
    private injector;
    constructor(window: Window, document: Document, store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, widgetService: WidgetService, deviceProfileService: DeviceProfileService, assetProfileService: AssetProfileService, tenantProfileService: TenantProfileService, entityService: EntityService, ruleChainService: RuleChainService, deviceService: DeviceService, assetService: AssetService, edgeService: EdgeService, imageService: ImageService, utils: UtilsService, itembuffer: ItemBufferService, calculatedFieldsService: CalculatedFieldsService, alarmRulesService: AlarmRulesService, converterService: ConverterService, dialog: MatDialog, injector: Injector);
    exportFormProperties(properties: FormProperty[], fileName: string): void;
    importFormProperties(): Observable<FormProperty[]>;
    exportImage(type: ImageResourceType, key: string): void;
    importImage(): Observable<ImageResourceInfo>;
    exportCalculatedField(calculatedFieldId: string): void;
    /** With zip options the dialog also takes a ZIP of several fields (or alarm rules) and imports it itself. */
    openCalculatedFieldImportDialog(zip?: CalculatedFieldZipImportOptions): Observable<CalculatedField | ZipImportOutcome>;
    exportConverter(converter: Converter): void;
    importConverter(allowZip?: boolean): Observable<Converter | ZipImportOutcome>;
    private validateImportedConverter;
    exportDashboard(dashboardId: string): void;
    importDashboard(onEditMissingAliases: editMissingAliasesFunction, allowZip?: boolean): Observable<Dashboard | ZipImportOutcome>;
    exportWidget(dashboard: Dashboard, sourceState: string, sourceLayout: DashboardLayoutId, widget: Widget, widgetTitle: string, breakpoint: BreakpointId): void;
    importWidget(dashboard: Dashboard, targetState: string, onEditMissingAliases: editMissingAliasesFunction, targetLayoutFunction: () => Observable<DashboardLayoutId>, onAliasesUpdateFunction: () => void, onFiltersUpdateFunction: () => void): Observable<ImportWidgetResult>;
    exportWidgetType(widgetTypeId: string): void;
    exportWidgetTypes(widgetTypeIds: string[]): Observable<void>;
    importWidgetType(): Observable<WidgetTypeDetails>;
    importWidgetType(allowZip: boolean): Observable<WidgetTypeDetails | ZipImportOutcome>;
    exportWidgetsBundle(widgetsBundleId: string): void;
    exportEntity(entityData: VersionedEntity): void;
    private exportSelectedWidgetsBundle;
    private handleExportWidgetsBundle;
    private exportWidgetsBundleWithWidgetTypes;
    private exportWidgetsBundleWithWidgetTypeFqns;
    importWidgetsBundle(allowZip?: boolean): Observable<WidgetsBundle | ZipImportOutcome>;
    /** Saves an imported bundle, then its widget types (or widget type FQNs) into it. */
    private saveImportedWidgetsBundle;
    private prepareWidgetType;
    bulkImportEntities(entitiesData: BulkImportRequest, entityType: EntityType, config?: RequestConfig): Observable<BulkImportResult>;
    importEntities(entitiesData: ImportEntityData[], entityType: EntityType, updateData: boolean, importEntityCompleted?: () => void, config?: RequestConfig): Observable<ImportEntitiesResultInfo>;
    exportRuleChain(ruleChainId: string): void;
    private onRuleChainExported;
    /** A single file opens in the rule chain editor; a ZIP is saved directly (chain and metadata) instead. */
    importRuleChain(expectedRuleChainType: RuleChainType, allowZip?: boolean): Observable<RuleChainImport | ZipImportOutcome>;
    private processOldRuleChainConnections;
    exportDeviceProfile(deviceProfileId: string): void;
    importDeviceProfile(allowZip?: boolean): Observable<DeviceProfile | ZipImportOutcome>;
    exportAssetProfile(assetProfileId: string): void;
    importAssetProfile(allowZip?: boolean): Observable<AssetProfile | ZipImportOutcome>;
    exportTenantProfile(tenantProfileId: string): void;
    importTenantProfile(allowZip?: boolean): Observable<TenantProfile | ZipImportOutcome>;
    private processCSVCell;
    exportCsv(data: {
        [key: string]: any;
    }[], filename: string): void;
    exportText(data: string | Array<string>, filename: string): void;
    exportJSZip(data: object, filename: string): Observable<void>;
    /** Entity types whose generic tables offer "Export selected" as one ZIP. */
    canExportEntitiesZip(entityType: EntityType | string): boolean;
    /**
     * Export several entities of one type as a ZIP: one file per entity, each the
     * same JSON the single export writes (so each still imports on its own),
     * plus manifest.json with the source ids and owners.
     */
    exportEntitiesZip(entityType: EntityType, entities: BaseData<HasId>[]): Observable<void>;
    /**
     * Shared ZIP builder. Items are fetched a few at a time; an item that fails is
     * listed under "failures" in the manifest instead of failing the whole ZIP.
     */
    exportZip<T>(items: T[], fileName: string, entityType: string, fetch: (item: T) => Observable<ZipExportItem>): Observable<void>;
    /** The once-per-batch include question a type asks on export, or false; null when cancelled. */
    private askZipExportOption;
    /** Fetch and prepare one entity exactly as its single export does. */
    private fetchZipExportItem;
    /** A file-name stem from a display name, unique within one ZIP. Keeps non-Latin letters. */
    private uniqueZipName;
    private exportErrorText;
    /**
     * Opens the review dialog for a ZIP of one entity type and imports what the
     * user confirms. Emits a ZipImportOutcome when anything was saved, else null.
     */
    importZip(file: File, handler: ZipImportHandler): Observable<ZipImportOutcome>;
    /** ZIP import of the types whose single import lives in this service: same checks, same save calls. */
    private zipImportHandler;
    /** ZIP import of calculated fields or alarm rules: each saved into the owner the review dialog resolves. */
    private calculatedFieldZipHandler;
    /** Every record whose name contains the text (server text search), up to a few pages: ZIP import clash checks. */
    findZipNameClashes<E>(fetch: (pageLink: PageLink) => Observable<PageData<E>>, nameOf: (entity: E) => string, name: string): Observable<ZipImportExisting[]>;
    private zipEntityId;
    /** Saves imported data as new, or over the record replaceId keeping that record's identity and version. */
    private saveOverExisting;
    /** Imported data laid over an existing record: its id, version, created time and the listed fields are kept. */
    private overExisting;
    /**
     * Saves an imported rule chain without the editor, as the editor's save does
     * for an import: the chain first, then its metadata (nodes and connections).
     */
    private saveImportedRuleChain;
    private prepareRuleChain;
    private prepareRuleChainMetaData;
    private validateImportedRuleChain;
    private validateImportedDeviceProfile;
    private validateImportedAssetProfile;
    private validateImportedTenantProfile;
    private sumObject;
    private handleExportError;
    private validateImportedFormProperties;
    private validateImportedImage;
    private validateImportedDashboard;
    private validateImportedWidget;
    private validateImportedWidgetTypeDetails;
    private validateImportedWidgetsBundle;
    private saveImportedDashboard;
    private addImportedWidget;
    private processEntityAliases;
    private prepareAliasesInfo;
    private prepareEntityAlias;
    /** With enableZipImport a picked .zip comes back as the File itself, not parsed JSON. */
    private openImportDialog;
    private exportToPc;
    exportJson(data: any, filename: string): void;
    private downloadFile;
    /** The dashboard JSON a single dashboard import takes, ready to save. */
    prepareDashboardImport(dashboard: Dashboard): Dashboard;
    prepareDashboardExport(dashboard: Dashboard): Dashboard;
    private prepareProfileExport;
    private prepareCalculatedFieldExport;
    private prepareExport;
    private prepareImport;
    private getIncludeResourcesPreference;
    private openExportDialog;
    private updateUserSettingsIncludeResourcesIfNeeded;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImportExportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ImportExportService>;
}
