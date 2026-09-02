import { EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { StTableConfig } from "../../models/st-chart.models";
import { DatePipe } from "@angular/common";
import { AlarmSeverity, AlarmStatus } from "@shared/models/alarm.models";
import * as i0 from "@angular/core";
/**
 * Demo alarm data row
 */
interface DemoAlarmRow {
    createdTime: number;
    originator: string;
    type: string;
    severity: AlarmSeverity;
    status: AlarmStatus;
    assignee: string;
    [key: string]: any;
}
/**
 * Column configuration for alarm table
 */
interface AlarmColumn {
    key: string;
    label: string;
    align?: string;
    settings?: any;
}
/**
 * Sentient Alarm Table Component
 *
 * A static table component for displaying alarm data in reports.
 * Features:
 * - Alarm columns: createdTime, originator, type, severity, status, assignee
 * - Configurable styling (header, rows, borders)
 * - Zebra striping
 * - Severity color coding
 */
export declare class StAlarmTableComponent implements OnInit, OnDestroy, OnChanges {
    private cd;
    private datePipe;
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
    displayColumns: AlarmColumn[];
    displayRows: DemoAlarmRow[];
    private destroy$;
    constructor(cd: ChangeDetectorRef, datePipe: DatePipe);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Update displayed columns and rows
     */
    private updateDisplay;
    /**
     * Get alarm filter config from the configuration
     */
    private get alarmFilterConfig();
    /**
     * Apply alarm filter to demo alarms
     */
    private applyAlarmFilter;
    /**
     * Check if an alarm status matches the search status filter
     * AlarmSearchStatus maps to AlarmStatus as follows:
     * - ANY: matches all
     * - ACTIVE: matches ACTIVE_UNACK and ACTIVE_ACK
     * - CLEARED: matches CLEARED_UNACK and CLEARED_ACK
     * - ACK: matches ACTIVE_ACK and CLEARED_ACK
     * - UNACK: matches ACTIVE_UNACK and CLEARED_UNACK
     */
    private matchesStatusFilter;
    /**
     * Apply sorting to displayRows based on columnsConfig
     */
    private applySorting;
    /**
     * Build columns from configuration
     */
    private buildColumns;
    /**
     * Format timestamp using format from columnsConfig
     */
    formatTimestamp(timestamp: number): string;
    /**
     * Format severity for display
     */
    formatSeverity(severity: AlarmSeverity): string;
    /**
     * Get severity text styles
     */
    getSeverityStyles(severity: AlarmSeverity): {
        [key: string]: string;
    };
    /**
     * Format status for display
     */
    formatStatus(status: AlarmStatus): string;
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
    getHeaderCellStyle(col: AlarmColumn): {
        [key: string]: string;
    };
    getRowStyles(index: number): {
        [key: string]: string;
    };
    getCellStyle(col: AlarmColumn, _rowIndex: number, value: any, row?: DemoAlarmRow): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<StAlarmTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StAlarmTableComponent, "st-alarm-table", never, { "config": { "alias": "config"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "skeletonMode": { "alias": "skeletonMode"; "required": false; }; }, { "tableRendered": "tableRendered"; }, never, never, false, never>;
}
export {};
