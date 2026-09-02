import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export type ThemeMode = 'light' | 'dark' | 'system';
export declare class ThemeService implements OnDestroy {
    private readonly systemDarkQuery;
    private readonly systemListener;
    private modeSubject;
    mode$: import("rxjs").Observable<ThemeMode>;
    constructor();
    ngOnDestroy(): void;
    get mode(): ThemeMode;
    get isDark(): boolean;
    setMode(mode: ThemeMode): void;
    private loadMode;
    private resolveEffective;
    private applyTheme;
    private onSystemChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
