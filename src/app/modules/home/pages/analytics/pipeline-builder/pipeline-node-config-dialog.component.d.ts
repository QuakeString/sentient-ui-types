import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormControl } from '@angular/forms';
import { PipelineNode, PipelineNodeDefinition } from './pipeline-builder.models';
import * as i0 from "@angular/core";
export interface PipelineNodeConfigDialogData {
    node: PipelineNode;
    definition: PipelineNodeDefinition;
    isAdd?: boolean;
    inputSchema?: string[];
}
export interface PipelineNodeConfigResult {
    name: string;
    configuration: any;
}
export declare class PipelineNodeConfigDialogComponent implements OnInit {
    private dialogRef;
    data: PipelineNodeConfigDialogData;
    node: PipelineNode;
    definition: PipelineNodeDefinition;
    isAdd: boolean;
    inputSchema: string[];
    nameControl: UntypedFormControl;
    configControl: UntypedFormControl;
    showAdvancedJson: boolean;
    get isInputNode(): boolean;
    get isOutputNode(): boolean;
    get isIONode(): boolean;
    get isFormValid(): boolean;
    constructor(dialogRef: MatDialogRef<PipelineNodeConfigDialogComponent>, data: PipelineNodeConfigDialogData);
    ngOnInit(): void;
    add(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PipelineNodeConfigDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PipelineNodeConfigDialogComponent, "tb-pipeline-node-config-dialog", never, {}, {}, never, never, false, never>;
}
