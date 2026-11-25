import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { CloudEventInfo, CloudEventStatus, CloudEventStream } from '@shared/models/cloud.models';
import * as i0 from "@angular/core";
/** The stream and status filters of the Cloud events table. */
export declare class CloudEventsTableHeaderComponent extends EntityTableHeaderComponent<CloudEventInfo> {
    protected store: Store<AppState>;
    readonly streams: CloudEventStream[];
    readonly statuses: CloudEventStatus[];
    constructor(store: Store<AppState>);
    changed(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CloudEventsTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CloudEventsTableHeaderComponent, "tb-cloud-events-table-header", never, {}, {}, never, never, false, never>;
}
