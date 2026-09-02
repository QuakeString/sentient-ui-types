import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { ReportTemplate } from '@home/pages/reporting/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportTemplateTabsComponent extends EntityTabsComponent<ReportTemplate> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateTabsComponent, "tb-report-template-tabs", never, {}, {}, never, never, false, never>;
}
