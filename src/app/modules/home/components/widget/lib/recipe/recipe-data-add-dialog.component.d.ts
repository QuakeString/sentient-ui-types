import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Recipe, RecipeElement, RecipeElementType } from '@shared/models/recipe.models';
import { specFor } from '@shared/models/recipe-element-type.spec';
import * as i0 from "@angular/core";
export interface RecipeDataAddDialogData {
    /** Recipes the widget is configured to surface — the user picks one as the
     *  parent of the new value record. Each carries its element schema. */
    recipes: Recipe[];
}
export interface RecipeDataAddResult {
    recipeId: string;
    name: string;
    description?: string;
    values: Record<string, unknown>;
}
/** Lightweight "Add recipe data" dialog for the runtime widget. Mirrors the
 *  widget's inline edit form (schema-driven inputs per element type) but for
 *  a brand-new record: pick the parent recipe, name it, fill its values. */
export declare class RecipeDataAddDialogComponent {
    private dialogRef;
    private fb;
    private cd;
    data: RecipeDataAddDialogData;
    readonly TYPE: typeof RecipeElementType;
    readonly specFor: typeof specFor;
    form: FormGroup;
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    elements: RecipeElement[];
    constructor(dialogRef: MatDialogRef<RecipeDataAddDialogComponent>, fb: FormBuilder, cd: ChangeDetectorRef, data: RecipeDataAddDialogData);
    get valuesGroup(): FormGroup;
    onRecipeChange(recipeId: string): void;
    /** Resolve the chosen recipe and rebuild the per-element value controls,
     *  seeded with each element's default. */
    private selectRecipe;
    /** Seed a control with the element's declared default, falling back to a
     *  type-appropriate empty value. */
    private defaultFor;
    add(): void;
    cancel(): void;
    private coerce;
    recipeName(r: Recipe): string;
    trackByKey: (_: number, el: RecipeElement) => string;
    private idOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeDataAddDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeDataAddDialogComponent, "tb-recipe-data-add-dialog", never, {}, {}, never, never, true, never>;
}
