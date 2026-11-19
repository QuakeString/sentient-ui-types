import { UntypedFormGroup } from '@angular/forms';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { EntityId } from '@shared/models/id/entity-id';
/** Name of the profile form's control; sent with the profile and saved by the server with it. */
export declare const LOG_MANUAL_CHANGES_CONTROL = "logManualChanges";
/**
 * A profile's "Log every manual change" for its tabs: edited in the Audit
 * settings tab (edit mode, saved with the profile's ✓), shown read-only in
 * the Audit logs tab header (view mode).
 */
export declare class ProfileAuditSetting {
    private service;
    /** The saved value; null until loaded. */
    readonly saved: import("@angular/core").WritableSignal<boolean>;
    private form;
    private loadedFor;
    constructor(service: CriticalParameterService);
    attach(form: UntypedFormGroup): void;
    /** After the profile was loaded or saved. */
    load(id: EntityId | undefined): void;
    /** Leaving edit mode without saving: back to the saved value. */
    reset(): void;
}
