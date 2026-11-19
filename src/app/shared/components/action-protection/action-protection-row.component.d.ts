import { ControlValueAccessor, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { ActionProtection } from '@shared/models/action-protection.models';
import * as i0 from "@angular/core";
/** "Protection" row of a write widget's Behavior panel: the summary, and a pencil that opens the panel. */
export declare class ActionProtectionRowComponent implements ControlValueAccessor {
    private dialog;
    readonly value: import("@angular/core").WritableSignal<ActionProtection>;
    readonly disabled: import("@angular/core").WritableSignal<boolean>;
    private propagateChange;
    constructor(dialog: MatDialog);
    get protectedNow(): boolean;
    /** Translation key + params of the summary. */
    get summary(): {
        key: string;
        params?: any;
    };
    edit(): void;
    writeValue(v: ActionProtection): void;
    registerOnChange(fn: (v: ActionProtection) => void): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionProtectionRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionProtectionRowComponent, "st-action-protection-row", never, {}, {}, never, never, false, never>;
}
/** The Protection panel in a dialog, for write widgets. */
export declare class ActionProtectionDialogComponent extends DialogComponent<ActionProtectionDialogComponent, ActionProtection> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<ActionProtectionDialogComponent, ActionProtection>;
    readonly control: FormControl<ActionProtection>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<ActionProtectionDialogComponent, ActionProtection>, data: ActionProtection);
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionProtectionDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionProtectionDialogComponent, "st-action-protection-dialog", never, {}, {}, never, never, false, never>;
}
