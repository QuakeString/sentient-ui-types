import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LicenseRequestKind } from '@shared/components/dialog/license-request-dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
/**
 * Shared "no license / limit reached" prompt.
 *
 * Used in two places:
 *   1. As a one-shot popup right after a sys_admin login when no license
 *      is active (HomeComponent triggers it).
 *   2. As an inline modal when an entity-creation attempt is blocked by
 *      the license cap or the system is in the Blocked grace phase
 *      (interceptor-driven).
 *
 * Three actions, all of which dismiss the dialog:
 *   - "Request demo license"  → closes this and opens the in-app demo request dialog
 *   - "Buy license"           → closes this and opens the in-app purchase enquiry dialog
 *   - "I have a key"          → closes dialog and routes to /license so user can paste it
 */
export interface LicensePromptDialogData {
    /** Title shown at the top. Defaults to a license-required message. */
    title?: string;
    /** Body paragraph below the title. Defaults to a generic prompt. */
    message?: string;
}
export declare class LicensePromptDialogComponent {
    private dialogRef;
    data: LicensePromptDialogData;
    private router;
    private dialog;
    title: string;
    message: string;
    constructor(dialogRef: MatDialogRef<LicensePromptDialogComponent>, data: LicensePromptDialogData, router: Router, dialog: MatDialog);
    close(): void;
    /** Swap this prompt for the request dialog. */
    openRequest(kind: LicenseRequestKind): void;
    goToActivate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicensePromptDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicensePromptDialogComponent, "tb-license-prompt-dialog", never, {}, {}, never, never, false, never>;
}
