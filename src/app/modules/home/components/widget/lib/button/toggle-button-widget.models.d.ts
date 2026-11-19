import { ActionProtection } from '@shared/models/action-protection.models';
import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
import { BackgroundSettings } from '@shared/models/widget-settings.models';
export interface ToggleButtonWidgetSettings {
    /** Ask for a confirmation or a password before the widget writes. */
    protection?: ActionProtection;
    initialState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
    checkState: SetValueSettings;
    uncheckState: SetValueSettings;
    autoScale: boolean;
    horizontalFill: boolean;
    verticalFill: boolean;
    checkedAppearance: WidgetButtonAppearance;
    uncheckedAppearance: WidgetButtonAppearance;
    background: BackgroundSettings;
    padding: string;
}
export declare const toggleButtonDefaultSettings: ToggleButtonWidgetSettings;
