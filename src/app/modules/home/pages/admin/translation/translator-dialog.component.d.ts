import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { Translator, TranslatorMode, TranslatorPackGroup } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
export interface TranslatorDialogData {
    packs: TranslatorPackGroup[];
    /** Set to change an existing translator. */
    translator?: Translator;
    /** The system administrator: may share the translator with every tenant. */
    system: boolean;
}
export interface TranslatorDialogResult {
    translator: Translator;
    /** A new translator's access token; shown once. */
    token?: string;
}
/** Add or change a SENTIENT translator. */
export declare class TranslatorDialogComponent extends DialogComponent<TranslatorDialogComponent, TranslatorDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TranslatorDialogComponent, TranslatorDialogResult>;
    data: TranslatorDialogData;
    private api;
    name: string;
    mode: TranslatorMode;
    url: string;
    packs: Set<string>;
    accepted: Set<string>;
    shared: boolean;
    saving: boolean;
    error: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TranslatorDialogComponent, TranslatorDialogResult>, data: TranslatorDialogData, api: ContentTranslationService);
    get editing(): boolean;
    togglePack(id: string, on: boolean): void;
    toggleAccepted(id: string, on: boolean): void;
    /** Picked packs whose licence needs accepting and is not accepted. */
    get unaccepted(): TranslatorPackGroup[];
    get needsAcceptance(): TranslatorPackGroup[];
    get downloadGb(): number;
    /** Memory for the largest model plus the service. */
    get memoryGb(): number;
    get languageCount(): number;
    get valid(): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatorDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslatorDialogComponent, "st-translator-dialog", never, {}, {}, never, never, false, never>;
}
