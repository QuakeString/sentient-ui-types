/**
 * A copy of the value with the unread setups of every value action setting
 * inside it removed. The input is not changed; unchanged parts are shared.
 */
export declare const trimUnusedActionSetups: <T>(value: T) => T;
/** The dashboard to save, with every widget's unread action setups removed. */
export declare const trimDashboardWidgetConfigs: <D extends {
    configuration?: {
        widgets?: {
            [id: string]: any;
        };
    };
}>(dashboard: D) => D;
