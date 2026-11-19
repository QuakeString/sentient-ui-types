import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { ActionProtectionService } from '@core/services/action-protection.service';
import { ActionProtection, ActionProtectionContext } from '@shared/models/action-protection.models';
import { PlannedWrite } from '@shared/models/critical-parameter.models';
import * as i0 from "@angular/core";
/**
 * The check before a person's write: when it touches critical parameters of
 * the target device or asset, one merged prompt (the critical rules plus the
 * widget's own protection), and the server's pass for the write; otherwise
 * the widget's protection as before. A value outside the allowed range is
 * refused before anything is asked.
 */
export declare class CriticalWriteService {
    private dialog;
    private store;
    private criticalParameterService;
    private actionProtectionService;
    private readonly none;
    private readonly open;
    constructor(dialog: MatDialog, store: Store<AppState>, criticalParameterService: CriticalParameterService, actionProtectionService: ActionProtectionService);
    /** Emits true when the write may run. */
    guard(target: {
        entityType: string;
        id: string;
        name?: string;
    } | null | undefined, writes: PlannedWrite[], protection: ActionProtection | null | undefined, key: string, context: ActionProtectionContext): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticalWriteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
