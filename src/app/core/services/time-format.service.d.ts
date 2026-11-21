import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { AttributeService } from '@core/http/attribute.service';
import { TimeFormat, TimeFormatSetting } from '@shared/models/time-format.models';
import * as i0 from "@angular/core";
/**
 * The clock (24-hour or 12-hour AM/PM) for times in the app: the user's own
 * setting (Account › Profile), else the tenant default (Settings › Home),
 * else 24-hour.
 */
export declare class TimeFormatService {
    private store;
    private attributeService;
    /** The user's own setting; 'auto' when none. */
    readonly userSetting: import("@angular/core").WritableSignal<TimeFormatSetting>;
    /** The tenant default; 'auto' when none. */
    readonly tenantDefault: import("@angular/core").WritableSignal<TimeFormatSetting>;
    /** The clock in use. */
    readonly timeFormat: import("@angular/core").Signal<TimeFormat>;
    readonly is12h: import("@angular/core").Signal<boolean>;
    private tenantId;
    constructor(store: Store<AppState>, attributeService: AttributeService);
    setUserSetting(setting: TimeFormatSetting): void;
    /** The tenant default, read from the tenant (users who cannot read it get 'auto'). */
    loadTenantDefault(): Observable<TimeFormatSetting>;
    /** Saves the tenant default ('auto' removes it). Tenant administrators only. */
    saveTenantDefault(setting: TimeFormatSetting): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeFormatService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
