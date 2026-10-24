import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityId } from '@shared/models/id/entity-id';
import { SolutionItemSummary } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
export interface SolutionItemInstallDialogData {
    item: SolutionItemSummary;
    /** Where a calculated field goes (or what a pipeline runs on) when the caller already knows (the page's profile or entity). */
    target?: EntityId;
}
export interface SolutionItemInstalled {
    entityType: string;
    id: string;
    name: string;
}
/** Installs one Solution hub item: its name, and for a calculated field the entity it belongs to (for a pipeline, what it runs on). */
export declare class SolutionItemInstallDialogComponent extends DialogComponent<SolutionItemInstallDialogComponent, SolutionItemInstalled> {
    protected store: Store<AppState>;
    protected router: Router;
    dialogRef: MatDialogRef<SolutionItemInstallDialogComponent, SolutionItemInstalled>;
    data: SolutionItemInstallDialogData;
    private solutionService;
    name: string;
    targetType: EntityType;
    target: EntityId;
    busy: boolean;
    error: string;
    result: SolutionItemInstalled;
    private readonly allTargetTypes;
    /** A pipeline runs on a device profile or a device; a calculated field on any of the four. */
    get targetTypes(): {
        type: EntityType;
        label: string;
    }[];
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<SolutionItemInstallDialogComponent, SolutionItemInstalled>, data: SolutionItemInstallDialogData, solutionService: SolutionService);
    /** The item's kind (an ALARM calculated field is an alarm rule). */
    get kind(): import("@shared/models/solution.models").SolutionHubKind;
    get isPipeline(): boolean;
    /** Whether the dialog asks for a target. */
    get asksTarget(): boolean;
    /** Whether the target must be picked before installing (a pipeline can be bound later). */
    get needsTarget(): boolean;
    install(): void;
    /** The created entity's page. */
    get openUrl(): string | null;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionItemInstallDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionItemInstallDialogComponent, "st-solution-item-install-dialog", never, {}, {}, never, never, false, never>;
}
