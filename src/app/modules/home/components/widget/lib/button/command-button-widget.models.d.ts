import { WidgetButtonAppearance } from '@shared/components/button/widget-button.models';
import { GetValueSettings, SetValueSettings } from '@shared/models/action-widget-settings.models';
export interface CommandButtonWidgetSettings {
    appearance: WidgetButtonAppearance;
    onClickState: SetValueSettings;
    /** Momentary (push-button) pair: fired on pointer down / pointer up.
     *  Default: do nothing — configure both (e.g. Execute RPC true/false)
     *  to use the button as a momentary control instead of On click. */
    onPressState: SetValueSettings;
    onReleaseState: SetValueSettings;
    disabledState: GetValueSettings<boolean>;
}
export declare const momentaryStateDefault: (constantValue: boolean) => SetValueSettings;
export declare const commandButtonDefaultSettings: CommandButtonWidgetSettings;
