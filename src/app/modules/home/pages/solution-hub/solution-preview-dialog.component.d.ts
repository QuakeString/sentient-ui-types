import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { SolutionPreview } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
export interface SolutionPreviewDialogData {
    /** The blueprint as edited (unsaved changes included). */
    blueprint: any;
    /** The dashboard item to show first. */
    ref?: string;
}
/**
 * A draft's dashboards before anything is installed: built from their specs
 * against the draft's devices and assets, every value simulated (in the
 * emulator's ranges where it names the key).
 */
export declare class SolutionPreviewDialogComponent extends DialogComponent<SolutionPreviewDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionPreviewDialogComponent>;
    data: SolutionPreviewDialogData;
    private solutionService;
    preview: SolutionPreview;
    loading: boolean;
    error: string;
    private indexValue;
    /** The dashboard on show, as a one-item list (a new list recreates the page). */
    current: any[];
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionPreviewDialogComponent>, data: SolutionPreviewDialogData, solutionService: SolutionService);
    ngOnInit(): void;
    get index(): number;
    set index(i: number);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionPreviewDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionPreviewDialogComponent, "st-solution-preview-dialog", never, {}, {}, never, never, false, never>;
}
