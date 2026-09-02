/** Runtime settings model for the Recipe Table widget. Lives in the
 *  widget's `ctx.settings` blob, parsed at ngOnInit.
 *
 *  - `confirmBeforeSend` — when true, every Send click first opens a
 *    confirm dialog; default true for safety. Operators on a known-safe
 *    line may set it false.
 *  - `recipeIdFilter` — optional whitelist of recipe UUIDs the widget
 *    should surface. Empty / undefined = every recipe visible to the
 *    user (which is already owner-scoped by the backend).
 *  - `pageSize` — table page size (5/10/25). */
export interface RecipeTableWidgetSettings {
    confirmBeforeSend: boolean;
    recipeIdFilter?: string[];
    pageSize: number;
}
export declare const recipeTableWidgetDefaultSettings: RecipeTableWidgetSettings;
