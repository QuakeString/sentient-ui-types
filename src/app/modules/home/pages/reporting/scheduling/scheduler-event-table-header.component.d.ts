import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { SchedulerEvent } from '@home/pages/reporting/models/report.models';
import { SchedulerEventFilter } from './scheduler-event-filter.component';
import * as i0 from "@angular/core";
export declare class SchedulerEventTableHeaderComponent extends EntityTableHeaderComponent<SchedulerEvent> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    eventFilterChanged(filter: SchedulerEventFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventTableHeaderComponent, "tb-scheduler-event-table-header", never, {}, {}, never, never, false, never>;
}
