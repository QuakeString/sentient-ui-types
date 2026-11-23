import { OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@core/http/user.service';
import { User } from '@shared/models/user.model';
import { Authority } from '@shared/models/authority.enum';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { UnitSystem } from '@shared/models/unit.models';
import { TimeFormatService } from '@core/services/time-format.service';
import { TimeFormatSetting } from '@shared/models/time-format.models';
import { UnitService } from '@core/services/unit.service';
import { AiAssistantStore } from '@home/components/ai-assistant/ai-assistant.store';
import { UserSettingsService } from '@core/http/user-settings.service';
import { MobileApplicationService } from '@core/http/mobile-application.service';
import * as i0 from "@angular/core";
export declare class ProfileComponent extends PageComponent implements OnInit, OnDestroy, HasConfirmForm {
    protected store: Store<AppState>;
    private route;
    private userService;
    private authService;
    private translate;
    private unitService;
    private timeFormatService;
    private aiAssistantStore;
    private userSettingsService;
    private dialog;
    private http;
    private mobileAppService;
    private fb;
    authorities: typeof Authority;
    profile: UntypedFormGroup;
    user: User;
    languageList: any;
    /** What "Auto" resolves to: the browser's language, if SENTIENT has it. */
    get browserLang(): string;
    UnitSystems: UnitSystem[];
    readonly timeFormatSettings: TimeFormatSetting[];
    /** Why the assistant switch is greyed out (null: the user decides). */
    aiAssistantNotAllowed: string | null;
    /** The user's own choice (additionalInfo.aiAssistantEnabled, on unless set to false). */
    aiAssistantEnabled: boolean;
    /** The "connect mobile app" QR card on this user's home page. */
    mobileQrOnHome: boolean;
    /** Status loaded: until then the switch stays disabled. */
    aiAssistantKnown: boolean;
    private aiAssistantSubscription;
    private readonly authUser;
    /** The user's role, shown under the name (as in the left menu's profile row). */
    roleName: string;
    /** The view / change actions over the photo are shown (by a tap; hover and focus need no flag). */
    photoActionsVisible: boolean;
    /** How the photo was last pressed: a touch first reveals the actions instead of running one. */
    photoPointerType: string;
    constructor(store: Store<AppState>, route: ActivatedRoute, userService: UserService, authService: AuthService, translate: TranslateService, unitService: UnitService, timeFormatService: TimeFormatService, aiAssistantStore: AiAssistantStore, userSettingsService: UserSettingsService, dialog: MatDialog, http: HttpClient, mobileAppService: MobileApplicationService, fb: UntypedFormBuilder);
    /** Same as the left menu's profile row: the RBAC role's name, else a name for the authority. */
    private loadRoleName;
    ngOnInit(): void;
    /** The switch applies at once (it is not part of the form and its Save button). */
    setAiAssistant(enabled: boolean): void;
    /** The administrator shows the mobile app QR (Mobile center › QR code widget). */
    readonly mobileQrEnabled: import("@angular/core").Signal<boolean>;
    /** The home page's "connect mobile app" QR, for users whose home is a dashboard. */
    openMobileAppQr(): void;
    setMobileQrOnHome(show: boolean): void;
    /** "First Last", or empty when the user has no name (the email is shown instead). */
    get fullName(): string;
    get hasPhoto(): boolean;
    /** A tap on the photo shows or hides its actions (touch has no hover). */
    togglePhotoActions(): void;
    /** A tap elsewhere hides the photo actions again. */
    onDocumentPointerDown(event: PointerEvent): void;
    onPhotoAction(event: Event, action: 'view' | 'change'): void;
    private viewPhoto;
    /** The editor uploads or removes the photo itself; the page then follows the new version. */
    private openPhotoEditor;
    /** Keeps this page and the signed-in user (left menu) in step with the photo. */
    private applyAvatarVersion;
    ngOnDestroy(): void;
    /** Server limit for dashboards kept in memory; 0 = no limit. */
    get keepAliveMax(): number;
    /** What an empty field means. */
    get keepAliveDefault(): number;
    private buildProfileForm;
    /** "Auto" names the clock it resolves to without the user's own setting. */
    timeFormatLabel(setting: TimeFormatSetting): string;
    save(): void;
    private userLoaded;
    confirmForm(): UntypedFormGroup;
    isSysAdmin(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileComponent, "tb-profile", never, {}, {}, never, never, false, never>;
}
