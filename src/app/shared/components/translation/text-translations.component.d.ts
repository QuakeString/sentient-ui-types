import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { ContentLanguage, TextTranslationCell, TextTranslationRow, TranslationJobReport, TranslationSettings } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
interface DesignerContext {
    settings: TranslationSettings;
    languages: ContentLanguage[];
}
/**
 * "Translations" panel shown next to texts being designed (widget title,
 * alarm type): each text in each of the tenant's languages with its status,
 * and "Translate now" so the designer sees the result before saving.
 * Hidden when the tenant has no target languages or the user cannot manage
 * translations.
 */
export declare class TextTranslationsComponent implements OnInit, OnChanges, OnDestroy {
    private store;
    private api;
    private cd;
    /** Texts being edited; unsaved ones are fine. */
    texts: string[];
    expanded: boolean;
    context: DesignerContext;
    rows: TextTranslationRow[];
    summary: {
        missing: number;
        machine: number;
        done: number;
    };
    busy: boolean;
    lastReport: TranslationJobReport;
    private lastResults;
    /** The cell being typed in ("source text" + language), and its save in flight. */
    editing: {
        source: string;
        lang: string;
    };
    saving: boolean;
    set editInput(ref: ElementRef<HTMLInputElement>);
    private texts$;
    private destroy$;
    constructor(store: Store<AppState>, api: ContentTranslationService, cd: ChangeDetectorRef);
    get visible(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    toggle(): void;
    translateNow(retranslate: boolean): void;
    isEditing(row: TextTranslationRow, cell: TextTranslationCell): boolean;
    /** A translation typed here is saved as written by hand (Manual). */
    startEdit(row: TextTranslationRow, cell: TextTranslationCell): void;
    cancelEdit(): void;
    saveEdit(row: TextTranslationRow, cell: TextTranslationCell, value: string): void;
    trackRow(_index: number, row: TextTranslationRow): string;
    private show;
    /** A shown row back in the server's shape, to re-render it with the others. */
    private asResult;
    private cleanTexts;
    private loadContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextTranslationsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextTranslationsComponent, "st-text-translations", never, { "texts": { "alias": "texts"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
