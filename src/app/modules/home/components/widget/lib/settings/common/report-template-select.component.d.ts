import { ControlValueAccessor } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import * as i0 from "@angular/core";
interface ReportTemplateOption {
    id: string;
    name: string;
    format: string;
}
/**
 * A dropdown of the report templates the user may run. The value is the
 * template's id (a string), or null. Used by the "Report template" field
 * type of widget settings forms, so a widget's settings can name the
 * template its Print button generates.
 */
export declare class ReportTemplateSelectComponent implements ControlValueAccessor {
    /** Shown as the field's floating label; empty = no label. */
    readonly label: import("@angular/core").InputSignal<string>;
    readonly required: import("@angular/core").InputSignalWithTransform<boolean, unknown>;
    readonly floatLabel: import("@angular/core").InputSignal<FloatLabelType>;
    readonly value: import("@angular/core").WritableSignal<string>;
    readonly disabled: import("@angular/core").WritableSignal<boolean>;
    readonly loading: import("@angular/core").WritableSignal<boolean>;
    private readonly templates;
    /**
     * The templates, plus the selected one when it is not among them (deleted,
     * or not assigned to this user), so opening the form does not drop it.
     */
    readonly options: import("@angular/core").Signal<ReportTemplateOption[]>;
    private propagateChange;
    private propagateTouched;
    constructor();
    writeValue(value: string | null): void;
    registerOnChange(fn: (value: string | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    onSelect(value: string | null): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateSelectComponent, "st-report-template-select", never, { "label": { "alias": "label"; "required": false; "isSignal": true; }; "required": { "alias": "required"; "required": false; "isSignal": true; }; "floatLabel": { "alias": "floatLabel"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
export {};
