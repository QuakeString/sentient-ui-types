import * as i0 from "@angular/core";
/**
 * Gradient stop marker: a round head filled with the stop colour on a surface
 * ring, with a short pointer whose tip is the host's top-centre point. Place
 * the host under the gradient bar with its centre at the stop position; the
 * parent handles dragging and keys.
 */
export declare class GradientStopMarkerComponent {
    /** Resolved CSS colour of the stop. */
    color: string;
    selected: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientStopMarkerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientStopMarkerComponent, "st-gradient-stop-marker", never, { "color": { "alias": "color"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; }, {}, never, never, false, never>;
}
