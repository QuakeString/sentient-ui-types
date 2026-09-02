import { ThemeMode, ThemeService } from '@core/services/theme.service';
import * as i0 from "@angular/core";
export declare class ThemeToggleMenuComponent {
    private themeService;
    themeMode$: import("rxjs").Observable<ThemeMode>;
    constructor(themeService: ThemeService);
    setTheme(mode: ThemeMode): void;
    iconFor(mode: ThemeMode): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeToggleMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ThemeToggleMenuComponent, "tb-theme-toggle-menu", never, {}, {}, never, never, false, never>;
}
