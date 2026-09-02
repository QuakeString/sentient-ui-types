import { ChangeDetectorRef, DestroyRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, ElementRef, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import { ReportService } from '@core/http/report.service';
import { DeviceService } from '@core/http/device.service';
import { EntityService } from '@core/http/entity.service';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { ReportTemplate } from '@home/pages/reporting/models/report.models';
import { MatIconButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { ScriptArgumentRow } from './script-argument-panel.component';
import * as i0 from "@angular/core";
/** Starter program shown for a fresh SCRIPT template. */
export declare const DEFAULT_REPORT_SCRIPT = "// Report script (Rhai) \u2014 runs on the server when the report generates.\n// The output follows the code: build a workbook for Excel, or call csv(text).\n// Explicit markers pdf() / xlsx() / ods() each add one output \u2014 more than\n// one and the report is delivered as a zip of all of them.\n\nlet wb = workbook();\nlet sh = wb.sheet(\"REPORT\");\n\nsh.merge(0, 0, 0, 3, ctx.templateName, #{bold: true, fontSize: 14, align: \"center\", bg: \"#DCE6F1\"});\nsh.row(1, [\"Generated\", fmt_ts(ctx.endTs, ctx.timezone)], #{italic: true});\n\n// Declared arguments (the panel above) arrive as plain variables:\n//   a \"timeseries\" argument  -> array of #{ts, value}\n//   a \"latest\" argument      -> the value itself\n//   a \"timeseriesSampled\" one-> rows of #{ts, <key>: value, ...} on a fixed grid\n//   a \"batches\" argument     -> array of batch row maps\n// Ad-hoc fetches also work: latest(\"press_6\", [\"Inlet_Temp\"]), timeseries(...), batches(...).\n";
interface ScriptDebugSheet {
    name: string;
    rows: number;
    cols: number;
    preview: string[][];
}
export interface ScriptDebugResult {
    success: boolean;
    error?: string;
    output?: string;
    durationMs: number;
    sheets: ScriptDebugSheet[];
    csvPreview?: string;
}
/**
 * SCRIPT-template panel EMBEDDED IN THE REPORT BUILDER (which supplies the
 * shared toolbar — settings, aliases, filters, versions, save, fullscreen).
 * Hosts the platform script IDE (tb-js-func: rhai highlighting, tidy,
 * completion) with live tenant completions and the CF-style server-side
 * test panel. The builder calls buildConfiguration() on save and
 * testScript() from its toolbar.
 */
export declare class ScriptReportEditorComponent implements OnInit, OnChanges {
    private fb;
    private cd;
    private destroyRef;
    private renderer;
    private viewContainerRef;
    private popoverService;
    private reportService;
    private deviceService;
    private entityService;
    private calculatedFieldsService;
    template: ReportTemplate;
    dirtyChange: EventEmitter<boolean>;
    testing: boolean;
    debugResult: ScriptDebugResult | null;
    debugOpen: boolean;
    readonly ScriptLanguage: typeof ScriptLanguage;
    readonly functionArgs: string[];
    scriptControl: FormControl<string>;
    /** The visual editor's timewindow object (same dialog, same shape). */
    timewindowControl: FormControl<any>;
    argumentsExpanded: boolean;
    /** Declared arguments (CF pattern): prefetched, injected as variables. */
    arguments: ScriptArgumentRow[];
    readonly argumentColumns: string[];
    readonly ScriptArgumentTypeTranslations: Map<import("./script-argument-panel.component").ScriptArgumentType, string>;
    private popoverComponent;
    debugPanelEl: ElementRef<HTMLElement>;
    editorCompleter: TbEditorCompleter;
    constructor(fb: FormBuilder, cd: ChangeDetectorRef, destroyRef: DestroyRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, popoverService: TbPopoverService, reportService: ReportService, deviceService: DeviceService, entityService: EntityService, calculatedFieldsService: CalculatedFieldsService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private writeFromTemplate;
    /** Stored timewindow, or one synthesized from the legacy windowMs field. */
    private initialTimewindow;
    private staticCompletions;
    private deviceNames;
    private deviceIdsByName;
    private definitionNames;
    private keyCompletions;
    private loadDynamicCompletions;
    /** Keys of every device NAME the script currently mentions. */
    private refreshKeyCompletions;
    private rebuildCompleter;
    /** Assemble the SCRIPT template configuration (called by the builder's
     *  save/generate flows). */
    buildConfiguration(): any;
    private definitionChoices;
    manageArgument($event: Event, matButton: MatIconButton, argument?: ScriptArgumentRow | null): void;
    deleteArgument($event: Event, argument: ScriptArgumentRow): void;
    private scrollDebugIntoView;
    /** The entity/definition the argument reads from (Source column). */
    argumentEntityLabel(a: ScriptArgumentRow): string;
    /** The key(s) the argument carries (Key column, chip). */
    argumentKeysLabel(a: ScriptArgumentRow): string;
    argumentSource(a: ScriptArgumentRow): string;
    /** Debug-run the script server-side: errors + output preview, no job. */
    testScript(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScriptReportEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScriptReportEditorComponent, "tb-script-report-panel", never, { "template": { "alias": "template"; "required": false; }; }, { "dirtyChange": "dirtyChange"; }, never, never, false, never>;
}
export {};
