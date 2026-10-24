import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ContentLanguage, TranslationStatus } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
export interface TranslationTextDialogData {
    sourceText: string;
    sourceLanguage?: ContentLanguage;
    language: ContentLanguage;
    text?: string;
    status: TranslationStatus | 'MISSING' | 'LOCKED' | 'CHANGED' | 'SHIPPED' | 'OUTDATED';
    usages: string[];
    /** Title of the usages row (default "Used in"). */
    usagesTitle?: string;
    /** Offer the clear action (default: when there is a text). */
    canClear?: boolean;
    /** Label of the clear action (default "Clear"). */
    clearLabel?: string;
}
export type TranslationTextDialogResult = {
    action: 'save';
    text: string;
} | {
    action: 'clear';
};
/** Edit one text's translation into one language. */
export declare class TranslationTextDialogComponent extends DialogComponent<TranslationTextDialogComponent, TranslationTextDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TranslationTextDialogComponent, TranslationTextDialogResult>;
    data: TranslationTextDialogData;
    private fb;
    readonly textControl: FormControl<string>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TranslationTextDialogComponent, TranslationTextDialogResult>, data: TranslationTextDialogData, fb: FormBuilder);
    langAttr(l: ContentLanguage | undefined): string | null;
    get hasText(): boolean;
    cancel(): void;
    clear(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationTextDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationTextDialogComponent, "st-translation-text-dialog", never, {}, {}, never, never, false, never>;
}
