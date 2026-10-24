import { MobileActionResult, WidgetMobileActionResult, WidgetMobileActionType } from '@shared/models/widget.models';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Params, Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import * as i0 from "@angular/core";
export declare class MobileService {
    private window;
    private router;
    private authService;
    private readonly mobileApp;
    private readonly mobileChannel;
    private readonly onWindowMessageListener;
    private reloadUserObservable;
    private lastDashboardId;
    private toggleLayoutFunction;
    private aiToggleFunction;
    private lastAiState;
    /** The app shows the AI assistant button in its own top bar (it answered
     *  the AI state call), so the page does not show one of its own. */
    readonly nativeAiButton$: BehaviorSubject<boolean>;
    constructor(window: Window, router: Router, authService: AuthService);
    isMobileApp(): boolean;
    handleDashboardStateName(name: string): void;
    onDashboardLoaded(hasRightLayout: boolean, rightLayoutOpened: boolean): void;
    /** Tells the app whether the AI assistant can be used and is open, so it
     *  can show the button in its top bar. An app that answers `true` shows it. */
    onAiAssistantState(available: boolean, open: boolean): void;
    /** What the app's AI assistant button does (opens or closes the panel). */
    registerAiToggleFunction(toggle: () => void): void;
    onDashboardRightLayoutChanged(opened: boolean): void;
    registerToggleLayoutFunction(toggleLayoutFunction: () => void): void;
    unregisterToggleLayoutFunction(toggleLayoutFunction?: () => void): void;
    handleWidgetMobileAction<T extends MobileActionResult>(type: WidgetMobileActionType, ...args: any[]): Observable<WidgetMobileActionResult<T>>;
    handleMobileNavigation(path?: string, params?: Params): void;
    private onWindowMessage;
    private openDashboard;
    private doDashboardNavigation;
    private reloadUser;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileService>;
}
