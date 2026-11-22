import { Observable } from 'rxjs';
/**
 * Optional hooks for a dialog or popover component about closing with
 * unsaved changes. Without either, a dirty, enabled form held in one of the
 * component's own fields counts as unsaved changes.
 */
export interface StUnsavedChangesAware {
    /** Own rule for "has changes that are not saved". */
    hasUnsavedChanges?(): boolean;
    /** Never ask before closing (search/filter dialogs, prompts). */
    stSkipUnsavedChangesCheck?: boolean;
}
export declare function hasUnsavedChanges(instance: any): boolean;
/**
 * Asks "Discard changes?". Emits true to discard and close, false to keep
 * editing. Provided by DialogService (CoreModule); a token here so dialog and
 * popover bases can use it without importing the dialog service.
 */
export declare abstract class StDiscardChangesConfirm {
    abstract confirmDiscardChanges(): Observable<boolean>;
}
