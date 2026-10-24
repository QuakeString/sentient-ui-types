import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { DialogService } from '@core/services/dialog.service';
import { AppLanguage } from '@core/translate/app-languages';
import { AppTextFilter, AppTextRow, AppTextsPage } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
/**
 * Settings › Translations › App texts (system administrator): the UI's own
 * texts per language. Changes override the shipped texts for everyone and can
 * be reset; languages the product does not ship can be added.
 */
export declare class AppTextsComponent implements OnInit, OnDestroy {
    private api;
    private dialog;
    private dialogService;
    private translate;
    private store;
    importInput: ElementRef<HTMLInputElement>;
    searchInput: ElementRef<HTMLInputElement>;
    readonly filters: AppTextFilter[];
    readonly columns: string[];
    searchMode: boolean;
    /** Language to open on (from the Languages tab). */
    initialLang: string;
    languages: AppLanguage[];
    /** Codes offered in the language picker (every language but English). */
    codes: string[];
    lang: string;
    search: string;
    filter: AppTextFilter;
    page: AppTextsPage;
    pageIndex: number;
    pageSize: number;
    loading: boolean;
    selected: Set<string>;
    translating: boolean;
    translateDone: number;
    translateTotal: number;
    private stopTranslate;
    private search$;
    private subs;
    constructor(api: ContentTranslationService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService, store: Store<AppState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get current(): AppLanguage | undefined;
    nameOf(code: string): string;
    loadLanguages(select?: string): void;
    /** The admin's own UI language when it can be edited, else the first one. */
    private preferredCode;
    onLanguage(code: string): void;
    onSearch(q: string): void;
    onFilter(f: AppTextFilter): void;
    onPage(e: PageEvent): void;
    private reload;
    load(): void;
    /** Row being edited in place (a click on its text), if any. */
    inlineKey: string | null;
    startInline(row: AppTextRow): void;
    /** The in-place field, once rendered: sized to its text and focused. */
    set inlineInput(ref: ElementRef<HTMLTextAreaElement> | undefined);
    /** Grow the in-place field with its text. */
    fit(input: HTMLTextAreaElement): void;
    cancelInline(): void;
    /** Save an in-place edit (Enter or leaving the field); an empty text resets the row. */
    commitInline(row: AppTextRow, text: string): void;
    get rtl(): boolean;
    langAttr(code: string): string | null;
    trackByKey(_i: number, row: AppTextRow): string;
    isChanged(row: AppTextRow): boolean;
    status(row: AppTextRow): 'CHANGED' | 'OUTDATED' | 'SHIPPED' | 'MISSING';
    filterName(f: AppTextFilter): string;
    filterCount(f: AppTextFilter): number;
    enterSearchMode(): void;
    exitSearchMode(): void;
    private contentLanguage;
    /** Edit in the same dialog as dashboard texts; clearing resets to the shipped text. */
    openEdit(row: AppTextRow): void;
    resetRow(row: AppTextRow): void;
    toggle(key: string, on: boolean): void;
    get allSelected(): boolean;
    toggleAll(on: boolean): void;
    resetSelected(): void;
    private reset;
    /** Reset every change of a shipped language (asks first). */
    resetLanguage(): void;
    addLanguage(): void;
    editLanguage(): void;
    private openLanguageDialog;
    deleteLanguage(): void;
    exportTexts(full: boolean): void;
    importTexts(): void;
    onImportFile(files: FileList): void;
    /** Machine-translate every missing text, a batch at a time. */
    translateMissing(): void;
    cancelTranslate(): void;
    private finishTranslate;
    private notify;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppTextsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppTextsComponent, "st-app-texts", never, { "initialLang": { "alias": "initialLang"; "required": false; }; }, {}, never, never, false, never>;
}
