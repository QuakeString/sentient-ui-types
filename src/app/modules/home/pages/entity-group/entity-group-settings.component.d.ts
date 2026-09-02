import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityGroup, EntityGroupSettings } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export declare class EntityGroupSettingsComponent implements OnInit, OnChanges {
    private fb;
    entityGroup: EntityGroup;
    isEdit: boolean;
    configChanged: EventEmitter<EntityGroupSettings>;
    settingsForm: UntypedFormGroup;
    pageSizeOptions: number[];
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private buildForm;
    private updateForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupSettingsComponent, "tb-entity-group-settings", never, { "entityGroup": { "alias": "entityGroup"; "required": false; }; "isEdit": { "alias": "isEdit"; "required": false; }; }, { "configChanged": "configChanged"; }, never, never, false, never>;
}
