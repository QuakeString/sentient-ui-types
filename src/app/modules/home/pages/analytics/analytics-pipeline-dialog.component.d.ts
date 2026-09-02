import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnalyticsService } from '@core/http/analytics.service';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import * as i0 from "@angular/core";
export interface AnalyticsPipelineDialogData {
    pipeline: AnalyticsPipeline | null;
}
export declare class AnalyticsPipelineDialogComponent implements OnInit {
    private dialogRef;
    data: AnalyticsPipelineDialogData;
    private fb;
    private analyticsService;
    form: FormGroup;
    isNew: boolean;
    pipeline: AnalyticsPipeline;
    isLoading: boolean;
    constructor(dialogRef: MatDialogRef<AnalyticsPipelineDialogComponent>, data: AnalyticsPipelineDialogData, fb: FormBuilder, analyticsService: AnalyticsService);
    ngOnInit(): void;
    save(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsPipelineDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalyticsPipelineDialogComponent, "tb-analytics-pipeline-dialog", never, {}, {}, never, never, false, never>;
}
