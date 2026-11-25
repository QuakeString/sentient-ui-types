import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { IntegrationService } from '@core/http/integration.service';
import { Integration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export interface AssignEdgeIntegrationsDialogData {
    edgeId: string;
    /** Ids already assigned to the edge. */
    assigned: string[];
}
/** SENTIENT Edge (docs/edge plan P7.5): assign edge-template integrations to an edge. */
export declare class AssignEdgeIntegrationsDialogComponent extends DialogComponent<AssignEdgeIntegrationsDialogComponent, boolean> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AssignEdgeIntegrationsDialogData;
    private integrationService;
    dialogRef: MatDialogRef<AssignEdgeIntegrationsDialogComponent, boolean>;
    private fb;
    form: UntypedFormGroup;
    templates: Integration[];
    loaded: boolean;
    /** Shown as text: the placeholder syntax (braces would be read as interpolation). */
    readonly placeholder: string;
    constructor(store: Store<AppState>, router: Router, data: AssignEdgeIntegrationsDialogData, integrationService: IntegrationService, dialogRef: MatDialogRef<AssignEdgeIntegrationsDialogComponent, boolean>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    assign(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssignEdgeIntegrationsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssignEdgeIntegrationsDialogComponent, "tb-assign-edge-integrations-dialog", never, {}, {}, never, never, false, never>;
}
