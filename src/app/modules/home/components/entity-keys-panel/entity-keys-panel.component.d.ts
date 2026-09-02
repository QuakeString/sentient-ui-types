/**
 * Collapsible-row panel for editing a FormArray of FormGroups.
 *
 * Adapted from `gateway-managment-extensions::IndustrialKeysPanel`,
 * stripped to the v1 essentials per direction:
 *   - No internal search / sort / fullscreen toolbar.
 *   - No internal Apply/Cancel — host (the entity-details dialog)
 *     owns those.
 *   - "Add" is rendered by the host in the dialog footer, not inside
 *     this panel.
 *
 * Host responsibilities:
 *   - Build the FormArray (this component never mutates the form
 *     shape; it only reads .controls).
 *   - Provide `rowHeaderTpl` (collapsed summary) and `rowBodyTpl`
 *     (expanded full editor) as `<ng-template>` blocks.
 *   - Wire the deleteRequested event handler.
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EntityKeysPanelComponent implements OnInit, OnChanges, OnDestroy {
    private cd;
    /** FormArray that backs the list. Host owns it; we only read
     *  `.controls` for display. */
    keysFormArray: FormArray;
    title: string;
    deleteTooltip: string;
    emptyText: string;
    /** Hide the per-row delete button entirely (read-only mode). */
    hideDelete: boolean;
    /** Row header template — left side of the collapsed expansion panel. */
    rowHeaderTpl: TemplateRef<{
        $implicit: FormGroup;
        index: number;
    }> | null;
    /** Row body template — rendered inside `matExpansionPanelContent`. */
    rowBodyTpl: TemplateRef<{
        $implicit: FormGroup;
        index: number;
    }> | null;
    deleteRequested: EventEmitter<number>;
    displayedControls: {
        control: FormGroup;
        index: number;
    }[];
    renderLimit: number;
    lastAddedIndex: number | null;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /** Host calls this after mutating the form array (add/delete) so
     *  the displayed list refreshes under OnPush. */
    refresh(): void;
    /** Host can mark a row as just-added so it auto-expands. */
    setLastAddedIndex(index: number | null): void;
    private refreshDisplay;
    onScroll(event: Event): void;
    trackByItem(_: number, item: {
        control: FormGroup;
        index: number;
    }): unknown;
    onDeleteClicked(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityKeysPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityKeysPanelComponent, "tb-entity-keys-panel", never, { "keysFormArray": { "alias": "keysFormArray"; "required": true; }; "title": { "alias": "title"; "required": false; }; "deleteTooltip": { "alias": "deleteTooltip"; "required": false; }; "emptyText": { "alias": "emptyText"; "required": false; }; "hideDelete": { "alias": "hideDelete"; "required": false; }; "rowHeaderTpl": { "alias": "rowHeaderTpl"; "required": false; }; "rowBodyTpl": { "alias": "rowBodyTpl"; "required": false; }; }, { "deleteRequested": "deleteRequested"; }, never, never, false, never>;
}
