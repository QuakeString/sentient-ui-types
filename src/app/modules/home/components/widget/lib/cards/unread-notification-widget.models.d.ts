import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
export interface UnreadNotificationWidgetSettings {
    maxNotificationDisplay: number;
    showCounter: boolean;
    counterValueFont: Font;
    counterValueColor: ThemeAwareColor;
    counterColor: ThemeAwareColor;
    enableViewAll: boolean;
    enableFilter: boolean;
    enableMarkAsRead: boolean;
    background: BackgroundSettings;
    padding: string;
}
export declare const unreadNotificationDefaultSettings: UnreadNotificationWidgetSettings;
