import { ChangeDetectorRef, DestroyRef, ElementRef, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Subject } from 'rxjs';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardInfo } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface SplitViewPickedDashboard {
    id: string;
    title: string;
}
/**
 * The compact dashboard picker of a pane header: a button with the
 * dashboard's title that opens a searchable list of the dashboards the
 * viewer can open. Same source and scope rules as the dashboard select of
 * the dashboard toolbar, split views left out.
 */
export declare class SplitViewDashboardPickerComponent {
    private dashboardService;
    private store;
    private cd;
    dashboardId: string | null;
    dashboardTitle: string | null;
    label: string;
    picked: EventEmitter<SplitViewPickedDashboard>;
    searchInput: ElementRef<HTMLInputElement>;
    dashboards: DashboardInfo[];
    loading: boolean;
    readonly search$: Subject<string>;
    constructor(dashboardService: DashboardService, store: Store<AppState>, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    opened(): void;
    onSearchKeydown(event: KeyboardEvent): void;
    pick(dashboard: DashboardInfo): void;
    clear(): void;
    private fetch;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewDashboardPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewDashboardPickerComponent, "st-split-view-dashboard-picker", never, { "dashboardId": { "alias": "dashboardId"; "required": false; }; "dashboardTitle": { "alias": "dashboardTitle"; "required": false; }; "label": { "alias": "label"; "required": false; }; }, { "picked": "picked"; }, never, never, true, never>;
}
