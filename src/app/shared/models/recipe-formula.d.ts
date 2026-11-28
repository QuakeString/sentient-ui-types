/** Function names a formula may use (for autocomplete). */
export declare const RECIPE_FORMULA_FUNCTIONS: string[];
/** Variable names a formula uses, in order of first use. */
export declare function recipeFormulaVariables(src: string): string[];
/** Evaluates a formula; throws with a readable message on an error. */
export declare function evaluateRecipeFormula(src: string, vars: Record<string, number>): number;
/** The identifier being typed just before `caret` (for autocomplete), with its start. */
export declare function recipeFormulaWordAt(src: string, caret: number): {
    word: string;
    start: number;
};
