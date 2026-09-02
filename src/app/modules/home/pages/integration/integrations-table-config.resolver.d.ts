import { RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Integration } from '@shared/models/integration.models';
import { IntegrationService } from '@core/http/integration.service';
import { EntityDebugSettingsService } from '@home/components/entity/debug/entity-debug-settings.service';
import * as i0 from "@angular/core";
export declare class IntegrationsTableConfigResolver {
    private translate;
    private datePipe;
    private integrationService;
    private entityDebugSettingsService;
    private dialog;
    private router;
    private readonly config;
    private readonly renderer;
    constructor(translate: TranslateService, datePipe: DatePipe, integrationService: IntegrationService, entityDebugSettingsService: EntityDebugSettingsService, dialog: MatDialog, router: Router, rendererFactory: RendererFactory2);
    /**
     * ThingsBoard "Status" pill: ACTIVE (green) / PENDING (amber) / INACTIVE (grey),
     * rendered as colored text on the same colour at 8% alpha — matching TB's DOM
     * (`border-radius:16px; height:32px; padding:0 12px; background: <color>/0.08`).
     */
    private statusCell;
    /**
     * Open the shared Debug-configuration popover for this integration (the
     * standard flow used across converters/rule nodes): Failures-only / All-messages
     * toggles, a "See debug events" action that opens the integration details, and
     * the per-entity recording-limit hint. Applied settings are saved back.
     */
    private onOpenDebugConfig;
    private onDebugConfigChanged;
    private addIntegration;
    resolve(): EntityTableConfig<Integration>;
    private openIntegration;
    onIntegrationAction(action: EntityAction<Integration>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntegrationsTableConfigResolver>;
}
