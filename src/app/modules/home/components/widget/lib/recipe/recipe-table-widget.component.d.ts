import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WidgetContext } from '@home/models/widget-component.models';
import { RecipeService } from '@core/http/recipe.service';
import { PermissionService } from '@core/services/permission.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TelemetryWebsocketService } from '@core/ws/telemetry-websocket.service';
import { RecipeData, RecipeElement, RecipeElementType } from '@shared/models/recipe.models';
import { specFor } from '@shared/models/recipe-element-type.spec';
import { RecipeTableWidgetSettings } from './recipe-table-widget.models';
import { WidgetDataExportService, WidgetDataExportFormat } from '@core/services/widget-data-export.service';
import * as i0 from "@angular/core";
/** Recipe table widget — phase 2.
 *
 *  v1 surfaced recipe_data rows with a one-click Send action.  Phase 2
 *  adds row expansion: clicking a row reveals the element key/value
 *  pairs (lazy-loaded recipe schema), and operators can flip into Edit
 *  mode to override values before dispatch.  Editing persists the new
 *  values_json to the recipe_data record (PUT) and then dispatches
 *  (POST /send) — there's no fire-and-forget "temp value" send in this
 *  phase; the assumption is that an operator who tweaks a value usually
 *  wants the tweak remembered.  Readonly recipe_data records can be
 *  expanded for inspection but cannot be edited.
 *
 *  RBAC stays consistent with v1:
 *    EXECUTE on RECIPE_DATA → Send button visible.
 *    WRITE on RECIPE_DATA   → Edit / Save buttons visible.
 *    READ alone             → expand-to-view only.
 *
 *  Owner scoping comes free from the backend's list filter.
 */
