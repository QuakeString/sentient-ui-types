import { ThemeMode, ThemeService } from '@core/services/theme.service';
import * as i0 from "@angular/core";
export declare class ThemeToggleComponent {
    private themeService;
    themeMode$: import("rxjs").Observable<ThemeMode>;
    constructor(themeService: ThemeService);
    setTheme(mode: ThemeMode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeToggleComponent, "tb-theme-toggle", never, {}, {}, never, never, false, never>;
}
