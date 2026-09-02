import { ChangeDetectorRef, DestroyRef, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { EntityId } from '@shared/models/id/entity-id';
import { CalculatedFieldEventConfiguration } from '@shared/models/calculated-field.models';
import { StBatchAnalysisConfig } from '@home/pages/reporting/models/st-chart.models';
import { EventNotificationRule } from './event-notification-panel.component';
import { EntityService } from '@core/http/entity.service';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { NotificationService } from '@core/http/notification.service';
import * as i0 from "@angular/core";
/**
 * EVENT calculated-field configuration.
 *
 * The definition itself — when a batch opens/closes, phases, metrics,
 * deviation checks, the period grid and shifts — is authored with the same
 * batch form the report builder uses (`st-batch-config`, definition mode).
 * This component adds the materialisation schedule and the close
 * notifications, translating the form's shape into the operator config the
 * backend runs while keeping the form's own shape alongside
 * (`event.uiConfig`) so editing round-trips losslessly.
 */
export declare class EventConfigurationComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    private cd;
    private destroyRef;
    private popoverService;
    private viewContainerRef;
    private renderer;
    private entityService;
    private deviceProfileService;
    private notificationService;
    entityId: EntityId;
    tenantId: string;
    entityName: string;
    ownerId: EntityId;
    isEditValue: boolean;
    eventForm: import("@angular/forms").FormGroup<{
        uiConfig: import("@angular/forms").FormControl<StBatchAnalysisConfig>;
        schedule: import("@angular/forms").FormGroup<{
            intervalSec: import("@angular/forms").FormControl<number>;
            lookbackSec: import("@angular/forms").FormControl<number>;
            backfillSec: import("@angular/forms").FormControl<number>;
            retentionSec: import("@angular/forms").FormControl<number>;
        }>;
    }>;
    notifications: EventNotificationRule[];
    notificationColumns: string[];
    availableKeys: string[];
    availableTargets: Array<{
        id: string;
        name: string;
    }>;
    disabled: boolean;
    private popoverComponent;
    private propagateChange;
    /** Suppresses emission while a written value settles: nested value
     *  accessors (st-batch-config, tb-time-unit-input) re-propagate
     *  synchronously during writeValue, which must not count as a user change. */
    private writing;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef, popoverService: TbPopoverService, viewContainerRef: ViewContainerRef, renderer: Renderer2, entityService: EntityService, deviceProfileService: DeviceProfileService, notificationService: NotificationService);
    ngOnInit(): void;
    writeValue(config: Partial<CalculatedFieldEventConfiguration> | null): void;
    registerOnChange(fn: (config: CalculatedFieldEventConfiguration) => void): void;
    registerOnTouched(_fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    private emit;
    manageNotification($event: Event, matButton: MatIconButton, rule?: EventNotificationRule | null): void;
    deleteNotification($event: Event, rule: EventNotificationRule): void;
    recipientsText(rule: EventNotificationRule): string;
    private fetchNotificationTargets;
    /** Telemetry keys the predicates/metrics can reference: the owner device's
     *  own keys, or — for a profile-bound definition — the union across the
     *  profile's devices. */
    /** The owning DEVICE when the CF is device-bound, so the key chips list can
     *  suggest that device's keys. Profile-bound definitions have no single
     *  device: null (the chips list then takes free entry). Returns an existing
     *  reference — never a fresh object per change detection. */
    get keyEntityId(): EntityId | null;
    private fetchAvailableKeys;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventConfigurationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventConfigurationComponent, "tb-event-configuration", never, { "entityId": { "alias": "entityId"; "required": true; }; "tenantId": { "alias": "tenantId"; "required": true; }; "entityName": { "alias": "entityName"; "required": false; }; "ownerId": { "alias": "ownerId"; "required": false; }; "isEditValue": { "alias": "isEditValue"; "required": false; }; }, {}, never, never, false, never>;
}
