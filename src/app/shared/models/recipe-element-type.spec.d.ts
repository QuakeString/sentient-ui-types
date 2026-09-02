/**
 * Single source of truth for recipe element TYPE behaviour.
 *
 * Where possible we reuse the platform's `<tb-value-input>` component
 * (the same control that drives Add Telemetry / Add Attribute) — that's
 * why each type carries an optional `valueType` that maps onto the
 * platform's ValueType enum. Types that don't map (Enum, Time) get a
 * dedicated render branch in the consuming templates.
 *
 * Adding a new element type = adding ONE entry here.
 */
import { ValueType } from '@shared/models/constants';
import { RecipeElementType } from '@shared/models/recipe.models';
/** Drives how the consumer template renders the default / value field. */
export type RecipeRenderKind = 'value-input' | 'enum' | 'time';
export interface RecipeElementTypeSpec {
    type: RecipeElementType;
    /** Which render branch to use. */
    render: RecipeRenderKind;
    /** When render = 'value-input', the platform ValueType to force. */
    valueType?: ValueType;
    /** True when min/max are meaningful (recipe editor shows them). */
    hasRange: boolean;
    /** True when enum_values list applies. */
    hasEnumValues: boolean;
    /** Returned by `defaultValueFor()` when no explicit default exists. */
    fallbackDefault: unknown;
}
/** Order here drives the order shown in the Type dropdown. */
export declare const RECIPE_ELEMENT_TYPE_SPECS: readonly RecipeElementTypeSpec[];
export declare function specFor(type: RecipeElementType | string | null | undefined): RecipeElementTypeSpec;
