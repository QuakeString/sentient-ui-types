import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { AnalyticsService } from '@core/http/analytics.service';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import * as i0 from "@angular/core";
export declare class AnalyticsConfigComponent extends RuleNodeConfigurationComponent implements OnInit {
    private fb;
    private analyticsService;
    analyticsConfigForm: FormGroup;
    pipelines: AnalyticsPipeline[];
    constructor(fb: FormBuilder, analyticsService: AnalyticsService);
    ngOnInit(): void;
    protected configForm(): FormGroup;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected updateConfiguration(configuration: RuleNodeConfiguration): void;
    private loadPipelines;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalyticsConfigComponent, "tb-action-node-analytics-config", never, {}, {}, never, never, false, never>;
}
