import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PipelineBuilderComponent } from './pipeline-builder/pipeline-builder.component';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { AnalyticsService } from '@core/http/analytics.service';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class AnalyticsPipelineResolver {
    private analyticsService;
    constructor(analyticsService: AnalyticsService);
    resolve(route: ActivatedRouteSnapshot): Observable<AnalyticsPipeline>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsPipelineResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnalyticsPipelineResolver>;
}
export declare const pipelineBreadcrumbLabelFunction: BreadCrumbLabelFunction<PipelineBuilderComponent>;
export declare class AnalyticsRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AnalyticsRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AnalyticsRoutingModule>;
}
