import { ChangeDetectorRef, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AiUsage, AiUsageService } from '@core/http/ai-usage.service';
import { AiAssistantModel, AiAssistantService } from '@core/http/ai-assistant.service';
import { AiAssistantStore } from '@home/components/ai-assistant/ai-assistant.store';
import * as i0 from "@angular/core";
/**
 * Settings → AI assistant.
 *
 * The tenant admin chooses the default model of the assistant and the model
 * customer users' assistant runs on, and
 * everyone sees this month's AI usage (all tenants for a sys admin) with the
 * system-model limits from the tenant profile.
 */
export declare class AiAssistantSettingsComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private aiUsageService;
    private aiAssistantService;
    private assistant;
    private cd;
    readonly isSysAdmin: boolean;
    usage: AiUsage;
    assistantModels: AiAssistantModel[];
    customerModelId: string | null;
    defaultModelId: string | null;
    constructor(store: Store<AppState>, aiUsageService: AiUsageService, aiAssistantService: AiAssistantService, assistant: AiAssistantStore, cd: ChangeDetectorRef);
    ngOnInit(): void;
    saveCustomerModel(id: string | null): void;
    saveDefaultModel(id: string | null): void;
    private applySettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiAssistantSettingsComponent, "st-ai-assistant-settings", never, {}, {}, never, never, false, never>;
}
