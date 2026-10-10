import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CellActionDescriptor, EntityTableColumn, EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { AnalyticsService } from '@core/http/analytics.service';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class AnalyticsPipelinesTableConfigResolver {
    private router;
    private analyticsService;
    private translate;
    private datePipe;
    private dialog;
    private importExport;
    private readonly config;
    constructor(router: Router, analyticsService: AnalyticsService, translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, importExport: ImportExportService);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<AnalyticsPipeline>>;
    configureColumns(): Array<EntityTableColumn<AnalyticsPipeline>>;
    configureEntityFunctions(): void;
    configureCellActions(): Array<CellActionDescriptor<AnalyticsPipeline>>;
    configureAddActions(): Array<any>;
    private onEntityAction;
    private toggleEnabled;
    private enabledState;
    private enabledStyle;
    createPipeline(): void;
    exportSelectedPipelines($event: Event, pipelines: AnalyticsPipeline[]): void;
    /** The file a pipeline exports to (single and ZIP export). */
    private pipelineExportData;
    exportPipeline($event: Event, pipeline: AnalyticsPipeline): void;
    importPipeline(): void;
    /** The pipeline an imported file creates (single and ZIP import): server-owned fields dropped. */
    private pipelineFromImport;
    /** ZIP import of pipelines through the same save call as the single import. */
    private pipelineZipHandler;
    openBuilder($event: Event, pipeline: AnalyticsPipeline): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalyticsPipelinesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AnalyticsPipelinesTableConfigResolver>;
}
