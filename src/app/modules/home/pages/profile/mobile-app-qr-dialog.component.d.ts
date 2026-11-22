import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { QrCodeSettings } from '@shared/models/mobile-app.models';
import * as i0 from "@angular/core";
export interface MobileAppQrDialogData {
    settings: QrCodeSettings;
}
/** The home page's "connect mobile app" QR, opened from the profile — for users whose home is a dashboard. */
export declare class MobileAppQrDialogComponent extends DialogComponent<MobileAppQrDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    data: MobileAppQrDialogData;
    dialogRef: MatDialogRef<MobileAppQrDialogComponent>;
    constructor(store: Store<AppState>, router: Router, data: MobileAppQrDialogData, dialogRef: MatDialogRef<MobileAppQrDialogComponent>);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppQrDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppQrDialogComponent, "st-mobile-app-qr-dialog", never, {}, {}, never, never, false, never>;
}
