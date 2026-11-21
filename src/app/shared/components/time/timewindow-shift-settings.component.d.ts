import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToggleHeaderOption } from '@shared/components/toggle-header.component';
import { ShiftSelection, ShiftValidation, TimewindowShiftSettings } from '@shared/models/time/shift.models';
import * as i0 from "@angular/core";
/**
 * Time window settings › Shifts: turn shift selection on, pick a pattern or
 * enter the shifts, and choose what the Shift option selects first.
 */
export declare class TimewindowShiftSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private translate;
    private destroyRef;
    readonly shiftSelections: ShiftSelection[];
    readonly shiftSelectionTranslations: Map<ShiftSelection, string>;
    readonly patternOptions: ToggleHeaderOption[];
    readonly validation: import("@angular/core").WritableSignal<ShiftValidation>;
    form: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, destroyRef: DestroyRef);
    ngOnInit(): void;
    get shiftsArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimewindowShiftSettings): void;
    isNextDay(i: number): boolean;
    addShift(): void;
    removeShift(i: number): void;
    private setShifts;
    private shiftForm;
    private patternOf;
    private emit;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimewindowShiftSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimewindowShiftSettingsComponent, "st-timewindow-shift-settings", never, {}, {}, never, never, false, never>;
}
