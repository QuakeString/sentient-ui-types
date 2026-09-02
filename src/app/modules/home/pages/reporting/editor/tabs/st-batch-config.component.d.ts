import { ChangeDetectorRef, DestroyRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Observable } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { MatIconButton } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { TbPopoverService } from '@shared/components/popover.service';
import { StBatchAnalysisConfig, StBatchDataset, StBatchDeviation, StBatchGroupBy, StBatchMetricRow, StBatchPhase, StBatchTrigger, StBatchContextField, StBatchIntegral, StBatchKeyGroup, StBatchCategorical, StSummaryMetricDef } from '../../models/st-chart.models';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { DeviceService } from '@core/http/device.service';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
/**
 * Batch Analysis configuration form.
 *
 * Guided editor for the lite analytics batch/session operator: when a batch
 * opens and closes (predicates edited in a dialog), per-batch metric rows,
 * guard thresholds, phases, deviation checks and the day/shift rollup.
 *
 * Two hosts share it:
 * - the EVENT calculated-field dialog (`definitionMode`), which binds it as a
 *   form control (CVA + validator, real disabling);
 * - the report builder's Batch tab (widget mode), which keeps the legacy
 *   `[config]` / `(configChange)` binding — that emitted
 *   `StBatchAnalysisConfig` shape stays backward-compatible.
 */
