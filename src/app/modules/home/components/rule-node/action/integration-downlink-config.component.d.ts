import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/models/rule-node.models';
import { IntegrationService } from '@core/http/integration.service';
import { Integration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class IntegrationDownlinkConfigComponent extends RuleNodeConfigurationComponent {
    private fb;
    private integrationService;
    integrationDownlinkConfigForm: UntypedFormGroup;
    integrations: Integration[];
    constructor(fb: UntypedFormBuilder, integrationService: IntegrationService);
    protected configForm(): UntypedFormGroup;
    protected onConfigurationSet(configuration: RuleNodeConfiguration): void;
    private loadIntegrations;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationDownlinkConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationDownlinkConfigComponent, "tb-action-node-integration-downlink-config", never, {}, {}, never, never, false, never>;
}
