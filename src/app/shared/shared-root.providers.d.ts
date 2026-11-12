import { Provider } from '@angular/core';
/**
 * The shared module's providers that the root injector needs.
 *
 * The shared module is no longer part of the start-up bundle (the login page
 * would wait for it), so its providers no longer reach the root injector.
 * These are the ones root-level code (UtilsService, the login page, dialogs
 * opened from root services) relies on. Lazy modules still import the shared
 * module and get its full provider list, as before.
 */
export declare const SHARED_ROOT_PROVIDERS: Provider[];
