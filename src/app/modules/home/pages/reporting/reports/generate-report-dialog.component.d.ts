import { OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ReportService } from '@core/http/report.service';
import { ReportTemplate } from '@home/pages/reporting/models/report.models';
import { TimeService } from '@core/services/time.service';
import * as i0 from "@angular/core";
export type GenerationState = 'idle' | 'generating' | 'success' | 'error';
export declare class GenerateReportDialogComponent implements OnInit, OnDestroy {
    private dialogRef;
    private fb;
    private reportService;
    private translate;
    private timeService;
    form: FormGroup;
    reportTemplates: ReportTemplate[];
    isLoading: boolean;
    generationState: GenerationState;
    progress: number;
    progressMessage: string;
    errorMessage: string;
    reportId: string | null;
    private destroy$;
    private pollInterval;
    constructor(dialogRef: MatDialogRef<GenerateReportDialogComponent>, fb: FormBuilder, reportService: ReportService, translate: TranslateService, timeService: TimeService);
    ngOnInit(): void;
    /**
     * Adopt the selected template's own time window as the starting value.
     * Falls back to the first component's window, then to the service default.
     */
    private applyTemplateTimewindow;
    ngOnDestroy(): void;
    loadTemplates(): void;
    cancel(): void;
    generate(): void;
    private startPolling;
    private getProgressMessageForStep;
    getTemplateName(template: ReportTemplate): string;
    get isGenerating(): boolean;
    get isSuccess(): boolean;
    get isError(): boolean;
    get canGenerate(): boolean;
    retry(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateReportDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateReportDialogComponent, "tb-generate-report-dialog", never, {}, {}, never, never, false, never>;
}
