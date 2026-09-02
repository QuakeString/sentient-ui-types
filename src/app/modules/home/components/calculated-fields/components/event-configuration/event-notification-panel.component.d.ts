import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export interface EventNotificationRule {
    name: string;
    condition: string;
    targetIds: string[];
    subject: string;
    message: string;
}
/**
 * Close-notification rule editor: condition, recipients (notification
 * targets), subject and message.
 *
 * The placeholder examples stay as class constants: their `${...}` syntax
 * inside a translation JSON would be parsed as ICU arguments and break
 * compilation of the whole locale (project rule).
 */
export declare class EventNotificationPanelComponent implements OnInit {
    private fb;
    private popover;
    rule: EventNotificationRule | null;
    targets: Array<{
        id: string;
        name: string;
    }>;
    buttonTitle: string;
    readonly: boolean;
    ruleApplied: import("@angular/core").OutputEmitterRef<EventNotificationRule>;
    readonly PH_SUBJECT = "Event closed: ${definitionName} on ${deviceName}";
    readonly PH_MESSAGE = "${deviceName}: ${start} -> ${end} (${durationMin} min), status ${status}";
    readonly PH_LIST = "${deviceName} ${definitionName} ${start} ${end} ${durationMin} ${status}";
    readonly PH_CONDITION = "row[\"hyd.deviation\"] == \"YES\"";
    ruleForm: import("@angular/forms").FormGroup<{
        name: import("@angular/forms").FormControl<string>;
        condition: import("@angular/forms").FormControl<string>;
        targetIds: import("@angular/forms").FormControl<string[]>;
        subject: import("@angular/forms").FormControl<string>;
        message: import("@angular/forms").FormControl<string>;
    }>;
    constructor(fb: FormBuilder, popover: TbPopoverComponent<EventNotificationPanelComponent>);
    ngOnInit(): void;
    saveRule(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventNotificationPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventNotificationPanelComponent, "tb-event-notification-panel", never, { "rule": { "alias": "rule"; "required": false; }; "targets": { "alias": "targets"; "required": false; }; "buttonTitle": { "alias": "buttonTitle"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, { "ruleApplied": "ruleApplied"; }, never, never, false, never>;
}
