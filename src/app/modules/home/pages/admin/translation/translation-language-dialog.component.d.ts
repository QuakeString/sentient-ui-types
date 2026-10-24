import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ContentLanguage } from '@shared/models/translation.models';
import { LanguageChoice } from '@shared/models/script.models';
import * as i0 from "@angular/core";
export interface TranslationLanguageDialogData {
    /** Languages that can still be added. */
    languages: ContentLanguage[];
}
/** Pick a language to translate into. Closes with its code. */
export declare class TranslationLanguageDialogComponent extends DialogComponent<TranslationLanguageDialogComponent, string> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TranslationLanguageDialogComponent, string>;
    data: TranslationLanguageDialogData;
    private fb;
    readonly languageControl: FormControl<string>;
    readonly choices: LanguageChoice[];
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TranslationLanguageDialogComponent, string>, data: TranslationLanguageDialogData, fb: FormBuilder);
    selected(): ContentLanguage | undefined;
    cancel(): void;
    add(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslationLanguageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TranslationLanguageDialogComponent, "st-translation-language-dialog", never, {}, {}, never, never, false, never>;
}
