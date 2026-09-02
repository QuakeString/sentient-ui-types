import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, DestroyRef, Renderer2, ViewContainerRef, ElementRef } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { TbPopoverService } from "@shared/components/popover.service";
import { AlignmentType } from "../../builder/alignment-panel.component";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { StDataConfig, StChartType } from "../../models/st-chart.models";
import { DataKeysCallbacks } from "@home/components/widget/lib/settings/common/key/data-keys.component.models";
import { TimeService } from "@core/services/time.service";
import { DatasourceType, DataKey } from "@shared/models/widget.models";
import { EntityType } from "@shared/models/entity-type.models";
import { EntityId } from "@shared/models/id/entity-id";
import { DataKeyType } from "@shared/models/telemetry/telemetry.models";
import { EntityService } from "@core/http/entity.service";
import { Filter } from "@shared/models/query/query.models";
import { EntityAlias } from "@shared/models/alias.models";
import { IAliasController } from "@core/api/widget-api.models";
import { EntityAliasSelectCallbacks } from "@home/components/widget/lib/settings/common/alias/entity-alias-select.component.models";
import { FilterSelectCallbacks } from "@home/components/widget/lib/settings/common/filter/filter-select.component.models";
import * as i0 from "@angular/core";
/**
 * Sentient Data Configuration Component
 *
 * Styled to match tb-widget-config Data tab exactly.
 * Uses tb-form-panel, tb-toggle-select, tb-timewindow, tb-timewindow-style,
 * tb-entity-autocomplete, and tb-entity-keys-list.
 * Advanced mode only (no Device/Entity toggle - that's Basic mode).
 */
