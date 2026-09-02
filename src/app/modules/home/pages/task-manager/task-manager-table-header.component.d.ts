import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Job, JobFilter } from '@shared/models/job.model';
import { TimePageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class TaskManagerTableHeaderComponent extends EntityTableHeaderComponent<Job, TimePageLink> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    jobFilterChanged(filter: JobFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskManagerTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskManagerTableHeaderComponent, "tb-task-manager-table-header", never, {}, {}, never, never, false, never>;
}
