import { OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LicenseService } from '@core/http/license.service';
import { LicenseInvalidKind } from '@shared/models/license.model';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/**
 * Service to monitor license state and show warning popups
 * Runs every 5 minutes to check license state
 */
/** Dialog title for each reason an activated licence is not honoured. */
export declare const invalidLicenseTitleKey: (kind?: LicenseInvalidKind) => string;
export declare class LicenseWarningService implements OnDestroy {
    private licenseService;
    private dialog;
    private translate;
    private readonly POPUP_INTERVAL_MS;
    private intervalId;
    private destroy$;
    private currentDialogRef;
    private isMonitoring;
    constructor(licenseService: LicenseService, dialog: MatDialog, translate: TranslateService);
    ngOnDestroy(): void;
    /**
     * Start monitoring license state
     * Call this after successful login
     */
    startMonitoring(): void;
    /**
     * Stop monitoring license state
     * Call this on logout
     */
    stopMonitoring(): void;
    /**
     * Check license state and show warning if needed
     */
    private checkAndShowWarning;
    /** The reason last shown, so a closed dialog is not reopened every check. */
    private shownInvalidMessage;
    /**
     * The activated licence is not honoured (expired, version not covered,
     * ...). Same state as an expired licence; closable like the expired
     * dialog, shown again only when the reason changes.
     */
    private showInvalidLicenseDialog;
    /**
     * Show a "no licence active" dialog. Non-closable — the runtime
     * is functional but every entity-creation attempt will silently
     * fail until a licence is activated. Sys-admin gets a "Manage
     * licence" button that routes to /license.
     */
    private showNoLicenseDialog;
    /**
     * Show a binding-block popup (anti-piracy v2). Non-closable —
     * operations are actively being refused, so the operator must
     * acknowledge or take action (re-activate, contact admin, etc).
     */
    private showBindingBlockDialog;
    /**
     * Show the license warning dialog
     */
    private showWarningDialog;
    /**
     * Force a license check (useful after license activation)
     */
    forceCheck(): void;
    /**
     * Check if a dialog is currently showing
     */
    isDialogOpen(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseWarningService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
