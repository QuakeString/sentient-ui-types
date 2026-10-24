import { OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/** Side of the square photo the client uploads (the server re-encodes to at most this). */
export declare const USER_AVATAR_SIZE = 256;
/** Formats the photo picker accepts. */
export declare const USER_AVATAR_ACCEPT = "image/png,image/jpeg,image/webp";
/**
 * Profile photos: upload/remove the current user's photo, and load any user's
 * photo as an object URL. The API needs the auth header, so an <img> cannot
 * point at it directly; photos are fetched as blobs and kept per user and
 * version (the version is in the URL, so a cached photo is never stale). A
 * newer version replaces and revokes the older URL.
 */
export declare class UserAvatarService implements OnDestroy {
    private http;
    private cache;
    constructor(http: HttpClient);
    ngOnDestroy(): void;
    /** Object URL of a user's photo, or null when it cannot be loaded (initials are shown then). */
    getAvatarUrl(userId: string, version: number | string): Observable<string | null>;
    /** Sets the current user's photo; resolves to the new avatarVersion. */
    uploadAvatar(image: Blob): Observable<number>;
    /** Removes the current user's photo. */
    removeAvatar(userId: string): Observable<void>;
    private revoke;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserAvatarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserAvatarService>;
}
/** Largest source file the photo editor opens (the upload itself is the small re-rendered image). */
export declare const USER_AVATAR_MAX_SOURCE_BYTES: number;
/**
 * Encodes a rendered photo for upload: WebP, or JPEG where the browser cannot
 * encode WebP (older Safari silently returns PNG for unknown types).
 */
export declare const encodeAvatarCanvas: (canvas: HTMLCanvasElement) => Promise<Blob>;
