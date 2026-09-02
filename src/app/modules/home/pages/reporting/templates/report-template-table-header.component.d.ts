import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { ReportTemplate } from '@home/pages/reporting/models/report.models';
import { ReportTemplateFilter } from './report-template-filter.component';
import * as i0 from "@angular/core";
export declare class ReportTemplateTableHeaderComponent extends EntityTableHeaderComponent<ReportTemplate> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    templateFilterChanged(filter: ReportTemplateFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateTableHeaderComponent, "tb-report-template-table-header", never, {}, {}, never, never, false, never>;
}
