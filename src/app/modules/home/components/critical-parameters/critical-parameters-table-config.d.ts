import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import { BaseData, HasId } from '@shared/models/base-data';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { CriticalParameterRow } from '@shared/models/critical-parameter.models';
/** A table row: the rule plus an id the table can track. */
export interface CriticalParameterEntity extends BaseData<HasId>, Omit<CriticalParameterRow, 'id'> {
    /** The rule's own id (none for a rule inherited from the profile). */
    ruleId?: string;
}
export declare class CriticalParametersTableConfig extends EntityTableConfig<CriticalParameterEntity> {
    private criticalParameterService;
    private translate;
    private dialog;
    ownerId: EntityId;
    private readOnly;
    /** The profile's "Log every manual change" (shown read-only on a device or asset). */
    readonly logManualChanges: import("@angular/core").WritableSignal<boolean>;
    readonly profileName: import("@angular/core").WritableSignal<string>;
    readonly isProfile: boolean;
    private lastList;
    constructor(criticalParameterService: CriticalParameterService, translate: TranslateService, dialog: MatDialog, ownerId: EntityId, readOnly: boolean);
    private confirmCell;
    private fetch;
    /** Add, edit, or (on an inherited row) make it stricter for this device or asset. */
    private openDialog;
    private ruleOf;
}
