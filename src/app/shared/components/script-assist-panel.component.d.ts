import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ScriptAssistAnswer, ScriptAssistMode, ScriptAssistRequest, ScriptAssistService } from '@core/http/script-assist.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/** One line of the proposal next to the current script. */
export interface ScriptDiffLine {
    kind: 'same' | 'add' | 'del';
    text: string;
    /** Line number in the proposal (none for removed lines). */
    line?: number;
}
/** Line diff of two scripts (longest common subsequence). */
export declare function diffScriptLines(before: string, after: string): ScriptDiffLine[];
/**
 * The script assist panel above a code editor: asks for an instruction when the
 * mode needs one, calls the model, and shows the answer as a diff with a note.
 * The editor changes only when the user accepts.
 */
export declare class ScriptAssistPanelComponent implements OnInit, OnDestroy {
    private assist;
    private translate;
    private cd;
    mode: ScriptAssistMode;
    /** The editor's state when asked: script, signature, error, context. */
    request: () => Omit<ScriptAssistRequest, 'mode' | 'instruction'>;
    accept: EventEmitter<string>;
    closed: EventEmitter<void>;
    /** The prompt takes the focus whenever it shows. */
    set askInput(input: ElementRef<HTMLTextAreaElement>);
    instruction: string;
    state: 'input' | 'loading' | 'result' | 'error';
    errorText: string;
    answer: ScriptAssistAnswer;
    diff: ScriptDiffLine[];
    changed: boolean;
    /** JS proposals are compiled here before they are shown. */
    syntaxError: string;
    syntaxChecked: boolean;
    /** What the model is sent besides the script, for the (i) tooltip. */
    contextTip: string;
    private sub;
    constructor(assist: ScriptAssistService, translate: TranslateService, cd: ChangeDetectorRef);
    get needsInstruction(): boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    run(): void;
    stop(): void;
    /** Back to the prompt to say more (WRITE, ASK), or the same request again. */
    retry(): void;
    doAccept(): void;
    onKeydown(e: KeyboardEvent): void;
    private checkSyntax;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScriptAssistPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScriptAssistPanelComponent, "tb-script-assist-panel", never, { "mode": { "alias": "mode"; "required": false; }; "request": { "alias": "request"; "required": false; }; }, { "accept": "accept"; "closed": "closed"; }, never, never, false, never>;
}
