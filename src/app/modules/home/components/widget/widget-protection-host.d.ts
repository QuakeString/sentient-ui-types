import { UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
/**
 * Lets a widget's own settings show the widget-level Protection row inside a
 * section they already have (a SCADA symbol's Behavior section), instead of
 * the widget editor adding a second "Behavior" panel. Provided by
 * tb-widget-config; the settings component that hosts the row claims it.
 */
export declare class WidgetProtectionHost {
    /** The widget's writeProtection control (config.writeProtection). */
    control: UntypedFormControl | null;
    private readonly claims;
    /** True while some settings component shows the row itself. */
    readonly claimed: () => boolean;
    claim(): void;
    release(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetProtectionHost, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
