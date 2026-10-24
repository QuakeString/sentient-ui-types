import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { SolutionService } from '@core/http/solution.service';
import { AuthService } from '@core/auth/auth.service';
import { DialogService } from '@core/services/dialog.service';
import { InstalledSolutionsTableConfig } from './solution-tables';
import * as i0 from "@angular/core";
/** Solution hub → Installed: the tenant's solutions and what can be done with them. */
export declare class SolutionInstalledComponent {
    config: InstalledSolutionsTableConfig;
    constructor(solutionService: SolutionService, router: Router, dialog: MatDialog, translate: TranslateService, store: Store<AppState>, datePipe: DatePipe, authService: AuthService, dialogService: DialogService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionInstalledComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionInstalledComponent, "st-solution-installed", never, {}, {}, never, never, false, never>;
}
