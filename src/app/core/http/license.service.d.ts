import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { DeactivateLicenseResponse, DemoLicenseRequest, LicenseStatus, LicenseUsageResult, LicenseState } from '@shared/models/license.model';
import * as i0 from "@angular/core";
export declare class LicenseService {
    private http;
    constructor(http: HttpClient);
    /**
     * Get the current license status
     */
    getLicenseStatus(config?: RequestConfig): Observable<LicenseStatus>;
    /**
     * Full refresh — invalidates the LicenseEnforcer cache, fires an
     * out-of-band heartbeat to the license server, and returns the
     * freshly recomputed status. Use for the License page's refresh
     * button so the operator gets the latest binary-integrity verdict
     * + kill-signal status without waiting for the next periodic
     * heartbeat.
     */
    refreshLicense(config?: RequestConfig): Observable<LicenseStatus>;
    /**
     * Activate a license with a license key
     */
    activateLicense(licenseKey: string, config?: RequestConfig): Observable<LicenseStatus>;
    /**
     * Deactivate the current license
     */
    deactivateLicense(config?: RequestConfig): Observable<DeactivateLicenseResponse>;
    /**
     * Force-delete the local license without contacting the license
     * server. Used when /deactivate keeps failing (server unreachable,
     * stuck binding state, etc). The caller MUST confirm with the user
     * via a warning dialog before calling this — server-side binding
     * is NOT released.
     */
    forceDeleteLicense(config?: RequestConfig): Observable<DeactivateLicenseResponse>;
    /**
     * Import a license from a .key file
     */
    importLicenseFile(file: File, config?: RequestConfig): Observable<LicenseStatus>;
    /**
     * Get current usage statistics and check against license limits
     */
    checkUsageLimits(config?: RequestConfig): Observable<LicenseUsageResult>;
    /**
     * Get current license state including grace period information
     * Used for frontend warning popups
     */
    getLicenseState(config?: RequestConfig): Observable<LicenseState>;
    /**
     * Request a demo license from the license server
     * Requires customer details (company name, email)
     */
    requestDemoLicense(request: DemoLicenseRequest, config?: RequestConfig): Observable<LicenseStatus>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LicenseService>;
}
