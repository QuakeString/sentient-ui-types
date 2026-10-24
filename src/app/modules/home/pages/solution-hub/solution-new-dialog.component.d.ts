import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { InstalledSolution, SolutionTemplateSummary } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
type Start = 'blank' | 'template' | 'edit' | 'copy';
/** Starts a draft: blank (with the assistant), from a template, or from an installed solution. */
export declare class SolutionNewDialogComponent extends DialogComponent<SolutionNewDialogComponent, string> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionNewDialogComponent, string>;
    data: {
        start?: Start;
        installedName?: string;
    };
    private solutionService;
    start: Start;
    name: string;
    templates: SolutionTemplateSummary[];
    installed: InstalledSolution[];
    templateId: string;
    installedName: string;
    busy: boolean;
    error: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionNewDialogComponent, string>, data: {
        start?: Start;
        installedName?: string;
    }, solutionService: SolutionService);
    ngOnInit(): void;
    suggestName(): void;
    get valid(): boolean;
    create(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionNewDialogComponent, [null, null, null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionNewDialogComponent, "st-solution-new-dialog", never, {}, {}, never, never, false, never>;
}
export {};
