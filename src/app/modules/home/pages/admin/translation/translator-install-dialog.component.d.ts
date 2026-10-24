import { OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { Translator } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
export interface TranslatorInstallDialogData {
    translator: Translator;
    /** The access token, when it was just created. */
    token?: string;
}
/** Install instructions for a SENTIENT translator; waits for it to connect. */
export declare class TranslatorInstallDialogComponent extends DialogComponent<TranslatorInstallDialogComponent, Translator> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TranslatorInstallDialogComponent, Translator>;
    data: TranslatorInstallDialogData;
    private api;
    kind: 'docker' | 'linux';
    text: string;
    translator: Translator;
    showToken: boolean;
    private poll;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TranslatorInstallDialogComponent, Translator>, data: TranslatorInstallDialogData, api: ContentTranslationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    setKind(kind: 'docker' | 'linux'): void;
    private load;
    get maskedToken(): string;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatorInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslatorInstallDialogComponent, "st-translator-install-dialog", never, {}, {}, never, never, false, never>;
}
