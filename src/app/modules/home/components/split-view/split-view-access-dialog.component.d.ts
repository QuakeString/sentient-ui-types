import { ChangeDetectorRef, Injector } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { DashboardService } from '@core/http/dashboard.service';
import { EntityGroupService } from '@core/http/entity-group.service';
import { EntityGroup } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export interface SplitViewAccessDialogData {
    splitViewTitle: string;
    /** The customer the split view now belongs to, when its owner was just changed to one. */
    ownerCustomerId: string | null;
    /** The groups the split view was just added to. */
    addedGroups: EntityGroup[];
    dashboards: {
        id: string;
        title: string;
    }[];
}
/**
 * After a split view was given to a customer, or put in a group (a public
 * group makes it public): offers to give its pane dashboards the same access,
 * since each pane shows only what the viewer may open.
 */
export declare class SplitViewAccessDialogComponent {
    data: SplitViewAccessDialogData;
    dialogRef: MatDialogRef<SplitViewAccessDialogComponent, boolean>;
    private dashboardService;
    private entityGroupService;
    private store;
    private translate;
    private cd;
    readonly splitIcon = "view_quilt";
    selected: Set<string>;
    saving: boolean;
    constructor(data: SplitViewAccessDialogData, dialogRef: MatDialogRef<SplitViewAccessDialogComponent, boolean>, dashboardService: DashboardService, entityGroupService: EntityGroupService, store: Store<AppState>, translate: TranslateService, cd: ChangeDetectorRef);
    get groupNames(): string;
    toggle(id: string, checked: boolean): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewAccessDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewAccessDialogComponent, "st-split-view-access-dialog", never, {}, {}, never, never, true, never>;
}
/**
 * Called after the owner/groups of a split view changed. Works out what access
 * was just given and, when some pane dashboards lack it, opens the dialog.
 */
export declare const offerSplitViewPaneAccess: (injector: Injector, splitViewId: string, splitViewTitle: string, previousOwnerId: string | null, previousGroups: EntityGroup[]) => Observable<boolean>;
