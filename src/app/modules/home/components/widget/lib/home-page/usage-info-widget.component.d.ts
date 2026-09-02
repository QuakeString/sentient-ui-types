import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { UsageInfo } from '@shared/models/usage.models';
import { UsageInfoService } from '@core/http/usage-info.service';
import { ShortNumberPipe } from '@shared/pipe/short-number.pipe';
import * as i0 from "@angular/core";
export declare class UsageInfoWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private shortNumberPipe;
    private usageInfoService;
    ctx: WidgetContext;
    usageInfo: UsageInfo;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    toggleValue: 'entities' | 'apiCalls';
    entityItemCritical: {
        [key: string]: boolean;
    };
    apiCallItemCritical: {
        [key: string]: boolean;
    };
    hasUsageInfoAccess: boolean;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, shortNumberPipe: ShortNumberPipe, usageInfoService: UsageInfoService);
    ngOnInit(): void;
    maxValue(max: number): number | string;
    progressValue(value: number, max: number): number;
    private isItemCritical;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsageInfoWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UsageInfoWidgetComponent, "tb-usage-info-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
