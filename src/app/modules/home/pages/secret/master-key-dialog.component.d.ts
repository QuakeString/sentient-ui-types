import { OnInit } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SecretService } from '@core/http/secret.service';
import { MasterKeyInfo, MasterKeyRotation } from '@shared/models/secret.models';
import * as i0 from "@angular/core";
/**
 * The secrets master key (system administrator): where it comes from, its
 * fingerprint, and rotating it while the server runs.
 */
export declare class MasterKeyDialogComponent extends DialogComponent<MasterKeyDialogComponent> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<MasterKeyDialogComponent>;
    private secretService;
    key: MasterKeyInfo;
    rotation: MasterKeyRotation;
    /** The rotate button was pressed once: show what happens and ask again. */
    confirming: boolean;
    rotating: boolean;
    error: string;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<MasterKeyDialogComponent>, secretService: SecretService);
    ngOnInit(): void;
    private load;
    get canRotate(): boolean;
    rotate(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterKeyDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasterKeyDialogComponent, "st-master-key-dialog", never, {}, {}, never, never, false, never>;
}
