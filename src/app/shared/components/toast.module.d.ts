import * as i0 from "@angular/core";
import * as i1 from "@shared/components/toast.directive";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/snack-bar";
import * as i6 from "@ngx-translate/core";
import * as i7 from "@shared/pipe/safe.pipe";
/**
 * The toast ([tb-toast]) on its own, so the login page can show messages
 * without loading the whole shared module. The shared module re-exports it.
 */
export declare class ToastModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToastModule, [typeof i1.ToastDirective, typeof i1.TbSnackBarComponent], [typeof i2.CommonModule, typeof i3.MatButtonModule, typeof i4.MatIconModule, typeof i5.MatSnackBarModule, typeof i6.TranslateModule, typeof i7.SafePipe], [typeof i1.ToastDirective, typeof i1.TbSnackBarComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToastModule>;
}
