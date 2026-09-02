import { Job, TaskResult } from '@shared/models/job.model';
import * as i0 from "@angular/core";
/**
 * Compact "Task info" popover anchored to the reprocess dialog's
 * Details link.  Shows the timing breakdown + the (up-to-100) failed
 * task entries with entity chips.  Mirrors the screenshot layout from
 * TB-PE 4.3.
 */
export declare class CalculatedFieldReprocessTaskInfoComponent {
    job: Job;
    get timeTakenMs(): number | null;
    get totalEntities(): number;
    get successful(): number;
    get failed(): number;
    /** Up to 100 failed tasks with entity info. */
    get failedTasks(): TaskResult[];
    trackByKey(_i: number, t: TaskResult): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldReprocessTaskInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldReprocessTaskInfoComponent, "tb-calculated-field-reprocess-task-info", never, { "job": { "alias": "job"; "required": false; }; }, {}, never, never, false, never>;
}
