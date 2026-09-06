import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export interface PrimedResponseEntry {
    method: string;
    url: string;
    bodyKey?: string;
    status: number;
    contentType: string;
    encoding: 'json' | 'text' | 'base64';
    body: any;
    /** Server time: add the time elapsed since the bundle arrived. */
    clockAdjust?: boolean;
}
export interface PrimedResponseStats {
    primed: number;
    hits: number;
    misses: number;
    /** Requests to a primed URL family that found no entry (for parity checks). */
    missed: string[];
}
/** JSON.stringify with object keys sorted; undefined members are dropped as
 *  JSON.stringify would drop them. Must equal the server's canonical_json. */
export declare const canonicalJson: (value: any) => string;
export declare class PrimedResponseService {
    private entries;
    private primedAt;
    readonly stats: PrimedResponseStats;
    constructor(store: Store<AppState>);
    prime(entries: PrimedResponseEntry[], receivedAt?: number): void;
    clear(): void;
    /** The primed response for `req`, or null when there is none. */
    take(req: HttpRequest<any>): HttpResponse<any> | null;
    private key;
    private materialize;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrimedResponseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrimedResponseService>;
}
