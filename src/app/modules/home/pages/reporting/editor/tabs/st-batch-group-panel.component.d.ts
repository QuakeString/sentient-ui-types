import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { EntityId } from '@shared/models/id/entity-id';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { StBatchIntegralKind, StBatchKeyGroup, StBatchMetricFn } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Key-group editor: a probe/zone set computed PER MEMBER and then reduced —
 * min over probes of F₀(probe), never F₀(min over probes). Per-member values
 * stay on the record (probe placement is a critical record).
 */
export declare class StBatchGroupPanelComponent implements OnInit {
    private fb;
    private popover;
    group: StBatchKeyGroup | null;
    keyEntityId: EntityId | null;
    phaseNames: string[];
    buttonTitle: string;
    readonly: boolean;
    groupApplied: import("@angular/core").OutputEmitterRef<StBatchKeyGroup>;
    readonly dataKeyTypes: typeof DataKeyType;
    readonly BatchMetricFnTranslations: Map<StBatchMetricFn, string>;
    readonly fnOptions: StBatchMetricFn[];
    readonly BatchIntegralKindTranslations: Map<StBatchIntegralKind, string>;
    readonly kindOptions: StBatchIntegralKind[];
    readonly lethalityPresets: {
        id: string;
        label: string;
        tRef: number;
        z: number;
        threshold: number;
    }[];
    groupForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        keys: import("@angular/forms").FormControl<string[]>;
        metrics: import("@angular/forms").FormControl<StBatchMetricFn[]>;
        integralEnabled: import("@angular/forms").FormControl<boolean>;
        kind: import("@angular/forms").FormControl<"timeWeighted" | "lethality">;
        tRef: import("@angular/forms").FormControl<number>;
        z: import("@angular/forms").FormControl<number>;
        threshold: import("@angular/forms").FormControl<number>;
        within: import("@angular/forms").FormControl<string>;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<StBatchGroupPanelComponent>);
    ngOnInit(): void;
    private applyIntegralValidators;
    applyPreset(preset: {
        tRef: number;
        z: number;
        threshold: number;
    }): void;
    saveGroup(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchGroupPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchGroupPanelComponent, "st-batch-group-panel", never, { "group": { "alias": "group"; "required": false; }; "keyEntityId": { "alias": "keyEntityId"; "required": false; }; "phaseNames": { "alias": "phaseNames"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "groupApplied": "groupApplied"; }, never, never, false, never>;
}
