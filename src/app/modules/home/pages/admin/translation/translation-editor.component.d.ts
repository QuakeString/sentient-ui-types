import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { TranslateService } from '@ngx-translate/core';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { ContentLanguage, TranslationEntry, TranslationEntrySort, TranslationJobStatus, TranslationLangStats, TranslationSettings, TranslationState, TranslationStats, TranslationStatus, usageKind } from '@shared/models/translation.models';
import { LanguageChoice } from '@shared/models/script.models';
import { PageEvent } from '@angular/material/paginator';
import { Sort, SortDirection } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AppTextsComponent } from './app-texts.component';
import * as i0 from "@angular/core";
type Filter = 'all' | TranslationState | 'locked';
interface UsageLink {
    label: string;
    url: string | null;
    params?: {
        [key: string]: string;
    };
}
type View = 'texts' | 'languages' | 'glossary' | 'engines' | 'app' | 'app-languages';
type StatColumn = 'machine' | 'reviewed' | 'manual' | 'missing';
export declare class TranslationEditorComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private api;
    private translate;
    private route;
    private dialog;
    private document;
    importInput: ElementRef<HTMLInputElement>;
    searchInput: ElementRef<HTMLInputElement>;
    /** The App texts tab (system administrator); its translate action sits in the header. */
    appTexts: AppTextsComponent;
    /** The system administrator only manages system translators. */
    readonly system: boolean;
    readonly tabs: {
        view: View;
        icon: string;
        name: string;
    }[];
    readonly filters: Filter[];
    readonly textColumns: string[];
    readonly statColumns: StatColumn[];
    readonly languageColumns: string[];
    languages: ContentLanguage[];
    settings: TranslationSettings;
    /** Choices for the shared language picker: every language, and the target ones. */
    allChoices: LanguageChoice[];
    targetChoices: LanguageChoice[];
    stats: TranslationStats;
    view: View;
    /** Language the App texts tab opens on (from the Languages tab). */
    appLang: string;
    job: TranslationJobStatus;
    /** finishedTime of the run whose result the user closed. */
    dismissedJob: number;
    showJobErrors: boolean;
    /** Languages the current run was asked for (empty: all); unknown when started elsewhere. */
    private jobLanguages;
    /** Texts the run started from this page has to do; null when started elsewhere. */
    private jobTotal;
    private jobRetranslate;
    /** First progress sample, for the time estimate. */
    private jobSample;
    /** Rough minutes left for the running language; null until there is a rate. */
    jobMinutes: number;
    /** Language whose texts the table shows. */
    lang: string;
    filter: Filter;
    search: string;
    textSearchMode: boolean;
    entries: TranslationEntry[];
    totalElements: number;
    pageIndex: number;
    pageSize: number;
    /** Ids of the selected rows on this page. */
    selection: Set<string>;
    /** Texts table sort; the newest first when not set. */
    textSort: TranslationEntrySort;
    textSortDirection: SortDirection;
    /** Languages table sort (client side). */
    languageSort: Sort;
    readonly usageKind: typeof usageKind;
    private search$;
    private jobPoll;
    private destroy$;
    constructor(store: Store<AppState>, api: ContentTranslationService, translate: TranslateService, route: ActivatedRoute, dialog: MatDialog, document: Document);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateChoices;
    setView(view: View): void;
    /** Languages tab → that language's texts. */
    openAppTexts(code: string): void;
    onTextSort(sort: Sort): void;
    onLanguageSort(sort: Sort): void;
    /** Target languages in the Languages table's sort order. */
    get sortedLanguages(): string[];
    language(code: string): ContentLanguage | undefined;
    /** BCP 47 tag for a lang attribute. */
    langAttr(code: string): string | null;
    get sourceLanguage(): ContentLanguage | undefined;
    get availableLanguages(): ContentLanguage[];
    langStats(code: string): TranslationLangStats | undefined;
    percent(code: string): number;
    statCount(code: string, column: StatColumn): number;
    selectLanguage(code: string): void;
    openLanguageTexts(code: string): void;
    openAddLanguage(): void;
    addLanguage(code: string): void;
    removeLanguage(code: string, $event?: Event): void;
    setSourceLanguage(code: string): void;
    private saveSettings;
    onSearch(text: string): void;
    enterSearchMode(): void;
    exitSearchMode(): void;
    setFilter(filter: Filter): void;
    filterName(filter: Filter): string;
    filterCount(filter: Filter): number;
    onPage(event: PageEvent): void;
    refresh(): void;
    loadStats(): void;
    loadEntries(): void;
    status(entry: TranslationEntry): TranslationStatus | 'MISSING' | 'LOCKED';
    text(entry: TranslationEntry): string | undefined;
    openEdit(entry: TranslationEntry): void;
    markReviewed(entry: TranslationEntry): void;
    clearText(entry: TranslationEntry): void;
    toggleLock(entry: TranslationEntry): void;
    toggleSelected(entry: TranslationEntry): void;
    selectAll(): void;
    private selectedEntries;
    markSelectedReviewed(): void;
    lockSelected(locked: boolean): void;
    clearSelected(): void;
    private runAll;
    usageNames(entry: TranslationEntry): string[];
    /** One link per place a text is used: the page, and for widgets the widget itself. */
    usageLinks(entry: TranslationEntry): UsageLink[];
    trackById(_index: number, entry: TranslationEntry): string;
    exportLanguage(all?: boolean): void;
    openImport(): void;
    onImportFile(event: Event): void;
    scanDashboards(): void;
    get hasEngine(): boolean;
    translateNow(retranslate?: boolean, onlyThisLanguage?: boolean): void;
    private pollJob;
    /** How many texts a run will translate: missing ones, plus machine ones when translating again. */
    private workFor;
    /** Texts done in this run, or, for a run started elsewhere, translated in its language. */
    jobDone(): number;
    jobTotalTexts(): number;
    jobPercent(): number;
    /** Rough minutes left, from the rate since the first sample. */
    private estimateMinutes;
    /** Languages still to come in this run, when the run covers all languages. */
    jobNext(): string[];
    dismissJob(): void;
    onSettingsSaved(settings: TranslationSettings): void;
    private notify;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationEditorComponent, "st-translation-editor", never, {}, {}, never, never, false, never>;
}
export {};
