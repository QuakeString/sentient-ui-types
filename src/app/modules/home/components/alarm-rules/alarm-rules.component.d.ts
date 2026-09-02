import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '@home/components/entity/entity.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { CalculatedField, CalculatedFieldArgument, CalculatedFieldType } from '@shared/models/calculated-field.models';
import { EntityId } from '@shared/models/id/entity-id';
import { BaseData } from '@shared/models/base-data';
import { Observable } from 'rxjs';
import type { AlarmRulesTableConfig } from '@home/components/alarm-rules/alarm-rules-table-config';
import { StringItemsOption } from '@shared/components/string-items-list.component';
import { EntityService } from '@core/http/entity.service';
import * as i0 from "@angular/core";
/**
 * Drawer body for the alarm-rules detail panel (the slide-out that
 * appears on row-click in the standalone /alarms/alarm-rules page).
 * Ported from TB CE — same form layout as the alarm-rule dialog,
 * but rendered inline inside the drawer with the standard
 * EntityComponent edit/save/cancel toolbar provided by the
 * EntityDetailsPanel.
 */
export declare class AlarmRulesComponent extends EntityComponent<CalculatedField> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: CalculatedField;
    protected entitiesTableConfigValue: AlarmRulesTableConfig;
    protected fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    private entityService;
    standalone: boolean;
    entityName: string;
    ownerId: EntityId;
    readonly tenantId: string;
    readonly EntityType: typeof EntityType;
    readonly alarmRuleEntityTypeList: EntityType[];
    readonly CalculatedFieldType: typeof CalculatedFieldType;
    private cfFormService;
    private destroyRef;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: CalculatedField, entitiesTableConfigValue: AlarmRulesTableConfig, fb: FormBuilder, cd: ChangeDetectorRef, entityService: EntityService);
    hideDelete(): boolean;
    additionalDebugActionConfig: {
        action: () => void;
        title: any;
    };
    get entityId(): EntityId;
    get entitiesTableConfig(): AlarmRulesTableConfig;
    changeEntity(entity: BaseData<EntityId>): void;
    buildForm(_entity?: CalculatedField): FormGroup;
    updateForm(entity: CalculatedField): void;
    onTestScript(expression?: string): Observable<string>;
    updateFormState(): void;
    get arguments(): Record<string, CalculatedFieldArgument>;
    get predefinedTypeValues(): StringItemsOption[];
    get configFormGroup(): FormGroup;
    removeClearAlarmRule(): void;
    addClearAlarmRule(): void;
    getOwnerId(entityId: EntityId): void;
    private isAssignedToCustomer;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRulesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRulesComponent, "tb-alarm-rules", never, { "standalone": { "alias": "standalone"; "required": false; }; "entityName": { "alias": "entityName"; "required": false; }; }, {}, never, never, false, never>;
}
