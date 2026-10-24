import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { ContentLanguage, ProviderTestResult, providerProblem, TranslationProvider, TranslationProviderType, TranslationSettings, EngineMenuItem, Translator, TranslatorPackGroup } from '@shared/models/translation.models';
import { LanguageChoice } from '@shared/models/script.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/** Engine list: which translation services to use, in which order. */
export declare class TranslationEnginesComponent implements OnChanges, OnInit, OnDestroy {
    private api;
    private dialog;
    private dialogService;
    private translate;
    settings: TranslationSettings;
    languages: ContentLanguage[];
    settingsSaved: EventEmitter<TranslationSettings>;
    /** The add menu; the plain URL offline engine is replaced by SENTIENT translators. */
    readonly menu: EngineMenuItem[];
    readonly fields: {
        SENTIENT: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        AI_MODEL: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        ANTHROPIC: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        GOOGLE: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        DEEPL: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        LIBRE: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        OPENAI: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
        OFFLINE: {
            apiKey: "required" | "optional" | "none";
            url: "required" | "optional" | "none";
            model: boolean;
        };
    };
    readonly problem: typeof providerProblem;
    providers: TranslationProvider[];
    /** Choices for the shared language picker. */
    allChoices: LanguageChoice[];
    autoTranslate: boolean;
    dirty: boolean;
    saving: boolean;
    /** Per provider id: open panel, shown key field, test state. */
    expanded: {
        [id: string]: boolean;
    };
    editingKey: {
        [id: string]: boolean;
    };
    testText: string;
    testLang: string;
    testing: {
        [id: string]: boolean;
    };
    testResult: {
        [id: string]: ProviderTestResult;
    };
    /** SENTIENT translators this user may use, and the packs they can install. */
    translators: Translator[];
    packGroups: TranslatorPackGroup[];
    /** The system administrator: translators can be shared with all tenants. */
    system: boolean;
    private poll;
    constructor(api: ContentTranslationService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    loadTranslators(): void;
    translator(p: TranslationProvider): Translator | undefined;
    packsOf(t: Translator): TranslatorPackGroup[];
    /** Whether a pack group is installed on the translator, from its last report. */
    packState(t: Translator, g: TranslatorPackGroup): 'ready' | 'pending' | 'missing' | 'licence';
    /** How many of the tenant's languages the translator covers, and which it misses. */
    coverage(t: Translator): {
        covered: number;
        total: number;
        missing: string[];
    };
    resources(t: Translator): string;
    throughput(t: Translator): string;
    addTranslator(): void;
    editTranslator(t: Translator): void;
    installTranslator(t: Translator): void;
    newToken(t: Translator): void;
    private openInstall;
    ngOnChanges(changes: SimpleChanges): void;
    reset(): void;
    changed(): void;
    addFromMenu(item: EngineMenuItem): void;
    add(type: TranslationProviderType, preset?: {
        name?: string;
        url?: string;
        model?: string;
    }): void;
    remove(index: number): void;
    /** Drag-and-drop reordering: engines are tried from the top. */
    drop(event: CdkDragDrop<TranslationProvider[]>): void;
    editKey(p: TranslationProvider): void;
    clearKey(p: TranslationProvider): void;
    /** Languages field as a list of codes. */
    setLanguages(p: TranslationProvider, codes: string[]): void;
    get valid(): boolean;
    save(): void;
    test(p: TranslationProvider): void;
    language(code: string): ContentLanguage | undefined;
    langAttr(code: string): string | null;
    trackById(_index: number, p: TranslationProvider): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationEnginesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationEnginesComponent, "st-translation-engines", never, { "settings": { "alias": "settings"; "required": false; }; "languages": { "alias": "languages"; "required": false; }; "system": { "alias": "system"; "required": false; }; }, { "settingsSaved": "settingsSaved"; }, never, never, false, never>;
}
