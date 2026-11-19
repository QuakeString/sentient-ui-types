import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { AuditSettings, CriticalAuthorizeRequest, CriticalAuthorizeResult, CriticalParameter, CriticalParameterList, CriticalRequirements, PlannedWrite, WidgetProtectionRequest } from '@shared/models/critical-parameter.models';
import * as i0 from "@angular/core";
/** Critical parameters of profiles, devices and assets, and the checks before a critical write. */
export declare class CriticalParameterService {
    private http;
    constructor(http: HttpClient);
    getRules(ownerType: string, ownerId: string, config?: RequestConfig): Observable<CriticalParameterList>;
    saveRule(ownerType: string, ownerId: string, rule: CriticalParameter, config?: RequestConfig): Observable<CriticalParameter>;
    deleteRule(id: string, config?: RequestConfig): Observable<void>;
    getAuditSettings(ownerType: string, ownerId: string, config?: RequestConfig): Observable<AuditSettings>;
    saveAuditSettings(ownerType: string, ownerId: string, settings: AuditSettings, config?: RequestConfig): Observable<AuditSettings>;
    /** Which keys of a click are critical, their old values, range refusals and what to ask. */
    requirements(entityType: string, entityId: string, writes: PlannedWrite[], widget?: WidgetProtectionRequest): Observable<CriticalRequirements>;
    /** Checks the passwords and reason; answers a short-lived pass for the write. */
    authorize(request: CriticalAuthorizeRequest): Observable<CriticalAuthorizeResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticalParameterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
