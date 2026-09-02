import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { CalculatedField } from '@shared/models/calculated-field.models';
import { CalculatedFieldsFilter } from '@home/components/calculated-fields/calculated-fields-filter-config.component';
import * as i0 from "@angular/core";
/**
 * Slim header for the unified /calculatedFields page — hosts the
 * filter button (CalculatedFieldsFilterConfigComponent). The filter
 * value is stored on `componentsData.cfFilter` so the table-config's
 * fetch function picks it up on every reload.
 */
export declare class CalculatedFieldsTableHeaderComponent extends EntityTableHeaderComponent<CalculatedField> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    get cfFilter(): CalculatedFieldsFilter | null;
    onFilterChange(value: CalculatedFieldsFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldsTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldsTableHeaderComponent, "tb-calculated-fields-table-header", never, {}, {}, never, never, false, never>;
}
