import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppState } from '@core/core.state';
import { EntityComponent } from '@home/components/entity/entity.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityType } from '@shared/models/entity-type.models';
import { RecipeService } from '@core/http/recipe.service';
import { Recipe, RecipeData, RecipeElement, RecipeElementType } from '@shared/models/recipe.models';
import { specFor } from '@shared/models/recipe-element-type.spec';
import * as i0 from "@angular/core";
export declare class RecipeDataComponent extends EntityComponent<RecipeData> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected entityValue: RecipeData;
    protected entitiesTableConfigValue: EntityTableConfig<RecipeData>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    private recipeService;
    readonly entityType: typeof EntityType;
    readonly TYPE: typeof RecipeElementType;
    readonly specFor: typeof specFor;
    isNumeric(el: RecipeElement): boolean;
    /** Loaded parent recipe (drives the dynamic values form). Null while
     *  loading or when no recipe is selected yet (add-mode initial state). */
    parentRecipe: Recipe | null;
    /** True while the recipe is being fetched after a selector change. */
    loadingRecipe: boolean;
    private destroy$;
    constructor(store: Store<AppState>, entityValue: RecipeData, entitiesTableConfigValue: EntityTableConfig<RecipeData>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, recipeService: RecipeService);
    ngOnDestroy(): void;
    hideDelete(): boolean;
    buildForm(entity: RecipeData): UntypedFormGroup;
    ngOnInit(): void;
    updateForm(entity: RecipeData): void;
    /** Override so we can re-disable the identity-locked control (recipeId)
     *  after the base `entityForm.enable()` flips edit mode, and keep the
     *  values group's enabled state in sync. */
    updateFormState(): void;
    /** Custom form value preparation — flatten the nested `values` FormGroup
     *  into the {key: value} shape the backend expects. */
    prepareFormValue(formValue: any): any;
    get valuesGroup(): UntypedFormGroup;
    /** Convenience for templates — iterate elements in the parent recipe
     *  in their declared order. */
    get elements(): RecipeElement[];
    enumOptions(el: RecipeElement): string[];
    private loadRecipe;
    private buildValuesGroup;
    /** Replace the `values` sub-group in place so existing form bindings
     *  re-anchor. Re-syncs the new group's enabled state to edit mode. */
    private replaceValuesGroup;
    /** Keep the values sub-group's enabled state in lockstep with edit mode.
     *  NOTE: `readonly` is a RUNTIME guard only — the recipe widget honors it
     *  so operators can't mutate locked records at runtime. It is NOT a
     *  config-time lock: admins can always edit a readonly record's values in
     *  this detail dialog (that's where the lock is meant to be set/cleared).
     *  View-mode read-only is handled natively by <fieldset [disabled]="!isEdit">. */
    private syncValuesEditState;
    private defaultFor;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeDataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeDataComponent, "tb-recipe-data", never, {}, {}, never, never, false, never>;
}
