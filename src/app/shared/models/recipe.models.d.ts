import { BaseData } from '@shared/models/base-data';
import { RecipeId } from '@shared/models/id/recipe-id';
import { RecipeDataId } from '@shared/models/id/recipe-data-id';
export declare enum RecipeElementType {
    Integer = "integer",
    Double = "double",
    Boolean = "boolean",
    String = "string",
    Enum = "enum",
    Time = "time",
    Float = "float",
    Int8 = "int8",
    Int16 = "int16",
    Int32 = "int32",
    Int64 = "int64",
    Uint8 = "uint8",
    Uint16 = "uint16",
    Uint32 = "uint32",
    Uint64 = "uint64",
    Date = "date",
    Datetime = "datetime"
}
export declare enum RecipeElementTargetKind {
    Rpc = "rpc",
    SharedAttribute = "shared_attribute",
    /** Not written anywhere: the value feeds formulas or is kept for the record. */
    None = "none"
}
/** Where an element's value comes from when the recipe is sent. */
export declare enum RecipeElementKind {
    /** Typed by the operator in each recipe data record. */
    Input = "input",
    /** Set once in the recipe (its default). */
    Fixed = "fixed",
    /** Read when sending from an entity's latest telemetry or attribute. */
    Live = "live",
    /** Worked out from the other elements with a formula. */
    Calculated = "calculated"
}
export type RecipeLiveReadFrom = 'telemetry' | 'server_attribute' | 'shared_attribute' | 'client_attribute';
export type RecipeLiveOnProblem = 'block' | 'ask';
/** Entity types a recipe (or a live element) can read from. */
export type RecipeSourceType = 'DEVICE' | 'ASSET' | 'ENTITY_VIEW' | 'CUSTOMER';
export interface RecipeLiveSource {
    /** With no entity the recipe's own source is read. */
    entity_type?: RecipeSourceType;
    entity_id?: string;
    read_from?: RecipeLiveReadFrom;
    key: string;
    /** Oldest acceptable reading in ms; 0 = no limit. */
    max_age_ms?: number;
    on_missing_or_stale?: RecipeLiveOnProblem;
    operator_can_override?: boolean;
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
    /** Absent = input (recipes saved before kinds existed). */
    kind?: RecipeElementKind;
    /** The device this element writes to; absent = the recipe's device. */
    target_device_id?: string;
    formula?: string;
    live?: RecipeLiveSource;
    decimals?: number;
}
/** Recipe = per-device schema. Extends BaseData so it works with
 *  EntityTableConfig / EntityComponent. */
export interface Recipe extends BaseData<RecipeId> {
    tenantId?: string;
    /** Optional owner. Null/undefined = tenant-owned. Otherwise the
     *  recipe belongs to this customer and its device must too. */
    customerId?: string | null;
    /** The recipe's device when its source is a device; null otherwise. */
    deviceId?: string | null;
    sourceEntityType?: RecipeSourceType;
    sourceEntityId?: string;
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
    deviceId?: string | null;
    sourceEntityType?: RecipeSourceType;
    sourceEntityId?: string;
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
    deviceId?: string | null;
    sourceEntityType?: RecipeSourceType;
    sourceEntityId?: string;
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
    deviceId?: string | null;
    dispatchCount: number;
    auditId: string;
    dispatchedAt: number;
    devices?: RecipeDeviceResult[];
    values?: Record<string, unknown>;
}
/** A live element's reading in a preview / send. */
export interface RecipeLiveReading {
    key: string;
    entityType?: string;
    entityId?: string;
    entityName?: string;
    readKey: string;
    value: unknown;
    reading: unknown;
    ts?: number;
    ageMs?: number;
    maxAgeMs: number;
    status: 'ok' | 'stale' | 'missing';
    overridden: boolean;
    canOverride: boolean;
    onProblem: RecipeLiveOnProblem;
}
export interface RecipeDeviceWrites {
    deviceId: string;
    deviceName?: string;
    writes: DispatchedElement[];
}
export interface RecipeDeviceResult extends RecipeDeviceWrites {
    ok: boolean;
    error?: string;
}
/** What a send would do: final values, live readings, problems, writes per device. */
export interface RecipePreparedSend {
    values: Record<string, unknown>;
    live: RecipeLiveReading[];
    calculated: string[];
    problems: {
        key: string;
        message: string;
    }[];
    blocked: string[];
    needsConfirmation: string[];
    devices: RecipeDeviceWrites[];
}
export interface RecipeSendRequest {
    liveOverrides?: Record<string, unknown>;
    confirm?: boolean;
    deviceIds?: string[];
    retryOf?: string;
}
/** A send either went out (ack) or was held back (409, with the worked-out send). */
export type RecipeSendOutcome = {
    sent: true;
    ack: SendAck;
} | {
    sent: false;
    message: string;
    prepared: RecipePreparedSend;
};
/** Kind of an element, `input` for elements saved before kinds existed. */
export declare function recipeElementKind(el: {
    kind?: string;
} | null | undefined): RecipeElementKind;
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
        values?: Record<string, unknown>;
        live?: RecipeLiveReading[];
        calculated?: string[];
        devices?: RecipeDeviceResult[];
        confirmed?: boolean;
        retryOf?: string;
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
