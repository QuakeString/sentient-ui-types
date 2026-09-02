import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StAxisConfig, StAxisSettings } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Axis Configuration Component
 *
 * Handles X and Y axis configuration for line/bar charts.
 * Can show both axes or a single axis based on 'axis' input.
 */
export declare class StAxisConfigComponent implements OnInit, OnChanges {
    config: StAxisConfig;
    showAxis: 'x' | 'y' | 'both';
    configChange: EventEmitter<StAxisConfig>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Handle axis setting changes
     */
    onAxisChange(axis: 'x' | 'y', key: keyof StAxisSettings, value: any): void;
    /**
     * Handle range changes (min/max) with auto support
     */
    onRangeChange(axis: 'x' | 'y', key: 'min' | 'max', value: string): void;
    private emitChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<StAxisConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StAxisConfigComponent, "st-axis-config", never, { "config": { "alias": "config"; "required": false; }; "showAxis": { "alias": "showAxis"; "required": false; }; }, { "configChange": "configChange"; }, never, never, false, never>;
}
