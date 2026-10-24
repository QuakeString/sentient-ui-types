import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { AuthService } from '@core/auth/auth.service';
import { DialogService } from '@core/services/dialog.service';
import { SolutionService } from '@core/http/solution.service';
import { CellActionDescriptor, EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { InstalledSolution, SolutionDraftInfo } from '@shared/models/solution.models';
/** A table row: the item with the `{id: {id}}` the entities table keys rows by. */
export type SolutionRow<T> = BaseData<HasId> & {
    item: T;
};
/** The services the Solution hub tables use. */
export interface SolutionTableDeps {
    solutionService: SolutionService;
    router: Router;
    dialog: MatDialog;
    translate: TranslateService;
    store: Store<AppState>;
    datePipe: DatePipe;
    authService?: AuthService;
    dialogService?: DialogService;
}
/** Rows are loaded whole and searched / sorted / paged here (the lists are short). */
declare abstract class SolutionTableConfig<T> extends EntityTableConfig<SolutionRow<T>> {
    protected deps: SolutionTableDeps;
    protected constructor(deps: SolutionTableDeps, title: string, noEntities: string);
    protected abstract load(): Observable<SolutionRow<T>[]>;
    protected abstract matches(row: SolutionRow<T>, text: string): boolean;
    protected notify(message: string, type: 'success' | 'error'): void;
    protected action(name: string, icon: string, onAction: (row: SolutionRow<T>) => void, isEnabled?: (row: SolutionRow<T>) => boolean): CellActionDescriptor<SolutionRow<T>>;
    refresh(): void;
}
export declare class InstalledSolutionsTableConfig extends SolutionTableConfig<InstalledSolution> {
    /** Solutions whose emulator was started from this page (the server keeps no list per solution). */
    private emulating;
    constructor(deps: SolutionTableDeps);
    /** The templates' current versions by id (an installed solution may have a newer one). */
    private templateVersions;
    protected load(): Observable<SolutionRow<InstalledSolution>[]>;
    /** The template's current version when it is newer than the one installed. */
    private latestVersion;
    /** A draft of the template's current version with the same parameters, opened in the creator to review and apply. */
    private update;
    protected matches(row: SolutionRow<InstalledSolution>, text: string): boolean;
    private openDashboard;
    private emulator;
    /** Signs in as one of the solution's users (the platform's "login as"), to see what they see. */
    private viewAs;
    /** A draft of the solution as it is now, opened in the creator; installing it applies the changes. */
    private edit;
    private copy;
    private saveAsTemplate;
    private rename;
    private askName;
    /** The solution as a package file, for another SENTIENT to import. */
    private exportFile;
    private uninstall;
    private uninstallAll;
}
export declare class SolutionDraftsTableConfig extends SolutionTableConfig<SolutionDraftInfo> {
    constructor(deps: SolutionTableDeps);
    protected load(): Observable<SolutionRow<SolutionDraftInfo>[]>;
    protected matches(row: SolutionRow<SolutionDraftInfo>, text: string): boolean;
    private open;
}
export {};
