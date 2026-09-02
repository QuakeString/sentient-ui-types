import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { EntityType } from '@shared/models/entity-type.models';
import { AssetInfo } from '@shared/models/asset.models';
import { AssetProfileId } from '@shared/models/id/asset-profile-id';
import * as i0 from "@angular/core";
export declare class AssetTableHeaderComponent extends EntityTableHeaderComponent<AssetInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    assetProfileChanged(assetProfileId: AssetProfileId): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetTableHeaderComponent, "tb-asset-table-header", never, {}, {}, never, never, false, never>;
}
