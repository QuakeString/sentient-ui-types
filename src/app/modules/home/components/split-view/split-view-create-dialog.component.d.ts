import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DashboardService } from '@core/http/dashboard.service';
import { Dashboard } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export interface SplitViewCreateDialogData {
    /** Make this customer the owner after creating (a customer's dashboards list). */
    ownerCustomerId?: string;
}
/** "Create split view": a name and a description; the layout is set up right after, on the split view itself. */
export declare class SplitViewCreateDialogComponent {
    private data;
    dialogRef: MatDialogRef<SplitViewCreateDialogComponent, Dashboard>;
    private fb;
    private dashboardService;
    private translate;
    private cd;
    readonly splitIcon = "view_quilt";
    saving: boolean;
    form: import("@angular/forms").FormGroup<{
        title: import("@angular/forms").FormControl<string>;
        description: import("@angular/forms").FormControl<string>;
    }>;
    constructor(data: SplitViewCreateDialogData, dialogRef: MatDialogRef<SplitViewCreateDialogComponent, Dashboard>, fb: FormBuilder, dashboardService: DashboardService, translate: TranslateService, cd: ChangeDetectorRef);
    create(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewCreateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewCreateDialogComponent, "st-split-view-create-dialog", never, {}, {}, never, never, true, never>;
}
