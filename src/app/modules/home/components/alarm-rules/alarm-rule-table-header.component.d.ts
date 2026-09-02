import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { AlarmRuleDefinition, AlarmRuleFilterConfig } from '@shared/models/alarm-rule.models';
import { AlarmRulesTableConfig } from '@home/components/alarm-rules/alarm-rules-table-config';
import * as i0 from "@angular/core";
export declare class AlarmRuleTableHeaderComponent extends EntityTableHeaderComponent<AlarmRuleDefinition> {
    protected store: Store<AppState>;
    get alarmRuleTableConfig(): AlarmRulesTableConfig;
    constructor(store: Store<AppState>);
    alarmRuleFilterChanged(alarmRuleFilterConfig: AlarmRuleFilterConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRuleTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRuleTableHeaderComponent, "tb-alarm-rule-table-header", never, {}, {}, never, never, false, never>;
}
