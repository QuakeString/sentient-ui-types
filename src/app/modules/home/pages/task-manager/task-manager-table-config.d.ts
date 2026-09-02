import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { Job } from '@shared/models/job.model';
import { JobService } from '@core/http/job.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { TimePageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { TbPopoverService } from '@shared/components/popover.service';
import { Renderer2, ViewContainerRef } from '@angular/core';
export declare class TaskManagerTableConfig extends EntityTableConfig<Job, TimePageLink> {
    private jobService;
    private translate;
    private datePipe;
    private popoverService;
    private renderer;
    private viewContainerRef;
    constructor(jobService: JobService, translate: TranslateService, datePipe: DatePipe, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    fetchJobs(pageLink: TimePageLink): Observable<PageData<Job>>;
    /** Anchor the popover to the actual button element so it positions
     * relative to the click target (matches TB-PE row-action UX). */
    private resolveTrigger;
    openParameters($event: MouseEvent, entity: Job): void;
    openInfo($event: MouseEvent, entity: Job): void;
}
