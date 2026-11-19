import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { ProfileAuditSetting } from '@home/components/critical-parameters/profile-audit-setting';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { AssetProfile } from '@shared/models/asset.models';
import * as i0 from "@angular/core";
export declare class AssetProfileTabsComponent extends EntityTabsComponent<AssetProfile> {
    protected store: Store<AppState>;
    private criticalParameterService;
    readonly auditSetting: ProfileAuditSetting;
    constructor(store: Store<AppState>, criticalParameterService: CriticalParameterService);
    ngOnInit(): void;
    protected setEntity(entity: AssetProfile): void;
    set isEdit(isEdit: boolean);
    get isEdit(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetProfileTabsComponent, "tb-asset-profile-tabs", never, {}, {}, never, never, false, never>;
}
