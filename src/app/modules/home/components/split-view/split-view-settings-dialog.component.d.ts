import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { SplitViewTimewindowMode, SplitViewToolbarSettings } from '@shared/models/split-view.models';
import * as i0 from "@angular/core";
export type SplitViewSlideshowChoice = 'off' | '30' | '60' | '300' | 'custom';
/** The split view's settings edited in the dialog (in and out). */
export interface SplitViewSettingsDialogData {
    toolbar: SplitViewToolbarSettings;
    showPaneHeaders: boolean;
    openFullscreen: boolean;
    timewindowMode: SplitViewTimewindowMode;
    slideshowChoice: SplitViewSlideshowChoice;
    customSeconds: number;
    /** Number of pages (in only): the slideshow needs at least two. */
    pageCount?: number;
}
type ToolbarDisplayKey = Exclude<keyof SplitViewToolbarSettings, 'hidden'>;
/**
 * The split view's settings, like the dashboard's settings dialog: the top
 * bar, the panes, the time window and the slideshow.
 */
export declare class SplitViewSettingsDialogComponent extends DialogComponent<SplitViewSettingsDialogComponent, SplitViewSettingsDialogData> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: SplitViewSettingsDialogData;
    dialogRef: MatDialogRef<SplitViewSettingsDialogComponent, SplitViewSettingsDialogData>;
    private fb;
    readonly minSeconds = 10;
    readonly maxSeconds = 3600;
    readonly toolbarToggles: {
        key: ToolbarDisplayKey;
        label: string;
    }[];
    settingsFormGroup: FormGroup;
    private destroy$;
    constructor(store: Store<AppState>, router: Router, data: SplitViewSettingsDialogData, dialogRef: MatDialogRef<SplitViewSettingsDialogComponent, SplitViewSettingsDialogData>, fb: FormBuilder);
    get toolbarHidden(): boolean;
    get slideshowChoice(): SplitViewSlideshowChoice;
    get customSecondsInvalid(): boolean;
    ngOnDestroy(): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewSettingsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewSettingsDialogComponent, "st-split-view-settings-dialog", never, {}, {}, never, never, true, never>;
}
export {};
