import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { StTableConfig } from "../../models/st-chart.models";
import * as i0 from "@angular/core";
/**
 * Demo entity data row
 */
interface DemoEntityRow {
    entityName: string;
    entityLabel: string;
    entityType: string;
    [key: string]: any;
}
/**
 * Column configuration for entity table
 */
interface EntityColumn {
    key: string;
    label: string;
    align?: string;
    settings?: any;
}
/**
 * Sentient Entity Table Component
 *
 * A static table component for displaying entity data in reports.
 * Features:
 * - Entity columns: entityName, entityLabel, entityType, and custom attributes
 * - Configurable styling (header, rows, borders)
 * - Zebra striping
 * - No timestamp column (unlike alarm table)
 */
export declare class StEntityTableComponent implements OnInit, OnDestroy, OnChanges {
    private cd;
    /**
     * Table configuration
     */
    config: StTableConfig;
    /**
     * Show loading indicator
     */
    loading: boolean;
    /**
     * Skeleton mode - show only structure with demo data
     */
    skeletonMode: boolean;
    /**
     * Emitted when table is rendered
     */
    tableRendered: EventEmitter<void>;
    displayColumns: EntityColumn[];
    displayRows: DemoEntityRow[];
    private destroy$;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Update displayed columns and rows
     */
    private updateDisplay;
    /**
     * Apply sorting to displayRows based on columnsConfig
     */
    private applySorting;
    /**
     * Build columns from configuration
     */
    private buildColumns;
    private get columnsConfig();
    private get tableHeadingConfig();
    get showTableHeading(): boolean;
    get tableHeadingText(): string;
    get tableHeadingStyles(): {
        [key: string]: string;
    };
    get tableHeadingTextStyles(): {
        [key: string]: string;
    };
    get containerStyles(): {
        [key: string]: string;
    };
    get tableWrapperStyles(): {
        [key: string]: string;
    };
    get tableStyles(): {
        [key: string]: string;
    };
    get headerRowStyles(): {
        [key: string]: string;
    };
    getHeaderCellStyle(col: EntityColumn): {
        [key: string]: string;
    };
    getRowStyles(index: number): {
        [key: string]: string;
    };
    getCellStyle(col: EntityColumn, _rowIndex: number, _value: any): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StEntityTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StEntityTableComponent, "st-entity-table", never, { "config": { "alias": "config"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; }, { "tableRendered": "tableRendered"; }, never, never, false, never>;
}
export {};
