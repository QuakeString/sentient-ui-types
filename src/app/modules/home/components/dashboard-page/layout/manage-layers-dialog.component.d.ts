import { ElementRef, OnInit, QueryList } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { LayerDefinition } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface ManageLayersDialogData {
    layers: LayerDefinition[];
    layerWidgetCounts: {
        [layerId: number]: number;
    };
}
export interface ManageLayersDialogResult {
    layers: LayerDefinition[];
    idRemap: {
        [oldId: number]: number;
    };
}
interface LayerRow {
    id: number;
    name: string;
    widgetCount: number;
    isNew?: boolean;
}
export declare class ManageLayersDialogComponent implements OnInit {
    data: ManageLayersDialogData;
    private dialogRef;
    private fb;
    rows: LayerRow[];
    form: FormGroup;
    private maxLayers;
    layerNameInputs: QueryList<ElementRef<HTMLInputElement>>;
    constructor(data: ManageLayersDialogData, dialogRef: MatDialogRef<ManageLayersDialogComponent, ManageLayersDialogResult | null>, fb: FormBuilder);
    ngOnInit(): void;
    drop(event: CdkDragDrop<LayerRow[]>): void;
    addLayer(): void;
    canDelete(row: LayerRow): boolean;
    deleteLayer(row: LayerRow): void;
    save(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageLayersDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageLayersDialogComponent, "tb-manage-layers-dialog", never, {}, {}, never, never, false, never>;
}
export {};
