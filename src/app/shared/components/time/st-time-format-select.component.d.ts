import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TimeFormat } from '@shared/models/time-format.models';
import * as i0 from "@angular/core";
/**
 * Time format of a time window: Default (follows the next place up, the clock
 * it gives now in brackets), 24-hour or 12-hour. The model is the TimeFormat,
 * or null for Default.
 */
export declare class StTimeFormatSelectComponent implements ControlValueAccessor, OnInit {
    private translate;
    private destroyRef;
    /** The clock Default gives right now. */
    defaultTimeFormat: TimeFormat;
    /** What Default follows, shown under it in the list. */
    defaultHint: string;
    readonly options: string[];
    control: UntypedFormControl;
    private propagateChange;
    constructor(translate: TranslateService, destroyRef: DestroyRef);
    ngOnInit(): void;
    writeValue(value: TimeFormat): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    optionTitle(option: string): string;
    optionHint(option: string): string;
    triggerText(): string;
    private defaultTitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<StTimeFormatSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StTimeFormatSelectComponent, "st-time-format-select", never, { "defaultTimeFormat": { "alias": "defaultTimeFormat"; "required": false; }; "defaultHint": { "alias": "defaultHint"; "required": false; }; }, {}, never, never, false, never>;
}
