import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LayerDefinition } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface MoveWidgetToLayerDialogData {
    currentLayer: number;
    layers: LayerDefinition[];
}
export declare class MoveWidgetToLayerDialogComponent implements OnInit {
    data: MoveWidgetToLayerDialogData;
    private dialogRef;
    private fb;
    form: FormGroup;
    constructor(data: MoveWidgetToLayerDialogData, dialogRef: MatDialogRef<MoveWidgetToLayerDialogComponent, number | null>, fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    confirm(): void;
    layerLabel(l: LayerDefinition): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MoveWidgetToLayerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MoveWidgetToLayerDialogComponent, "tb-move-widget-to-layer-dialog", never, {}, {}, never, never, false, never>;
}
