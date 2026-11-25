import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { CloudService } from '@core/http/cloud.service';
import { CloudEventInfo, CloudEventStatus, CloudEventStream } from '@shared/models/cloud.models';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
export interface CloudEventsFilter {
    stream: CloudEventStream;
    status: CloudEventStatus | '';
}
export declare class CloudEventsTableConfigResolver {
    private cloudService;
    private entityService;
    private datePipe;
    private dialog;
    private translate;
    /** Entity names already looked up, by ID. */
    private readonly names;
    constructor(cloudService: CloudService, entityService: EntityService, datePipe: DatePipe, dialog: MatDialog, translate: TranslateService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<CloudEventInfo>;
    /** Names of the entities a page of events is about, a few requests per entity type. */
    private loadNames;
    /** The entity's name when it still exists here, its ID otherwise. */
    private entityCell;
    private showEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CloudEventsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
