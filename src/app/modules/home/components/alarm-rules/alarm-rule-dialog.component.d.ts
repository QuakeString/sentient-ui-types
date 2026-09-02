import { DestroyRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { CalculatedFieldAlarmRule, CalculatedFieldArgument, CalculatedFieldType } from '@shared/models/calculated-field.models';
import { EntityType } from '@shared/models/entity-type.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import { AlarmRulesService } from '@core/http/alarm-rules.service';
import { EntityId } from '@shared/models/id/entity-id';
import { AdditionalDebugActionConfig } from '@home/components/entity/debug/entity-debug-settings.model';
import { AlarmRuleTestScriptFn } from '@shared/models/alarm-rule.models';
import { Observable } from 'rxjs';
import { StringItemsOption } from '@shared/components/string-items-list.component';
import { BaseData } from '@shared/models/base-data';
import { CalculatedFieldFormService } from '@core/services/calculated-field-form.service';
import { EntitySelectComponent } from '@shared/components/entity/entity-select.component';
import * as i0 from "@angular/core";
export interface AlarmRuleDialogData {
    value?: CalculatedFieldAlarmRule;
    buttonTitle: string;
    entityId: EntityId;
    tenantId: string;
    entityName?: string;
    ownerId: EntityId;
    additionalDebugActionConfig?: AdditionalDebugActionConfig<(calculatedField: CalculatedFieldAlarmRule) => void>;
    isDirty?: boolean;
    getTestScriptDialogFn?: AlarmRuleTestScriptFn;
}
/**
 * Ported from ThingsBoard CE
 * (~/thingsboard/ui-ngx/.../alarm-rules/alarm-rule-dialog.component.ts).
 *
 * Phase AR2b ships the dialog shell + general/arguments/clear-rule
 * advanced-settings sections verbatim. The two custom rule editors
 * (`tb-create-cf-alarm-rules`, `tb-cf-alarm-rule`) referenced by the
 * template are not yet ported — the template stubs them with
 * placeholder cards that land replaced in AR2c–g.
 */
export declare class AlarmRuleDialogComponent extends DialogComponent<AlarmRuleDialogComponent, CalculatedFieldAlarmRule> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AlarmRuleDialogData;
    protected dialogRef: MatDialogRef<AlarmRuleDialogComponent, CalculatedFieldAlarmRule>;
    private alarmRulesService;
    private destroyRef;
    private cfFormService;
    entitySelect: EntitySelectComponent;
    fieldFormGroup: FormGroup;
    additionalDebugActionConfig: {
        action: () => void;
        title: string;
    };
    readonly EntityType: typeof EntityType;
    readonly entityTypeTranslations: Map<EntityType | import("@shared/models/entity-type.models").AliasEntityType, import("@shared/models/entity-type.models").EntityTypeTranslation>;
    readonly alarmRuleEntityTypeList: EntityType[];
    readonly CalculatedFieldType: typeof CalculatedFieldType;
    readonly ScriptLanguage: typeof ScriptLanguage;
    separatorKeysCodes: number[];
    entityName: string;
    ownerId: EntityId;
    disabledClearRuleButton: boolean;
    disabledArguments: boolean;
    isLoading: boolean;
    constructor(store: Store<AppState>, router: Router, data: AlarmRuleDialogData, dialogRef: MatDialogRef<AlarmRuleDialogComponent, CalculatedFieldAlarmRule>, alarmRulesService: AlarmRulesService, destroyRef: DestroyRef, cfFormService: CalculatedFieldFormService);
    get configFormGroup(): FormGroup;
    get arguments(): Record<string, CalculatedFieldArgument>;
    removeClearAlarmRule(): void;
    addClearAlarmRule(): void;
    get fromGroupValue(): CalculatedFieldAlarmRule;
    cancel(): void;
    add(): void;
    private applyDialogData;
    onTestScript(expression: string): Observable<string>;
    private updateRulesValidators;
    get predefinedTypeValues(): StringItemsOption[];
    changeEntity(entity: BaseData<EntityId>): void;
    private isAssignedToCustomer;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleDialogComponent, "tb-alarm-rule-dialog", never, {}, {}, never, never, false, never>;
}
