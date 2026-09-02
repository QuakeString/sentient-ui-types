import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { BackendConfigService } from './backend-config.service';
import * as i0 from "@angular/core";
export interface BackendConfigDialogData {
    firstLaunch: boolean;
}
export declare class BackendConfigDialogComponent {
    dialogRef: MatDialogRef<BackendConfigDialogComponent, string | null>;
    data: BackendConfigDialogData;
    private fb;
    private backendConfig;
    configForm: UntypedFormGroup;
    testStatus: 'idle' | 'testing' | 'ok' | 'error';
    testMessage: string;
    readonly LOCAL_URL = "http://localhost:8080";
    constructor(dialogRef: MatDialogRef<BackendConfigDialogComponent, string | null>, data: BackendConfigDialogData, fb: UntypedFormBuilder, backendConfig: BackendConfigService);
    selectLocal(): void;
    test(): Promise<void>;
    save(): void;
    cancel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackendConfigDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackendConfigDialogComponent, "tb-backend-config-dialog", never, {}, {}, never, never, false, never>;
}
