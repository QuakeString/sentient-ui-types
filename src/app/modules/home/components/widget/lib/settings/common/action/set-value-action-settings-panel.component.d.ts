import { DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { SetValueAction, SetValueSettings, ValueToDataType } from '@shared/models/action-widget-settings.models';
import { TargetDevice, widgetType } from '@shared/models/widget.models';
import { AttributeScope, DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetService } from '@core/http/widget.service';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare class SetValueActionSettingsPanelComponent extends PageComponent implements OnInit {
    private fb;
    private widgetService;
    protected store: Store<AppState>;
    private destroyRef;
    panelTitle: string;
    valueType: ValueType;
    setValueSettings: SetValueSettings;
    aliasController: IAliasController;
    targetDevice: TargetDevice;
    widgetType: widgetType;
    popover: TbPopoverComponent<SetValueActionSettingsPanelComponent>;
    setValueSettingsApplied: EventEmitter<SetValueSettings>;
    setValueAction: typeof SetValueAction;
    setValueActions: SetValueAction[];
    setValueActionTranslationsMap: Map<SetValueAction, string>;
    telemetryTypeTranslationsMap: Map<import("@shared/models/telemetry/telemetry.models").TelemetryType, string>;
    attributeScopes: AttributeScope[];
    dataKeyType: typeof DataKeyType;
    valueToDataType: typeof ValueToDataType;
    functionScopeVariables: string[];
    ValueType: typeof ValueType;
    setValueSettingsFormGroup: UntypedFormGroup;
    /** Index of the open action row (one at a time, like the gateway key list). */
    expandedIndex: number;
    constructor(fb: UntypedFormBuilder, widgetService: WidgetService, store: Store<AppState>, destroyRef: DestroyRef);
    get actionsFormArray(): UntypedFormArray;
    get actionGroups(): UntypedFormGroup[];
    ngOnInit(): void;
    cancel(): void;
    addAction(): void;
    removeAction(index: number): void;
    dropAction(event: CdkDragDrop<UntypedFormGroup[]>): void;
    /** Short text for a row header column. */
    targetText(group: UntypedFormGroup): string;
    valueText(group: UntypedFormGroup): string;
    applySetValueSettings(): void;
    /** A new action starts from action 1's value settings, as an attribute write. */
    private newStep;
    private createStepGroup;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetValueActionSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SetValueActionSettingsPanelComponent, "tb-set-value-action-settings-panel", never, { "panelTitle": { "alias": "panelTitle"; "required": false; }; "valueType": { "alias": "valueType"; "required": false; }; "setValueSettings": { "alias": "setValueSettings"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "targetDevice": { "alias": "targetDevice"; "required": false; }; "widgetType": { "alias": "widgetType"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "setValueSettingsApplied": "setValueSettingsApplied"; }, never, never, false, never>;
}
