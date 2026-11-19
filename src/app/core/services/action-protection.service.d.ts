import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ActionProtection, ActionProtectionContext } from '@shared/models/action-protection.models';
import * as i0 from "@angular/core";
/**
 * Runs the check a protected widget action asks for: one prompt per click.
 *
 * `key` names the action (dashboard + widget + action). After a right
 * password the action stays unlocked for its "Stay unlocked for" minutes;
 * 0 (the default) asks every time. A second click while the prompt is open
 * is dropped, so one prompt never releases two runs.
 */
export declare class ActionProtectionService {
    private dialog;
    private readonly unlockedUntil;
    private readonly open;
    constructor(dialog: MatDialog);
    guard(protection: ActionProtection | undefined | null, key: string, context: ActionProtectionContext): Observable<boolean>;
    /** Forget unlocks, e.g. on sign-out. */
    lockAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionProtectionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
