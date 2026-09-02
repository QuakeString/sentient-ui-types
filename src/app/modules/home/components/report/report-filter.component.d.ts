import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { ReportService } from '@core/http/report.service';
import { Timewindow } from '@shared/models/time/time.models';
import * as i0 from "@angular/core";
export interface ReportFilter {
    reportTemplateId?: string;
    userId?: string;
    startTime?: number;
    endTime?: number;
}
export declare class ReportFilterComponent implements OnInit, ControlValueAccessor {
    private translate;
    private reportService;
    private cd;
    filterMenuTrigger: MatMenuTrigger;
    disabled: boolean;
    buttonDisplayValue: any;
    private filter;
    filterReportTemplate: string;
    filterUser: string;
    filterTimewindow: Timewindow;
    reportTemplates: Array<{
        id: string;
        name: string;
    }>;
    users: Array<{
        id: string;
        name: string;
    }>;
    private propagateChange;
    constructor(translate: TranslateService, reportService: ReportService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    loadFilterOptions(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(filter?: ReportFilter): void;
    hasActiveFilters(): boolean;
    onFilterChange(): void;
    resetFilters(): void;
    closeFilterMenu(): void;
    applyFilters(): void;
    getReportTemplateName(templateId: string): string;
    private updateButtonDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportFilterComponent, "tb-report-filter", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
