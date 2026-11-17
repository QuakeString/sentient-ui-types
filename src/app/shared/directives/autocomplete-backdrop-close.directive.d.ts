import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Closes an autocomplete panel when its backdrop is clicked.
 *
 * Every autocomplete gets a transparent backdrop (MAT_AUTOCOMPLETE_DEFAULT_OPTIONS
 * in the shared providers), so a click outside the panel does not also act on
 * what lies underneath, e.g. open a table row. Material itself never listens to
 * that backdrop: it closes the panel only when a document click arrives while
 * the input has lost focus. A click on the backdrop leaves the focus in the
 * input, so inside a dialog the panel stayed open until Esc.
 */
export declare class AutocompleteBackdropCloseDirective implements OnInit {
    private readonly trigger;
    private readonly destroyRef;
    private watched;
    private backdropSubscription;
    ngOnInit(): void;
    private watchOverlay;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteBackdropCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AutocompleteBackdropCloseDirective, "input[matAutocomplete], textarea[matAutocomplete]", never, {}, {}, never, never, false, never>;
}
