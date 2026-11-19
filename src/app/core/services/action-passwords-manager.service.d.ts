import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Opens the list of action passwords (Security › Secrets, filtered to action
 * passwords) from shared components such as widget and dashboard settings,
 * which cannot depend on the home module that holds the list. The home
 * module registers the opener when it loads.
 */
export declare class ActionPasswordsManagerService {
    private opener;
    register(opener: () => Observable<unknown>): void;
    /** Emits once the list is closed. */
    open(): Observable<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionPasswordsManagerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
