import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Report } from '@home/pages/reporting/models/report.models';
import { ReportFilter } from '@home/components/report/report-filter.component';
import * as i0 from "@angular/core";
export declare class ReportTableHeaderComponent extends EntityTableHeaderComponent<Report> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    reportFilterChanged(filter: ReportFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTableHeaderComponent, "tb-report-table-header", never, {}, {}, never, never, false, never>;
}
