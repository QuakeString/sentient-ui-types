import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface PublicLinkDialogData {
    title: string;
    messageHtml: string;
    publicLink: string;
    copyTooltip: string;
    copiedMessage: string;
    notice?: string;
    socialShareTitle?: string;
    socialShareText?: string;
    socialShareHashTags?: string;
}
export declare class PublicLinkDialogComponent extends DialogComponent<PublicLinkDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    data: PublicLinkDialogData;
    dialogRef: MatDialogRef<PublicLinkDialogComponent>;
    constructor(store: Store<AppState>, router: Router, data: PublicLinkDialogData, dialogRef: MatDialogRef<PublicLinkDialogComponent>);
    close(): void;
    onPublicLinkCopied(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PublicLinkDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PublicLinkDialogComponent, "tb-public-link-dialog", never, {}, {}, never, never, false, never>;
}
