export type ThemeMode = 'light' | 'dark' | 'system';
export interface SettingsState {
    userLang: string;
    userTheme: ThemeMode;
}
