import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationRequest, NotificationRequestInfo } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { PageLink } from '@shared/models/page/page-link';
import { ActivatedRouteSnapshot } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SentTableConfigResolver {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationRequest, PageLink, NotificationRequestInfo>;
    private configureCellActions;
    private createRequest;
    private onRequestAction;
    private requestStatus;
    private requestStats;
    private requestStatusStyle;
    private openStatsErrorDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<SentTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SentTableConfigResolver>;
}
