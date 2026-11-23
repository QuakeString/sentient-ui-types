import { OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LicenseService } from '@core/http/license.service';
import { LicenseStatus, LicenseUsageResult, LicenseState, getLicenseTypeDisplay, getLimitDisplay, isUnlimited, LicenseLimits } from '@shared/models/license.model';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from '@core/services/dialog.service';
import { LicenseRequestKind } from '@shared/components/dialog/license-request-dialog.component';
import * as i0 from "@angular/core";
/** One limit row on the licence page: the cap and, when known, what is used. */
interface LimitRow {
    label: string;
    limit: (l: LicenseLimits) => number | undefined;
    used?: (u: LicenseUsageResult) => number | undefined;
}
export declare class LicenseComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private licenseService;
    private fb;
    private dialog;
    private dialogService;
    private translate;
    licenseStatus: LicenseStatus;
    licenseState: LicenseState | null;
    /** Usage counts for the limit rows; arrives after the status. */
    readonly usageResult: import("@angular/core").WritableSignal<LicenseUsageResult>;
    readonly entityRows: LimitRow[];
    readonly monthlyRows: LimitRow[];
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
     * "Don't have a license yet?" buttons: the request dialogs, sent through
     * this server so a kiosk browser never has to leave SENTIENT. A key
     * activated from the demo dialog reloads this page's status.
     */
    openLicenseRequest(kind: LicenseRequestKind): void;
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
    /** Whether the license never expires (enterprise, no date or a far-future one). */
    isPerpetual(dateStr: string): boolean;
    /** The full expiry date on the card ("14 Mar 2027").
     *  Enterprise-tier perpetual licenses surface as "PERPETUAL". */
    formatValidThrough(dateStr: string): string;
    /** "14 Dec 2026": day, short month name, year, in that order for every language. */
    private dayMonthYear;
    /** Whole days until the license expires: the server's count when it sent
     *  one, else counted from the expiry date. Null when there is no date. */
    daysLeft(): number | null;
    formatDate(dateStr: string): string;
    getLimits(): LicenseLimits;
    /**
     * BP-12: whether the active licence covers this build. The server
     * decides (the one version rule, shared with activation and the
     * licence server); the page only shows the verdict.
     */
    /** Card status: active, expired, or why it is not honoured. */
    statusLabel(): string;
    isVersionCompatible(): boolean;
    /**
     * BP-11 phase 2: human-readable label for the binary integrity
     * tagged union returned from /api/license/status.
     */
    binaryIntegrityLabel(): string;
    /** What a limit row reports as used, or null when it has no count. */
    rowUsed(row: LimitRow): number | null;
    rowLimit(row: LimitRow): number;
    /** Limit text with digit grouping; Unlimited / Disabled as before. */
    limitText(limit: number): string;
    /** Bar fill in percent, or null when the row draws no bar. */
    rowPercent(row: LimitRow): number | null;
    getUsageStatusClass(current: number, limit: number): string;
    getUsageStatusIcon(current: number, limit: number): string;
    private clearMessages;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicenseComponent, "tb-license", never, {}, {}, never, never, false, never>;
}
export {};
