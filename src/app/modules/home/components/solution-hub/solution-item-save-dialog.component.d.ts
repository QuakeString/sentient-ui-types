import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { SolutionItemType } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
export interface SolutionItemSaveDialogData {
    itemType: SolutionItemType;
    entityId: string;
    name: string;
}
/** "Save to Solution hub": one of the tenant's entities as a hub item, to install again or share. */
export declare class SolutionItemSaveDialogComponent extends DialogComponent<SolutionItemSaveDialogComponent, any> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionItemSaveDialogComponent, any>;
    data: SolutionItemSaveDialogData;
    private solutionService;
    form: {
        name: string;
        version: string;
        category: string;
        summary: string;
        description: string;
    };
    busy: boolean;
    error: string;
    saved: {
        id: string;
        name: string;
    };
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionItemSaveDialogComponent, any>, data: SolutionItemSaveDialogData, solutionService: SolutionService);
    save(): void;
    openHub(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionItemSaveDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionItemSaveDialogComponent, "st-solution-item-save-dialog", never, {}, {}, never, never, false, never>;
}
