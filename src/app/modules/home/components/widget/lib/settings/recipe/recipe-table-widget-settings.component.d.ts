import { OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { RecipeService } from '@core/http/recipe.service';
import { Recipe } from '@shared/models/recipe.models';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
/** Widget-settings panel for the Recipe table widget.
 *
 *  Fields:
 *   - recipes[]  — chip-style autocomplete; empty = "all recipes
 *                  visible to the user".  Resolves to an array of
 *                  recipe UUIDs that the widget passes as the
 *                  `recipeIds=` query param at runtime.
 *   - confirmBeforeSend — boolean toggle, default true.
 *
 *  Refresh is manual (↻ button in the widget header) — there is
 *  intentionally no auto-refresh; recipes change infrequently and an
 *  always-on timer just churns the API.
 */
export declare class RecipeTableWidgetSettingsComponent extends WidgetSettingsComponent implements OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private recipeService;
    recipeTableWidgetSettingsForm: UntypedFormGroup;
    /** Resolved Customer/Recipe objects displayed as chips. We track them
     *  separately from the form's `recipeIds` array so we can show the
     *  recipe NAME on the chip without forcing every subscriber to refetch. */
    selectedRecipes: Recipe[];
    /** Free-text input control for the autocomplete. */
    recipeSearchControl: UntypedFormControl;
    filteredRecipes: Observable<Recipe[]>;
    readonly chipSeparators: readonly [13, 188];
    private destroy$;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, recipeService: RecipeService);
    ngOnDestroy(): void;
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    /** Resolve the saved id list into Recipe objects (so we can render the
     *  name on the chip), then wire the autocomplete stream. */
    private initAutocomplete;
    private fetchRecipes;
    addRecipe(recipe: Recipe): void;
    /** Chip input commit — only matters if the user types free-text and
     *  presses Enter without picking from the autocomplete. We ignore it
     *  (the form holds UUIDs, not names) but clear the input so they
     *  don't think they added something. */
    onChipInput(event: MatChipInputEvent): void;
    removeRecipe(recipe: Recipe): void;
    private syncRecipeIds;
    displayRecipe: (r: Recipe) => string;
    private idOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeTableWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeTableWidgetSettingsComponent, "tb-recipe-table-widget-settings", never, {}, {}, never, never, false, never>;
}
