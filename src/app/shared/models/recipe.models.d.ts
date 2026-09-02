import { BaseData } from '@shared/models/base-data';
import { RecipeId } from '@shared/models/id/recipe-id';
import { RecipeDataId } from '@shared/models/id/recipe-data-id';
export declare enum RecipeElementType {
    Integer = "integer",
    Double = "double",
    Boolean = "boolean",
    String = "string",
    Enum = "enum",
    Time = "time"
}
export declare enum RecipeElementTargetKind {
    Rpc = "rpc",
    SharedAttribute = "shared_attribute"
}
/** Schema element. Matches `api/src/services/recipe_service.rs::RecipeElement`. */
export interface RecipeElement {
    key: string;
    type: RecipeElementType;
    unit?: string;
    default?: unknown;
    min?: number;
    max?: number;
    enum_values?: string[];
    description?: string;
    target_kind: RecipeElementTargetKind;
    target_address: string;
}
/** Recipe = per-device schema. Extends BaseData so it works with
 *  EntityTableConfig / EntityComponent. */
export interface Recipe extends BaseData<RecipeId> {
    tenantId?: string;
    /** Optional owner. Null/undefined = tenant-owned. Otherwise the
     *  recipe belongs to this customer and its device must too. */
    customerId?: string | null;
    deviceId?: string;
    description?: string;
    elements?: RecipeElement[];
    enabled?: boolean;
    deviceDeleted?: boolean;
    updatedTime?: number;
    createdBy?: string;
}
/** Recipe Data = named value record conforming to a Recipe. */
export interface RecipeData extends BaseData<RecipeDataId> {
    tenantId?: string;
    recipeId?: string;
    /** Denormalised parent-recipe name; populated by the backend list
     *  endpoint so the table can render without a per-row lookup. */
    recipeName?: string;
    /** Per-recipe monotonic counter; surfaced as "#001" by the table cell. */
    sequenceNo?: number;
    description?: string;
    values?: Record<string, unknown>;
    /** When true, values cannot be modified; widgets render read-only. */
    readonly?: boolean;
    /** When false, runtime widgets hide this record. Admin table still shows
     *  it so it can be re-enabled. */
    enabled?: boolean;
    updatedTime?: number;
    createdBy?: string;
    updatedBy?: string;
}
export interface CreateRecipeRequest {
    customerId?: string | null;
    deviceId: string;
    name: string;
    description?: string;
    elements: RecipeElement[];
    enabled?: boolean;
}
export interface UpdateRecipeRequest {
    /** When present (even as null), changes the recipe owner. Bare absence
     *  leaves the owner unchanged; null clears it (back to tenant-owned). */
    customerId?: string | null;
    /** When present, re-targets the recipe to a different device. The new
     *  device's customer must match the recipe's resulting owner (backend
     *  enforces the owner/device invariant). */
    deviceId?: string;
    name?: string;
    description?: string;
    elements?: RecipeElement[];
    enabled?: boolean;
}
export interface CreateRecipeDataRequest {
    recipeId: string;
    name: string;
    description?: string;
    values: Record<string, unknown>;
    readonly?: boolean;
    enabled?: boolean;
}
export interface UpdateRecipeDataRequest {
    name?: string;
    description?: string;
    values?: Record<string, unknown>;
    readonly?: boolean;
    enabled?: boolean;
}
export interface SendAck {
    recipeDataId: string;
    deviceId: string;
    dispatchCount: number;
    auditId: string;
    dispatchedAt: number;
}
export interface DispatchedElement {
    key: string;
    targetKind: RecipeElementTargetKind;
    targetAddress: string;
    value: unknown;
}
export interface SendHistoryRow {
    id: string;
    createdTime: number;
    userId: string;
    actionStatus: string;
    data: {
        deviceId: string;
        recipeId: string;
        recipeName: string;
        recipeDataName: string;
        dispatchCount: number;
        dispatchedElements: DispatchedElement[];
        auditId: string;
        triggeredBy?: string;
        schedulerEventId?: string;
        schedulerEventName?: string;
    };
}
/** Default element factory used when the user clicks "+ Add element". */
export declare function defaultRecipeElement(): RecipeElement;
/** Adapt the backend's flat-id DTO (`{id: "uuid", ...}`) into the
 *  EntityId-shaped object the UI's BaseData<HasId> contract expects. */
export declare function adaptRecipeFromApi(raw: any): Recipe;
export declare function adaptRecipeDataFromApi(raw: any): RecipeData;
