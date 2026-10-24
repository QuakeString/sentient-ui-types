import { ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/** A finding's recommendation that the viewer can put away: it then
 *  disappears and the lightbulb (st-cm-reco-bulb, on the finding's own line)
 *  brings it back. Remembered per viewer and text, so the same advice stays
 *  put away in every widget. */
export declare class CmRecommendationComponent implements OnChanges, OnDestroy {
    private cd;
    text: string;
    dismissed: boolean;
    private sub;
    constructor(cd: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    dismiss(e: Event): void;
    show(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmRecommendationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmRecommendationComponent, "st-cm-recommendation", never, { "text": { "alias": "text"; "required": false; }; }, {}, never, never, false, never>;
}
/** The lightbulb on a finding's line, shown while its recommendation is put
 *  away; a click brings the recommendation back. */
export declare class CmRecommendationBulbComponent extends CmRecommendationComponent {
    constructor(cd: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmRecommendationBulbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmRecommendationBulbComponent, "st-cm-reco-bulb", never, {}, {}, never, never, false, never>;
}
