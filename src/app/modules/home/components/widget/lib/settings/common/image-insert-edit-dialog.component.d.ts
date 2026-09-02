import { OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { EntityType } from '@shared/models/entity-type.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DatasourceType, widgetType } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export type ImageSourceMode = 'image' | 'entityKey';
export type ImageDatasourceMode = 'device' | 'entityAlias';
export interface ImageInsertEditDialogData {
    aliasController?: IAliasController;
    dataKeyCallbacks?: DataKeysCallbacks;
    currentImageUrl?: string;
    currentWidth?: string;
    currentHeight?: string;
    showEntityKeyMode?: boolean;
}
export interface ImageInsertEditDialogResult {
    url: string;
    width?: string;
    height?: string;
    isEntityKey?: boolean;
    entityKeyConfig?: {
        datasourceMode: ImageDatasourceMode;
        deviceId?: string;
        entityAliasId?: string;
        entityKey?: string;
        entityKeyType?: 'attribute' | 'timeseries';
    };
}
export declare class ImageInsertEditDialogComponent extends DialogComponent<ImageInsertEditDialogComponent, ImageInsertEditDialogResult> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    private cd;
    private data;
    dialogRef: MatDialogRef<ImageInsertEditDialogComponent, ImageInsertEditDialogResult>;
    DatasourceType: typeof DatasourceType;
    DataKeyType: typeof DataKeyType;
    widgetType: typeof widgetType;
    entityType: typeof EntityType;
    showEntityKeyMode: boolean;
    sourceMode: ImageSourceMode;
    imageUrl: string;
    datasourceMode: ImageDatasourceMode;
    deviceId: string;
    entityAliasId: string;
    entityKeyModel: any;
    widthValue: number;
    heightValue: number;
    lockAspectRatio: boolean;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    constructor(store: Store<AppState>, router: Router, cd: ChangeDetectorRef, data: ImageInsertEditDialogData, dialogRef: MatDialogRef<ImageInsertEditDialogComponent, ImageInsertEditDialogResult>);
    ngOnInit(): void;
    private parseSize;
    get canSave(): boolean;
    onSourceModeChange(mode: ImageSourceMode): void;
    onImageUrlChange(url: string): void;
    onDatasourceModeChange(mode: ImageDatasourceMode): void;
    onDeviceChange(deviceId: string): void;
    onEntityAliasChange(aliasId: string): void;
    onEntityKeyChange(key: any): void;
    onSizeChange(): void;
    private getSizeString;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageInsertEditDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageInsertEditDialogComponent, "tb-image-insert-edit-dialog", never, {}, {}, never, never, false, never>;
}
