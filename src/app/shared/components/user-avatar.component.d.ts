import { ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { UserAvatarService } from '@core/http/user-avatar.service';
import * as i0 from "@angular/core";
/** Anything that describes a user: User, UserEmailInfo, AlarmAssignee... */
export interface UserAvatarSource {
    id?: string | {
        id: string;
    };
    firstName?: string;
    lastName?: string;
    email?: string;
    name?: string;
    avatarVersion?: number;
    additionalInfo?: {
        avatarVersion?: number;
        [key: string]: any;
    };
}
/** Stable base colour for a user. */
export declare const userAvatarColor: (key: string) => string;
/** Stable gradient for a user's initials: their colour pair, a direction, and a soft top-left highlight. */
export declare const userAvatarGradient: (key: string) => string;
/** One or two letters: first + last name initials, else the start of the email / name. */
export declare const userAvatarInitials: (firstName?: string, lastName?: string, fallback?: string) => string;
/**
 * A user's profile photo, or their initials on a colour derived from the user
 * id when they have none (or it cannot be loaded). Circular, `size` px.
 */
export declare class UserAvatarComponent implements OnChanges, OnDestroy {
    private avatarService;
    private cd;
    /** Takes id, names, email and avatarVersion from a user-like object. */
    user: UserAvatarSource;
    /** Overrides for the values in `user`. */
    userId: string;
    avatarVersion: number;
    firstName: string;
    lastName: string;
    /** Initials fallback when there is no name (email or display name). */
    email: string;
    size: number;
    imageUrl: string;
    initials: string;
    get width(): number;
    get height(): number;
    get fontSize(): number;
    background: string;
    backgroundImage: string;
    get hasPhoto(): boolean;
    readonly ariaHidden = "true";
    private loadSubscription;
    private loadedKey;
    constructor(avatarService: UserAvatarService, cd: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserAvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserAvatarComponent, "st-user-avatar", never, { "user": { "alias": "user"; "required": false; }; "userId": { "alias": "userId"; "required": false; }; "avatarVersion": { "alias": "avatarVersion"; "required": false; }; "firstName": { "alias": "firstName"; "required": false; }; "lastName": { "alias": "lastName"; "required": false; }; "email": { "alias": "email"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
