import { OnInit, OnDestroy, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatMiniFabButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { TbPopoverService } from '@shared/components/popover.service';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityService } from '@core/http/entity.service';
import { AnalyticsService } from '@core/http/analytics.service';
import { AnalyticsPipeline } from '@shared/models/analytics.models';
import { PipelineNodeDefinition, PipelineNodeCategory } from './pipeline-builder.models';
import { DebugEventType } from '@shared/models/event.models';
import { EntityId } from '@shared/models/id/entity-id';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
interface IPoint {
    x: number;
    y: number;
}
export interface CanvasNode {
    id: string;
    name: string;
    nodeType: string;
    configuration: any;
    category: PipelineNodeCategory;
    icon: string;
    position: IPoint;
    hasInput: boolean;
    hasOutput: boolean;
    debugSettings?: {
        failuresEnabled?: boolean;
        allEnabled?: boolean;
        allEnabledUntil?: number;
    };
    inputSchema?: string[];
    outputSchema?: string[];
}
export interface CanvasEdge {
    id: string;
    sourceNodeId: string;
    targetNodeId: string;
    label: string;
}
export declare class PipelineBuilderComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private analyticsService;
    private entityService;
    private dialog;
    private snackBar;
    private fb;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private store;
    pipeline: AnalyticsPipeline;
    pipelineId: string;
    isDirtyValue: boolean;
    isLoading: boolean;
    isFullscreen: boolean;
    nodes: CanvasNode[];
    edges: CanvasEdge[];
    selectedNodeIds: string[];
    selectedEdgeIds: string[];
    nodesByCategory: Map<PipelineNodeCategory, PipelineNodeDefinition[]>;
    categoryLabels: Record<PipelineNodeCategory, string>;
    categoryColors: Record<PipelineNodeCategory, string>;
    categories: PipelineNodeCategory[];
    filteredCategories: PipelineNodeCategory[];
    nodeSearchText: string;
    allPipelines: AnalyticsPipeline[];
    filteredPipelines: AnalyticsPipeline[];
    pipelineSearchText: string;
    categoryIcons: Record<string, string>;
    isEditingNode: boolean;
    editingNode: CanvasNode | null;
    private editingNodeOriginal;
    nodeFormGroup: UntypedFormGroup;
    selectedNodeTabIndex: number;
    editingNodeRuleConfig: any;
    showAdvancedJson: boolean;
    selectedEntityId: EntityId | null;
    allowedEntityTypes: EntityType[];
    dataKeyTypes: typeof DataKeyType;
    selectedBindingKind: 'device' | 'deviceProfile';
    selectedProfileId: EntityId | null;
    debugEventTypes: typeof DebugEventType;
    entityType: typeof EntityType;
    pipelineDebugEventTypes: DebugEventType[];
    pipelineEntityId: EntityId;
    isEditingEdge: boolean;
    editingEdge: CanvasEdge | null;
    private editingEdgeOriginal;
    edgeFormGroup: UntypedFormGroup;
    editingEdgeLabels: string[];
    editingEdgeSelectedLabels: string[];
    edgeLabelSearchCtrl: UntypedFormControl;
    filteredEdgeLabels$: Observable<string[]>;
    separatorKeyCodes: number[];
    edgeLabelInput: ElementRef<HTMLInputElement>;
    canvasContainer: ElementRef<HTMLElement>;
    enableHotKeys: boolean;
    sidebarOpen: boolean;
    canvasScale: number;
    canvasOffset: IPoint;
    private dragMode;
    private dragStart;
    private draggedNodes;
    private draggedNodesStart;
    selectionBox: {
        x: number;
        y: number;
        width: number;
        height: number;
    } | null;
    tempConnection: string | null;
    private connectingSourceNodeId;
    private ctrlClickedNodeId;
    private didDrag;
    private draggedPaletteDef;
    ctrlHeld: boolean;
    private nextId;
    private destroy$;
    onKeyDown(event: KeyboardEvent): void;
    onDocumentMouseMove(event: MouseEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    onDocumentMouseUp(event: MouseEvent): void;
    onDocumentTouchMove(event: TouchEvent): void;
    onDocumentTouchEnd(event: TouchEvent): void;
    /** Convert a TouchEvent to a synthetic MouseEvent-like object. */
    private touchToMouse;
    /** Handle touch start on the canvas — maps to mousedown logic. */
    onCanvasTouchStart(event: TouchEvent): void;
    get canvasTransform(): string;
    get selectionBoxStyle(): any;
    private maxDebugModeDuration;
    constructor(route: ActivatedRoute, router: Router, analyticsService: AnalyticsService, entityService: EntityService, dialog: MatDialog, snackBar: MatSnackBar, fb: UntypedFormBuilder, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, store: Store<AppState>);
    /** Transform types the backend build supports; null until loaded (= no gating). */
    supportedTransforms: Set<string> | null;
    isNodeUnavailable(def: PipelineNodeDefinition): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    filterNodes(): void;
    getFilteredDefs(category: PipelineNodeCategory): PipelineNodeDefinition[];
    getCategoryColor(category: PipelineNodeCategory): string;
    getNodeColor(node: CanvasNode): string;
    getNodeTypeName(node: CanvasNode): string;
    private screenToCanvas;
    onCanvasMouseDown(event: MouseEvent): void;
    onCanvasMouseMove(event: MouseEvent): void;
    onCanvasMouseUp(event: MouseEvent): void;
    onCanvasWheel(event: WheelEvent): void;
    private nodeIntersectsBox;
    private edgeIntersectsBox;
    getEdgePath(edge: CanvasEdge): string;
    getConnectorPosition(nodeId: string, side: 'input' | 'output'): IPoint | null;
    getEdgeLabelPosition(edge: CanvasEdge): IPoint;
    private createConnection;
    onPaletteDragStart(event: DragEvent, def: PipelineNodeDefinition): void;
    onCanvasDragOver(event: DragEvent): void;
    onCanvasDrop(event: DragEvent): void;
    isNodeSelected(node: CanvasNode): boolean;
    isEdgeSelected(edge: CanvasEdge): boolean;
    hasMultiSelection(): boolean;
    openNodeDetails(node: CanvasNode): void;
    openEdgeDetails(edge: CanvasEdge): void;
    getEditingEdgeSourceName(): string;
    getEditingEdgeTargetName(): string;
    selectEdgeLabel(event: MatAutocompleteSelectedEvent): void;
    addEdgeLabelFromInput(event: MatChipInputEvent): void;
    removeEdgeLabel(label: string): void;
    onEdgeLabelFocus(): void;
    private clearEdgeLabelInput;
    saveEditingEdge(): void;
    onEditEdgeClosed(): void;
    onRevertEdgeEdit(): void;
    onEdgeDetailsDrawerClosed(): void;
    get isEditingIONode(): boolean;
    get isEditingOutputNode(): boolean;
    getEditingNodeDef(): PipelineNodeDefinition | undefined;
    getEditingNodeSubtitle(): string;
    getNodeHelpDetails(): string;
    /**
     * Compute inputSchema and outputSchema for every node in the graph.
     * Uses topological sort so upstream schemas are computed before downstream.
     */
    propagateSchemas(): void;
    /**
     * Get telemetry keys configured in the analytics rule node (input node's data source).
     */
    private getInputNodeKeys;
    /**
     * After a new connection is created, auto-fill unconfigured input_key fields
     * on the target node from the upstream schema.
     */
    private autoFillOnConnect;
    hasAnyDebugEnabled(): boolean;
    resetDebugInAllNodes(): void;
    isNodeDebugActive(node: CanvasNode): boolean;
    private updatePipelineEntityId;
    saveEditingNode(): void;
    onEditNodeClosed(): void;
    onRevertNodeEdit(): void;
    onDetailsDrawerClosed(): void;
    deleteSingleEdge(edge: CanvasEdge): void;
    deleteSingleNode(node: CanvasNode): void;
    private getDrawerOffset;
    fitToPage(): void;
    resetZoom(): void;
    hasSelection(): boolean;
    deleteSelected(): void;
    runPanelOpen: boolean;
    runRangeHours: number;
    runInProgress: boolean;
    runPipelineNow(): void;
    scheduleMode: 'event_driven' | 'fixed_interval' | 'cron';
    scheduleIntervalMin: number;
    scheduleWindowMin: number;
    scheduleCron: string;
    get scheduleSummary(): string;
    onScheduleChanged(): void;
    private loadScheduleFromConfig;
    private scheduleToConfig;
    loadPipeline(): void;
    private loadDefaultGraph;
    private loadGraphFromConfig;
    save(): void;
    private savePipeline;
    private modelToConfiguration;
    revertChanges(): void;
    loadAllPipelines(): void;
    filterPipelines(): void;
    onPipelineMenuClosed(): void;
    switchPipeline(pipeline: AnalyticsPipeline): void;
    toggleVersionControl($event: Event, versionControlButton: MatMiniFabButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PipelineBuilderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PipelineBuilderComponent, "tb-pipeline-builder", never, {}, {}, never, never, false, never>;
}
export {};
