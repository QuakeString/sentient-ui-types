import { ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * A text input for a CSS length or shorthand (padding, margin, border radius
 * or width) that reads bare numbers as pixels. The field shows "10" or "8 12"
 * next to a "px" suffix and stores "10px" / "8px 12px", the same CSS text as
 * before; other units ("1em", "50%") and calc()/var() still work, and the px
 * suffix hides while one is typed.
 *
 *   <mat-form-field>
 *     <input matInput stCssLength formControlName="padding">
 *     <span matTextSuffix class="st-px-suffix">px</span>
 *   </mat-form-field>
 */
export declare class CssLengthDirective implements ControlValueAccessor, Validator {
    private elementRef;
    private renderer;
    private onChange;
    private onTouched;
    constructor(elementRef: ElementRef<HTMLInputElement>, renderer: Renderer2);
    onInput(text: string): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(control: AbstractControl): ValidationErrors | null;
    private toModel;
    private show;
    /** Hides the field's "px" suffix while the value uses another unit. */
    private markOtherUnit;
    static ɵfac: i0.ɵɵFactoryDeclaration<CssLengthDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CssLengthDirective, "input[stCssLength]", never, {}, {}, never, never, false, never>;
}
