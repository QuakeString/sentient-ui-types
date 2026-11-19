import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { AuditLog } from '@shared/models/audit-log.models';
import { Ace } from 'ace-builds';
import { DialogComponent } from '@shared/components/dialog.component';
import { Router } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';
import * as i0 from "@angular/core";
export interface AuditLogDetailsDialogData {
    auditLog: AuditLog;
}
/** One row of the "Changes" table: a key with its old and new value. */
export interface AuditValueChangeRow {
    key: string;
    oldText: string;
    newText: string;
    added: boolean;
    deleted: boolean;
}
/** Where a change came from, as recorded with it. */
export interface AuditSourceInfo {
    via: string;
    dashboardId?: string;
    dashboardName?: string;
    state?: string;
    page?: string;
    clientAddress?: string;
    browser?: string;
    os?: string;
}
export declare class AuditLogDetailsDialogComponent extends DialogComponent<AuditLogDetailsDialogComponent> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: AuditLogDetailsDialogData;
    dialogRef: MatDialogRef<AuditLogDetailsDialogComponent>;
    private renderer;
    private themeService;
    actionDataEditorElmRef: ElementRef;
    failureDetailsEditorElmRef: ElementRef;
    auditLog: AuditLog;
    changes: AuditValueChangeRow[];
    changesTotal: number | null;
    oldValuesUnknown: boolean;
    source: AuditSourceInfo | null;
    rpcRows: {
        label: string;
        value: string;
    }[];
    displayFailureDetails: boolean;
    actionData: string;
    actionFailureDetails: string;
    aceEditors: Ace.Editor[];
    constructor(store: Store<AppState>, router: Router, data: AuditLogDetailsDialogData, dialogRef: MatDialogRef<AuditLogDetailsDialogComponent>, renderer: Renderer2, themeService: ThemeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    createEditor(editorElementRef: ElementRef, content: string): void;
    /** Translation key of the page a change came from. */
    sourceViaKey(via: string): string;
    updateEditorSize(editorElement: any, content: string, editor: Ace.Editor): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuditLogDetailsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AuditLogDetailsDialogComponent, "tb-audit-log-details-dialog", never, {}, {}, never, never, false, never>;
}
