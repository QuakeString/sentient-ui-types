import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface SolutionItemDialogData {
    section: string;
    /** One item `{ref, entity, ...}`, or the whole list for relations / emulator. */
    value: any;
    isList: boolean;
    /** Refs already used by the other items of the section. */
    refs: string[];
}
/** Edits one blueprint item (or a whole list section) as JSON. */
export declare class SolutionItemDialogComponent extends DialogComponent<SolutionItemDialogComponent, any> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionItemDialogComponent, any>;
    private translate;
    data: SolutionItemDialogData;
    json: any;
    error: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionItemDialogComponent, any>, translate: TranslateService, data: SolutionItemDialogData);
    get sectionLabel(): string;
    apply(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionItemDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionItemDialogComponent, "st-solution-item-dialog", never, {}, {}, never, never, false, never>;
}
