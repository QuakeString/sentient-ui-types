import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { OnInit } from '@angular/core';
import { ActionPasswordService } from '@core/http/action-password.service';
import { NamedActionPassword } from '@shared/models/action-protection.models';
import { ActionPasswordsManagerService } from '@core/services/action-passwords-manager.service';
import * as i0 from "@angular/core";
/** "Passwords" section of the dashboard settings: the tenant's named passwords and a way to manage them. */
export declare class ActionPasswordsPanelComponent implements OnInit {
    private store;
    private passwordsManager;
    private actionPasswordService;
    readonly list: import("@angular/core").WritableSignal<NamedActionPassword[]>;
    /** Only a tenant administrator manages the tenant's passwords (Security › Secrets). */
    get canManage(): boolean;
    constructor(store: Store<AppState>, passwordsManager: ActionPasswordsManagerService, actionPasswordService: ActionPasswordService);
    ngOnInit(): void;
    manage(): void;
    private load;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionPasswordsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionPasswordsPanelComponent, "st-action-passwords-panel", never, {}, {}, never, never, false, never>;
}
