import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { RecipeService } from '@core/http/recipe.service';
import { RecipeDeviceResult, RecipeElement, RecipeElementKind, RecipeLiveReading, RecipePreparedSend, SendHistoryRow } from '@shared/models/recipe.models';
import * as i0 from "@angular/core";
export interface RecipeSendDialogData {
    recipeDataId: string;
    recipeDataName: string;
    recipeId: string;
    /** The record's saved values (inputs). */
    values: Record<string, unknown>;
    /** A send the server already held back (opened from a widget), shown first. */
    heldBack?: {
        message: string;
        prepared: RecipePreparedSend;
    };
}
/** What the dialog returns: whether something was sent. */
export interface RecipeSendDialogResult {
    sent: boolean;
}
/**
 * Send a recipe data record: shows the live readings (time, age, state,
 * override), every value with its limits, and what each device will get;
 * sends once nothing blocks (asking for confirmation of old readings where
 * the recipe says so); then shows the result per device with Retry for a
 * device that failed. The last sends are listed below with the same Retry.
 */
export declare class RecipeSendDialogComponent extends DialogComponent<RecipeSendDialogComponent, RecipeSendDialogResult> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: RecipeSendDialogData;
    dialogRef: MatDialogRef<RecipeSendDialogComponent, RecipeSendDialogResult>;
    private recipeService;
    readonly KIND: typeof RecipeElementKind;
    readonly elements: import("@angular/core").WritableSignal<RecipeElement[]>;
    readonly prepared: import("@angular/core").WritableSignal<RecipePreparedSend>;
    readonly loading: import("@angular/core").WritableSignal<boolean>;
    readonly sending: import("@angular/core").WritableSignal<boolean>;
    /** Operator overrides of live values, by key. */
    readonly overrides: import("@angular/core").WritableSignal<Record<string, string | number>>;
    readonly confirmed: import("@angular/core").WritableSignal<boolean>;
    /** Per-device outcome of the last send from this dialog. */
    readonly results: import("@angular/core").WritableSignal<RecipeDeviceResult[]>;
    readonly lastAuditId: import("@angular/core").WritableSignal<string>;
    readonly history: import("@angular/core").WritableSignal<SendHistoryRow[]>;
    readonly error: import("@angular/core").WritableSignal<string>;
    readonly problemKeys: import("@angular/core").Signal<Set<string>>;
    readonly canSend: import("@angular/core").Signal<boolean>;
    /** Values listed in the dialog: everything but the operator's inputs (those are the record's). */
    readonly workedOut: import("@angular/core").Signal<RecipeElement[]>;
    private refresh$;
    private destroyRef;
    constructor(store: Store<AppState>, router: Router, data: RecipeSendDialogData, dialogRef: MatDialogRef<RecipeSendDialogComponent, RecipeSendDialogResult>, recipeService: RecipeService);
    ngOnInit(): void;
    live(key: string): RecipeLiveReading | undefined;
    value(key: string): unknown;
    problem(key: string): string | undefined;
    /** "12 min ago" style age of a reading. */
    age(ms: number | undefined): string;
    setOverride(key: string, raw: string): void;
    send(deviceIds?: string[], retryOf?: string): void;
    retry(deviceId: string, auditId: string | null): void;
    close(): void;
    private loadHistory;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipeSendDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecipeSendDialogComponent, "st-recipe-send-dialog", never, {}, {}, never, never, false, never>;
}
