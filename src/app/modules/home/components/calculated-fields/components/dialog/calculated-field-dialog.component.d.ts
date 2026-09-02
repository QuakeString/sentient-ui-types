import { DestroyRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { CalculatedField, CalculatedFieldTestScriptFn, CalculatedFieldType } from '@shared/models/calculated-field.models';
import { EntityType } from '@shared/models/entity-type.models';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { AdditionalDebugActionConfig } from '@home/components/entity/debug/entity-debug-settings.model';
import * as i0 from "@angular/core";
export interface CalculatedFieldDialogData {
    value?: CalculatedField;
    buttonTitle: string;
    entityId: EntityId;
    tenantId: string;
    entityName?: string;
    additionalDebugActionConfig: AdditionalDebugActionConfig<(calculatedField: CalculatedField) => void>;
    getTestScriptDialogFn: CalculatedFieldTestScriptFn;
    isDirty?: boolean;
}
export declare class CalculatedFieldDialogComponent extends DialogComponent<CalculatedFieldDialogComponent, CalculatedField> {
    protected store: Store<AppState>;
    protected router: Router;
    data: CalculatedFieldDialogData;
    protected dialogRef: MatDialogRef<CalculatedFieldDialogComponent, CalculatedField>;
    private calculatedFieldsService;
    private destroyRef;
    private fb;
    readonly ownerAllowedEntityTypes: EntityType[];
    private readonly initialSimpleConfiguration;
    fieldFormGroup: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        entityId: import("@angular/forms").FormControl<EntityId>;
        type: import("@angular/forms").FormControl<CalculatedFieldType>;
        debugSettings: import("@angular/forms").FormControl<{
            failuresEnabled: boolean;
            allEnabled: boolean;
        }>;
        configuration: import("@angular/forms").FormControl<any>;
    }>;
    additionalDebugActionConfig: {
        action: () => void;
        title: string;
    };
    readonly EntityType: typeof EntityType;
    readonly CalculatedFieldType: typeof CalculatedFieldType;
    readonly CalculatedFieldTypeTranslations: Map<CalculatedFieldType, import("@shared/models/calculated-field.models").CalculatedFieldTypeTranslate>;
    readonly fieldTypes: CalculatedFieldType[];
    constructor(store: Store<AppState>, router: Router, data: CalculatedFieldDialogData, dialogRef: MatDialogRef<CalculatedFieldDialogComponent, CalculatedField>, calculatedFieldsService: CalculatedFieldsService, destroyRef: DestroyRef, fb: FormBuilder);
    /**
     * When the user switches the CF type in the selector, swap the
     * `configuration` control's seed value so the matching per-type editor
     * gets a valid initial form. Each editor is a CVA that reads its
     * configuration on writeValue and emits the new shape on changes — we
     * just need to put the right starting object in.
     */
    private observeTypeChanges;
    private defaultConfigurationFor;
    /** Effective owner entityId — preset on the dialog data, or picked in the form. */
    get ownerEntityId(): EntityId | null;
    get isScript(): boolean;
    get fromGroupValue(): CalculatedField;
    cancel(): void;
    add(): void;
    /**
     * Test script handler — passed down to SimpleConfigurationComponent via
     * the [testScript] input so its TBEL editor's "test" button can open the
     * existing test-script dialog and have the resulting expression flow back
     * into the per-type editor.
     */
    testScript: () => Observable<string>;
    private applyDialogData;
    private observeIsLoading;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldDialogComponent, "tb-calculated-field-dialog", never, {}, {}, never, never, false, never>;
}
