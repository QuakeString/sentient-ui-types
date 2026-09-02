import { ChangeDetectorRef, DestroyRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { AppState } from '@core/core.state';
import { EntityId } from '@shared/models/id/entity-id';
import { EntitiesTableComponent } from '@home/components/entity/entities-table.component';
import { AlarmRulesTableConfig } from '@home/components/alarm-rules/alarm-rules-table-config';
import { AlarmRulesService } from '@core/http/alarm-rules.service';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { EntityDebugSettingsService } from '@home/components/entity/debug/entity-debug-settings.service';
import * as i0 from "@angular/core";
/**
 * Host component for the standalone `/alarmRules` page (Phase AR2a).
 * Mirrors `CalculatedFieldsTableComponent` — the table-config does
 * the actual work; this component just instantiates it once we know
 * we're in tenant-wide page mode (`isPage` route flag).
 *
 * Subsequent phases (AR2b–g) extend the table-config with the
 * dialog wiring (`entityComponent`/`entityTabsComponent`), per-row
 * actions, and the rich condition / predicate / schedule editors.
 */
export declare class AlarmRulesTableComponent {
    private alarmRulesService;
    private translate;
    private dialog;
    private store;
    private datePipe;
    private cd;
    private destroyRef;
    private route;
    private importExportService;
    private entityDebugSettingsService;
    private renderer;
    entitiesTable: EntitiesTableComponent;
    active: import("@angular/core").InputSignal<boolean>;
    entityId: import("@angular/core").InputSignal<EntityId>;
    entityName: import("@angular/core").InputSignal<string>;
    alarmRulesTableConfig?: AlarmRulesTableConfig;
    /** True when rendered at `/alarmRules` (top-level), false when embedded in an entity dialog. */
    pageMode: boolean;
    constructor(alarmRulesService: AlarmRulesService, translate: TranslateService, dialog: MatDialog, store: Store<AppState>, datePipe: DatePipe, cd: ChangeDetectorRef, destroyRef: DestroyRef, route: ActivatedRoute, importExportService: ImportExportService, entityDebugSettingsService: EntityDebugSettingsService, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRulesTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRulesTableComponent, "tb-alarm-rules-table", never, { "active": { "alias": "active"; "required": false; "isSignal": true; }; "entityId": { "alias": "entityId"; "required": false; "isSignal": true; }; "entityName": { "alias": "entityName"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
