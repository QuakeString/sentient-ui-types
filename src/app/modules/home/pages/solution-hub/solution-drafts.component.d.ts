import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { SolutionDraftsTableConfig } from './solution-tables';
import * as i0 from "@angular/core";
/** Solution hub → Drafts: solutions being put together (or changed) before they are installed. */
export declare class SolutionDraftsComponent {
    config: SolutionDraftsTableConfig;
    constructor(solutionService: SolutionService, router: Router, dialog: MatDialog, translate: TranslateService, store: Store<AppState>, datePipe: DatePipe);
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionDraftsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionDraftsComponent, "st-solution-drafts", never, {}, {}, never, never, false, never>;
}
