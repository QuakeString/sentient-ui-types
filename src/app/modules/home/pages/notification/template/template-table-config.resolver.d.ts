import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationTemplate } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class TemplateTableConfigResolver {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<NotificationTemplate>;
    private configureCellActions;
    private editTemplate;
    private notificationTemplateDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TemplateTableConfigResolver>;
}
