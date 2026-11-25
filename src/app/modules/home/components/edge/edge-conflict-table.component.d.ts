import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { DialogService } from '@core/services/dialog.service';
import { EdgeService } from '@core/http/edge.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EdgeConflictTableConfig } from './edge-conflict-table-config';
import * as i0 from "@angular/core";
/** The edge details "Conflicts" tab (SENTIENT Edge scoped edits). */
export declare class EdgeConflictTableComponent implements OnInit {
    private datePipe;
    private dialogService;
    private dialog;
    private edgeService;
    private translate;
    protected store: Store<AppState>;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    entitiesTable: EntitiesTableComponent;
    edgeConflictTableConfig: EdgeConflictTableConfig;
    constructor(datePipe: DatePipe, dialogService: DialogService, dialog: MatDialog, edgeService: EdgeService, translate: TranslateService, store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeConflictTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeConflictTableComponent, "tb-edge-conflict-table", never, { "active": { "alias": "active"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; }, {}, never, never, false, never>;
}
