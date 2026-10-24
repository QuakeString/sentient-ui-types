import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ContentTranslationService } from '@core/http/content-translation.service';
import { ContentLanguage } from '@shared/models/translation.models';
import { ReportFormat, Margins } from '@home/pages/reporting/models/report.models';
import * as i0 from "@angular/core";
export interface ReportSettingsDialogData {
    name: string;
    description: string;
    namePattern: string;
    timeDataPattern: string;
    format: ReportFormat;
    /** Content language code, or '' for the requesting user's language. */
    language?: string;
    pageSize?: string;
    pageOrientation?: 'PORTRAIT' | 'LANDSCAPE';
    pageMargins?: Margins;
    backgroundColor?: string;
}
export interface ReportSettingsDialogResult {
    name: string;
    description: string;
    namePattern: string;
    timeDataPattern: string;
    language: string;
    pageSize?: string;
    pageOrientation?: 'PORTRAIT' | 'LANDSCAPE';
    pageMargins?: Margins;
    backgroundColor?: string;
}
export declare class ReportSettingsDialogComponent implements OnInit {
    private dialogRef;
    data: ReportSettingsDialogData;
    private fb;
    private translate;
    private contentTranslation;
    settingsForm: FormGroup;
    isPdf: boolean;
    /** Languages the tenant translates its content into; empty hides the
     *  report language setting. */
    reportLanguages: ContentLanguage[];
    paperSizes: string[];
    dateFormatOptions: {
        value: string;
        label: string;
    }[];
    constructor(dialogRef: MatDialogRef<ReportSettingsDialogComponent>, data: ReportSettingsDialogData, fb: FormBuilder, translate: TranslateService, contentTranslation: ContentTranslationService);
    ngOnInit(): void;
    private updateDateFormatLabels;
    private formatDate;
    private buildForm;
    save(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportSettingsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportSettingsDialogComponent, "tb-report-settings-dialog", never, {}, {}, never, never, false, never>;
}
