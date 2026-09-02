import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
/**
 * single   — one checkbox bound to a boolean value.
 * multiple — several checkboxes bit-coded into one integer (each box is a bit;
 *            checked boxes are OR'd together — WinCC "Selected Boxes" bitmask).
 */
export declare enum CheckboxSelectionMode {
    single = "single",
    multiple = "multiple"
}
/** A bit-coded checkbox: the operator sees `label`, it maps to bit `bit` of the value. */
export interface CheckboxOption {
    label: string;
    bit: number;
}
/** Radio/checkbox layout. */
export declare enum CheckboxOrientation {
    vertical = "vertical",
    horizontal = "horizontal"
}
export interface CheckboxWidgetSettings {
    selectionMode: CheckboxSelectionMode;
    initialState: GetValueSettings<any>;
    disabledState: GetValueSettings<boolean>;
    onChange: SetValueSettings;
    singleLabel: string;
    options: CheckboxOption[];
    appearance: CheckboxAppearance;
    background: BackgroundSettings;
    padding: string;
}
export interface CheckboxAppearance {
    label: string;
    showLabel: boolean;
    labelFont: Font;
    labelColor: string;
    optionFont: Font;
    optionColor: string;
    checkedColor: string;
    orientation: CheckboxOrientation;
}
export declare const checkboxDefaultAppearance: CheckboxAppearance;
export declare const checkboxDefaultSettings: CheckboxWidgetSettings;
