import { BackgroundSettings, cssUnit, Font } from '@shared/models/widget-settings.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
export interface LabelCardWidgetSettings {
    autoScale: boolean;
    label: string;
    labelFont: Font;
    labelColor: ThemeAwareColor;
    showIcon: boolean;
    icon: string;
    iconSize: number;
    iconSizeUnit: cssUnit;
    iconColor: ThemeAwareColor;
    background: BackgroundSettings;
    padding: string;
}
export declare const labelCardWidgetDefaultSettings: LabelCardWidgetSettings;
