import { OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { ReportService } from '@core/http/report.service';
import { ReportTemplate } from '@home/pages/reporting/models/report.models';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
/** Widget-settings panel for the Report Launcher widget.
 *
 *  Fields:
 *   - reportTemplateIdFilter[] — chip autocomplete; empty = "every report
 *     template the user is allowed to see" (already customer-subtree-scoped
 *     by the backend). Resolves to an array of template UUIDs.
 *   - autoDownload — download a completed report automatically (default true).
 *   - showHistory  — show the "My reports" list (default true).
 *   - pageSize     — history page size.
 */
export declare class ReportLauncherWidgetSettingsComponent extends WidgetSettingsComponent implements OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private reportService;
    reportLauncherWidgetSettingsForm: UntypedFormGroup;
    /** Resolved template objects displayed as chips (so we can show the name
     *  rather than the raw UUID held in the form). */
    selectedTemplates: ReportTemplate[];
    templateSearchControl: UntypedFormControl;
    filteredTemplates: Observable<ReportTemplate[]>;
    readonly chipSeparators: readonly [13, 188];
    private destroy$;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, reportService: ReportService);
    ngOnDestroy(): void;
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    private initAutocomplete;
    private fetchTemplates;
    addTemplate(template: ReportTemplate): void;
    onChipInput(event: MatChipInputEvent): void;
    removeTemplate(template: ReportTemplate): void;
    private syncTemplateIds;
    displayTemplate: (t: ReportTemplate) => string;
    private idOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportLauncherWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportLauncherWidgetSettingsComponent, "tb-report-launcher-widget-settings", never, {}, {}, never, never, false, never>;
}
