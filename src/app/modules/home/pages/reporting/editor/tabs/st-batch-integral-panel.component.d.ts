import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { StBatchIntegral, StBatchIntegralKind } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Per-batch integral editor. Time-weighted `scale × ∫ value dt` for energy
 * and amp-hours; lethality `∫ 10^((T − tRef)/z) dt` for F₀ / PU / A₀ — whose
 * parameters are mandatory with no defaults, because a lethality figure
 * without its parameters is not reproducible.
 */
export declare class StBatchIntegralPanelComponent implements OnInit {
    private fb;
    private popover;
    integral: StBatchIntegral | null;
    availableKeys: string[];
    phaseNames: string[];
    buttonTitle: string;
    readonly: boolean;
    integralApplied: import("@angular/core").OutputEmitterRef<StBatchIntegral>;
    readonly BatchIntegralKindTranslations: Map<StBatchIntegralKind, string>;
    readonly kindOptions: StBatchIntegralKind[];
    readonly lethalityPresets: {
        id: string;
        label: string;
        tRef: number;
        z: number;
        threshold: number;
    }[];
    integralForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        key: import("@angular/forms").FormControl<string>;
        kind: import("@angular/forms").FormControl<"timeWeighted" | "lethality">;
        scale: import("@angular/forms").FormControl<number>;
        interpolation: import("@angular/forms").FormControl<"trapezoid" | "zoh">;
        tRef: import("@angular/forms").FormControl<number>;
        z: import("@angular/forms").FormControl<number>;
        threshold: import("@angular/forms").FormControl<number>;
        within: import("@angular/forms").FormControl<string>;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<StBatchIntegralPanelComponent>);
    ngOnInit(): void;
    /** Lethality parameters are required exactly when the kind demands them. */
    private applyKindValidators;
    applyPreset(preset: {
        tRef: number;
        z: number;
        threshold: number;
    }): void;
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    saveIntegral(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchIntegralPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchIntegralPanelComponent, "st-batch-integral-panel", never, { "integral": { "alias": "integral"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "phaseNames": { "alias": "phaseNames"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "integralApplied": "integralApplied"; }, never, never, false, never>;
}
