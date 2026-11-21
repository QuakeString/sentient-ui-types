import { NativeDatetimeAdapter } from '@mat-datetimepicker/core';
import * as i0 from "@angular/core";
export declare class CustomDateAdapter extends NativeDatetimeAdapter {
    /** Date and time fields show the hour in the user's time format (24-hour or AM/PM). */
    format(date: Date, displayFormat: any): string;
    parse(value: string | number): Date;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomDateAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
