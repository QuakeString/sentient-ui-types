import { OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Job } from '@shared/models/job.model';
import { ContentType } from '@shared/models/constants';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
/**
 * Read-only "Task parameters" popover — TB-PE Task Manager row action.
 * Shows the job's `configuration` JSON in an Ace-backed read-only
 * editor for syntax highlighting.  Anchored to the row button via
 * `TbPopoverService.displayPopover` (matches the in-row Calculated
 * field reprocessing dialog pattern).
 */
export declare class TaskManagerParametersPanelComponent implements OnInit {
    job: Job;
    /** Injected by TbPopoverService so the close button can dismiss
     * its own popover frame (same pattern as the reprocess dialog). */
    popoverComponent?: TbPopoverComponent;
    readonly contentType: typeof ContentType;
    /** Backing control for tb-json-content's ControlValueAccessor —
     * set with the pretty-printed JSON in ngOnInit. */
    readonly jsonControl: FormControl<string>;
    ngOnInit(): void;
    private canonicalOrder;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskManagerParametersPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskManagerParametersPanelComponent, "tb-task-manager-parameters-panel", never, { "job": { "alias": "job"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