export declare class StBatchConfigComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    private fb;
    private cd;
    private destroyRef;
    private dialog;
    private translate;
    private popoverService;
    private viewContainerRef;
    private renderer;
    private calculatedFieldsService;
    private deviceService;
    config: StBatchAnalysisConfig;
    availableKeys: string[];
    /** True when editing an EVENT definition (CF dialog) rather than a report
     *  widget: hides the widget-only source/dataset chooser. */
    definitionMode: boolean;
    /** Widget mode: the datasource device id, for listing its EVENT definitions. */
    entityUuid: string | null;
    /** Device the key chips list can suggest keys from. Null for a
     *  profile-bound definition (suggestions come from availableKeys on the
     *  single-key fields; the chips list then accepts free entry only). */
    keyEntityId: EntityId | null;
    /** Widget mode: the widget's time window (stored in its data config). */
    timewindow: any;
    /** Widget mode: the chosen device changed. */
    entityChange: EventEmitter<string>;
    /** Widget mode: the time window changed. */
    timewindowChange: EventEmitter<any>;
    configChange: EventEmitter<StBatchAnalysisConfig>;
    /** Widget mode: the form's validity, so the host can gate its Apply button
     *  the same way the dashboard widget editor does.
     *
     *  Deliberately ASYNC: the first emission happens in our ngOnInit, which
     *  Angular runs after the host has already checked its own action-bar
     *  bindings in the same pass. A synchronous emitter would flip the host's
     *  Apply state mid-pass and trip ExpressionChangedAfterItHasBeenChecked. */
    validChange: EventEmitter<boolean>;
    readonly EntityTypeRef: typeof EntityType;
    readonly dataKeyTypes: typeof DataKeyType;
    readonly BatchDatasetTranslations: Map<StBatchDataset, string>;
    readonly BatchGroupByTranslations: Map<StBatchGroupBy, string>;
    readonly BatchMetricFnTranslations: Map<import("../../models/st-chart.models").StBatchMetricFn, string>;
    readonly BatchSummaryMetricTranslations: Map<string, string>;
    readonly BatchColumnSummaryTranslations: Map<string, string>;
    readonly BatchContextCaptureTranslations: Map<import("../../models/st-chart.models").StBatchContextCapture, string>;
    readonly datasets: StBatchDataset[];
    readonly groupByOptions: StBatchGroupBy[];
    readonly summaryMetricOptions: string[];
    readonly columnSummaryOptions: string[];
    disabled: boolean;
    batchForm: FormGroup<{
        datasetName: FormControl<"detail" | "summary" | "batches" | "rollup">;
        eventDefinitionId: FormControl<string>;
        summary: FormGroup<{
            bucket: FormControl<"shift" | "period">;
            metrics: FormControl<string[]>;
        }>;
        period: FormGroup<{
            anchor: FormControl<string>;
            lengthSec: FormControl<number>;
        }>;
        attribution: FormControl<"end" | "start">;
        restrictToTimeframe: FormControl<boolean>;
        open: FormControl<StBatchTrigger>;
        close: FormControl<StBatchTrigger>;
        guards: FormGroup<{
            minDurationSec: FormControl<number>;
            debounceSec: FormControl<number>;
            cooldownSec: FormControl<number>;
            maxGapSec: FormControl<number>;
        }>;
        detail: FormGroup<{
            enabled: FormControl<boolean>;
            intervalSec: FormControl<number>;
            keys: FormControl<string[]>;
        }>;
        rollup: FormGroup<{
            groupBy: FormControl<"shift" | "none" | "period">;
            timezone: FormControl<string>;
        }>;
        shifts: import("@angular/forms").FormArray<FormGroup<any>>;
        columns: import("@angular/forms").FormArray<FormGroup<any>>;
    }>;
    metricRows: StBatchMetricRow[];
    /** The definition's fleet-summary metric pack; empty = built-in defaults. */
    summaryMetricDefs: StSummaryMetricDef[];
    /** The batch metadata bag: context fields captured per batch. */
    contextFields: StBatchContextField[];
    /** Per-batch integrals (energy, amp-hours, lethality). */
    integrals: StBatchIntegral[];
    /** Probe/zone sets computed per member then reduced. */
    keyGroups: StBatchKeyGroup[];
    /** Categorical time maps. */
    categoricals: StBatchCategorical[];
    phases: StBatchPhase[];
    deviations: StBatchDeviation[];
    metricColumns: string[];
    readonly summaryMetricColumns: string[];
    readonly contextColumns: string[];
    readonly integralColumns: string[];
    readonly groupColumns: string[];
    readonly categoricalColumns: string[];
    readonly BatchIntegralKindTranslations: Map<import("../../models/st-chart.models").StBatchIntegralKind, string>;
    phaseColumns: string[];
    deviationColumns: string[];
    /** Widget mode: standalone controls — the device and the time window are the
     *  host's data-config state, not part of the batch config itself. */
    deviceControl: FormControl<any>;
    timewindowControl: FormControl<any>;
    /** EVENT definitions applicable to the datasource entity (own + profile). */
    eventDefinitions: Array<{
        id: string;
        name: string;
        owner: string;
    }>;
    private popoverComponent;
    private propagateChange;
    private lastEmitted;
    private lastValidity;
    /** Suppresses emission while a written value settles: nested value
     *  accessors (tb-time-unit-input) re-propagate synchronously during
     *  writeValue, which must not count as a user change. */
    private writing;
    /** Full EntityId for the device autocomplete — MEMOISED so the binding keeps
     *  a stable reference. A fresh object per change-detection pass makes the
     *  autocomplete see a "new" model every cycle and re-enter its load/emit
     *  path, which feeds back into config changes: a browser-freezing loop. */
    private deviceEntityIdCache;
    private deviceEntityIdFor;
    /** The selected definition's UI config (widget mode) — source of the
     *  producible field list for the column picker. */
    private definitionUiConfig;
    /** Widget mode: the metric choices the summary select offers — the chosen
     *  definition's pack, or the built-in six until one is loaded. */
    summaryMetricChoices: Array<{
        id: string;
        label: string;
    }>;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef, dialog: MatDialog, translate: TranslateService, popoverService: TbPopoverService, viewContainerRef: ViewContainerRef, renderer: Renderer2, calculatedFieldsService: CalculatedFieldsService, deviceService: DeviceService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(config: StBatchAnalysisConfig | null): void;
    registerOnChange(fn: (config: StBatchAnalysisConfig) => void): void;
    registerOnTouched(_fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    /** Whole-editor validity: the reactive form plus, in widget mode, the
     *  standalone device control (which lives outside `batchForm`). */
    get isValid(): boolean;
    private emitValidity;
    private writeForm;
    private assemble;
    private emitModel;
    /** Collections edited outside the form (popover tables) changed. */
    private collectionsChanged;
    get shiftsFormArray(): any;
    get columnsFormArray(): any;
    get showInlineConfig(): boolean;
    get datasetNameValue(): StBatchDataset;
    triggerSummary(which: 'open' | 'close'): string;
    editTrigger($event: Event, which: 'open' | 'close'): void;
    manageMetricRow($event: Event, matButton: MatIconButton, row?: StBatchMetricRow | null): void;
    deleteMetricRow($event: Event, row: StBatchMetricRow): void;
    manageSummaryMetric($event: Event, matButton: MatIconButton, metric?: StSummaryMetricDef | null): void;
    deleteSummaryMetric($event: Event, metric: StSummaryMetricDef): void;
    manageContextField($event: Event, matButton: MatIconButton, field?: StBatchContextField | null): void;
    deleteContextField($event: Event, field: StBatchContextField): void;
    manageIntegral($event: Event, matButton: MatIconButton, integral?: StBatchIntegral | null): void;
    deleteIntegral($event: Event, integral: StBatchIntegral): void;
    integralKindSummary(integral: StBatchIntegral): string;
    manageKeyGroup($event: Event, matButton: MatIconButton, group?: StBatchKeyGroup | null): void;
    deleteKeyGroup($event: Event, group: StBatchKeyGroup): void;
    manageCategorical($event: Event, matButton: MatIconButton, categorical?: StBatchCategorical | null): void;
    deleteCategorical($event: Event, categorical: StBatchCategorical): void;
    /** Seed the pack with the built-in six so they can be edited from a
     *  meaningful starting point instead of a blank list. */
    seedSummaryMetricsFromDefaults(): void;
    managePhase($event: Event, matButton: MatIconButton, phase?: StBatchPhase | null): void;
    deletePhase($event: Event, phase: StBatchPhase): void;
    phaseBoundaryText(phase: StBatchPhase, which: 'open' | 'close'): string;
    manageDeviation($event: Event, matButton: MatIconButton, deviation?: StBatchDeviation | null): void;
    deleteDeviation($event: Event, deviation: StBatchDeviation): void;
    deviationSetpointText(deviation: StBatchDeviation): string;
    private openRowPanel;
    private buildShiftGroup;
    addShift(): void;
    removeShift(index: number): void;
    shiftDrop(event: CdkDragDrop<string[]>): void;
    /**
     * Generate an evenly-spaced shift schedule (e.g. 3 × 8 h, 2 × 12 h) starting
     * at the period anchor. Shifts stay fully editable afterwards — this is just
     * a starting point for the common cases.
     */
    applyShiftPreset(count: number, hours: number): void;
    private toMinutes;
    private toHhmm;
    private buildColumnGroup;
    addColumn(): void;
    removeColumn(index: number): void;
    /** Identity for the column rows. Without it Angular rebuilds every row on
     *  any valueChanges: the toggle animation restarts on all rows (flicker) and
     *  a focused input is destroyed mid-typing, so only the first keystroke lands. */
    trackByControl(_index: number, control: AbstractControl): AbstractControl;
    columnDrop(event: CdkDragDrop<string[]>): void;
    /** Seed the layout with every field produced, keeping any headings already set. */
    fillColumns(): void;
    /** Every field the relevant configuration produces, for the column picker:
     *  this form's config in the CF editor, the selected definition's in widget
     *  mode.
     *
     *  Widget mode narrows the list to the dataset actually being rendered —
     *  `rollup` and `detail` have their own fixed shapes, so offering per-batch
     *  metric columns there would only invite dead columns. Pure: derived from
     *  the current form/definition state, no side effects.
     */
    /** Metric ids currently selected for the fleet summary. */
    summaryMetricsControlValue(): string[];
    get producedFields(): string[];
    /** Per-batch table columns — the only dataset a column layout re-projects. */
    private batchFields;
    /** Rollup summary columns — a fixed five, whatever the grouping. */
    private rollupFields;
    /** Sampled detail columns — the batch ordinal, the sample instant, then one
     *  column per sampled key (detail keys, else the definition's own keys). */
    private detailFields;
    /** Feed for the column field autocomplete. Bound as a property so the
     *  template can hand it over without a per-cycle `.bind(this)`. */
    fetchFieldOptions: (searchText?: string) => Observable<string[]>;
    get deviceEntityId(): any;
    private onDeviceChange;
    private onTimewindowChange;
    /**
     * EVENT definitions that apply to the datasource device: bound directly to
     * it, or to its device profile (profile definitions fan out to every device
     * of the profile).
     */
    private loadEventDefinitions;
    private builtinSummaryChoices;
    /** Load the chosen definition's config so the column picker can offer its
     *  producible fields and the summary select its metric pack. */
    private loadDefinitionFields;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBatchConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBatchConfigComponent, "st-batch-config", never, { "config": { "alias": "config"; "required": false; }; "availableKeys": { "alias": "availableKeys"; "required": false; }; "definitionMode": { "alias": "definitionMode"; "required": false; }; "entityUuid": { "alias": "entityUuid"; "required": false; }; "keyEntityId": { "alias": "keyEntityId"; "required": false; }; "timewindow": { "alias": "timewindow"; "required": false; }; }, { "entityChange": "entityChange"; "timewindowChange": "timewindowChange"; "configChange": "configChange"; "validChange": "validChange"; }, never, never, false, never>;
}
