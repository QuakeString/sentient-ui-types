import { FormBuilder, FormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
/**
 * "Microsoft Teams" rule node: posts to a Teams channel webhook (Workflows
 * webhooks get an Adaptive Card, old Office 365 connector webhooks a
 * MessageCard).
 */
export declare class MsTeamsConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    msTeamsConfigForm: FormGroup;
    constructor(fb: FormBuilder);
    protected configForm(): FormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    protected prepareInputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    protected prepareOutputConfig(configuration: RuleNodeConfiguration): RuleNodeConfiguration;
    static ɵfac: i0.ɵɵFactoryDeclaration<MsTeamsConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MsTeamsConfigComponent, "tb-external-node-ms-teams-config", never, {}, {}, never, never, false, never>;
}
