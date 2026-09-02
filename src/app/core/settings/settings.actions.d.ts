import { Action } from '@ngrx/store';
import { ThemeMode } from './settings.models';
export declare enum SettingsActionTypes {
    CHANGE_LANGUAGE = "[Settings] Change Language",
    CHANGE_THEME = "[Settings] Change Theme"
}
export declare class ActionSettingsChangeLanguage implements Action {
    readonly payload: {
        userLang: string;
    };
    readonly type = SettingsActionTypes.CHANGE_LANGUAGE;
    constructor(payload: {
        userLang: string;
    });
}
export declare class ActionSettingsChangeTheme implements Action {
    readonly payload: {
        userTheme: ThemeMode;
    };
    readonly type = SettingsActionTypes.CHANGE_THEME;
    constructor(payload: {
        userTheme: ThemeMode;
    });
}
export type SettingsActions = ActionSettingsChangeLanguage | ActionSettingsChangeTheme;