export declare class StDataConfigComponent implements OnInit, OnChanges {
    private fb;
    private cd;
    private destroyRef;
    private timeService;
    private dialog;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private entityService;
    config: StDataConfig;
    chartType: StChartType;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    isHorizontal: boolean;
    hideTableHeading: boolean;
    hideDatasources: boolean;
    hideColumns: boolean;
    alarmTableConfig: any;
    entityTableConfig: any;
    configChange: EventEmitter<StDataConfig>;
    alarmTableConfigChange: EventEmitter<any>;
    entityTableConfigChange: EventEmitter<any>;
    headingTextInput: ElementRef<HTMLInputElement>;
    timewindowForm: FormGroup;
    datasourcesForm: FormGroup;
    tableHeadingForm: FormGroup;
    columnsForm: FormGroup;
    dataColumns: Array<{
        source: string;
        key: DataKey;
        index: number;
        isLatest: boolean;
        isPending?: boolean;
    }>;
    timestampFormatOptions: {
        value: string;
        label: string;
    }[];
    entityAliasSelectCallbacks: EntityAliasSelectCallbacks;
    filterSelectCallbacks: FilterSelectCallbacks;
    datasourceType: typeof DatasourceType;
    entityType: typeof EntityType;
    dataKeyType: typeof DataKeyType;
    get datasourceTypesList(): DatasourceType[];
    availableEntityTypes: EntityType[];
    entityTypeTranslations: {
        [key: string]: string;
    };
    maxDatasources: number;
    copyStyleMode: boolean;
    copiedColumnStyle: any;
    copiedColumnSource: any;
    pastedDestinationIndex: number;
    pastedDestinationType: 'column' | 'timestamp' | null;
    availableKeys: DataKey[];
    keyFilterText: string;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef, timeService: TimeService, dialog: MatDialog, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, entityService: EntityService);
    get datasourcesArray(): FormArray;
    get showAddDatasource(): boolean;
    getDatasourceTypeTranslation(type: DatasourceType): string;
    getEntityIdForDatasource(index: number): EntityId | null;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private initTimewindowForm;
    private initDatasourcesForm;
    private initTableHeadingForm;
    private updateTableHeadingFromConfig;
    private emitTableHeadingChanges;
    private initColumnsForm;
    private updateColumnsFromConfig;
    private emitColumnsChanges;
    /**
     * Refresh data columns from datasource - called when datasource keys change
     */
    refreshDataColumns(): void;
    /**
     * Get available data keys from the first datasource for Sort by dropdown
     */
    getAvailableDataKeys(): DataKey[];
    /**
     * Remove a data column - removes from datasource dataKeys or latestDataKeys
     */
    removeDataColumn(column: {
        source: string;
        key: DataKey;
        index: number;
        isLatest: boolean;
    }): void;
    /**
     * Open the timestamp column settings dialog
     */
    openTimestampSettings(): void;
    /**
     * Open the data column settings dialog
     */
    openColumnSettings(column: {
        source: string;
        key: DataKey;
        index: number;
        isLatest: boolean;
    }): void;
    /**
     * Start copy style mode when paint brush is clicked
     */
    startCopyStyle(column: {
        source: string;
        key: DataKey;
        index: number;
        isLatest: boolean;
    }, event: MouseEvent): void;
    /**
     * Start copy style mode for timestamp column
     */
    startCopyTimestampStyle(event: MouseEvent): void;
    /**
     * Handle row click for pasting style
     */
    onRowClickForPaste(column: {
        source: string;
        key: DataKey;
        index: number;
        isLatest: boolean;
    }, event: MouseEvent): void;
    /**
     * Handle timestamp row click for pasting style
     */
    onTimestampRowClickForPaste(event: MouseEvent): void;
    /**
     * Cancel copy style mode (Esc key or right-click)
     */
    cancelCopyStyleMode(event?: KeyboardEvent): void;
    /**
     * Handle right-click to cancel copy mode
     */
    onContextMenu(event: MouseEvent): void;
    /**
     * Paste column style settings (used by onRowClick)
     */
    private pasteColumnStyle;
    /**
     * Update the label for a data column
     */
    updateColumnLabel(column: {
        source: string;
        key: DataKey;
        index: number;
        isLatest: boolean;
    }, newLabel: string): void;
    /**
     * Handle drag-drop reordering of columns
     */
    onColumnDrop(event: CdkDragDrop<any>): void;
    /**
     * Sync the current dataColumns order back to datasource dataKeys/latestDataKeys
     */
    private syncColumnsToDataSource;
    /**
     * Get the entity alias ID from the first datasource
     */
    getFirstDatasourceEntityAliasId(): string | null;
    /**
     * Get the datasource type from the first datasource
     */
    getFirstDatasourceType(): DatasourceType;
    /**
     * Get the device ID from the first datasource (if device type)
     */
    getFirstDatasourceDeviceId(): string | null;
    /**
     * Insert a variable placeholder at cursor position in heading text input
     */
    insertVariable(variableName: string): void;
    highlightHeadingText(text: string): string;
    private createDatasourceFormGroup;
    private updateFormFromConfig;
    private updateDatasourcesFromConfig;
    private updateTimewindowEnabledState;
    private emitTimewindowChanges;
    private emitDatasourcesChanges;
    /**
     * Ensure data key has default settings based on chart type
     */
    private ensureDataKeyDefaults;
    /**
     * Get default data key settings based on chart type
     */
    private getDefaultDataKeySettings;
    onDatasourceTypeChange(index: number): void;
    addDatasource(): void;
    removeDatasource(index: number): void;
    dropDatasource(event: CdkDragDrop<any>): void;
    /**
     * Create entity alias callback for tb-entity-alias-select
     */
    createEntityAlias(alias: string, allowedEntityTypes?: EntityType[]): Observable<EntityAlias>;
    /**
     * Edit entity alias callback for tb-entity-alias-select
     */
    editEntityAlias(entityAlias: EntityAlias, allowedEntityTypes?: EntityType[]): Observable<EntityAlias>;
    /**
     * Create filter callback for tb-filter-select
     */
    createFilter(filterName: string): Observable<Filter>;
    /**
     * Edit filter callback for tb-filter-select
     */
    editFilter(filter: Filter): Observable<Filter>;
    /**
     * Open alignment popover (horizontal or vertical)
     */
    openAlignmentPopup($event: Event, matButton: MatButton, alignmentType: AlignmentType, formControlName: string): void;
    /**
     * Get alignment icon based on value and type
     */
    getAlignmentIcon(value: string, type: "horizontal" | "vertical"): string;
    /**
     * Add a new empty column to the table
     */
    addColumn(): void;
    /**
     * Clear the key from a column - keeps the row for selecting a different key
     * To remove the row entirely, use removeDataColumn()
     */
    clearColumnKey(column: any, event: MouseEvent): void;
    /**
     * Handle key field click - open data key config dialog
     */
    onKeyFieldClick(column: any, event: MouseEvent): void;
    /**
     * Handle source type change (Time series <-> Attribute)
     * When source changes, remove the existing key so user must select a new one
     */
    onSourceChange(column: any, newSource: string): void;
    /**
     * Handle key field focus - fetch available keys for autocomplete
     */
    onKeyFieldFocus(column: any): void;
    /**
     * Handle key field input - filter keys
     */
    onKeyFieldInput(value: string): void;
    /**
     * Get filtered keys for autocomplete dropdown
     */
    getFilteredKeys(): DataKey[];
    /**
     * Handle key selection from autocomplete
     */
    onKeySelected(column: any, key: DataKey): void;
    /**
     * Fetch available keys from entity for autocomplete
     */
    private fetchAvailableKeys;
    /**
     * Fetch alarm table specific keys (alarm fields, entity fields, timeseries, attributes)
     * Uses predefined alarmFields and entityFields from shared models
     */
    private fetchAlarmTableKeys;
    /**
     * Fetch entity table specific keys (entity fields, timeseries, attributes)
     * Only includes common entity fields relevant for device/asset entities
     */
    private fetchEntityTableKeys;
    /**
     * Get appropriate icon for a data key based on its type
     * Used for autocomplete dropdown and chip display
     */
    getKeyIcon(key: DataKey): string;
    /**
     * Get appropriate icon for alarm table key (alias for getKeyIcon)
     */
    getAlarmKeyIcon(key: DataKey): string;
    getEntityKeyIcon(key: DataKey): string;
    /**
     * Check if a key is an entity field type
     */
    isEntityFieldKey(key: DataKey): boolean;
    /**
     * Check if a key is an attribute type
     */
    isAttributeKey(key: DataKey): boolean;
    /**
     * Check if a key is a timeseries type
     */
    isTimeseriesKey(key: DataKey): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<StDataConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StDataConfigComponent, "st-data-config", never, { "config": { "alias": "config"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "isHorizontal": { "alias": "isHorizontal"; "required": false; }; "hideTableHeading": { "alias": "hideTableHeading"; "required": false; }; "hideDatasources": { "alias": "hideDatasources"; "required": false; }; "hideColumns": { "alias": "hideColumns"; "required": false; }; "alarmTableConfig": { "alias": "alarmTableConfig"; "required": false; }; "entityTableConfig": { "alias": "entityTableConfig"; "required": false; }; }, { "configChange": "configChange"; "alarmTableConfigChange": "alarmTableConfigChange"; "entityTableConfigChange": "entityTableConfigChange"; }, never, never, false, never>;
}
