import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '@core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissionService } from '@core/services/permission.service';
import * as i0 from "@angular/core";
export declare class GlobalHttpInterceptor implements HttpInterceptor {
    private store;
    private dialogService;
    private translate;
    private authService;
    private dialog;
    private permissionService;
    private AUTH_SCHEME;
    private AUTH_HEADER_NAME;
    private static readonly REQUEST_TIMEOUT_MS;
    private activeRequests;
    private licenseDialogOpen;
    constructor(store: Store<AppState>, dialogService: DialogService, translate: TranslateService, authService: AuthService, dialog: MatDialog, permissionService: PermissionService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private jwtIntercept;
    private handleRequest;
    private handleResponseError;
    private retryRequest;
    private refreshTokenAndRetry;
    private updateAuthorizationHeader;
    private isTokenBasedAuthEntryPoint;
    private updateLoadingState;
    private showError;
    /** Default license-server URL used when the backend response
     *  doesn't carry an X-License-Server-Url header. The /buy suffix
     *  is appended by the dialog's getLicense() — this is just the
     *  bare base origin. */
    private static readonly DEFAULT_LICENSE_SERVER_URL;
    private showLicenseExpiredDialog;
    private showLicenseBlockedDialog;
    /**
     * Phase 5D: shared prompt fired when an entity-create attempt is
     * rejected with errorCode=51 (LICENSE_LIMIT_EXCEEDED). Same dialog
     * the HomeComponent fires after sys_admin login so the user sees a
     * consistent path: request demo → buy → activate-existing-key.
     */
    private showLicensePromptDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalHttpInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalHttpInterceptor>;
}
