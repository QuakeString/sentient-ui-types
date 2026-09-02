import { EventEmitter, ChangeDetectorRef, ViewContainerRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { TbPopoverService } from '@shared/components/popover.service';
import { UntypedFormControl } from '@angular/forms';
import { StThreshold, StThresholdType } from '../../models/st-chart.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DataKey, Datasource, DatasourceType } from '@shared/models/widget.models';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import * as i0 from "@angular/core";
/**
 * Sentient Thresholds Configuration Component
 *
 * Displays thresholds in a table-like layout matching ThingsBoard's style.
 * Columns: Source, Key/Value, Y axis, Color, Units, Decimals, Actions
 */
export declare class StThresholdsConfigComponent implements OnChanges {
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    thresholds: StThreshold[];
    yAxisIds: string[];
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    thresholdsChange: EventEmitter<StThreshold[]>;
    StThresholdType: typeof StThresholdType;
    stThresholdTypes: StThresholdType[];
    stThresholdTypeTranslations: Map<StThresholdType, string>;
    DataKeyType: typeof DataKeyType;
    DatasourceType: typeof DatasourceType;
    latestKeyFormControls: UntypedFormControl[];
    entityKeyFormControls: UntypedFormControl[];
    entityAliases: Array<{
        id: string;
        alias: string;
    }>;
    constructor(cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Rebuild the cached entity aliases from aliasController
     */
    private rebuildEntityAliasCache;
    /**
     * Rebuild the FormControls for data key inputs from thresholds
     */
    private rebuildDataKeyCache;
    /**
     * Add a new threshold
     */
    addThreshold(): void;
    /**
     * Remove a threshold
     */
    removeThreshold(index: number): void;
    /**
     * Handle threshold property change
     */
    onThresholdChange(index: number, key: keyof StThreshold, value: any): void;
    /**
     * Handle threshold color change (updates both lineColor and legacy color)
     */
    onThresholdColorChange(index: number, color: string): void;
    /**
     * Handle threshold value blur (only emit change when user finishes editing)
     */
    onThresholdValueBlur(): void;
    /**
     * Handle latestKey DataKey change (called from FormControl subscription)
     */
    onLatestKeyChange(index: number, dataKey: DataKey): void;
    /**
     * Handle entity key DataKey change (called from FormControl subscription)
     */
    onEntityKeyChange(index: number, dataKey: DataKey): void;
    /**
     * Open threshold settings popup
     */
    openThresholdSettings($event: Event, index: number, buttonEl: any): void;
    /**
     * Get a suggested value for the next threshold
     */
    private getNextThresholdValue;
    private emitChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<StThresholdsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StThresholdsConfigComponent, "st-thresholds-config", never, { "thresholds": { "alias": "thresholds"; "required": false; }; "yAxisIds": { "alias": "yAxisIds"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; }, { "thresholdsChange": "thresholdsChange"; }, never, never, false, never>;
}
