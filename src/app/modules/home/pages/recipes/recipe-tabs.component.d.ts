import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Recipe } from '@shared/models/recipe.models';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import * as i0 from "@angular/core";
export declare class RecipeTabsComponent extends EntityTabsComponent<Recipe> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeTabsComponent, "tb-recipe-tabs", never, {}, {}, never, never, false, never>;
}
