import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ContentTranslationService } from '@core/http/content-translation.service';
import * as i0 from "@angular/core";
/**
 * Puts the tenant's translated user content into the ngx-translate catalogue
 * under `custom.<source text>`, where `UtilsService.customTranslation`
 * already looks.
 *
 * Maps are fetched once per language per session: after sign-in for the
 * user's language (before the first route renders), and on a language
 * switch. New translations show up on the next page load; nothing is pushed.
 */
export declare class ContentTranslationMapService {
    private translate;
    private api;
    private maps;
    /** Keys this service wrote per UI locale, so a re-apply removes stale ones
     *  without touching the built-in `custom.*` keys of the locale file. */
    private applied;
    private enabled;
    /** Content language shown instead of the user's own while a designer previews. */
    private previewLang;
    constructor(translate: TranslateService, api: ContentTranslationService);
    /** Fetch and apply the map for a UI locale. Never errors. */
    load(locale: string): Observable<void>;
    /**
     * Show user content in another language without changing the UI language,
     * for "Preview in" while designing. `''` shows the original texts; `null`
     * (or the user's own content language) goes back to normal.
     */
    previewIn(lang: string | null): Observable<void>;
    get previewing(): string | null;
    /** Forget everything (sign-out), so the next user starts clean. */
    clear(): void;
    /**
     * Write the cached map into the catalogue of `locale` when that catalogue
     * is loaded. When it is not loaded yet, the language change that loads it
     * calls this again.
     */
    apply(locale: string): void;
    private removeApplied;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentTranslationMapService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContentTranslationMapService>;
}
