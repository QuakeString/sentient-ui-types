import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
export interface ReportHeaderWidgetSettings {
    title: string;
    titleFont: Font;
    titleColor: string;
    titleAlignment: 'left' | 'center' | 'right';
    showLogo: boolean;
    logoUrl: string;
    logoPosition: 'left' | 'right';
    logoMaxHeight: number;
    showDate: boolean;
    dateFormat: string;
    dateFont: Font;
    dateColor: string;
    showPageNumber: boolean;
    pageNumberFormat: string;
    pageNumberFont: Font;
    pageNumberColor: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const reportHeaderWidgetDefaultSettings: ReportHeaderWidgetSettings;
