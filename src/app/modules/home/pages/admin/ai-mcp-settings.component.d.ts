import { OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityType } from '@shared/models/entity-type.models';
import { UserId } from '@shared/models/id/user-id';
import { McpService, McpStatus } from '@core/http/mcp.service';
import * as i0 from "@angular/core";
/**
 * Settings → MCP server.
 *
 * Two settings cards: the MCP server (instance switch and allowed tenant
 * profiles for a sys admin; read-only availability for a tenant admin) and
 * the current user's API keys, using the shared API keys table. AI usage and
 * the customer-user assistant model are on Settings → AI assistant.
 */
export declare class AiMcpSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private fb;
    private mcpService;
    readonly entityType: typeof EntityType;
    readonly isSysAdmin: boolean;
    readonly userId: UserId;
    readonly endpointUrl: string;
    readonly connectCommand: string;
    mcpSettingsForm: FormGroup;
    status: McpStatus;
    constructor(store: Store<AppState>, fb: FormBuilder, mcpService: McpService);
    ngOnInit(): void;
    confirmForm(): FormGroup;
    save(): void;
    createMarkDownCommand(command: string): string;
    private setSettings;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiMcpSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AiMcpSettingsComponent, "st-ai-mcp-settings", never, {}, {}, never, never, false, never>;
}
