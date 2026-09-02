import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PermissionService } from '@core/services/permission.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { RecipeData } from '@shared/models/recipe.models';
import { RecipeService } from '@core/http/recipe.service';
import * as i0 from "@angular/core";
export declare class RecipeDataTableConfigResolver {
    private translate;
    private datePipe;
    private recipeService;
    private dialog;
    private store;
    private permissionService;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, recipeService: RecipeService, dialog: MatDialog, store: Store<AppState>, permissionService: PermissionService);
    resolve(): EntityTableConfig<RecipeData>;
    private fetchRecipeData;
    private saveRecipeData;
    /** Greys out cells of disabled records — same visual treatment as the
     *  scheduler-events table, applied per-column. */
    private disabledCellStyle;
    /** Flip the record's `enabled` flag.  Uses the standard update endpoint
     *  with a minimal body so the other fields are left untouched. */
    private toggleEnabled;
    private sendRecipeData;
    /** Duplicate = open the Add dialog pre-filled with the source record's
     *  values.  User can edit name / values then save (same UX as
     *  "Copy" in calculated-fields).  Save creates a fresh record because
     *  we clear `id` on the prefill — the resolver's saveRecipeData gates
     *  create vs update on `id` presence. */
    private duplicateRecipeData;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeDataTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecipeDataTableConfigResolver>;
}
