import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { StTableConfig, StTableData, StTableRow, StTableColumn } from "../../models/st-chart.models";
import { DatePipe } from "@angular/common";
import { EntityService } from "@core/http/entity.service";
import * as i0 from "@angular/core";
/**
 * Sentient Time Series Table Component
 *
 * A static table component for displaying time series data in reports.
 * Features:
 * - Timestamp column with configurable format
 * - Multiple data key columns
 * - Configurable styling (header, rows, borders)
 * - Zebra striping
 * - Pagination (for preview)
 * - Sorting
 */
export declare class StTimeSeriesTableComponent implements OnInit, OnDestroy, OnChanges {
    private cd;
    private datePipe;
    private entityService;
    /**
     * Table configuration
     */
    config: StTableConfig;
    /**
     * Table data
     */
    data: StTableData;
    /**
     * Show loading indicator
     */
    loading: boolean;
    /**
     * Skeleton mode - show only structure without data
     */
    skeletonMode: boolean;
    /**
     * Timewindow text to display
     */
    timewindowText: string;
    /**
     * Entity name for variable substitution (passed from parent when resolved)
     */
    entityName: string;
    /**
     * Entity label for variable substitution (passed from parent when resolved)
     */
    entityLabel: string;
    /**
     * Emitted when table is rendered
     */
    tableRendered: EventEmitter<void>;
    displayColumns: StTableColumn[];
    displayRows: StTableRow[];
    /**
     * Cached device name for device type datasources (looked up via EntityService)
     */
    private cachedDeviceName;
    /**
     * Last device ID that was looked up (to avoid redundant lookups)
     */
    private lastLookedUpDeviceId;
    /**
     * Destroy subject for cleanup
     */
    private destroy$;
    constructor(cd: ChangeDetectorRef, datePipe: DatePipe, entityService: EntityService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Look up device name via EntityService if we have a deviceId but no name.
     * This allows the table to resolve ${entityName} even when entityName input is not provided.
     */
    private lookupDeviceNameIfNeeded;
    /**
     * Update displayed columns and rows
     */
    private updateDisplay;
    /**
     * Get sort column from columnsConfig
     */
    private get sortBy();
    /**
     * Get sort order from columnsConfig
     */
    private get sortOrder();
    /**
     * Sort rows based on sortBy and sortOrder settings
     */
    private sortRows;
    /**
     * Build columns from configuration
     */
    private buildColumns;
    /**
     * Generate sample rows for skeleton mode
     */
    private generateSampleRows;
    /**
     * Format timestamp using configured format
     */
    formatTimestamp(timestamp: number): string;
    /**
     * Format value with decimals and unit
     */
    formatValue(value: number | string | null, col: StTableColumn): string;
    /**
     * Check if timestamp column should be shown
     */
    get showTimestampColumn(): boolean;
    /**
     * Get the timestamp column label
     */
    get timestampLabel(): string;
    /**
     * Get timestamp column settings
     */
    private get timestampSettings();
    /**
     * Get timestamp header cell styles
     */
    get timestampHeaderCellStyles(): {
        [key: string]: string;
    };
    /**
     * Get timestamp data cell styles
     */
    getTimestampCellStyles(rowIndex?: number): {
        [key: string]: string;
    };
    /**
     * Get total column count (including timestamp)
     */
    get totalColumns(): number;
    get containerStyles(): {
        [key: string]: string;
    };
    get titleStyles(): {
        [key: string]: string;
    };
    private get tableHeadingConfig();
    get showTableHeading(): boolean;
    get tableHeadingText(): string;
    get tableHeadingStyles(): {
        [key: string]: string;
    };
    get tableHeadingTextStyles(): {
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
    get headerCellStyles(): {
        [key: string]: string;
    };
    getHeaderCellStyle(col: StTableColumn & {
        settings?: any;
    }): {
        [key: string]: string;
    };
    get cellStyles(): {
        [key: string]: string;
    };
    getCellStyle(col: StTableColumn & {
        settings?: any;
    }, rowIndex?: number, cellValue?: number | string | null): {
        [key: string]: string;
    };
    /**
     * Get threshold style for a given value
     * Checks each threshold's logic operator against the value
     */
    private getThresholdStyle;
    getRowStyles(index: number): {
        [key: string]: string;
    };
    /**
     * Get zebra striping settings from data keys
     */
    private getZebraStripingSettings;
    /**
     * Adjust a color by darkening or brightening by a given amount (0-1)
     */
    private adjustColor;
    /**
     * Brighten a color by a given amount (0-1)
     */
    private brightenColor;
    /**
     * Darken a color by a given amount (0-1)
     */
    private darkenColor;
    static ɵfac: i0.ɵɵFactoryDeclaration<StTimeSeriesTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StTimeSeriesTableComponent, "st-time-series-table", never, { "config": { "alias": "config"; "required": false; }; "data": { "alias": "data"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; "timewindowText": { "alias": "timewindowText"; "required": false; }; "entityName": { "alias": "entityName"; "required": false; }; "entityLabel": { "alias": "entityLabel"; "required": false; }; }, { "tableRendered": "tableRendered"; }, never, never, false, never>;
}
