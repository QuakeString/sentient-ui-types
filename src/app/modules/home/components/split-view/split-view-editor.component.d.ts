import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '@core/core.state';
import { Dashboard } from '@shared/models/dashboard.models';
import { SplitViewConfig, SplitViewLayout, SplitViewLayoutDef, SplitViewPage } from '@shared/models/split-view.models';
import { SplitViewSlideshowChoice } from './split-view-settings-dialog.component';
import * as i0 from "@angular/core";
export interface SplitViewEditorResult {
    title: string;
    description: string;
    config: SplitViewConfig;
}
type SlideshowChoice = SplitViewSlideshowChoice;
interface EditorDivider {
    kind: 'cols' | 'rows';
    index: number;
    key: string;
    /** Position of the divider, percent along the grid. */
    value: number;
    style: {
        [key: string]: string;
    };
}
export declare class SplitViewEditorComponent implements OnInit {
    private store;
    private translate;
    private dialog;
    private cd;
    dashboard: Dashboard;
    config: SplitViewConfig;
    saving: boolean;
    save: EventEmitter<SplitViewEditorResult>;
    cancelled: EventEmitter<void>;
    dirtyChange: EventEmitter<boolean>;
    readonly splitIcon = "view_quilt";
    readonly layouts: SplitViewLayoutDef[];
    readonly minSeconds = 10;
    readonly maxSeconds = 3600;
    draft: SplitViewConfig;
    title: string;
    description: string;
    pageIndex: number;
    renamingPageId: string;
    slideshowChoice: SlideshowChoice;
    customSeconds: number;
    dashboardsScope: 'tenant' | 'customer';
    customerId: string;
    private initial;
    private dirty;
    constructor(store: Store<AppState>, translate: TranslateService, dialog: MatDialog, cd: ChangeDetectorRef);
    ngOnInit(): void;
    get page(): SplitViewPage;
    get customInvalid(): boolean;
    get canSave(): boolean;
    layoutDef(page: SplitViewPage): SplitViewLayoutDef;
    frs(values: number[]): string;
    pageGrid(page: SplitViewPage): {
        [key: string]: string;
    };
    /** The page's pane sizes (or the layout's), as shares adding up to 1. */
    private fractions;
    /** Draggable dividers between the panes, placed over the grid's gaps. */
    dividers(page: SplitViewPage): EditorDivider[];
    dividerLabel(divider: EditorDivider): string;
    /** Drag a divider: the two panes beside it share their space differently. */
    startResize(event: PointerEvent, divider: EditorDivider): void;
    /** Arrow keys move a focused divider by 2%; Home / End go to the limits. */
    dividerKey(event: KeyboardEvent, divider: EditorDivider): void;
    /** Double-click a divider: back to the layout's own sizes. */
    resetSizes(page: SplitViewPage): void;
    private setFractions;
    changed(): void;
    setLayout(layout: SplitViewLayout): void;
    setPaneDashboard(index: number, dashboardId: string | null): void;
    setPaneState(index: number, stateId: string | null): void;
    selectPage(index: number): void;
    addPage(): void;
    startRename(page: SplitViewPage): void;
    finishRename(page: SplitViewPage, value: string): void;
    movePage(index: number, delta: number): void;
    deletePage(index: number): void;
    /** The split view's settings (top bar, panes, time window, slideshow), like the dashboard's settings dialog. */
    openSettings(): void;
    onSave(): void;
    private result;
    private snapshot;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewEditorComponent, "st-split-view-editor", never, { "dashboard": { "alias": "dashboard"; "required": false; }; "config": { "alias": "config"; "required": false; }; "saving": { "alias": "saving"; "required": false; }; }, { "save": "save"; "cancelled": "cancelled"; "dirtyChange": "dirtyChange"; }, never, never, true, never>;
}
export {};
