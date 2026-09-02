import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ReportFormat, Margins } from '@home/pages/reporting/models/report.models';
import * as i0 from "@angular/core";
export interface ReportSettingsDialogData {
    name: string;
    description: string;
    namePattern: string;
    timeDataPattern: string;
    format: ReportFormat;
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
    settingsForm: FormGroup;
    isPdf: boolean;
    paperSizes: string[];
    dateFormatOptions: {
        value: string;
        label: string;
    }[];
    constructor(dialogRef: MatDialogRef<ReportSettingsDialogComponent>, data: ReportSettingsDialogData, fb: FormBuilder, translate: TranslateService);
    ngOnInit(): void;
    private updateDateFormatLabels;
    private formatDate;
    private buildForm;
    save(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportSettingsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportSettingsDialogComponent, "tb-report-settings-dialog", never, {}, {}, never, never, false, never>;
}
