import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
/** What the user asked of a code editor. */
export type ScriptAssistMode = 'WRITE' | 'FIX' | 'EXPLAIN' | 'SIMPLIFY' | 'ASK' | 'COMPLETE';
/** `POST /api/ai/assistant/script`. */
export interface ScriptAssistRequest {
    mode: ScriptAssistMode;
    instruction?: string;
    language?: string;
    functionName?: string;
    functionTitle?: string;
    functionArgs?: string[];
    resultType?: string;
    code: string;
    /** COMPLETE: the cursor, as a character offset into `code`. */
    cursor?: number;
    error?: string;
    /** What the dialog around the editor knows, label → value. */
    context?: {
        [label: string]: string;
    };
    modelId?: string;
}
/** The whole new script (COMPLETE: the text to insert), and a note. */
export interface ScriptAssistAnswer {
    code?: string;
    note: string;
}
/** Context a host puts around its editor: label → value, read when the user asks. */
export type ScriptAssistContext = () => {
    [label: string]: string;
};
/** Script assist in code editors (`/api/ai/assistant/script`). */
export declare class ScriptAssistService {
    private http;
    private store;
    /** Whether the AI assistant is available to this user; checked every five minutes. */
    readonly available$: Observable<boolean>;
    constructor(http: HttpClient, store: Store<AppState>);
    ask(request: ScriptAssistRequest): Observable<ScriptAssistAnswer>;
    /** Suggestions while typing: on unless the user turned them off. */
    get suggestWhileTyping(): boolean;
    set suggestWhileTyping(on: boolean);
    private userId;
    /** The model the user picked in the AI assistant panel, if any. */
    private chosenModelId;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScriptAssistService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScriptAssistService>;
}
