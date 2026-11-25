import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { RuleChainService } from '@core/http/rule-chain.service';
import { MatDialog } from '@angular/material/dialog';
import { ConverterScriptKind } from '@shared/components/dialog/node-script-test-dialog.component';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import { DebugRuleNodeEventBody } from '@shared/models/event.models';
import * as i0 from "@angular/core";
export declare class NodeScriptTestService {
    private ruleChainService;
    dialog: MatDialog;
    private injector;
    constructor(ruleChainService: RuleChainService, dialog: MatDialog, injector: Injector);
    testNodeScript(script: string, scriptType: string, functionTitle: string, functionName: string, argNames: string[], ruleNodeId: string, helpId?: string, scriptLang?: ScriptLanguage, debugEventBody?: DebugRuleNodeEventBody, converter?: ConverterScriptKind): Observable<string>;
    private openTestScriptDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<NodeScriptTestService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
