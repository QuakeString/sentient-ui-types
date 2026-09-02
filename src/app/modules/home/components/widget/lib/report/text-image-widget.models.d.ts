import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
export interface TextImageWidgetSettings {
    text: string;
    textFont: Font;
    textColor: string;
    imageUrl: string;
    imagePosition: 'left' | 'right';
    imageWidth: number;
    imageAlt: string;
    imageFit: 'contain' | 'cover' | 'fill';
    gap: number;
    verticalAlign: 'top' | 'center' | 'bottom';
    background: BackgroundSettings;
    padding: string;
}
export declare const textImageWidgetDefaultSettings: TextImageWidgetSettings;
