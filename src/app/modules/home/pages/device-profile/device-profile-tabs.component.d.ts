import { DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { ProfileAuditSetting } from '@home/components/critical-parameters/profile-audit-setting';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { DeviceProfile, DeviceTransportType } from '@shared/models/device.models';
import * as i0 from "@angular/core";
export declare class DeviceProfileTabsComponent extends EntityTabsComponent<DeviceProfile> implements OnInit {
    protected store: Store<AppState>;
    private criticalParameterService;
    private destroyRef;
    readonly auditSetting: ProfileAuditSetting;
    deviceTransportTypes: DeviceTransportType[];
    deviceTransportTypeTranslations: Map<import("@shared/models/device.models").TransportType, string>;
    deviceTransportTypeHints: Map<import("@shared/models/device.models").TransportType, string>;
    isTransportTypeChanged: boolean;
    constructor(store: Store<AppState>, criticalParameterService: CriticalParameterService, destroyRef: DestroyRef);
    ngOnInit(): void;
    protected setEntity(entity: DeviceProfile): void;
    set isEdit(isEdit: boolean);
    get isEdit(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileTabsComponent, "tb-device-profile-tabs", never, {}, {}, never, never, false, never>;
}
