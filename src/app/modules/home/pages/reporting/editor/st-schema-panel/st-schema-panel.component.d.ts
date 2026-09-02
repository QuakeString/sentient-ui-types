import { EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { StSchemaPanel, StPropertyChangeEvent } from '../schemas/schema.types';
import { StChartConfig } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Component that renders a schema panel using tb-dynamic-form.
 * Handles the mapping between dot-notation property IDs and nested config paths.
 */
export declare class StSchemaPanelComponent implements OnChanges {
    private cd;
    /** The schema panel definition */
    panel: StSchemaPanel;
    /** The current widget configuration */
    config: StChartConfig;
    /** Emitted when a property value changes */
    propertyChange: EventEmitter<StPropertyChangeEvent>;
    /** The flattened form model for tb-dynamic-form */
    formModel: {
        [key: string]: any;
    };
    /** Properties with transformed IDs for tb-dynamic-form */
    transformedProperties: FormProperty[];
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Build the flat form model from the nested config.
     * Maps dot-notation property IDs to their values in the config.
     */
    private buildFormModel;
    /**
     * Transform properties to use underscore-based IDs for tb-dynamic-form.
     * tb-dynamic-form uses property IDs as form control names, and dots are not valid.
     */
    private transformProperties;
    /**
     * Convert dot-notation ID to form key (replace dots with underscores).
     */
    private toFormKey;
    /**
     * Convert form key back to dot-notation ID.
     */
    private toPropertyId;
    /**
     * Get a value from the config using a dot-notation path.
     * @param propertyId The dot-notation path (e.g., 'dividerConfig.color')
     */
    private getConfigValue;
    /**
     * Handle form model changes from tb-dynamic-form.
     * Detect which properties changed and emit events for them.
     */
    onFormModelChange(newModel: {
        [key: string]: any;
    }): void;
    /**
     * Check if the panel should be visible based on its condition.
     * Condition is a simple property check string like "model.sourceType === 'entityKey'"
     */
    isPanelVisible(): boolean;
    /**
     * Simple equality check for values.
     */
    private isEqual;
    static ɵfac: i0.ɵɵFactoryDeclaration<StSchemaPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StSchemaPanelComponent, "st-schema-panel", never, { "panel": { "alias": "panel"; "required": false; }; "config": { "alias": "config"; "required": false; }; }, { "propertyChange": "propertyChange"; }, never, never, false, never>;
}
