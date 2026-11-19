import * as i0 from "@angular/core";
/**
 * The profile's "Log every manual change", shown read-only: in the header of
 * the Audit logs tab of a profile (view mode), and of a device's or asset's
 * Critical parameters tab. It is changed in the profile's Audit settings tab.
 */
export declare class AuditLogSettingSwitchComponent {
    readonly value: import("@angular/core").InputSignal<boolean>;
    readonly profileName: import("@angular/core").InputSignal<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogSettingSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuditLogSettingSwitchComponent, "st-audit-log-setting-switch", never, { "value": { "alias": "value"; "required": false; "isSignal": true; }; "profileName": { "alias": "profileName"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
