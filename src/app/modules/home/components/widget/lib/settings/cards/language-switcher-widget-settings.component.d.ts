import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { LanguageChoice } from '@shared/models/script.models';
import * as i0 from "@angular/core";
export declare class LanguageSwitcherWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    languageSwitcherForm: UntypedFormGroup;
    allLanguages: LanguageChoice[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageSwitcherWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LanguageSwitcherWidgetSettingsComponent, "tb-language-switcher-widget-settings", never, {}, {}, never, never, false, never>;
}
