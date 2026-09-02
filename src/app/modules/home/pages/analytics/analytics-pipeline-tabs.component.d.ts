import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class AnalyticsPipelineTabsComponent extends EntityTabsComponent<AnalyticsPipeline> {
    protected store: Store<AppState>;
    entityId: EntityId;
    constructor(store: Store<AppState>);
    protected setEntity(entity: AnalyticsPipeline): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsPipelineTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalyticsPipelineTabsComponent, "tb-analytics-pipeline-tabs", never, {}, {}, never, never, false, never>;
}
