import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { CloudService } from '@core/http/cloud.service';
import { CloudEventInfo, CloudEventStatus, CloudEventStream } from '@shared/models/cloud.models';
import * as i0 from "@angular/core";
export interface CloudEventsFilter {
    stream: CloudEventStream;
    status: CloudEventStatus | '';
}
/** SENTIENT Edge: its outbox, newest first (docs/edge plan P5, ThingsBoard Edge "Cloud events"). */
export declare class CloudEventsTableConfigResolver {
    private cloudService;
    private datePipe;
    private dialog;
    private translate;
    constructor(cloudService: CloudService, datePipe: DatePipe, dialog: MatDialog, translate: TranslateService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<CloudEventInfo>;
    private showEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<CloudEventsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
