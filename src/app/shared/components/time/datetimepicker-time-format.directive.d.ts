import { MatDatetimepickerComponent } from '@mat-datetimepicker/core';
import { TimeFormatService } from '@core/services/time-format.service';
import * as i0 from "@angular/core";
/**
 * Every date/time picker shows its clock in the user's time format: a
 * 24-hour dial, or a 12-hour dial with AM/PM.
 */
export declare class DatetimepickerTimeFormatDirective {
    constructor(picker: MatDatetimepickerComponent<any>, timeFormatService: TimeFormatService);
    static ɵfac: i0.ɵɵFactoryDeclaration<DatetimepickerTimeFormatDirective, [{ host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DatetimepickerTimeFormatDirective, "mat-datetimepicker", never, {}, {}, never, never, false, never>;
}
