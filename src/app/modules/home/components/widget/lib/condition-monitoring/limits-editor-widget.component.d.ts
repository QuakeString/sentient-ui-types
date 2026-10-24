import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetContext } from '@home/models/widget-component.models';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { EntityId } from '@shared/models/id/entity-id';
import { LimitSuggestion, ZonePreset } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface LimitsEditorWidgetSettings {
    kind: 'limitsEditor';
    /** Keys to set limits for; empty = the widget's data keys. */
    keys: string;
    /** Default zone preset for the suggestion (empty = statistics only). */
    zonePreset: string;
    /** Days of history the assistant looks at. */
    days: number;
    /** Where the limits are stored; shared attributes also reach the device. */
    scope: 'SHARED_SCOPE' | 'SERVER_SCOPE';
}
export declare const limitsEditorDefaultSettings: LimitsEditorWidgetSettings;
interface LimitRow {
    key: string;
    label: string;
    operational: number | null;
    warning: number | null;
    critical: number | null;
    suggestion?: LimitSuggestion;
}
/** Limits editor with the threshold assistant: per key, the stored warning
 *  and critical limits next to limits suggested from the key's own history
 *  and, when a zone preset is picked, capped by that standard. Accept per
 *  key, edit, save. Works for any numeric key. */
export declare class LimitsEditorWidgetComponent implements OnInit, OnDestroy {
    widgetComponent: WidgetComponent;
    private store;
    private cd;
    ctx: WidgetContext;
    settings: LimitsEditorWidgetSettings;
    entity: EntityId | null;
    rows: LimitRow[];
    /** No reading has a warning or critical limit yet: say what to do. */
    get noLimitsYet(): boolean;
    readonly columns: string[];
    readonly trackKey: (_: number, r: LimitRow) => string;
    zonePresets: ZonePreset[];
    zonePreset: string;
    days: number;
    loadingSuggestions: boolean;
    saving: boolean;
    dirty: boolean;
    /** Also write the limits to the sensor under its own threshold names (devices only). */
    pushToSensor: boolean;
    private api;
    private destroy$;
    constructor(widgetComponent: WidgetComponent, store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    /** The limits belong to a sensor (a device), so they can be sent to it. */
    get isSensor(): boolean;
    setPushToSensor(on: boolean): void;
    ngOnDestroy(): void;
    onDataUpdated(): void;
    suggest(): void;
    accept(r: LimitRow): void;
    acceptAll(): void;
    edit(r: LimitRow, field: 'operational' | 'warning' | 'critical', value: string): void;
    invalid(r: LimitRow): boolean;
    get canSave(): boolean;
    save(): void;
    hours(ms: number): number;
    private keys;
    private round;
    private parse;
    static ɵfac: i0.ɵɵFactoryDeclaration<LimitsEditorWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LimitsEditorWidgetComponent, "st-limits-editor-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
