import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UserSettingsService } from '@core/http/user-settings.service';
import { WidgetContext } from '@home/models/widget-component.models';
import { MatDialog } from '@angular/material/dialog';
import { GettingStarted } from '@shared/models/user-settings.models';
import { CdkStep, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { Authority } from '@shared/models/authority.enum';
import { UsageInfoService } from '@core/http/usage-info.service';
import * as i0 from "@angular/core";
export declare class GettingStartedWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private userSettingsService;
    private usageInfoService;
    private dialog;
    matStepper: MatStepper;
    ctx: WidgetContext;
    authority: typeof Authority;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    gettingStarted: GettingStarted;
    allCompleted: boolean;
    /**
     * Steps already done in the tenant, whatever the user clicked: devices
     * exist, data has arrived, a dashboard exists, ... (tenant admin only).
     * Without this the stepper stayed on "Create device" for a tenant that
     * already had devices, because progress was only the steps the user had
     * clicked through.
     */
    autoCompleted: boolean[];
    baseUrl: string;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, userSettingsService: UserSettingsService, usageInfoService: UsageInfoService, dialog: MatDialog);
    ngOnInit(): void;
    /** Done-ness of the six tenant-admin steps, from the tenant's usage counts. */
    private tenantStepsDone;
    /**
     * Open the step the user left off at, or, when that step is already done
     * in the tenant, the first step that is not done yet.
     */
    private selectStartStep;
    ngOnDestroy(): void;
    isSelected(step: CdkStep): boolean;
    gettingStartedCompleted(): void;
    updateSelectedIndex(event: StepperSelectionEvent): void;
    updateCompletedSteps(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GettingStartedWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GettingStartedWidgetComponent, "tb-getting-started-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
