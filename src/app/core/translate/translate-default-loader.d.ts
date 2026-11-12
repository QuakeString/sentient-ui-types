import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class TranslateDefaultLoader implements TranslateLoader {
    private http;
    /**
     * Login first: with no saved session (and not a public link), while on the
     * login pages every language loads only the texts those pages use, a few kB
     * instead of the whole file. The full files follow in the background
     * (AppComponent → loadFullTranslations) and are merged in.
     */
    private loginOnly;
    /** The languages served login-only, until their full files are merged. */
    readonly loginOnlyLangs: Set<string>;
    constructor(http: HttpClient);
    /**
     * The language as the server has it: the shipped file with the system
     * administrator's changes, or a language they added. Falls back to the
     * shipped file when the server cannot answer.
     */
    getTranslation(lang: string): Observable<object>;
    /** Ends the login-only phase: from now on every language loads in full. */
    endLoginOnly(): string[];
    getFullTranslation(lang: string): Observable<object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDefaultLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
