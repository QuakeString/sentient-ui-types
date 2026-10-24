import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from '@core/http/http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { MasterKeyInfo, MasterKeyRotation, SaveSecretRequest, SecretInfo } from '@shared/models/secret.models';
import * as i0 from "@angular/core";
/** The secrets store (`/api/secret…`). Values can be written, never read. */
export declare class SecretService {
    private http;
    constructor(http: HttpClient);
    getSecrets(pageLink: PageLink, config?: RequestConfig): Observable<PageData<SecretInfo>>;
    getSecretNames(config?: RequestConfig): Observable<string[]>;
    saveSecret(secret: SaveSecretRequest, config?: RequestConfig): Observable<SecretInfo>;
    deleteSecret(id: string, config?: RequestConfig): Observable<void>;
    /** The master key's source and fingerprint (system administrator). */
    getMasterKey(config?: RequestConfig): Observable<MasterKeyInfo>;
    /** Replaces the master key and re-encrypts everything stored (system administrator). */
    rotateMasterKey(config?: RequestConfig): Observable<MasterKeyRotation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SecretService>;
}
