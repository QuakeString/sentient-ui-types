import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { PermissionService } from '@core/services/permission.service';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { Recipe } from '@shared/models/recipe.models';
import { RecipeService } from '@core/http/recipe.service';
import * as i0 from "@angular/core";
export declare class RecipesTableConfigResolver {
    private translate;
    private datePipe;
    private recipeService;
    private dialog;
    private dialogService;
    private permissionService;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, recipeService: RecipeService, dialog: MatDialog, dialogService: DialogService, permissionService: PermissionService);
    resolve(): EntityTableConfig<Recipe>;
    /** Greys out cells of disabled recipes — mirrors the scheduler-events
     *  table's visual treatment so users can scan the table and tell at a
     *  glance which recipes are inactive. */
    private disabledCellStyle;
    /** Flip the recipe's `enabled` flag.  Goes through the existing update
     *  endpoint with a minimal body — backend leaves the other fields
     *  untouched (UpdateRecipeRequest uses Option<_> per field). */
    private toggleEnabled;
    /** Open the cascade-confirm dialog, then dispatch delete with the
     *  appropriate `force` flag. Closes any open detail panel on success
     *  so the deleted entity disappears from the UI. */
    private confirmAndDelete;
    /** Group delete from the selection toolbar. One confirm dialog for the
     *  whole batch — bulk path always cascades dependent data records (a
     *  per-recipe cascade choice would be unworkable for N rows). */
    private bulkDelete;
    private fetchRecipes;
    private saveRecipe;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecipesTableConfigResolver>;
}
