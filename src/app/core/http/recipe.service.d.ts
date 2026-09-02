import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { CreateRecipeDataRequest, CreateRecipeRequest, Recipe, RecipeData, SendAck, SendHistoryRow, UpdateRecipeDataRequest, UpdateRecipeRequest } from '@shared/models/recipe.models';
import * as i0 from "@angular/core";
type RecipeId = string;
type RecipeDataId = string;
interface ListResponse<T> {
    data: T[];
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
}
interface ListParams {
    deviceId?: string;
    recipeId?: string;
    /** Plural form — widget settings picker uses this for multi-recipe
     *  whitelists.  Sent as `recipeIds=uuid1,uuid2`. */
    recipeIds?: string[];
    customerId?: string;
    /** Filter by enabled state. Undefined → all rows (admin table default);
     *  true → enabled only (runtime widget default); false → disabled only. */
    enabled?: boolean;
    /** Filter recipe_data by the *parent recipe*'s enabled flag. Widget
     *  passes true so disabling a recipe also hides its records. */
    parentEnabled?: boolean;
    includeOrphaned?: boolean;
    page?: number;
    pageSize?: number;
    textSearch?: string;
    sortProperty?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export declare class RecipeService {
    private http;
    constructor(http: HttpClient);
    listRecipes(params?: ListParams, config?: RequestConfig): Observable<ListResponse<Recipe>>;
    getRecipe(id: RecipeId, config?: RequestConfig): Observable<Recipe>;
    createRecipe(body: CreateRecipeRequest, config?: RequestConfig): Observable<Recipe>;
    updateRecipe(id: RecipeId, body: UpdateRecipeRequest, config?: RequestConfig): Observable<Recipe>;
    /** Soft path — server rejects with 409 if recipe_data records exist. */
    deleteRecipe(id: RecipeId, config?: RequestConfig): Observable<void>;
    /** Admin force-delete cascading to recipe_data. */
    forceDeleteRecipe(id: RecipeId, config?: RequestConfig): Observable<void>;
    listRecipeData(params?: ListParams, config?: RequestConfig): Observable<ListResponse<RecipeData>>;
    getRecipeData(id: RecipeDataId, config?: RequestConfig): Observable<RecipeData>;
    createRecipeData(body: CreateRecipeDataRequest, config?: RequestConfig): Observable<RecipeData>;
    updateRecipeData(id: RecipeDataId, body: UpdateRecipeDataRequest, config?: RequestConfig): Observable<RecipeData>;
    deleteRecipeData(id: RecipeDataId, config?: RequestConfig): Observable<void>;
    sendRecipeData(id: RecipeDataId, config?: RequestConfig): Observable<SendAck>;
    getSendHistory(id: RecipeDataId, opts?: {
        from?: number;
        to?: number;
        limit?: number;
    }, config?: RequestConfig): Observable<{
        data: SendHistoryRow[];
        totalElements: number;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecipeService>;
}
export {};
