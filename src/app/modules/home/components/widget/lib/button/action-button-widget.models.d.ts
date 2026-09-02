import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
export interface ActionButtonWidgetSettings {
    appearance: WidgetButtonAppearance;
    activatedState: GetValueSettings<boolean>;
    disabledState: GetValueSettings<boolean>;
    /** Momentary (push-button) pair: fired on pointer down / pointer up.
     *  Default: do nothing — the widget-action click stays the primary
     *  behavior unless these are configured. */
    onPressState: SetValueSettings;
    onReleaseState: SetValueSettings;
}
export declare const actionButtonDefaultSettings: ActionButtonWidgetSettings;
