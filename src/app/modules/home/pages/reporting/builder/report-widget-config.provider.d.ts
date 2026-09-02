import { IAliasController } from '@core/api/widget-api.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { Widget } from '@shared/models/widget.models';
import { WidgetConfigMode, widgetType } from '@shared/models/widget.models';
import { WidgetConfigCallbacks } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
/**
 * This provider implements the interface expected by tb-datasource and tb-datasources components.
 * It allows us to use the exact same components from the dashboard widget editor in the report builder.
 *
 * The tb-datasource component injects WidgetConfigComponent and accesses:
 * - widgetEditMode: boolean
 * - widgetConfigMode: WidgetConfigMode
 * - widgetType: widgetType
 * - aliasController: IAliasController
 * - widgetConfigCallbacks: WidgetConfigCallbacks
 * - modelValue.typeParameters.*
 * - modelValue.dataKeySettingsForm
 * - modelValue.dataKeySettingsDirective
 * - modelValue.latestDataKeySettingsForm
 * - modelValue.latestDataKeySettingsDirective
 * - modelValue.dataKeySettingsFunction
 * - dashboard: Dashboard
 * - widget: Widget
 * - functionsOnly: boolean
 */
export declare class ReportWidgetConfigProvider {
    widgetConfigMode: WidgetConfigMode;
    widgetEditMode: boolean;
    widgetType: widgetType;
    functionsOnly: boolean;
    aliasController: IAliasController;
    dashboard: Dashboard;
    widget: Widget;
    widgetConfigCallbacks: WidgetConfigCallbacks;
    modelValue: {
        widgetType?: widgetType;
        typeParameters?: {
            maxDatasources?: number;
            maxDataKeys?: number;
            dataKeysOptional?: boolean;
            datasourcesOptional?: boolean;
            hasAdditionalLatestDataKeys?: boolean;
            supportsUnitConversion?: boolean;
            additionalWidgetActionTypes?: any[];
        };
        dataKeySettingsForm?: any[];
        dataKeySettingsDirective?: string;
        latestDataKeySettingsForm?: any[];
        latestDataKeySettingsDirective?: string;
        dataKeySettingsFunction?: any;
        actionSources?: any;
    };
    /**
     * Configure the provider with report builder context.
     * Call this method after the report builder initializes to set up the context.
     */
    configure(config: {
        aliasController: IAliasController;
        widgetConfigCallbacks: WidgetConfigCallbacks;
        widgetType?: widgetType;
        dashboard?: Dashboard;
        widget?: Widget;
    }): void;
    /**
     * Update the widget type (e.g., when switching between line chart and bar chart)
     */
    setWidgetType(type: widgetType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportWidgetConfigProvider, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportWidgetConfigProvider>;
}
/**
 * Factory function to provide ReportWidgetConfigProvider as WidgetConfigComponent.
 * This allows tb-datasource and tb-datasources to inject it.
 */
export declare function reportWidgetConfigProviderFactory(provider: ReportWidgetConfigProvider): any;
/**
 * Provider configuration to use in the component's providers array.
 */
export declare const REPORT_WIDGET_CONFIG_PROVIDER: {
    provide: typeof WidgetConfigComponent;
    useFactory: typeof reportWidgetConfigProviderFactory;
    deps: (typeof ReportWidgetConfigProvider)[];
};
