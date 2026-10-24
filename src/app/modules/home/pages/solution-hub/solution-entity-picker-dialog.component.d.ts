import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { RuleChainService } from '@core/http/rule-chain.service';
import { AnalyticsService } from '@core/http/analytics.service';
import * as i0 from "@angular/core";
export interface SolutionEntityPickerDialogData {
    draftId: string;
    /** `ruleChains` or `analyticsPipelines`. */
    section: string;
    /** Names already in the section (shown as added). */
    taken: string[];
}
interface PickerRow {
    id: string;
    name: string;
    detail: string;
}
/** "Add from this tenant" in the Solution creator: one of the tenant's rule chains or pipelines as a new entry. */
export declare class SolutionEntityPickerDialogComponent extends DialogComponent<SolutionEntityPickerDialogComponent, any> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionEntityPickerDialogComponent, any>;
    data: SolutionEntityPickerDialogData;
    private solutionService;
    private ruleChainService;
    private analyticsService;
    rows: PickerRow[];
    loading: boolean;
    adding: string;
    search: string;
    error: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionEntityPickerDialogComponent, any>, data: SolutionEntityPickerDialogData, solutionService: SolutionService, ruleChainService: RuleChainService, analyticsService: AnalyticsService);
    get sectionLabel(): string;
    ngOnInit(): void;
    private load;
    get shown(): PickerRow[];
    isTaken(r: PickerRow): boolean;
    pick(r: PickerRow): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionEntityPickerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionEntityPickerDialogComponent, "st-solution-entity-picker-dialog", never, {}, {}, never, never, false, never>;
}
export {};
