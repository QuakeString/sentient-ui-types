import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { SchedulerEvent } from '@home/pages/reporting/models/report.models';
import * as i0 from "@angular/core";
export declare class SchedulerEventTabsComponent extends EntityTabsComponent<SchedulerEvent> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventTabsComponent, "tb-scheduler-event-tabs", never, {}, {}, never, never, false, never>;
}
