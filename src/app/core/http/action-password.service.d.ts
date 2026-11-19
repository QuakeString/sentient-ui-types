import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { ActionPasswordBlockPolicy, ActionProtectionContext, ActionProtectionMode, ActionProtectionVerifyResult, NamedActionPassword } from '@shared/models/action-protection.models';
import * as i0 from "@angular/core";
/** Passwords that protect widget actions, and the check before an action runs. */
export declare class ActionPasswordService {
    private http;
    constructor(http: HttpClient);
    /** The tenant's named passwords (no secrets). */
    getNamedPasswords(config?: RequestConfig): Observable<NamedActionPassword[]>;
    addNamedPassword(name: string, password: string, config?: RequestConfig): Observable<{
        id: string;
        name: string;
    }>;
    /** Rename and/or change a named password. `oldPassword` is needed only at runtime. */
    updateNamedPassword(id: string, change: {
        name?: string;
        password?: string;
        oldPassword?: string;
    }, config?: RequestConfig): Observable<{
        id: string;
        name: string;
    }>;
    deleteNamedPassword(id: string, config?: RequestConfig): Observable<void>;
    /** Store a password typed for one action; answers the reference the dashboard keeps (`pw:<id>`). */
    setActionPassword(password: string, replaces?: string, config?: RequestConfig): Observable<{
        ref: string;
    }>;
    getBlockPolicy(config?: RequestConfig): Observable<ActionPasswordBlockPolicy>;
    saveBlockPolicy(policy: ActionPasswordBlockPolicy, config?: RequestConfig): Observable<ActionPasswordBlockPolicy>;
    /** Check a confirmation / password before an action runs; writes the audit entry. */
    verify(request: {
        mode: ActionProtectionMode;
        passwordRef?: string;
        password?: string;
        reason?: string;
        audit: boolean;
        reasonRequired: boolean;
        context: ActionProtectionContext;
    }): Observable<ActionProtectionVerifyResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionPasswordService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
