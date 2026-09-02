import { DestroyRef, Renderer2 } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { AppState } from '@core/core.state';
import { AlarmRulesService } from '@core/http/alarm-rules.service';
import { AlarmRuleDefinition } from '@shared/models/alarm-rule.models';
import { CalculatedFieldEventArguments } from '@shared/models/calculated-field.models';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { EntityDebugSettingsService } from '@home/components/entity/debug/entity-debug-settings.service';
/**
 * Alarm Rules table-config — TB-PE-aligned column / action shape.
 *
 * Two modes:
 *  - **pageMode (true)**: top-level `/alarms/alarm-rules` page. Shows
 *    Entity type + Entity columns, no inline Edit cell action (the
 *    drawer's inline edit takes over), Create + Import toolbar
 *    descriptors, detail drawer enabled.
 *  - **per-entity (false)**: rendered as the Alarm Rules tab inside
 *    a Device / Asset / Customer / *Profile dialog. Entity columns
 *    hidden (the parent dialog already identifies the owner), inline
 *    Edit cell action exposed (no drawer), no Import button.
 *
 * Columns (TB CE):
 *   Created time | Alarm type | (page: Entity type) | (page: Entity)
 *   | Severities | Clear condition
 *
 * Actions (TB CE) — same in both modes plus per-entity Edit:
 *   Copy | Export | Events | Debug-config | (per-entity: Edit)
 */
export declare class AlarmRulesTableConfig extends EntityTableConfig<AlarmRuleDefinition> {
    private alarmRulesService;
    private translate;
    private dialog;
    private datePipe;
    entityId: EntityId | null;
    private store;
    private destroyRef;
    entityName: string | null;
    private importExportService;
    private entityDebugSettingsService;
    private renderer;
    readonly tenantId: string;
    /** Active filter from the page-mode header dropdown (TB CE). */
    alarmRuleFilterConfig: import('@shared/models/alarm-rule.models').AlarmRuleFilterConfig | undefined;
    additionalDebugActionConfig: {
        title: any;
        action: (rule: AlarmRuleDefinition) => void;
    };
    constructor(alarmRulesService: AlarmRulesService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, entityId: EntityId | null, store: Store<AppState>, destroyRef: DestroyRef, entityName?: string | null, importExportService?: ImportExportService | null, entityDebugSettingsService?: EntityDebugSettingsService | null, renderer?: Renderer2 | null);
    fetchAlarmRules(pageLink: PageLink): Observable<PageData<AlarmRuleDefinition>>;
    private editAlarmRule;
    private copyAlarmRule;
    private exportAlarmRule;
    private importAlarmRule;
    private normalizeImported;
    private openDebugTab;
    private openDebugEventsDialog;
    private onOpenDebugConfig;
    /** Greys out cells of disabled alarm rules — mirrors the recipe table. */
    private disabledCellStyle;
    private toggleEnabled;
    private onDebugConfigChanged;
    private getAlarmRuleDialog;
    /**
     * AR2f — wires the Rhai test-script button inside the alarm
     * condition dialog. Reuses the existing CF script-test dialog
     * (Rhai engine + sample-args editor + output preview).
     *
     * Differs from the CF table-config in one place: alarm rules
     * carry the script under
     * `configuration.createRules.<sev>.condition.expression.expression`
     * (or `clearRule.condition.expression.expression`) instead of a
     * top-level `expression`. The condition dialog passes the live
     * editor value as the 4th `expression` arg, so we use that
     * instead of probing the saved CF.
     */
    getTestScriptDialog(rule: AlarmRuleDefinition, argumentsObj?: CalculatedFieldEventArguments, _openCalculatedFieldEdit?: boolean, expression?: string): Observable<string>;
}
