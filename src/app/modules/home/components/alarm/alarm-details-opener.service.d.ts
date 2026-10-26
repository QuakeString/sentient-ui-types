import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { AlarmService } from '@core/http/alarm.service';
import { AlarmDetailsOpener } from '@shared/models/notification.models';
import * as i0 from "@angular/core";
/**
 * Opens an alarm's details dialog by id, for places outside the alarm table
 * (a notification card). Says so when the alarm no longer exists.
 */
export declare class AlarmDetailsOpenerService implements AlarmDetailsOpener {
    private dialog;
    private alarmService;
    private store;
    private translate;
    constructor(dialog: MatDialog, alarmService: AlarmService, store: Store<AppState>, translate: TranslateService);
    open(alarmId: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmDetailsOpenerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlarmDetailsOpenerService>;
}
