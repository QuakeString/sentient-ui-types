import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { Integration } from '@shared/models/integration.models';
import { IntegrationService } from '@core/http/integration.service';
import { EdgeService } from '@core/http/edge.service';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
/**
 * SENTIENT Edge (docs/edge plan P7.5): the edge-template integrations
 * assigned to one edge. They run on that edge (with `${{key}}` taken from
 * its server attributes), never on the server.
 */
export declare class EdgeIntegrationsTableConfigResolver {
    private translate;
    private datePipe;
    private dialog;
    private dialogService;
    private integrationService;
    private edgeService;
    constructor(translate: TranslateService, datePipe: DatePipe, dialog: MatDialog, dialogService: DialogService, integrationService: IntegrationService, edgeService: EdgeService);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<Integration>>;
    private assign;
    private unassign;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeIntegrationsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
