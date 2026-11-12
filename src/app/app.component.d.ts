import 'hammerjs';
import { NgZone, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LocalStorageService } from '@core/local-storage/local-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from '@core/auth/auth.service';
import { TranslateDefaultLoader } from '@core/translate/translate-default-loader';
import { LicenseWarningService } from '@core/services/license-warning.service';
import { ThemeService } from '@core/services/theme.service';
import { BackendConfigService } from '@core/tauri/backend-config.service';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AppComponent {
    private store;
    private storageService;
    private translate;
    private matIconRegistry;
    private domSanitizer;
    private authService;
    private licenseWarningService;
    private _themeService;
    private backendConfigService;
    private matDialog;
    private ngZone;
    private injector;
    private translateLoader;
    private aiAssistantHost;
    private aiAssistantLoaded;
    constructor(store: Store<AppState>, storageService: LocalStorageService, translate: TranslateService, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, authService: AuthService, licenseWarningService: LicenseWarningService, _themeService: ThemeService, backendConfigService: BackendConfigService, matDialog: MatDialog, ngZone: NgZone, injector: Injector, translateLoader: TranslateDefaultLoader);
    private openFirstLaunchBackendDialog;
    setupTranslate(): void;
    setupAuth(): void;
    /**
     * The login page started with its own texts only (TranslateDefaultLoader);
     * fetch the full file now and merge it, so the app after sign-in has every
     * text. First in the background queue: small, and needed right after Login.
     */
    private loadFullTranslations;
    /** The AI assistant is part of the signed-in app: load it once, after sign-in. */
    private loadAiAssistant;
    onActivateComponent(_$event: any): void;
    private notifyUserLang;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppComponent, "tb-root", never, {}, {}, never, never, false, never>;
}
