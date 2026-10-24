import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { ContentLanguage, GlossaryMode, GlossaryTerm } from '@shared/models/translation.models';
import * as i0 from "@angular/core";
export interface GlossaryTermDialogData {
    term: GlossaryTerm;
    languages: ContentLanguage[];
    targetLanguages: string[];
}
/** Add or edit a glossary term. Closes with true when saved. */
export declare class GlossaryTermDialogComponent extends DialogComponent<GlossaryTermDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<GlossaryTermDialogComponent, boolean>;
    data: GlossaryTermDialogData;
    private fb;
    private api;
    readonly modes: GlossaryMode[];
    readonly form: FormGroup;
    error: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<GlossaryTermDialogComponent, boolean>, data: GlossaryTermDialogData, fb: FormBuilder, api: ContentTranslationService);
    get isAdd(): boolean;
    get mode(): GlossaryMode;
    language(code: string): ContentLanguage | undefined;
    langAttr(code: string): string | null;
    get valid(): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlossaryTermDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GlossaryTermDialogComponent, "st-glossary-term-dialog", never, {}, {}, never, never, false, never>;
}
