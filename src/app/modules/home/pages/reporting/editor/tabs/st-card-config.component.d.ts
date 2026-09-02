import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { StCardConfig } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Sentient Card Configuration Component
 *
 * Handles widget card/container settings like title, background, padding.
 * Styled to match ThingsBoard's widget-config component.
 */
export declare class StCardConfigComponent implements OnInit, OnChanges {
    private cd;
    config: StCardConfig;
    configChange: EventEmitter<StCardConfig>;
    shadowSizeOptions: {
        value: import("../../models/st-chart.models").StDropShadow;
        label: string;
    }[];
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Handle card setting changes
     */
    onCardChange(key: keyof StCardConfig, value: any): void;
    /**
     * Handle drop shadow toggle
     */
    onDropShadowToggle(enabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StCardConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StCardConfigComponent, "st-card-config", never, { "config": { "alias": "config"; "required": false; }; }, { "configChange": "configChange"; }, never, never, false, never>;
}
