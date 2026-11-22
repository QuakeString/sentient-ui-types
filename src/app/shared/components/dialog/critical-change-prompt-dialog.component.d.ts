import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { CriticalParameterService } from '@core/http/critical-parameter.service';
import { ActionProtection, ActionProtectionContext } from '@shared/models/action-protection.models';
import { CriticalRequirements, PlannedWrite } from '@shared/models/critical-parameter.models';
import * as i0 from "@angular/core";
export interface CriticalChangePromptDialogData {
    entityType: string;
    entityId: string;
    entityName?: string;
    writes: PlannedWrite[];
    requirements: CriticalRequirements;
    /** The widget's own protection, if any (merged into this prompt). */
    protection?: ActionProtection | null;
    context: ActionProtectionContext;
}
interface PasswordField {
    /** Control name. */
    control: string;
    /** Named password, "own" or "action". */
    which: string;
    label: string;
    placeholder: string;
}
/**
 * One prompt per click for a write that touches critical parameters: the
 * changes (old → new), one field per distinct named password (or the user's
 * own password alone), and the reason once. On success the server's pass is
 * kept for the write.
 */
export declare class CriticalChangePromptDialogComponent extends DialogComponent<CriticalChangePromptDialogComponent, boolean> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<CriticalChangePromptDialogComponent, boolean>;
    data: CriticalChangePromptDialogData;
    private fb;
    private translate;
    private criticalParameterService;
    stSkipUnsavedChangesCheck: boolean;
    readonly fields: PasswordField[];
    readonly askReason: boolean;
    readonly form: FormGroup;
    readonly busy: import("@angular/core").WritableSignal<boolean>;
    readonly error: import("@angular/core").WritableSignal<string>;
    readonly blockedUntil: import("@angular/core").WritableSignal<number>;
    readonly hidden: import("@angular/core").WritableSignal<Record<string, boolean>>;
    readonly changes: {
        key: string;
        old: string;
        nu: string;
    }[];
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<CriticalChangePromptDialogComponent, boolean>, data: CriticalChangePromptDialogData, fb: FormBuilder, translate: TranslateService, criticalParameterService: CriticalParameterService);
    get title(): string;
    get needsPassword(): boolean;
    get blockedTime(): string;
    isHidden(control: string): boolean;
    toggleHidden(control: string): void;
    cancel(): void;
    confirm(): void;
    private onResult;
    private show;
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticalChangePromptDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CriticalChangePromptDialogComponent, "st-critical-change-prompt-dialog", never, {}, {}, never, never, false, never>;
}
export {};
