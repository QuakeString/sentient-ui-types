import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ActionPasswordService } from '@core/http/action-password.service';
import { ActionProtection, ActionProtectionMode, NamedActionPassword } from '@shared/models/action-protection.models';
import { ActionPasswordsManagerService } from '@core/services/action-passwords-manager.service';
import * as i0 from "@angular/core";
/**
 * The Protection panel of a widget action: what to ask for before it runs,
 * which password, the message, the reason, the audit entry and how long it
 * stays unlocked.
 *
 * The password field takes `${Name}` (a named password of the tenant) or a
 * password typed for this action. A typed password is sent to the server
 * when the field is left; the dashboard keeps only the answer `pw:<id>`.
 */
export declare class ActionProtectionPanelComponent implements ControlValueAccessor, Validator, OnInit {
    private fb;
    private store;
    private passwordsManager;
    private translate;
    private actionPasswordService;
    /** Lay the "ask for" choice under its label (narrow popups). */
    readonly narrow: import("@angular/core").InputSignal<boolean>;
    /** Show the panel's own "Protection" title (off inside a dialog that has it). */
    readonly showTitle: import("@angular/core").InputSignal<boolean>;
    readonly modes: ActionProtectionMode[];
    readonly modeTranslations: Map<ActionProtectionMode, string>;
    readonly ActionProtectionMode: typeof ActionProtectionMode;
    readonly unlockOptions: number[];
    readonly names: import("@angular/core").WritableSignal<NamedActionPassword[]>;
    /** The field holds a password set for this action (shown masked). */
    readonly hasActionPassword: import("@angular/core").WritableSignal<boolean>;
    form: FormGroup;
    private readonly destroyRef;
    private propagateChange;
    private onValidatorChange;
    private disabled;
    /** The `pw:<id>` the field held before the user started typing. */
    actionPasswordRef: string;
    constructor(fb: FormBuilder, store: Store<AppState>, passwordsManager: ActionPasswordsManagerService, translate: TranslateService, actionPasswordService: ActionPasswordService);
    ngOnInit(): void;
    get mode(): ActionProtectionMode;
    /** The named password the field refers to does not exist. */
    get unknownName(): string | null;
    /** The action still uses a password typed for it (older setup); it keeps working. */
    get actionPasswordRefSet(): boolean;
    /** How a named password is stored in the dashboard. */
    refOf(name: string): string;
    /** What the closed field shows. */
    /** The stored name, shown as chosen while the list is still loading. */
    get pendingName(): string | null;
    get selectedLabel(): string;
    readonly namesLoaded: import("@angular/core").WritableSignal<boolean>;
    loadNames(): void;
    /** Only a tenant administrator manages the tenant's passwords (Security › Secrets). */
    get canManage(): boolean;
    manage(): void;
    writeValue(value: ActionProtection): void;
    registerOnChange(fn: (v: ActionProtection) => void): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnValidatorChange(fn: () => void): void;
    validate(_c: AbstractControl): ValidationErrors | null;
    private currentValue;
    private emit;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionProtectionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionProtectionPanelComponent, "st-action-protection-panel", never, { "narrow": { "alias": "narrow"; "required": false; "isSignal": true; }; "showTitle": { "alias": "showTitle"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
