import { User } from '@shared/models/user.model';
import * as i0 from "@angular/core";
/**
 * A user's photo beside the name in the user details, with view / change over
 * it like the profile page (remove is in the photo editor). Change shows only
 * when the signed-in user may edit this user; the server checks it again.
 * Changes apply at once, not with the form's save.
 */
export declare class UserPhotoComponent {
    readonly user: import("@angular/core").InputSignal<User>;
    private store;
    private dialog;
    private translate;
    private permissionService;
    private avatarService;
    /** The photo version shown; follows the input and any change made here or elsewhere. */
    readonly avatarVersion: import("@angular/core").WritableSignal<number>;
    readonly hasPhoto: import("@angular/core").Signal<boolean>;
    /** Actions shown by a tap (touch has no hover). */
    readonly actionsVisible: import("@angular/core").WritableSignal<boolean>;
    private pointerType;
    readonly userId: import("@angular/core").Signal<string>;
    readonly isSelf: import("@angular/core").Signal<boolean>;
    /** The same rule the server applies (it still has the last word). */
    readonly canEdit: import("@angular/core").Signal<boolean>;
    readonly displayName: import("@angular/core").Signal<string>;
    constructor();
    onPointerDown(event: PointerEvent): void;
    toggleActions(): void;
    onAction(event: Event, action: 'view' | 'change'): void;
    view(): void;
    change(): void;
    /** The photo changed: this view, the signed-in user (left menu) when it is them, and a notice. */
    private applied;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserPhotoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserPhotoComponent, "st-user-photo", never, { "user": { "alias": "user"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
