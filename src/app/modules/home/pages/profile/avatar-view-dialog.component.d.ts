import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { UserAvatarService } from '@core/http/user-avatar.service';
import * as i0 from "@angular/core";
export interface AvatarViewDialogData {
    userId: string;
    avatarVersion: number;
    /** Shown as the dialog title (the user's name or email). */
    title: string;
}
/** Shows a profile photo large. */
export declare class AvatarViewDialogComponent extends DialogComponent<AvatarViewDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    data: AvatarViewDialogData;
    dialogRef: MatDialogRef<AvatarViewDialogComponent>;
    /** Null while loading; then the URL, or null when the photo could not be loaded. */
    readonly photo$: Observable<{
        url: string | null;
    } | null>;
    constructor(store: Store<AppState>, router: Router, data: AvatarViewDialogData, dialogRef: MatDialogRef<AvatarViewDialogComponent>, avatarService: UserAvatarService);
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarViewDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarViewDialogComponent, "st-avatar-view-dialog", never, {}, {}, never, never, false, never>;
}
