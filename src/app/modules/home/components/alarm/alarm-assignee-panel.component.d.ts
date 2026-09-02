import { AfterViewInit, ElementRef, InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User, UserEmailInfo } from '@shared/models/user.model';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@core/http/user.service';
import { AlarmService } from '@core/http/alarm.service';
import { OverlayRef } from '@angular/cdk/overlay';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { UtilsService } from '@core/services/utils.service';
import { AlarmAssigneeOption, AlarmInfo } from '@shared/models/alarm.models';
import * as i0 from "@angular/core";
export declare const ALARM_ASSIGNEE_PANEL_DATA: InjectionToken<any>;
export interface AlarmAssigneePanelData {
    alarmId: string;
    assigneeId: string;
    /**
     * Called when the assign/unassign REST request completes — receives
     * the fresh `AlarmInfo` from the server. Allows the parent table to
     * splice the row in place without waiting for the overlay to close.
     * The overlay closes synchronously on user selection (so there's no
     * popup-fade flicker tied to the HTTP round-trip), and this callback
     * fires later from the response handler.
     */
    onAssignmentChanged?: (updated: AlarmInfo) => void;
}
export declare class AlarmAssigneePanelComponent implements OnInit, AfterViewInit, OnDestroy {
    data: AlarmAssigneePanelData;
    overlayRef: OverlayRef;
    translate: TranslateService;
    private userService;
    private alarmService;
    private fb;
    private utilsService;
    assigneeOptions: typeof AlarmAssigneeOption;
    private dirty;
    alarmId: string;
    assigneeId?: string;
    assigneeOption?: AlarmAssigneeOption;
    assigneeNotSetText: string;
    assignedToCurrentUserText: string;
    reassigned: boolean;
    /**
     * Updated AlarmInfo returned by the assign / unassign endpoint.
     * Read by the table after the panel is destroyed so it can splice
     * the row in place instead of refetching the entire page.
     */
    updatedAlarm: AlarmInfo | null;
    /**
     * True while the assign/unassign REST call is in flight. The
     * Material autocomplete fires `closed` synchronously when the user
     * picks an option — without this flag the close handler would
     * dispose the overlay before the HTTP response arrives, so
     * `componentRef.onDestroy` would observe `reassigned === false`
     * and never call `updateData()` on the table.
     */
    private assignInFlight;
    selectUserFormGroup: FormGroup;
    userInput: ElementRef;
    userAutocomplete: MatAutocomplete;
    filteredUsers: Observable<Array<UserEmailInfo>>;
    searchText: string;
    get displayAssigneeNotSet(): boolean;
    get displayAssignedToCurrentUser(): boolean;
    private destroy$;
    constructor(data: AlarmAssigneePanelData, overlayRef: OverlayRef, translate: TranslateService, userService: UserService, alarmService: AlarmService, fb: FormBuilder, utilsService: UtilsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    displayUserFn(user?: User): string | undefined;
    selected(event: MatAutocompleteSelectedEvent): void;
    assign(user: User): void;
    unassign(): void;
    fetchUsers(searchText?: string): Observable<Array<UserEmailInfo>>;
    onFocus(): void;
    clear(): void;
    getUserInitials(entity: UserEmailInfo): string;
    getFullName(entity: UserEmailInfo): string;
    getAvatarBgColor(entity: UserEmailInfo): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmAssigneePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmAssigneePanelComponent, "tb-alarm-assignee-panel", never, {}, {}, never, never, false, never>;
}
