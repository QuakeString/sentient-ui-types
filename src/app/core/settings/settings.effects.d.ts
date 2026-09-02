import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { SettingsActions } from './settings.actions';
import { AppState } from '@app/core/core.state';
import { LocalStorageService } from '@app/core/local-storage/local-storage.service';
import { TitleService } from '@app/core/services/title.service';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare const SETTINGS_KEY = "SETTINGS";
export declare class SettingsEffects {
    private actions$;
    private store;
    private utils;
    private router;
    private localStorageService;
    private titleService;
    private translate;
    private document;
    constructor(actions$: Actions<SettingsActions>, store: Store<AppState>, utils: UtilsService, router: Router, localStorageService: LocalStorageService, titleService: TitleService, translate: TranslateService, document: Document);
    setTranslateServiceLanguage: import("rxjs").Observable<import("./settings.models").SettingsState> & import("@ngrx/effects").CreateEffectMetadata;
    setTitle: import("rxjs").Observable<ActivationEnd | import("./settings.actions").ActionSettingsChangeLanguage> & import("@ngrx/effects").CreateEffectMetadata;
    setPublicId: import("rxjs").Observable<ActivationEnd> & import("@ngrx/effects").CreateEffectMetadata;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SettingsEffects>;
}
