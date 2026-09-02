import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { PageLink } from '@shared/models/page/page-link';
import { EntityType } from '@shared/models/entity-type.models';
import { RecipeData } from '@shared/models/recipe.models';
import { RecipeService } from '@core/http/recipe.service';
import * as i0 from "@angular/core";
export declare class RecipeDataTableHeaderComponent extends EntityTableHeaderComponent<RecipeData, PageLink, RecipeData> {
    protected store: Store<AppState>;
    private translate;
    private recipeService;
    readonly entityType: typeof EntityType;
    /** Cached display name for the currently filtered recipe, so the
     *  stroked filter button shows "Recipe: <name>" instead of just an
     *  id. Refreshed whenever the filter changes. */
    private selectedRecipeName;
    private selectedRecipeId;
    constructor(store: Store<AppState>, translate: TranslateService, recipeService: RecipeService);
    /** Text shown next to the filter icon on the button. */
    get buttonLabel(): string;
    recipeChanged(recipeId: string | null): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeDataTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeDataTableHeaderComponent, "tb-recipe-data-table-header", never, {}, {}, never, never, false, never>;
}
