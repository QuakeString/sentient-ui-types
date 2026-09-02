import { AfterViewInit, ChangeDetectorRef, ElementRef, Injector, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { JobService } from '@core/http/job.service';
import { CalculatedField } from '@shared/models/calculated-field.models';
import { Job } from '@shared/models/job.model';
import { Timewindow } from '@shared/models/time/time.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { TbPopoverService } from '@shared/components/popover.service';
import * as i0 from "@angular/core";
/**
 * Reprocess panel — drives the four UI states from the screenshots:
 *   - **idle**       : timewindow picker + Cancel/Reprocess footer
 *   - **inProgress** : indeterminate progress bar + Details/Cancel footer
 *   - **completed**  : success icon + Details/Finish footer
 *   - **failed**     : warning icon + Details/Reprocess footer
 *
 * State is driven by the polled `Job` row.  Cancellation is handled by
 * `POST /api/job/{id}/cancel` (the API stamps cancellationTs + flips
 * status; we stop polling once we observe CANCELLED).
 */
type ReprocessState = 'idle' | 'inProgress' | 'completed' | 'failed';
export declare class CalculatedFieldReprocessingPanelComponent implements AfterViewInit, OnDestroy {
    private store;
    private calculatedFieldsService;
    private jobService;
    private translate;
    private popoverService;
    private injector;
    private viewContainerRef;
    private renderer;
    private cd;
    /** Set by `popoverService.displayPopover` via `tbComponentContext`. */
    calculatedField: CalculatedField;
    /** Backref so we can `popoverComponent.hide()` ourselves on close. */
    popoverComponent?: TbPopoverComponent;
    reprocessTimewindow: Timewindow;
    state: ReprocessState;
    rangeError: boolean;
    /** Currently-tracked job — null in `idle` only. */
    job?: Job;
    panelHost: ViewContainerRef;
    detailsAnchor?: ElementRef;
    private panelRef?;
    private pollSub?;
    private detailsPopover?;
    constructor(store: Store<AppState>, calculatedFieldsService: CalculatedFieldsService, jobService: JobService, translate: TranslateService, popoverService: TbPopoverService, injector: Injector, viewContainerRef: ViewContainerRef, renderer: Renderer2, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    cancel(): void;
    /** Idle → InProgress: kick off a reprocess job. */
    reprocess(): void;
    /** InProgress → cancel the job server-side; polling will observe CANCELLED. */
    cancelReprocess(): void;
    /** Failed-state Reprocess button: re-run the failed targets only. */
    retryFailedTargets(): void;
    /** Completed state — close the panel. */
    finish(): void;
    /** Open the Task Info popover anchored to the Details link. */
    toggleDetails(): void;
    /** Best-effort progress percentage for the bar. */
    get progressPct(): number;
    get isFanOutKnown(): boolean;
    get hasFailures(): boolean;
    private attachToJob;
    private resolveRange;
    private toastError;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldReprocessingPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldReprocessingPanelComponent, "tb-calculated-field-reprocessing-panel", never, { "calculatedField": { "alias": "calculatedField"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
export { CalculatedFieldReprocessingPanelComponent as CalculatedFieldReprocessDialogComponent };
