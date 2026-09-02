import { FormProperty } from '@shared/models/dynamic-form.models';
import { StChartConfig } from '../../models/st-chart.models';
/**
 * Extended widget schema with tab support for the report widget editor.
 * This schema drives the dynamic form generation in st-edit-widget.
 */
export interface StWidgetSchema {
    /** Widget type this schema applies to (e.g., 'divider', 'created_time') */
    widgetType: string;
    /** Tabs to display in the editor (order matters) */
    tabs: StSchemaTab[];
    /** Default values for the entire config */
    defaults: Partial<StChartConfig>;
}
/**
 * A tab in the widget editor (e.g., Settings, Appearance, Layout)
 */
export interface StSchemaTab {
    /** Tab identifier (e.g., 'settings', 'appearance', 'layout') */
    id: string;
    /** Display name or translation key */
    name: string;
    /** Panels/groups within this tab */
    panels: StSchemaPanel[];
}
/**
 * A panel/group within a tab (renders as tb-form-panel)
 */
export interface StSchemaPanel {
    /** Panel title (translation key, optional) */
    title?: string;
    /** Whether the panel is collapsible */
    collapsible?: boolean;
    /** Whether the panel is expanded by default */
    expanded?: boolean;
    /** Properties in this panel (uses FormProperty[]) */
    properties: FormProperty[];
    /**
     * JavaScript condition for showing this panel.
     * Example: "return model.sourceType === 'entityKey';"
     * The 'model' variable contains the current config.
     */
    condition?: string;
}
/**
 * Property change event emitted by schema panel
 */
export interface StPropertyChangeEvent {
    /** The dot-notation property ID (e.g., 'dividerConfig.color') */
    propertyId: string;
    /** The new value */
    value: any;
}
