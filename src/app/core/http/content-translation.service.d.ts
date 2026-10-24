import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { AppLanguage } from '@core/translate/app-languages';
import { AppLanguageRequest, AppLanguageStats, AppTextFilter, AppTextsPage, AppTextsResult, AppTranslateResult, ContentLanguage, GlossaryTerm, ProviderTestResult, TextTranslations, TranslationJobReport, TranslationJobStatus, TranslationProvider, TranslationBundle, TranslationEntryPage, TranslationEntryQuery, TranslationImportReport, TranslationScanReport, TranslationSettings, TranslationStats, TranslationStatus, TranslationTarget, Translator, TranslatorPackGroup, TranslatorRequest } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
/** REST client for translated user content (`/api/translation`). */
export declare class ContentTranslationService {
    private http;
    constructor(http: HttpClient);
    getLanguages(config?: RequestConfig): Observable<ContentLanguage[]>;
    /** Lookup map `{source text: text}` for one content language. */
    getMap(lang: string, config?: RequestConfig): Observable<{
        [source: string]: string;
    }>;
    /** The tenant's content languages; readable by any signed-in user. */
    getTargets(config?: RequestConfig): Observable<Pick<TranslationSettings, 'targetLanguages'>>;
    getSettings(config?: RequestConfig): Observable<TranslationSettings>;
    saveSettings(settings: TranslationSettings, config?: RequestConfig): Observable<TranslationSettings>;
    getStats(config?: RequestConfig): Observable<TranslationStats>;
    getEntries(query: TranslationEntryQuery, config?: RequestConfig): Observable<TranslationEntryPage>;
    /** Set a text (status MANUAL), or accept the current one (text omitted, status REVIEWED). */
    saveTarget(id: string, lang: string, text: string | null, status?: TranslationStatus, config?: RequestConfig): Observable<TranslationTarget>;
    deleteTarget(id: string, lang: string, config?: RequestConfig): Observable<void>;
    setLocked(id: string, locked: boolean, config?: RequestConfig): Observable<void>;
    setSourceLang(id: string, lang: string | null, config?: RequestConfig): Observable<void>;
    deleteEntry(id: string, config?: RequestConfig): Observable<void>;
    exportBundle(lang?: string, config?: RequestConfig): Observable<TranslationBundle>;
    importBundle(bundle: TranslationBundle, config?: RequestConfig): Observable<TranslationImportReport>;
    scanDashboards(config?: RequestConfig): Observable<TranslationScanReport>;
    /** Machine-translate missing texts (and machine texts again with `retranslate`) in the background. */
    translateNow(languages?: string[], retranslate?: boolean, config?: RequestConfig): Observable<{
        started: boolean;
        status: TranslationJobStatus;
    }>;
    getJob(config?: RequestConfig): Observable<TranslationJobStatus>;
    testProvider(provider: TranslationProvider, to: string, text: string, from?: string, config?: RequestConfig): Observable<ProviderTestResult>;
    /** Translations of texts being edited, saved or not. */
    lookupTexts(texts: string[], config?: RequestConfig): Observable<TextTranslations[]>;
    /** Machine-translate texts being edited now and return their translations. */
    translateTexts(texts: string[], retranslate?: boolean, config?: RequestConfig): Observable<{
        report: TranslationJobReport;
        texts: TextTranslations[];
    }>;
    /** Save (empty: clear) the designer's own translation of a text being edited; returns its translations. */
    saveText(text: string, lang: string, translation: string, config?: RequestConfig): Observable<TextTranslations>;
    getGlossary(config?: RequestConfig): Observable<GlossaryTerm[]>;
    saveGlossaryTerm(term: GlossaryTerm, config?: RequestConfig): Observable<GlossaryTerm>;
    deleteGlossaryTerm(id: string, config?: RequestConfig): Observable<void>;
    getTranslators(config?: RequestConfig): Observable<Translator[]>;
    getTranslatorPacks(config?: RequestConfig): Observable<TranslatorPackGroup[]>;
    /** Creates a translator; the access token is in the answer only. */
    createTranslator(request: TranslatorRequest, config?: RequestConfig): Observable<{
        translator: Translator;
        token: string;
    }>;
    updateTranslator(id: string, request: TranslatorRequest, config?: RequestConfig): Observable<Translator>;
    deleteTranslator(id: string, config?: RequestConfig): Observable<void>;
    /** A new access token; the old one stops working. */
    newTranslatorToken(id: string, config?: RequestConfig): Observable<{
        token: string;
    }>;
    /** Install file or command (`docker` or `linux`). */
    getTranslatorInstall(id: string, kind: 'docker' | 'linux', serverUrl: string, token?: string, config?: RequestConfig): Observable<{
        text: string;
    }>;
    getAppLanguages(): Observable<AppLanguage[]>;
    getAppLanguageStats(config?: RequestConfig): Observable<AppLanguageStats[]>;
    getAppTexts(code: string, textSearch: string, filter: AppTextFilter, page: number, pageSize: number, config?: RequestConfig): Observable<AppTextsPage>;
    /** An empty value resets the key to the shipped text. */
    saveAppTexts(code: string, changes: {
        key: string;
        value: string | null;
    }[], config?: RequestConfig): Observable<AppTextsResult>;
    /** Reset the keys, or the whole language when none are given. */
    resetAppTexts(code: string, keys?: string[], config?: RequestConfig): Observable<{
        reset: number;
    }>;
    exportAppTexts(code: string, full: boolean, config?: RequestConfig): Observable<object>;
    importAppTexts(code: string, texts: object, config?: RequestConfig): Observable<AppTextsResult>;
    translateAppTexts(code: string, limit: number, keys?: string[], config?: RequestConfig): Observable<AppTranslateResult>;
    saveAppLanguage(language: AppLanguageRequest, config?: RequestConfig): Observable<AppLanguage>;
    deleteAppLanguage(code: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentTranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContentTranslationService>;
}
