import { ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { DialogService } from '@core/services/dialog.service';
import { ContentLanguage, GlossaryTerm } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
/** Terms engines must keep, translate one fixed way, or expand first. */
export declare class TranslationGlossaryComponent implements OnInit {
    private api;
    private dialog;
    private dialogService;
    private translate;
    languages: ContentLanguage[];
    targetLanguages: string[];
    searchInput: ElementRef<HTMLInputElement>;
    readonly columns: string[];
    terms: GlossaryTerm[];
    search: string;
    textSearchMode: boolean;
    loaded: boolean;
    pageIndex: number;
    pageSize: number;
    sort: Sort;
    constructor(api: ContentTranslationService, dialog: MatDialog, dialogService: DialogService, translate: TranslateService);
    ngOnInit(): void;
    load(): void;
    get filtered(): GlossaryTerm[];
    onSort(sort: Sort): void;
    get page(): GlossaryTerm[];
    onPage(event: PageEvent): void;
    onSearch(text: string): void;
    enterSearchMode(): void;
    exitSearchMode(): void;
    add(): void;
    edit(t: GlossaryTerm): void;
    private open;
    remove(t: GlossaryTerm): void;
    language(code: string): ContentLanguage | undefined;
    langAttr(code: string): string | null;
    /** Fixed translations, in target-language order, for the list. */
    fixedTexts(t: GlossaryTerm): {
        lang: string;
        text: string;
    }[];
    trackById(_index: number, t: GlossaryTerm): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationGlossaryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationGlossaryComponent, "st-translation-glossary", never, { "languages": { "alias": "languages"; "required": false; }; "targetLanguages": { "alias": "targetLanguages"; "required": false; }; }, {}, never, never, false, never>;
}
