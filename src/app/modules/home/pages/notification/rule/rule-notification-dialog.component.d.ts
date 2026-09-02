import { AlarmAction, AlarmAssignmentAction, ComponentLifecycleEvent, DeviceEvent, NotificationRule, TriggerType } from '@shared/models/notification.models';
import { OnDestroy } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '@core/http/notification.service';
import { AlarmRulesService } from '@core/http/alarm-rules.service';
import { StringItemsOption } from '@shared/components/string-items-list.component';
import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { TranslateService } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';
import { ApiFeature, ApiUsageStateValue } from '@shared/models/api-usage.models';
import { EdgeConnectionEvent } from '@shared/models/edge.models';
import * as i0 from "@angular/core";
export interface RuleNotificationDialogData {
    rule?: NotificationRule;
    isAdd?: boolean;
    isCopy?: boolean;
}
export declare class RuleNotificationDialogComponent extends DialogComponent<RuleNotificationDialogComponent, NotificationRule> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<RuleNotificationDialogComponent, NotificationRule>;
    data: RuleNotificationDialogData;
    private breakpointObserver;
    private fb;
    translate: TranslateService;
    private notificationService;
    private alarmRulesService;
    private dialog;
    addNotificationRule: MatStepper;
    stepperOrientation: Observable<StepperOrientation>;
    ruleNotificationForm: FormGroup;
    alarmTemplateForm: FormGroup;
    deviceInactivityTemplateForm: FormGroup;
    entityActionTemplateForm: FormGroup;
    alarmCommentTemplateForm: FormGroup;
    alarmAssignmentTemplateForm: FormGroup;
    ruleEngineEventsTemplateForm: FormGroup;
    entitiesLimitTemplateForm: FormGroup;
    apiUsageLimitTemplateForm: FormGroup;
    newPlatformVersionTemplateForm: FormGroup;
    rateLimitsTemplateForm: FormGroup;
    edgeCommunicationFailureTemplateForm: FormGroup;
    edgeConnectionTemplateForm: FormGroup;
    taskProcessingFailureTemplateForm: FormGroup;
    resourceUsageShortageTemplateForm: FormGroup;
    limitBreachTemplateForm: FormGroup;
    triggerType: typeof TriggerType;
    triggerTypes: TriggerType[];
    triggerTypeTranslationMap: Map<TriggerType, string>;
    alarmSearchStatuses: AlarmSearchStatus[];
    alarmSearchStatusTranslationMap: Map<AlarmSearchStatus, string>;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    alarmSeverities: Array<AlarmSeverity>;
    alarmActions: AlarmAction[];
    alarmActionTranslationMap: Map<AlarmAction, string>;
    alarmAssignmentActions: AlarmAssignmentAction[];
    alarmAssignmentActionTranslationMap: Map<AlarmAssignmentAction, string>;
    componentLifecycleEvents: ComponentLifecycleEvent[];
    componentLifecycleEventTranslationMap: Map<ComponentLifecycleEvent, string>;
    deviceEvents: DeviceEvent[];
    deviceEventTranslationMap: Map<DeviceEvent, string>;
    apiUsageStateValues: ApiUsageStateValue[];
    apiUsageStateValueTranslationMap: Map<ApiUsageStateValue, string>;
    apiFeatures: ApiFeature[];
    apiFeatureTranslationMap: Map<ApiFeature, string>;
    edgeConnectionEvents: EdgeConnectionEvent[];
    edgeConnectionEventTranslationMap: Map<EdgeConnectionEvent, string>;
    limitedApis: StringItemsOption[];
    entityType: typeof EntityType;
    isAdd: boolean;
    allowEntityTypeForEntitiesLimit: EntityType[];
    selectedIndex: number;
    dialogTitle: string;
    private destroy$;
    private readonly ruleNotification;
    private triggerTypeFormsMap;
    private authState;
    private authUser;
    private _allowEntityTypeForEntityAction;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RuleNotificationDialogComponent, NotificationRule>, data: RuleNotificationDialogData, breakpointObserver: BreakpointObserver, fb: FormBuilder, translate: TranslateService, notificationService: NotificationService, alarmRulesService: AlarmRulesService, dialog: MatDialog);
    ngOnDestroy(): void;
    changeStep($event: StepperSelectionEvent): void;
    backStep(): void;
    nextStep(): void;
    nextStepLabel(): string;
    private get maxStepperIndex();
    private add;
    private allValid;
    cancel(): void;
    createTarget($event: Event, button: MatButton): void;
    countRecipientsChainConfig(): number;
    formatLabel(value: number): string;
    private isSysAdmin;
    private allowTriggerTypes;
    get allowEntityTypeForEntityAction(): EntityType[];
    /**
     * Autocomplete source for the "Alarm types" chip input in the
     * alarm-trigger settings step. Pulls names of configured alarm
     * rules from `/api/alarm/rules/names` — each rule's name becomes
     * the `alarm.type` value when that rule fires, so this matches
     * 1-to-1 with what the trigger filter actually checks against
     * (`matches_alarm_filter` in `alarm_processor.rs`).
     *
     * `searchText` is what the user has typed so far; the backend
     * does a substring match. Arrow function so `this` binds to the
     * component when passed as `[fetchOptionsFn]` input.
     */
    fetchAlarmTypeOptions: (searchText?: string) => Observable<Array<StringItemsOption>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RuleNotificationDialogComponent, "tb-rule-notification-dialog", never, {}, {}, never, never, false, never>;
}
