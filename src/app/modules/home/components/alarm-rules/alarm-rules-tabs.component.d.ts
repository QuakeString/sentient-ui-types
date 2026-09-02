import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { CalculatedFieldEventBody, DebugEventType, EventType } from '@shared/models/event.models';
import { CalculatedField } from '@shared/models/calculated-field.models';
import * as i0 from "@angular/core";
/**
 * Tabs strip rendered above the alarm-rules detail-drawer body
 * (TB pattern). Shows a single Events tab listing
 * DEBUG_CALCULATED_FIELD events scoped to the selected alarm rule.
 */
export declare class AlarmRulesTabsComponent extends EntityTabsComponent<CalculatedField> {
    readonly DebugEventType: typeof DebugEventType;
    readonly EventType: typeof EventType;
    constructor();
    get debugActionDisabled(): boolean;
    onDebugEventSelected(event: CalculatedFieldEventBody): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRulesTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmRulesTabsComponent, "tb-alarm-rules-tabs", never, {}, {}, never, never, false, never>;
}
