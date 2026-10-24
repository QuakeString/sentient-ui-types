import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import { AiAssistantStore } from './ai-assistant.store';
import * as i0 from "@angular/core";
/**
 * The AI assistant button in the home toolbar (shown when the assistant is
 * available). It counts as "the way in" only while it is really visible: when
 * the toolbar is hidden (an expanded dashboard, full screen), the right-edge
 * tab takes over.
 */
export declare class AiAssistantButtonComponent implements OnDestroy {
    store: AiAssistantStore;
    private zone;
    private observer;
    private unregister;
    constructor(store: AiAssistantStore, zone: NgZone);
    /** Watches the button whenever it is rendered. */
    set button(ref: ElementRef<HTMLElement> | undefined);
    ngOnDestroy(): void;
    private setVisible;
    private stopWatching;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAssistantButtonComponent, "st-ai-assistant-button", never, {}, {}, never, never, false, never>;
}
