import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { SolutionItemType } from '@shared/models/solution.models';
import { SolutionItemInstalled } from './solution-item-install-dialog.component';
import * as i0 from "@angular/core";
/**
 * The Solution hub on the platform's own pages: "Add from Solution hub" in a
 * page's add menu and "Save to Solution hub" on its rows.
 */
export declare class SolutionHubActionsService {
    private dialog;
    constructor(dialog: MatDialog);
    /** The hub's items of a kind ('dashboards', 'widgets', 'calculated-fields', 'alarm-rules', 'rule-chains', 'device-profiles', 'analytics-pipelines'). */
    addFromHub(kind: string, target?: EntityId): Observable<SolutionItemInstalled>;
    saveToHub(itemType: SolutionItemType, entityId: string, name: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionHubActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolutionHubActionsService>;
}
/** For table configs that are not created by dependency injection: open the picker with their own MatDialog. */
export declare function addFromSolutionHub(dialog: MatDialog, kind: string, target?: EntityId): Observable<SolutionItemInstalled>;
/** For table configs that are not created by dependency injection: "Save to Solution hub" with their own MatDialog. */
export declare function saveToSolutionHub(dialog: MatDialog, itemType: SolutionItemType, entityId: string, name: string): Observable<any>;
