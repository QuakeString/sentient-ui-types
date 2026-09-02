import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Converts radius values to numbers
 * Handles both string ('70%') and number (70) inputs
 */
export declare class StRadiusToNumberPipe implements PipeTransform {
    transform(value: string | number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<StRadiusToNumberPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<StRadiusToNumberPipe, "stRadiusToNumber", false>;
}
