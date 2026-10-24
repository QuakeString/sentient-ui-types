import { ChangeDetectorRef, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { NotificationCountService } from '@home/components/notification/notification-count.service';
import * as i0 from "@angular/core";
export declare class NotificationBellComponent implements OnDestroy {
    private notificationCount;
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private readonly detach;
    private resume;
    count$: import("rxjs").Observable<string | number>;
    constructor(notificationCount: NotificationCountService, cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnDestroy(): void;
    showNotification($event: Event, createVersionButton: MatButton): void;
    private resumeCount;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationBellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationBellComponent, "tb-notification-bell", never, {}, {}, never, never, false, never>;
}
