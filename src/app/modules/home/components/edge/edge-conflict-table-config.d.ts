import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EdgeConflict } from '@shared/models/edge.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { DialogService } from '@core/services/dialog.service';
import { EdgeService } from '@core/http/edge.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
/**
 * The edits an edge made that the server refused because its own copy had
 * changed meanwhile (SENTIENT Edge scoped edits). The server's version won;
 * a user applies the edge's version or keeps the server's.
 */
export declare class EdgeConflictTableConfig extends EntityTableConfig<EdgeConflict> {
    private datePipe;
    private dialogService;
    private dialog;
    private edgeService;
    private translate;
    private store;
    entityId: EntityId;
    constructor(datePipe: DatePipe, dialogService: DialogService, dialog: MatDialog, edgeService: EdgeService, translate: TranslateService, store: Store<AppState>, entityId: EntityId);
    private status;
    private showEdgeVersion;
    private resolve;
}
