import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GracePhase } from '@shared/models/license.model';
import * as i0 from "@angular/core";
export interface LicenseWarningDialogData {
    closable: boolean;
    overLimitEntities: string[];
    daysUntilBlocked?: number;
    daysOverLimit?: number;
    gracePhase: GracePhase;
    licenseServerUrl: string;
    /**
     * Anti-piracy v2 — when present, the dialog renders these instead
     * of the standard grace-phase copy. Used by the binding-block
     * popup to surface the precise reason (e.g. "Hardware fingerprint
     * disagrees with this license — likely VM clone").
     */
    customTitle?: string;
    customMessage?: string;
}
export declare class LicenseWarningDialogComponent extends DialogComponent<LicenseWarningDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<LicenseWarningDialogComponent, boolean>;
    data: LicenseWarningDialogData;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<LicenseWarningDialogComponent, boolean>, data: LicenseWarningDialogData);
    getLicense(): void;
    /**
     * Navigate to the local /license page so the sys-admin can
     * deactivate the bad license and activate a new one. Closes the
     * dialog so the page becomes interactable. The /license route is
     * always reachable for sys-admin even when the runtime is blocked
     * (BP-8 — sys-admin recovery routes are whitelisted).
     */
    manageLicense(): void;
    close(): void;
    getTitle(): string;
    getMessage(): string;
    getIconClass(): string;
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseWarningDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicenseWarningDialogComponent, "tb-license-warning-dialog", never, {}, {}, never, never, false, never>;
}
