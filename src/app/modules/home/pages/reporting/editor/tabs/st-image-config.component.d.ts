import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { StImageConfig, ImageSourceType } from '../../models/st-chart.models';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DatasourceType, widgetType } from '@shared/models/widget.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
/**
 * Image width options
 */
export declare const imageWidthOptions: {
    value: string;
    label: string;
}[];
/**
 * Image alignment options
 */
export declare const imageAlignmentOptions: {
    value: string;
    label: string;
}[];
/**
 * Datasource mode for entity key
 */
export type DatasourceMode = 'device' | 'entityAlias';
/**
 * Sentient Image Configuration Component
 *
 * Handles image selection and display settings for report image widgets.
 * Supports both static images from gallery and dynamic images from entity keys.
 */
export declare class StImageConfigComponent implements OnInit, OnChanges {
    private cd;
    config: StImageConfig;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    configChange: EventEmitter<StImageConfig>;
    DatasourceType: typeof DatasourceType;
    DataKeyType: typeof DataKeyType;
    widgetType: typeof widgetType;
    entityType: typeof EntityType;
    imageWidthOptions: {
        value: string;
        label: string;
    }[];
    imageAlignmentOptions: {
        value: string;
        label: string;
    }[];
    sourceType: ImageSourceType;
    datasourceMode: DatasourceMode;
    imageUrl: string;
    deviceId: string;
    entityAliasId: string;
    entityKeyModel: any;
    imageWidth: string;
    customWidthValue: number;
    imageAlignment: string;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Initialize local state from config
     */
    private initializeFromConfig;
    /**
     * Handle source type change
     */
    onSourceTypeChange(type: ImageSourceType): void;
    /**
     * Handle datasource mode change
     */
    onDatasourceModeChange(mode: DatasourceMode): void;
    /**
     * Handle image URL change from gallery-image-input
     */
    onImageUrlChange(url: string): void;
    /**
     * Handle device change
     */
    onDeviceChange(deviceId: string): void;
    /**
     * Handle entity alias change
     */
    onEntityAliasChange(aliasId: string): void;
    /**
     * Handle entity key change
     */
    onEntityKeyChange(key: any): void;
    /**
     * Handle image width change
     */
    onImageWidthChange(width: string): void;
    /**
     * Handle custom width change
     */
    onCustomWidthChange(value: number): void;
    /**
     * Handle image alignment change
     */
    onImageAlignmentChange(alignment: string): void;
    /**
     * Emit config change
     */
    private emitConfigChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<StImageConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StImageConfigComponent, "st-image-config", never, { "config": { "alias": "config"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; }, { "configChange": "configChange"; }, never, never, false, never>;
}
