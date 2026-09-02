import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
/** Value data type written by the selected option (matches the option values). */
export declare enum OptionGroupValueType {
    STRING = "string",
    INTEGER = "integer",
    DOUBLE = "double",
    BOOLEAN = "boolean"
}
/** A single radio option: the operator sees `label`, the device gets `value`. */
export interface OptionGroupOption {
    label: string;
    value: any;
}
/** Where the option list comes from. */
export declare enum OptionGroupOptionsSource {
    static = "static",
    /** Populate from a device attribute/telemetry key holding a JSON array of options. */
    entity = "entity"
}
/** Radio button layout. */
export declare enum OptionGroupOrientation {
    vertical = "vertical",
    horizontal = "horizontal"
}
export interface OptionGroupWidgetSettings {
    initialState: GetValueSettings<any>;
    disabledState: GetValueSettings<boolean>;
    onSelect: SetValueSettings;
    valueType: OptionGroupValueType;
    optionsSource: OptionGroupOptionsSource;
    options: OptionGroupOption[];
    optionsState: GetValueSettings<any>;
    appearance: OptionGroupAppearance;
    background: BackgroundSettings;
    padding: string;
}
export interface OptionGroupAppearance {
    label: string;
    showLabel: boolean;
    labelFont: Font;
    labelColor: string;
    optionFont: Font;
    optionColor: string;
    selectedColor: string;
    orientation: OptionGroupOrientation;
}
export declare const optionGroupDefaultAppearance: OptionGroupAppearance;
export declare const optionGroupDefaultSettings: OptionGroupWidgetSettings;
