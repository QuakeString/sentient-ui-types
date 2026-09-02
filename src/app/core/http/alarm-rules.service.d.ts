import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { RequestConfig } from './http-utils';
import { AlarmRuleDefinition, AlarmRuleFilterConfig } from '@shared/models/alarm-rule.models';
import * as i0 from "@angular/core";
/**
 * Wraps the `/api/alarm/rule/*` REST surface (Phase AR1e). Same JSON
 * wire shape as `CalculatedField` under the hood — the backend stores
 * alarm rules as `calculated_field` rows with `type='ALARM'`. UI
 * callers see them as a separate first-class entity.
 */
export declare class AlarmRulesService {
    private http;
    constructor(http: HttpClient);
    saveAlarmRule(rule: AlarmRuleDefinition, config?: RequestConfig): Observable<AlarmRuleDefinition>;
    getAlarmRuleById(alarmRuleId: string, config?: RequestConfig): Observable<AlarmRuleDefinition>;
    deleteAlarmRule(alarmRuleId: string, config?: RequestConfig): Observable<boolean>;
    /**
     * Tenant-wide list with optional filter (entity-type / entities / name).
     * Mirrors the calculated-fields page's CSV-coercion pattern — the
     * backend takes `entities` as a comma-separated string, not a
     * repeated query param.
     */
    getAlarmRules(pageLink: PageLink, filter?: AlarmRuleFilterConfig, config?: RequestConfig): Observable<PageData<AlarmRuleDefinition>>;
    getAlarmRulesByEntityId(entityId: EntityId, pageLink: PageLink, config?: RequestConfig): Observable<PageData<AlarmRuleDefinition>>;
    getAlarmRuleNames(pageLink: PageLink, config?: RequestConfig): Observable<PageData<string>>;
    getLatestAlarmRuleDebugEvent(alarmRuleId: string, config?: RequestConfig): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRulesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlarmRulesService>;
}
