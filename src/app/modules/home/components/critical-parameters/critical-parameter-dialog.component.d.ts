import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { ActionPasswordService } from '@core/http/action-password.service';
import { ActionPasswordsManagerService } from '@core/services/action-passwords-manager.service';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { NamedActionPassword } from '@shared/models/action-protection.models';
import { CriticalParameter, CriticalParameterConfirm } from '@shared/models/critical-parameter.models';
import * as i0 from "@angular/core";
export interface CriticalParameterDialogData {
    ownerType: string;
    ownerId: string;
    /** The rule to edit; none = add. */
    rule?: CriticalParameter;
    /** On a device or asset: the profile rule of the same key (the floor). */
    profileRule?: CriticalParameter;
    profileName?: string;
    /** The profile logs every manual change. */
    profileLogsAll: boolean;
}
/** "Written as": kind plus attribute scope in one choice. */
type WrittenAs = 'SHARED_SCOPE' | 'SERVER_SCOPE' | 'TIME_SERIES' | 'RPC';
export declare class CriticalParameterDialogComponent extends DialogComponent<CriticalParameterDialogComponent, CriticalParameter> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<CriticalParameterDialogComponent, CriticalParameter>;
    data: CriticalParameterDialogData;
    private fb;
    private criticalParameterService;
    private actionPasswordService;
    private passwordsManager;
    readonly Confirm: typeof CriticalParameterConfirm;
    readonly confirms: CriticalParameterConfirm[];
    readonly writtenAsOptions: {
        value: WrittenAs;
        label: string;
    }[];
    readonly names: import("@angular/core").WritableSignal<NamedActionPassword[]>;
    readonly namesLoaded: import("@angular/core").WritableSignal<boolean>;
    readonly saving: import("@angular/core").WritableSignal<boolean>;
    form: FormGroup;
    readonly isAdd: boolean;
    readonly floor: CriticalParameter | undefined;
    private readonly destroyRef;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<CriticalParameterDialogComponent, CriticalParameter>, data: CriticalParameterDialogData, fb: FormBuilder, criticalParameterService: CriticalParameterService, actionPasswordService: ActionPasswordService, passwordsManager: ActionPasswordsManagerService);
    ngOnInit(): void;
    get confirm(): CriticalParameterConfirm;
    /** A weaker choice than the profile's is greyed out on a device or asset. */
    confirmDisabled(c: CriticalParameterConfirm): boolean;
    /** On a device, a profile password can only be kept (or replaced by the own password). */
    get passwordLocked(): boolean;
    get canManage(): boolean;
    get selectedName(): string;
    refOf(name: string): string;
    loadNames(): void;
    manage(): void;
    /** The floor in words, for the note on a device or asset. */
    get floorRange(): string;
    get rangeError(): string | null;
    get passwordMissing(): boolean;
    cancel(): void;
    save(): void;
    private num;
    private writtenAsOf;
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticalParameterDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CriticalParameterDialogComponent, "st-critical-parameter-dialog", never, {}, {}, never, never, false, never>;
}
export {};
