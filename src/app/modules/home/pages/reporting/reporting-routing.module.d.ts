import { ActivatedRouteSnapshot } from '@angular/router';
import { ReportBuilderComponent } from '@home/pages/reporting/builder/report-builder.component';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { Observable } from 'rxjs';
import { ReportTemplate } from '@home/pages/reporting/models/report.models';
import { ReportService } from '@core/http/report.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class ReportTemplateResolver {
    private reportService;
    constructor(reportService: ReportService);
    resolve(route: ActivatedRouteSnapshot): Observable<ReportTemplate>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportTemplateResolver>;
}
export declare const reportBuilderBreadcrumbLabelFunction: BreadCrumbLabelFunction<ReportBuilderComponent>;
export declare class ReportingRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportingRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ReportingRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ReportingRoutingModule>;
}
