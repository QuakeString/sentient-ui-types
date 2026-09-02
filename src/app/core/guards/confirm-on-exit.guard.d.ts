import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface HasConfirmForm {
    confirmForm(): UntypedFormGroup;
    confirmOnExitMessage?: string;
}
export interface HasDirtyFlag {
    isDirty: boolean;
    confirmOnExitMessage?: string;
}
export declare class ConfirmOnExitGuard {
    private store;
    private dialogService;
    private translate;
    constructor(store: Store<AppState>, dialogService: DialogService, translate: TranslateService);
    canDeactivate(component: HasConfirmForm & HasDirtyFlag, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | import("rxjs").Observable<boolean>;
    private getMessage;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmOnExitGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmOnExitGuard>;
}
