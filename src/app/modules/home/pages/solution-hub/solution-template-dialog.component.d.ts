import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { SolutionHighlights, SolutionScreenshot, SolutionTemplateSummary } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
export interface SolutionTemplateDialogData {
    summary: SolutionTemplateSummary;
}
/**
 * A template's details, after the platform's IoT Hub item dialog: the
 * dashboards' screenshots, what it is, what is inside, then Install
 * (the parameters in a dialog of their own) or Customize (the creator).
 */
export declare class SolutionTemplateDialogComponent extends DialogComponent<SolutionTemplateDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionTemplateDialogComponent, boolean>;
    data: SolutionTemplateDialogData;
    private dialog;
    private translate;
    private solutionService;
    summary: SolutionTemplateSummary;
    highlights: SolutionHighlights;
    template: any;
    loading: boolean;
    slide: number;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionTemplateDialogComponent, boolean>, data: SolutionTemplateDialogData, dialog: MatDialog, translate: TranslateService, solutionService: SolutionService);
    ngOnInit(): void;
    get screenshots(): SolutionScreenshot[];
    imageUrl(s: SolutionScreenshot): string;
    get whatItCreates(): string;
    prev(): void;
    next(): void;
    install(): void;
    /** A draft with the defaults, opened in the creator to change anything before installing. */
    customize(): void;
    /** The template as a package file, for another SENTIENT to import. */
    exportFile(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplateDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionTemplateDialogComponent, "st-solution-template-dialog", never, {}, {}, never, never, false, never>;
}
