import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { AceHighlightRules } from '@shared/models/ace/ace.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { RafService } from '@core/services/raf.service';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import { TbFunction } from '@shared/models/js-function.models';
import { TbPopoverService } from '@shared/components/popover.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThemeService } from '@core/services/theme.service';
import { ScriptAssistContext, ScriptAssistMode, ScriptAssistRequest, ScriptAssistService } from '@core/http/script-assist.service';
import * as i0 from "@angular/core";
export declare class JsFuncComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor, Validator {
    elementRef: ElementRef;
    private utils;
    private translate;
    protected store: Store<AppState>;
    private raf;
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private http;
    private themeService;
    private scriptAssist;
    javascriptEditorElmRef: ElementRef;
    private jsEditor;
    private initialCompleters;
    private editorsResizeCaf;
    private editorResize$;
    private ignoreChange;
    private themeSubscription;
    toastTargetId: string;
    label: string;
    functionTitle: string;
    functionName: string;
    functionArgs: Array<string>;
    validationArgs: Array<any>;
    resultType: string;
    disabled: boolean;
    fillHeight: boolean;
    minHeight: string;
    editorCompleter: TbEditorCompleter;
    highlightRules: AceHighlightRules;
    globalVariables: Array<string>;
    helpPopupStyle: Record<string, any>;
    disableUndefinedCheck: boolean;
    helpId: string;
    scriptLanguage: ScriptLanguage;
    /** What the dialog around the editor knows, for script assist: label → value. */
    assistContext: ScriptAssistContext;
    hideBrackets: boolean;
    hideLabel: boolean;
    withModules: boolean;
    private noValidateValue;
    get noValidate(): boolean;
    set noValidate(value: boolean);
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    functionLabel: string;
    fullscreen: boolean;
    modelValue: string;
    modules: {
        [alias: string]: string;
    };
    functionValid: boolean;
    validationError: string;
    errorShowed: boolean;
    errorMarkers: number[];
    errorAnnotationId: number;
    private functionArgsString;
    /** Script assist: the open panel's mode, if any. */
    assistMode: ScriptAssistMode;
    readonly assistAvailable$: Observable<boolean>;
    /** Suggestions while typing (ghost text, Tab accepts). */
    suggestOn: boolean;
    private assistAvailable;
    private assistAvailableSub;
    private suggestTimer;
    private suggestSub;
    /** The shown suggestion: its text, the cursor it was made for, and where it goes. */
    private ghost;
    private propagateChange;
    private _onTouched;
    hasErrors: boolean;
    constructor(elementRef: ElementRef, utils: UtilsService, translate: TranslateService, store: Store<AppState>, raf: RafService, cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, http: HttpClient, themeService: ThemeService, scriptAssist: ScriptAssistService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private onAceEditorResize;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        jsFunc: {
            valid: boolean;
        };
    };
    /** Tidy: format by script language. js-beautify is a JavaScript formatter
     *  and mangles Rhai's `..` / `..=` / `|x|` tokens into code that no longer
     *  parses, so Rhai goes through the Rhai-safe wrapper. TBEL is JS-shaped
     *  enough to use js-beautify as is. */
    beautifyJs(): void;
    private updateFunctionArgsString;
    private updateFunctionLabel;
    private updatedScriptLanguage;
    /** Reach into the current mode's CstyleBehaviour and flip the
     * `braces` option so `{` auto-closes to `{}`.  Necessary because
     * Ace captures the option in the constructor closure — the only
     * way to change it post-construction is to overwrite the bound
     * variable (which we can't reach) OR to remove and re-add the
     * "braces" insertion handler.  Re-adding is cleanest. */
    private forceBracesAutoClose;
    validateOnSubmit(): Observable<void>;
    focus(): void;
    private validateJsFunc;
    private cleanupJsErrors;
    writeValue(value: TbFunction): void;
    updateView(force?: boolean): void;
    editModules($event: Event, element: Element): void;
    private propagateValue;
    private updateByChangesPropName;
    private updateHighlightRules;
    private updateJsWorkerGlobals;
    /** The editor's state for the model: script, signature, error, context. */
    readonly assistRequest: () => Omit<ScriptAssistRequest, "mode" | "instruction">;
    assistHasError(): boolean;
    openAssist(mode: ScriptAssistMode): void;
    closeAssist(): void;
    /** Puts the accepted script in the editor as one edit, so Ctrl+Z brings the old one back. */
    acceptAssist(code: string): void;
    toggleSuggest(): void;
    /** The editor's error, for FIX: the last validation error, else the error annotations. */
    private assistError;
    /** Asks for a suggestion once the user pauses typing at the end of a line. */
    private scheduleSuggestion;
    private requestSuggestion;
    private cancelSuggestion;
    private clearSuggestion;
    /** Tab takes the suggestion, Esc drops it; with none shown both keep their usual job. */
    private setupSuggestionKeys;
    updateCompleters(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsFuncComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsFuncComponent, "tb-js-func", never, { "label": { "alias": "label"; "required": false; }; "functionTitle": { "alias": "functionTitle"; "required": false; }; "functionName": { "alias": "functionName"; "required": false; }; "functionArgs": { "alias": "functionArgs"; "required": false; }; "validationArgs": { "alias": "validationArgs"; "required": false; }; "resultType": { "alias": "resultType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "editorCompleter": { "alias": "editorCompleter"; "required": false; }; "highlightRules": { "alias": "highlightRules"; "required": false; }; "globalVariables": { "alias": "globalVariables"; "required": false; }; "helpPopupStyle": { "alias": "helpPopupStyle"; "required": false; }; "disableUndefinedCheck": { "alias": "disableUndefinedCheck"; "required": false; }; "helpId": { "alias": "helpId"; "required": false; }; "scriptLanguage": { "alias": "scriptLanguage"; "required": false; }; "assistContext": { "alias": "assistContext"; "required": false; }; "hideBrackets": { "alias": "hideBrackets"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; "withModules": { "alias": "withModules"; "required": false; }; "noValidate": { "alias": "noValidate"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, ["[toolbarStartButton]", "[toolbarPrefixButton]", "[toolbarSuffixButton]"], false, never>;
}
