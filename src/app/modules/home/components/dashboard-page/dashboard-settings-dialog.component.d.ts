import { OnDestroy } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointId, DashboardSettings, GridSettings, ViewFormatType } from '@app/shared/models/dashboard.models';
import { StatesControllerService } from './states/states-controller.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { ContentTranslationService } from '@core/http/content-translation.service';
import * as i0 from "@angular/core";
export interface DashboardSettingsDialogData {
    /** The dashboard's title, edited in the Title row (dashboard settings only). */
    title?: string;
    settings?: DashboardSettings;
    gridSettings?: GridSettings;
    isRightLayout?: boolean;
    breakpointId?: BreakpointId;
}
export declare class DashboardSettingsDialogComponent extends DialogComponent<DashboardSettingsDialogComponent, DashboardSettingsDialogData> implements OnDestroy, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: DashboardSettingsDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DashboardSettingsDialogComponent, DashboardSettingsDialogData>;
    private fb;
    private translate;
    private statesControllerService;
    private dashboardUtils;
    private contentTranslation;
    viewFormatTypes: ViewFormatType[];
    viewFormatTypeTranslationMap: Map<ViewFormatType, string>;
    dashboardTitlePreview: string;
    settings: DashboardSettings;
    gridSettings: GridSettings;
    isRightLayout: boolean;
    settingsFormGroup: FormGroup;
    gridSettingsFormGroup: FormGroup;
    titleControl: FormControl<string | null>;
    stateControllerIds: string[];
    layoutSettingsType: string;
    submitted: boolean;
    scadaColumns: number[];
    private layoutType;
    private breakpointId;
    private destroy$;
    /** The tenant has content languages, so the toolbar's language menu has something to offer. */
    hasContentLanguages: boolean;
    private stateControllerTranslationMap;
    constructor(store: Store<AppState>, router: Router, data: DashboardSettingsDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DashboardSettingsDialogComponent, DashboardSettingsDialogData>, fb: FormBuilder, translate: TranslateService, statesControllerService: StatesControllerService, dashboardUtils: DashboardUtilsService, contentTranslation: ContentTranslationService);
    ngOnDestroy(): void;
    isScada(): boolean;
    get isDefaultLayout(): boolean;
    get isDefaultBreakpoint(): boolean;
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    getStatesControllerTranslation(stateControllerId: string): string;
    private updateGridSettingsFormState;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardSettingsDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardSettingsDialogComponent, "tb-dashboard-settings-dialog", never, {}, {}, never, never, false, never>;
}
