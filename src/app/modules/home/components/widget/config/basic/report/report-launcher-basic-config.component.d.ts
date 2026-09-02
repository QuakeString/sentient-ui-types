import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { ReportService } from '@core/http/report.service';
import * as i0 from "@angular/core";
/** Basic-mode config for the Report Launcher widget: a curated form exposing the
 *  title + the four report options, mirroring the advanced settings without the
 *  full advanced tabs. */
export declare class ReportLauncherBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private reportService;
    private fb;
    reportLauncherBasicConfigForm: UntypedFormGroup;
    /** Report templates for the picker (customer-subtree-scoped by the backend). */
    templates: Array<{
        id: string;
        name: string;
    }>;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, reportService: ReportService, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    private loadTemplates;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportLauncherBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportLauncherBasicConfigComponent, "tb-report-launcher-basic-config", never, {}, {}, never, never, false, never>;
}
