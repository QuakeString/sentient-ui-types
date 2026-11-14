import { ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { LicenseService } from '@core/http/license.service';
import * as i0 from "@angular/core";
export type LicenseRequestKind = 'demo' | 'buy';
export interface LicenseRequestDialogData {
    kind: LicenseRequestKind;
}
/** Closed with 'activated' when a key was activated from the dialog. */
export type LicenseRequestDialogResult = 'activated' | undefined;
/** Opens the request dialog; emits 'activated' when a key was activated in it. */
export declare const openLicenseRequestDialog: (dialog: MatDialog, kind: LicenseRequestKind) => Observable<LicenseRequestDialogResult>;
interface InquiryReply {
    success?: boolean;
    inquiry_id?: string;
    license_key_emailed?: boolean;
    sales_team_notified?: boolean;
}
interface Option {
    value: string;
    label: string;
}
/**
 * In-app "Request demo license" and "Buy SENTIENT license" dialogs.
 *
 * The form goes through this SENTIENT server to the license server's public
 * form API, so it also works from a kiosk browser without internet. After a
 * demo request the key can be pasted and activated right in the dialog; the
 * user never leaves SENTIENT.
 */
export declare class LicenseRequestDialogComponent extends DialogComponent<LicenseRequestDialogComponent, LicenseRequestDialogResult> {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<LicenseRequestDialogComponent, LicenseRequestDialogResult>;
    private fb;
    private licenseService;
    private translate;
    private host;
    readonly industries: Option[];
    readonly companySizes: Option[];
    readonly fleetSizes: Option[];
    readonly discoverySources: Option[];
    readonly tiers: Option[];
    readonly timelines: Option[];
    /** SENTIENT build shown in the actions row, e.g. "4.4.0.1". */
    readonly version: any;
    /** "4.x" — what a demo license covers (the build's major version). */
    readonly majorVersion: string;
    readonly canActivate: boolean;
    readonly kind: import("@angular/core").WritableSignal<LicenseRequestKind>;
    readonly step: import("@angular/core").WritableSignal<"form" | "done">;
    readonly sending: import("@angular/core").WritableSignal<boolean>;
    readonly activating: import("@angular/core").WritableSignal<boolean>;
    readonly moreOpen: import("@angular/core").WritableSignal<boolean>;
    readonly reply: import("@angular/core").WritableSignal<InquiryReply>;
    /** Shown in the form when the license server refuses on purpose (unofficial build). */
    readonly refusal: import("@angular/core").WritableSignal<string>;
    readonly sentTo: import("@angular/core").WritableSignal<string>;
    /** Filled "What you need" values, for the buy summary. */
    readonly summary: import("@angular/core").WritableSignal<{
        label: string;
        value: string;
    }[]>;
    readonly isDemo: import("@angular/core").Signal<boolean>;
    /** The address, escaped and bold, for the translated confirmation texts. */
    readonly emailHtml: import("@angular/core").Signal<string>;
    readonly reference: import("@angular/core").Signal<string>;
    readonly form: import("@angular/forms").FormGroup<{
        first_name: import("@angular/forms").FormControl<string>;
        last_name: import("@angular/forms").FormControl<string>;
        email: import("@angular/forms").FormControl<string>;
        country: import("@angular/forms").FormControl<string>;
        desired_tier: import("@angular/forms").FormControl<string>;
        timeline: import("@angular/forms").FormControl<string>;
        estimated_devices: import("@angular/forms").FormControl<string>;
        estimated_users: import("@angular/forms").FormControl<number>;
        notes: import("@angular/forms").FormControl<string>;
        company_name: import("@angular/forms").FormControl<string>;
        industry: import("@angular/forms").FormControl<string>;
        company_size: import("@angular/forms").FormControl<string>;
        phone: import("@angular/forms").FormControl<string>;
        use_case: import("@angular/forms").FormControl<string>;
        discovery_source: import("@angular/forms").FormControl<string>;
        subscribe: import("@angular/forms").FormControl<boolean>;
    }>;
    readonly keyForm: import("@angular/forms").FormGroup<{
        licenseKey: import("@angular/forms").FormControl<string>;
    }>;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<LicenseRequestDialogComponent, LicenseRequestDialogResult>, data: LicenseRequestDialogData, fb: FormBuilder, licenseService: LicenseService, translate: TranslateService, host: ElementRef<HTMLElement>);
    close(result?: LicenseRequestDialogResult): void;
    submit(): void;
    /** "Email not received? Send again" — repeats the same request. */
    sendAgain(): void;
    /** "Change email address" — back to the filled form, email focused. */
    changeEmail(): void;
    /** From the buy confirmation: the demo form, with name, email and country kept. */
    switchToDemo(): void;
    activate(): void;
    private endSending;
    private showError;
    private buildSummary;
    private focusFirstInvalid;
    static ɵfac: i0.ɵɵFactoryDeclaration<LicenseRequestDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LicenseRequestDialogComponent, "st-license-request-dialog", never, {}, {}, never, never, false, never>;
}
export {};
