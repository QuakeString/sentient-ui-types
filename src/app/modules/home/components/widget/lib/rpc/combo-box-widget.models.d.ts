import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
/** Value data type stored by the combo box (matches the option values). */
export declare enum ComboBoxValueType {
    STRING = "string",
    INTEGER = "integer",
    DOUBLE = "double",
    BOOLEAN = "boolean"
}
/** A single selectable entry: the operator sees `label`, the device gets `value`. */
export interface ComboBoxOption {
    label: string;
    value: any;
}
/** Where the option list comes from. */
export declare enum ComboBoxOptionsSource {
    static = "static",
    /** Populate from a device attribute/telemetry key holding a JSON array of options. */
    entity = "entity"
}
export interface ComboBoxWidgetSettings {
    initialState: GetValueSettings<any>;
    disabledState: GetValueSettings<boolean>;
    onSelect: SetValueSettings;
    valueType: ComboBoxValueType;
    optionsSource: ComboBoxOptionsSource;
    options: ComboBoxOption[];
    /**
     * Read action returning the option list when optionsSource = entity. The value is a JSON
     * array — either of `{label, value}` objects, of primitives (label = value), or a
     * `{ label: value }` map.
     */
    optionsState: GetValueSettings<any>;
    appearance: ComboBoxAppearance;
    background: BackgroundSettings;
    padding: string;
}
export interface ComboBoxAppearance {
    label: string;
    showLabel: boolean;
    labelFont: Font;
    labelColor: string;
    valueFont: Font;
    valueColor: string;
    comboBoxBackground: string;
    showBorder: boolean;
    borderColor: string;
}
export declare const comboBoxDefaultAppearance: ComboBoxAppearance;
export declare const comboBoxDefaultSettings: ComboBoxWidgetSettings;
