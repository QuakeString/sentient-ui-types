import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class TranslateDefaultLoader implements TranslateLoader {
    private http;
    constructor(http: HttpClient);
    /**
     * The language as the server has it: the shipped file with the system
     * administrator's changes, or a language they added. Falls back to the
     * shipped file when the server cannot answer.
     */
    getTranslation(lang: string): Observable<object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDefaultLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateDefaultLoader>;
}
