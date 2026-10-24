import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { EntityId } from '@shared/models/id/entity-id';
import { SolutionHubKind, SolutionItemSummary } from '@shared/models/solution.models';
import { SolutionItemInstalled } from './solution-item-install-dialog.component';
import * as i0 from "@angular/core";
export interface SolutionItemPickerDialogData {
    kind: SolutionHubKind;
    target?: EntityId;
}
/** "Add from Solution hub" on a page: the hub's items of the page's kind, each with Install. */
export declare class SolutionItemPickerDialogComponent extends DialogComponent<SolutionItemPickerDialogComponent, SolutionItemInstalled> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionItemPickerDialogComponent, SolutionItemInstalled>;
    data: SolutionItemPickerDialogData;
    private dialog;
    private solutionService;
    items: SolutionItemSummary[];
    loading: boolean;
    search: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionItemPickerDialogComponent, SolutionItemInstalled>, data: SolutionItemPickerDialogData, dialog: MatDialog, solutionService: SolutionService);
    ngOnInit(): void;
    get shown(): SolutionItemSummary[];
    install(item: SolutionItemSummary): void;
    openHub(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionItemPickerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionItemPickerDialogComponent, "st-solution-item-picker-dialog", never, {}, {}, never, never, false, never>;
}