export declare class RecipeTableWidgetComponent implements OnInit, OnDestroy {
    private recipeService;
    private permission;
    private dialogService;
    private translate;
    private store;
    private fb;
    private cd;
    private telemetryWsService;
    private zone;
    private dialog;
    private widgetDataExportService;
    ctx: WidgetContext;
    paginator: MatPaginator;
    sort: MatSort;
    settings: RecipeTableWidgetSettings;
    /** Built in ngOnInit — the leading `select` column is only present when
     *  the user can delete (no point showing checkboxes they can't act on). */
    displayedColumns: string[];
    rows: RecipeData[];
    totalElements: number;
    pageIndex: number;
    pageSize: number;
    sortProperty: string | null;
    sortOrder: 'ASC' | 'DESC';
    loading: boolean;
    canSend: boolean;
    canWrite: boolean;
    canDelete: boolean;
    /** True while the Add dialog's recipe fetch is in flight (debounces the
     *  toolbar + button so a double-click can't open two dialogs). */
    addOpening: boolean;
    /** Selected (checked) recipe-data ids for bulk delete. Only ever holds
     *  ids of non-readonly rows — readonly (delete-protected) records have no
     *  checkbox. Cleared on every fetch. */
    selectedRowIds: Set<string>;
    /** Per-row "delete in progress" lock. */
    deleting: Set<string>;
    /** Per-recipe element schema cache. Keys are recipe UUIDs (string form
     *  the dao returns). Schema fetched lazily on first expand of any row
     *  belonging to that recipe. */
    private schemaCache;
    /** In-flight schema fetches so we don't double-trigger when the user
     *  clicks expand repeatedly. */
    private schemaFetching;
    /** Set of row ids currently expanded. We allow multiple at a time so
     *  operators can scan several recipes side-by-side. */
    expandedRowIds: Set<string>;
    /** Row ids currently in edit mode. Subset of expandedRowIds — entering
     *  edit auto-expands; collapsing exits edit. */
    editingRowIds: Set<string>;
    /** Per-row edit form group, keyed by recipe-data id. Lazy-built on
     *  first edit; cleared when leaving edit mode. */
    editForms: Map<string, FormGroup<any>>;
    /** Per-row "send in progress" lock so double-tap can't fire twice. */
    sending: Set<string>;
    /** Per-row "save in progress" lock — same idea for the save-only path. */
    saving: Set<string>;
    /** Element-type constants re-exported for the template. */
    readonly TYPE: typeof RecipeElementType;
    readonly specFor: typeof specFor;
    private destroy$;
    private fetchSub?;
    /** Live WS subscriber for recipe/recipe_data lifecycle events. */
    private recipeSubscriber?;
    constructor(recipeService: RecipeService, permission: PermissionService, dialogService: DialogService, translate: TranslateService, store: Store<AppState>, fb: FormBuilder, cd: ChangeDetectorRef, telemetryWsService: TelemetryWebsocketService, zone: NgZone, dialog: MatDialog, widgetDataExportService: WidgetDataExportService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /** True when there is at least one row to export. Drives the toolbar button. */
    get canExport(): boolean;
    /** Export the currently-loaded recipe rows. Recipe is a `static` widget with
     *  no datasource, so we feed the export service a custom table built from
     *  `this.rows` (the visible, RBAC-filtered page set). The useful payload is
     *  each record's element key/value pairs, so we emit a long/tidy table — one
     *  row per (recipe-data, element). Element schemas are lazy-loaded per recipe,
     *  so we pre-fetch every referenced schema before building the table. */
    exportData(format: WidgetDataExportFormat): void;
    /** Pre-fetch the element schema for every recipe referenced by the current
     *  rows (skipping any already cached) so the export can list elements in
     *  schema order with units, regardless of which rows the user expanded. */
    private ensureAllSchemas;
    private buildExportData;
    /** Plain-text element value for export. Mirrors `displayValue` but emits an
     *  empty cell (not an em-dash) for missing values. */
    private exportValue;
    private formatTs;
    /** Open a live WS subscription for recipe lifecycle events. Scoped to the
     *  same recipe whitelist the fetch uses (empty = all recipes the user can
     *  see — the server applies owner-scope RBAC at dispatch). On any relevant
     *  event the widget refetches, so a create/update/delete/enable-toggle on
     *  another browser or via the admin table reflects here within ~one round
     *  trip. On reconnect, WsSubscriber re-sends the subscription command and
     *  the widget catches up on the next event. */
    private subscribeToRecipeEvents;
    onDataUpdated(): void;
    /** Open the "Add recipe data" dialog. Fetches the widget's configured
     *  recipes (with their element schemas), lets the operator pick one, name
     *  the record and fill its values, then creates it via the REST endpoint.
     *  The WS event refetches every subscriber; we also refetch immediately. */
    openAdd(): void;
    private createRecipeData;
    onSort(s: Sort): void;
    onPage(e: PageEvent): void;
    isExpanded(row: RecipeData): boolean;
    isEditing(row: RecipeData): boolean;
    /** Toggle row expansion. Editing a collapsed row implicitly expands. */
    toggleExpand(row: RecipeData): void;
    /** A row can be selected/deleted only when the user has DELETE and the
     *  record isn't delete-protected (readonly). */
    isSelectable(row: RecipeData): boolean;
    isSelected(row: RecipeData): boolean;
    toggleSelect(row: RecipeData, checked: boolean): void;
    /** Rows on the current page that can be selected. */
    private selectableRows;
    /** Header checkbox: true when every selectable row is selected. */
    allSelected(): boolean;
    /** Header checkbox indeterminate state. */
    someSelected(): boolean;
    toggleSelectAll(checked: boolean): void;
    get selectedCount(): number;
    /** True when the widget has at least one recipe configured. Drives which
     *  empty-state message to show. */
    get hasRecipeSelection(): boolean;
    clearSelection(): void;
    /** Single-row delete. Confirm, then DELETE; the backend emits a WS event
     *  that refetches every subscriber (including us), but we also refetch
     *  immediately so the deleting operator sees it without waiting. */
    deleteRow(row: RecipeData): void;
    /** Bulk delete every checked row. One confirm for the batch; failures on
     *  individual rows are tolerated (forkJoin-style) — we refetch regardless
     *  so partial success is visible. */
    deleteSelected(): void;
    /** Element schema for the row's recipe, or null while loading / errored. */
    schemaFor(row: RecipeData): RecipeElement[] | null;
    isSchemaLoading(row: RecipeData): boolean;
    private ensureSchemaLoaded;
    /** Pretty-print a saved value for the read-only expanded view. Type-
     *  aware so booleans show "Yes/No", missing values show em-dash, etc. */
    displayValue(element: RecipeElement, value: unknown): string;
    savedValueFor(row: RecipeData, element: RecipeElement): unknown;
    enterEdit(row: RecipeData): void;
    cancelEdit(row: RecipeData): void;
    /** Reset the in-progress edit form back to the saved values. */
    resetEdit(row: RecipeData): void;
    editFormFor(row: RecipeData): FormGroup | null;
    private buildEditForm;
    /** Persist edits to the recipe_data record without dispatching.  Stays
     *  in edit mode after save so the operator can keep tweaking; the form
     *  is reset to pristine against the new saved values so the Save button
     *  re-disables until the next change. */
    save(row: RecipeData): void;
    /** Send button. Confirm dialog interposed when `confirmBeforeSend` is
     *  on (default). If the row is in edit mode AND dirty, PUT the new
     *  values first, then POST /send. */
    send(row: RecipeData): void;
    /** Persist-if-dirty + dispatch. Surfaces a single toast on completion. */
    private runSend;
    /** Build a values_json object from the form, restricted to the recipe's
     *  schema keys. Missing keys fall back to the previously-saved value
     *  (defensive — the form shouldn't have gaps, but the validator on the
     *  server requires every schema key present). */
    private snapshotValues;
    private fetch;
    trackById: (_: number, row: RecipeData) => string;
    trackByKey: (_: number, el: RecipeElement) => string;
    private idOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeTableWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeTableWidgetComponent, "tb-recipe-table-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
