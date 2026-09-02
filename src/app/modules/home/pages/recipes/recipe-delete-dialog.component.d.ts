import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface RecipeDeleteDialogData {
    recipeName: string;
}
export interface RecipeDeleteDialogResult {
    confirmed: boolean;
    cascade: boolean;
}
export declare class RecipeDeleteDialogComponent extends DialogComponent<RecipeDeleteDialogComponent, RecipeDeleteDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<RecipeDeleteDialogComponent, RecipeDeleteDialogResult>;
    data: RecipeDeleteDialogData;
    cascade: FormControl<boolean>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<RecipeDeleteDialogComponent, RecipeDeleteDialogResult>, data: RecipeDeleteDialogData);
    onCancel(): void;
    onDelete(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeDeleteDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeDeleteDialogComponent, "tb-recipe-delete-dialog", never, {}, {}, never, never, false, never>;
}
