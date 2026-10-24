import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { AppLanguage } from '@core/translate/app-languages';
import * as i0 from "@angular/core";
export interface AppLanguageDialogData {
    /** The language to edit; none adds one. */
    language?: AppLanguage;
    /** Codes already in use (shipped or added). */
    existing: string[];
}
/** Add a UI language the product does not ship, or edit one that was added. */
export declare class AppLanguageDialogComponent {
    private fb;
    private api;
    private dialogRef;
    data: AppLanguageDialogData;
    readonly editing: boolean;
    saving: boolean;
    form: import("@angular/forms").FormGroup<{
        code: import("@angular/forms").FormControl<string>;
        name: import("@angular/forms").FormControl<string>;
        englishName: import("@angular/forms").FormControl<string>;
        rtl: import("@angular/forms").FormControl<boolean>;
        nativeDigits: import("@angular/forms").FormControl<boolean>;
    }>;
    constructor(fb: FormBuilder, api: ContentTranslationService, dialogRef: MatDialogRef<AppLanguageDialogComponent, AppLanguage>, data: AppLanguageDialogData);
    private unique;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppLanguageDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppLanguageDialogComponent, "st-app-language-dialog", never, {}, {}, never, never, false, never>;
}
