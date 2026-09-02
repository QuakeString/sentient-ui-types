import { InjectionToken } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
export declare const EMBED_DASHBOARD_DIALOG_TOKEN: InjectionToken<ComponentType<any>>;
export declare const STATE_DIALOG_GEOMETRY_STORE_PREFIX = "tb_state_dialog_geometry.";
export interface DialogGeometry {
    width: number;
    height: number;
    left?: number;
    top?: number;
}
