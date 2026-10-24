import { InjectionToken } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';
import type { DashboardWidget } from '@home/models/dashboard-component.models';
export declare const EMBED_DASHBOARD_DIALOG_TOKEN: InjectionToken<ComponentType<any>>;
export declare const STATE_DIALOG_GEOMETRY_STORE_PREFIX = "tb_state_dialog_geometry.";
export interface DialogGeometry {
    width: number;
    height: number;
    left?: number;
    top?: number;
}
/**
 * Close button hand-off for a popup dialog whose header is hidden. The dialog
 * provides one instance; every widget container inside registers its widget,
 * and the one in the top-right corner (top row, rightmost) renders the dialog's
 * close button at the end of its header button row. While no registered
 * widget shows a button row, `corner` is null and the dialog keeps its own
 * corner close button, so the dialog can always be closed.
 */
export declare class EmbedDialogCloseHost {
    readonly corner$: BehaviorSubject<DashboardWidget>;
    private readonly widgets;
    /** Set by the dialog that provides this host. */
    close: () => void;
    register(widget: DashboardWidget): void;
    unregister(widget: DashboardWidget): void;
    recompute(): void;
}
export declare const EMBED_DIALOG_CLOSE_HOST: InjectionToken<EmbedDialogCloseHost>;
