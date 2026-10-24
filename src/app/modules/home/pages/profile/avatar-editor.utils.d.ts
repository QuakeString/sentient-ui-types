export declare const AVATAR_MIN_ZOOM = 1;
export declare const AVATAR_MAX_ZOOM = 4;
export interface AvatarTransform {
    /** Clockwise, a multiple of 90. */
    rotation: number;
    /** Mirror left-right (applied after the rotation, i.e. as seen on screen). */
    flip: boolean;
    zoom: number;
    offsetX: number;
    offsetY: number;
}
/** Percentages as in CSS filters: 100 = unchanged. */
export interface AvatarAdjustments {
    brightness: number;
    contrast: number;
    saturation: number;
    grayscale: boolean;
}
export declare const defaultAvatarTransform: () => AvatarTransform;
export declare const defaultAvatarAdjustments: () => AvatarAdjustments;
export declare const isDefaultAvatarAdjustments: (a: AvatarAdjustments) => boolean;
/** Crop units per image pixel at zoom 1. */
export declare const avatarBaseScale: (width: number, height: number, rotation: number) => number;
/**
 * Keeps zoom in range and the offset small enough that the image still
 * covers the whole crop square (so the circle never shows an empty edge).
 */
export declare const clampAvatarTransform: (t: AvatarTransform, width: number, height: number) => AvatarTransform;
/**
 * New zoom keeping the image point under `(cx, cy)` (crop units) in place:
 * the offset from that point scales with the zoom. (0, 0) zooms about the centre.
 */
export declare const zoomAvatarAt: (t: AvatarTransform, zoom: number, cx?: number, cy?: number) => AvatarTransform;
/**
 * Turns the picture by 90 degrees as seen on screen (clockwise when `clockwise`).
 * When mirrored, the stored rotation runs the other way to look the same.
 * The offset turns with it, so the same part of the image stays in the circle.
 */
export declare const rotateAvatar: (t: AvatarTransform, clockwise: boolean) => AvatarTransform;
export declare const flipAvatar: (t: AvatarTransform) => AvatarTransform;
/** CSS `filter` value (the live preview; also ctx.filter where supported). */
export declare const avatarCssFilter: (a: AvatarAdjustments) => string;
/**
 * Inline style for an <img> inside a square, overflow-visible crop box. All in
 * percent of the box, so one style serves the stage and every preview size.
 */
export declare const avatarImageStyle: (t: AvatarTransform, width: number, height: number, a: AvatarAdjustments) => {
    [key: string]: string;
};
/**
 * Draws the crop square of the placed image into a `size` x `size` canvas:
 * a crop unit becomes `size` pixels, so the canvas transform is the placement
 * above scaled by `size` around the canvas centre.
 */
export declare const renderAvatar: (image: CanvasImageSource, width: number, height: number, t: AvatarTransform, a: AvatarAdjustments, size: number) => HTMLCanvasElement;
