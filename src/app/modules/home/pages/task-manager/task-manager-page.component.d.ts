import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { JobService } from '@core/http/job.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { TbPopoverService } from '@shared/components/popover.service';
import { TaskManagerTableConfig } from './task-manager-table-config';
import * as i0 from "@angular/core";
export declare class TaskManagerPageComponent implements OnInit {
    private jobService;
    private translate;
    private datePipe;
    private popoverService;
    private renderer;
    private viewContainerRef;
    taskManagerTableConfig: TaskManagerTableConfig;
    constructor(jobService: JobService, translate: TranslateService, datePipe: DatePipe, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaskManagerPageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaskManagerPageComponent, "tb-task-manager-page", never, {}, {}, never, never, false, never>;
}
