import { MatDialogRef } from '@angular/material/dialog';
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
 *   - "Request demo license"  → opens the public license portal demo form in a new tab
 *   - "Buy license"           → opens the public license portal purchase page in a new tab
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
    /** Public license portal demo-request URL (mirrors LicenseComponent). */
    readonly demoUrl = "https://license.invenia.in/request-demo";
    /** Public license portal purchase URL. */
    readonly purchaseUrl = "https://license.invenia.in/buy";
    title: string;
    message: string;
    constructor(dialogRef: MatDialogRef<LicensePromptDialogComponent>, data: LicensePromptDialogData, router: Router);
    close(): void;
    dismiss(): void;
    goToActivate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicensePromptDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicensePromptDialogComponent, "tb-license-prompt-dialog", never, {}, {}, never, never, false, never>;
}
