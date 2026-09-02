import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { ReportTemplateType, ReportFormat } from '@home/pages/reporting/models/report.models';
import * as i0 from "@angular/core";
export interface ReportTemplateFilter {
    templateType?: ReportTemplateType;
    format?: ReportFormat;
}
export declare class ReportTemplateFilterComponent implements OnInit, ControlValueAccessor {
    private translate;
    private cd;
    filterMenuTrigger: MatMenuTrigger;
    disabled: boolean;
    buttonDisplayValue: any;
    private filter;
    filterType: string;
    filterFormat: string;
    templateTypes: ReportTemplateType[];
    formats: (ReportFormat.PDF | ReportFormat.CSV | ReportFormat.XLSX | ReportFormat.ODS | ReportFormat.SCRIPT)[];
    private propagateChange;
    constructor(translate: TranslateService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(filter?: ReportTemplateFilter): void;
    hasActiveFilters(): boolean;
    onFilterChange(): void;
    resetFilters(): void;
    closeFilterMenu(): void;
    applyFilters(): void;
    getTemplateTypeLabel(type: ReportTemplateType): string;
    getFormatLabel(format: ReportFormat): string;
    private updateButtonDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateFilterComponent, "tb-report-template-filter", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
