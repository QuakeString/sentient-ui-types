import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LicenseService } from '@core/http/license.service';
import { LicenseStatus, LicenseUsageResult, LicenseState, getLicenseTypeDisplay, getLimitDisplay, isUnlimited } from '@shared/models/license.model';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export declare class LicenseComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private licenseService;
    private fb;
    private dialog;
    private dialogService;
    private translate;
    licenseStatus: LicenseStatus;
    licenseState: LicenseState | null;
    usageResult: LicenseUsageResult | null;
    activationForm: FormGroup;
    isActivating: boolean;
    isDeactivating: boolean;
    isForceDeleting: boolean;
    isLoading: boolean;
    isRefreshing: boolean;
    showDetails: boolean;
    selectedFileName: string;
    errorMessage: string;
    successMessage: string;
    /**
     * Public license-portal URLs. Both buttons in the "Don't have a
     * license yet?" CTA section open these in new tabs. The user fills
     * in their details on the portal, gets a key by email, then activates
     * it from the form on this page.
     */
    readonly demoRequestUrl = "https://license.invenia.in/request-demo";
    readonly purchaseUrl = "https://license.invenia.in/buy";
    private readonly destroy$;
    getLicenseTypeDisplay: typeof getLicenseTypeDisplay;
    getLimitDisplay: typeof getLimitDisplay;
    isUnlimited: typeof isUnlimited;
    /** Format a byte size as KB/MB/GB. -1 → Unlimited, 0 → "Not allowed". */
    formatBytes(bytes: number): string;
    /** Render a feature-flag boolean. Undefined (older license payload) → "—". */
    flagDisplay(flag: boolean | undefined): string;
    constructor(store: Store<AppState>, licenseService: LicenseService, fb: FormBuilder, dialog: MatDialog, dialogService: DialogService, translate: TranslateService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private buildActivationForm;
    private loadLicenseStatus;
    private loadUsageLimits;
    private loadLicenseState;
    refreshStatus(): void;
    toggleDetails(): void;
    isDemoAvailable(): boolean;
    activateLicense(): void;
    deactivateLicense(): void;
    /**
     * Force-delete the local license without contacting the server.
     * Escape hatch for when /deactivate keeps failing. Server-side
     * binding is NOT released — the user must understand this; the
     * confirm dialog spells it out explicitly.
     */
    forceDeleteLicense(): void;
    onFileSelected(event: Event): void;
    importLicenseFile(file: File): void;
    getStatusIcon(): string;
    getStatusClass(): string;
    getStatusText(): string;
    getLicenseTypeBadgeClass(): string;
    /** Lowercased tier slug used as the [data-tier] attribute on the
     *  premium card so SCSS can pick the right palette per tier. Falls
     *  back to "professional" so an unknown type still gets a polished look. */
    getTierClass(): string;
    /** Card-front masked display for the license key. Always renders in
     *  the same five-column shape regardless of whether the upstream
     *  data already came pre-masked ("6846...e3df") or in full
     *  ("INVE-PROF-6846-…-E3DF"):
     *
     *      INVE  PROF  6846  ····  E3DF
     *      └── brand  └── tier  └── first 4 alphanumerics
     *                          dots → middle masked
     *                          └── last 4 alphanumerics
     *
     *  The expanded details panel still has the original key for
     *  copy/paste, so this is purely cosmetic. */
    formatLicenseKey(key?: string): string;
    /** Four-character tier abbreviation used inside the masked key. */
    private tierAbbrev;
    /** "04 / 2027" formatting for the bottom-of-card valid-through stamp.
     *  Enterprise-tier perpetual licenses surface as "PERPETUAL". */
    formatValidThrough(dateStr: string): string;
    formatDate(dateStr: string): string;
    getLimits(): import("@shared/models/license.model").LicenseLimits;
    /**
     * BP-12: returns true iff the running binary's version is
     * component-prefix-matched by at least one entry in the active
     * license's allowed_versions list. Mirrors the SENTIENT verifier's
     * acceptance rule so the dashboard shows a consistent verdict
     * (e.g. license ["4.2"] + build "4.2.2" → compatible).
     */
    isVersionCompatible(): boolean;
    /**
     * BP-11 phase 2: human-readable label for the binary integrity
     * tagged union returned from /api/license/status.
     */
    binaryIntegrityLabel(): string;
    getUsageStatusClass(current: number, limit: number): string;
    getUsageStatusIcon(current: number, limit: number): string;
    private clearMessages;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicenseComponent, "tb-license", never, {}, {}, never, never, false, never>;
}
