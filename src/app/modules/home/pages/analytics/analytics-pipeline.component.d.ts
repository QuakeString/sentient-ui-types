import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class AnalyticsPipelineComponent extends EntityComponent<AnalyticsPipeline> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: AnalyticsPipeline;
    protected entitiesTableConfigValue: EntityTableConfig<AnalyticsPipeline>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: AnalyticsPipeline, entitiesTableConfigValue: EntityTableConfig<AnalyticsPipeline>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    onPipelineIdCopied(): void;
    buildForm(entity: AnalyticsPipeline): UntypedFormGroup;
    updateForm(entity: AnalyticsPipeline): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsPipelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalyticsPipelineComponent, "tb-analytics-pipeline", never, {}, {}, never, never, false, never>;
}
