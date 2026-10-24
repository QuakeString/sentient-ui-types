import { EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { DialogService } from '@core/services/dialog.service';
import { AppLanguage } from '@core/translate/app-languages';
import { AppLanguageStats } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
type StatColumn = 'shipped' | 'changed' | 'outdated' | 'missing';
/**
 * Settings › Translations › Languages (system administrator): every UI
 * language with how much of it is translated; opens a language's texts.
 */
export declare class AppLanguagesComponent implements OnInit {
    private api;
    private dialog;
    private dialogService;
    private translate;
    private store;
    /** Open the App texts tab on a language. */
    openTexts: EventEmitter<string>;
    readonly statColumns: StatColumn[];
    readonly columns: string[];
    stats: AppLanguageStats[];
    languages: AppLanguage[];
    sort: Sort;
    loading: boolean;
    constructor(api: ContentTranslationService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService, store: Store<AppState>);
    ngOnInit(): void;
    load(): void;
    get sorted(): AppLanguageStats[];
    onSort(sort: Sort): void;
    nameOf(code: string): {
        native: string;
        english: string;
    };
    rtl(code: string): boolean;
    langAttr(code: string): string;
    percent(s: AppLanguageStats): number;
    open(s: AppLanguageStats): void;
    addLanguage(): void;
    editLanguage(s: AppLanguageStats, event: Event): void;
    private openDialog;
    deleteLanguage(s: AppLanguageStats, event: Event): void;
    resetLanguage(s: AppLanguageStats, event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppLanguagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppLanguagesComponent, "st-app-languages", never, {}, { "openTexts": "openTexts"; }, never, never, false, never>;
}
export {};
