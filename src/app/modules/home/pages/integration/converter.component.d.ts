import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityComponent } from '@home/components/entity/entity.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityType } from '@shared/models/entity-type.models';
import { Converter, ConverterType } from '@shared/models/converter.models';
import * as i0 from "@angular/core";
export declare class ConverterComponent extends EntityComponent<Converter> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: Converter;
    protected entitiesTableConfigValue: EntityTableConfig<Converter>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    entityTypes: typeof EntityType;
    converterType: typeof ConverterType;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: Converter, entitiesTableConfigValue: EntityTableConfig<Converter>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    get isUplink(): boolean;
    hideDelete(): boolean;
    buildForm(entity: Converter): UntypedFormGroup;
    updateForm(entity: Converter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConverterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConverterComponent, "tb-converter", never, {}, {}, never, never, false, never>;
}
