/**
 * An eyedropper for browsers without the EyeDropper API (Firefox, Safari, or
 * Chrome on a plain-http address). It can only see this page. Drawing the
 * whole page to a picture takes many seconds on a dashboard, so it reads the
 * colour of what is under the pointer instead: a pixel of a chart canvas or
 * image, the fill or stroke of an SVG shape, the colour of text, or a
 * background, blending see-through layers from the top down (fill-opacity,
 * opacity) until the colour is solid. Dialog backdrops are looked through.
 *
 * Resolves #rrggbb, or null on Escape / right click. `exclude` (the colour
 * picker's own popover) is looked through.
 */
export declare function pickColorFromPage(exclude?: Element | null): Promise<string | null>;
