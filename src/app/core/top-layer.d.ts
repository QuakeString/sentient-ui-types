/**
 * Popup dialogs, popovers and widget fullscreen are shown in the browser's
 * top layer (the CDK opens its overlays as popover elements). Nothing in the
 * page itself is drawn above the top layer, whatever its z-index: a tooltip
 * or popup attached to <body> opens behind a dialog or a fullscreen widget.
 *
 * `topLayerHost` names the element such a floating element has to be
 * attached to so it shows above `el`: the open popover or the fullscreen
 * element that contains it, else <body>.
 */
export declare function topLayerHost(el: Element | null | undefined): HTMLElement;
/**
 * Once tooltipster is loaded: every tooltip opens inside the top-layer
 * element of its origin (see `topLayerHost`), so it shows over a popup
 * dialog or a fullscreen widget. Safe to call more than once.
 */
export declare function followTopLayerWithTooltipster($: any): void;
