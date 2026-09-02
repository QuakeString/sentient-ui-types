import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { EntityService } from '@core/http/entity.service';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DeviceService } from '@core/http/device.service';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import * as i0 from "@angular/core";
export type ScriptArgumentType = 'timeseries' | 'timeseriesSampled' | 'latest' | 'attributes' | 'batches' | 'fleetBatches';
export declare const ScriptArgumentTypeTranslations: Map<ScriptArgumentType, string>;
export interface ScriptArgumentRow {
    name: string;
    type: ScriptArgumentType;
    entityType?: string;
    entityId?: string;
    entityName?: string;
    key?: string;
    keys?: string[];
    definitionId?: string;
    definitionName?: string;
    intervalMs?: number;
}
/**
 * Script argument editor: a named, typed data binding (CF-arguments
 * pattern) — telemetry, attributes and batch data as peers. Resolved
 * server-side before the script runs; the script consumes the name as a
 * plain variable.
 */
export declare class ScriptArgumentPanelComponent implements OnInit {
    private fb;
    private entityService;
    private deviceService;
    private calculatedFieldsService;
    private cd;
    private popover;
    argument: ScriptArgumentRow | null;
    takenNames: string[];
    definitions: Array<{
        id: string;
        name: string;
    }>;
    buttonTitle: string;
    readonly: boolean;
    argumentApplied: import("@angular/core").OutputEmitterRef<ScriptArgumentRow>;
    readonly EntityTypeRef: typeof EntityType;
    readonly entityTypeTranslations: Map<EntityType | import("@shared/models/entity-type.models").AliasEntityType, import("@shared/models/entity-type.models").EntityTypeTranslation>;
    readonly dataKeyTypes: typeof DataKeyType;
    readonly ScriptArgumentTypeTranslations: Map<ScriptArgumentType, string>;
    readonly typeOptions: ScriptArgumentType[];
    argumentForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        type: import("@angular/forms").FormControl<"attributes" | "timeseries" | "latest" | "batches" | "timeseriesSampled" | "fleetBatches">;
        entityType: import("@angular/forms").FormControl<EntityType>;
        entity: import("@angular/forms").FormControl<EntityId>;
        key: import("@angular/forms").FormControl<string>;
        keys: import("@angular/forms").FormControl<string[]>;
        intervalSec: import("@angular/forms").FormControl<number>;
        definitionName: import("@angular/forms").FormControl<string>;
    }>;
    constructor(fb: FormBuilder, entityService: EntityService, deviceService: DeviceService, calculatedFieldsService: CalculatedFieldsService, cd: ChangeDetectorRef, popover: TbPopoverComponent<ScriptArgumentPanelComponent>);
    ngOnInit(): void;
    /** Batch rows are stored per device/asset; views apply to telemetry reads. */
    get entityTypeOptions(): EntityType[];
    get chosenEntityType(): EntityType;
    get needsDevice(): boolean;
    get needsDefinition(): boolean;
    get needsKey(): boolean;
    get needsKeys(): boolean;
    get deviceEntityId(): EntityId | null;
    private applyTypeValidators;
    private uniqueNameValidator;
    /** Definitions offered by the dropdown — scoped to the chosen entity when
     *  one is set (device: own + its profile's; asset: own), since an EVENT
     *  definition only produces batches for entities it is attached to. */
    definitionChoices: Array<{
        id: string;
        name: string;
    }>;
    private refreshDefinitionChoices;
    /** The autocomplete's form value is a bare EntityId; the emitted entity
     *  carries the display name the arguments table shows. */
    private selectedEntityName;
    onEntityChanged(entity: any): void;
    /** A typed definition must be one of the offered choices. */
    private definitionKnownValidator;
    /** Definition suggestions (searchable) for the definition autocomplete. */
    fetchDefinitionOptions(searchText?: string): Observable<string[]>;
    get definitionNotFoundText(): string;
    /** Keys of the chosen device for the key autocomplete. */
    fetchKeyOptions(searchText?: string): Observable<string[]>;
    saveArgument(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScriptArgumentPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScriptArgumentPanelComponent, "st-script-argument-panel", never, { "argument": { "alias": "argument"; "required": false; }; "takenNames": { "alias": "takenNames"; "required": false; }; "definitions": { "alias": "definitions"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "argumentApplied": "argumentApplied"; }, never, never, false, never>;
}
