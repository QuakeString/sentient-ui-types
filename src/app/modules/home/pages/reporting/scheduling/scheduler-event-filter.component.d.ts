import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { ReportService } from '@core/http/report.service';
import { UserService } from '@core/http/user.service';
import * as i0 from "@angular/core";
export interface SchedulerEventFilter {
    reportTemplateId?: string;
    userId?: string;
}
export declare class SchedulerEventFilterComponent implements OnInit, ControlValueAccessor {
    private translate;
    private reportService;
    private userService;
    private cd;
    filterMenuTrigger: MatMenuTrigger;
    disabled: boolean;
    buttonDisplayValue: any;
    private filter;
    filterReportTemplate: string;
    filterUser: string;
    reportTemplates: Array<{
        id: string;
        name: string;
    }>;
    users: Array<{
        id: string;
        name: string;
    }>;
    private propagateChange;
    constructor(translate: TranslateService, reportService: ReportService, userService: UserService, cd: ChangeDetectorRef);
    private optionsLoaded;
    ngOnInit(): void;
    onFilterMenuOpened(): void;
    loadFilterOptions(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(filter?: SchedulerEventFilter): void;
    hasActiveFilters(): boolean;
    onFilterChange(): void;
    resetFilters(): void;
    closeFilterMenu(): void;
    applyFilters(): void;
    getReportTemplateName(templateId: string): string;
    getUserName(userId: string): string;
    private updateButtonDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventFilterComponent, "tb-scheduler-event-filter", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
