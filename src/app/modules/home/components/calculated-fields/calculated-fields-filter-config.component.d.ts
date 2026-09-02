import { DestroyRef, ElementRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { CalculatedFieldType } from '@shared/models/calculated-field.models';
import { EntityType } from '@shared/models/entity-type.models';
import { StringItemsOption } from '@shared/components/string-items-list.component';
import * as i0 from "@angular/core";
export interface CalculatedFieldsFilter {
    types: CalculatedFieldType[];
    entityType: EntityType | null;
    entities: string[];
}
export declare class CalculatedFieldsFilterConfigComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private fb;
    private translate;
    private overlay;
    private nativeElement;
    private viewContainerRef;
    private destroyRef;
    cfFilterPanel: TemplateRef<any>;
    disabled: boolean;
    readonly typeOptions: StringItemsOption[];
    readonly CalculatedFieldTypeTranslations: Map<CalculatedFieldType, import("@shared/models/calculated-field.models").CalculatedFieldTypeTranslate>;
    readonly listEntityTypes: EntityType[];
    readonly entityTypeTranslations: Map<EntityType | import("@shared/models/entity-type.models").AliasEntityType, import("@shared/models/entity-type.models").EntityTypeTranslation>;
    buttonDisplayValue: any;
    cfFilterForm: UntypedFormGroup;
    cfFilterOverlayRef: OverlayRef;
    private currentFilter;
    private initialFilter;
    private resizeWindows;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, overlay: Overlay, nativeElement: ElementRef, viewContainerRef: ViewContainerRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(filter?: CalculatedFieldsFilter | null): void;
    toggleCfFilterPanel($event: Event): void;
    cancel(): void;
    update(): void;
    reset(): void;
    private updateButtonDisplayValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldsFilterConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldsFilterConfigComponent, "tb-calculated-fields-filter-config", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
