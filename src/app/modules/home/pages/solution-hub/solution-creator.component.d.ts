import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SolutionService } from '@core/http/solution.service';
import { DialogService } from '@core/services/dialog.service';
import { AiAssistantStore } from '@home/components/ai-assistant/ai-assistant.store';
import { InstalledSolution, SolutionDraft, SolutionDraftChange, SolutionJob, SolutionValidation } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
type Step = 'proposal' | 'dashboards' | 'install';
/**
 * The Solution creator: the draft's proposal section by section, its
 * dashboards, and install (or apply, for a draft of an installed solution).
 * The assistant works on the same draft; its changes show up here, marked.
 */
export declare class SolutionCreatorComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private dialog;
    private translate;
    private assistant;
    private dialogService;
    private solutionService;
    draft: SolutionDraft;
    loading: boolean;
    error: string;
    dirty: boolean;
    saving: boolean;
    /** The server has a newer version than the one edited here. */
    newerVersion: number;
    /** The last reload brought the assistant's changes. */
    assistantUpdated: boolean;
    step: Step;
    section: string;
    validation: SolutionValidation;
    validating: boolean;
    installing: boolean;
    /** E-mail the new users an activation link (shown when the draft creates users). */
    activationMail: boolean;
    job: SolutionJob;
    installed: InstalledSolution;
    private watch;
    private poll;
    constructor(route: ActivatedRoute, router: Router, dialog: MatDialog, translate: TranslateService, assistant: AiAssistantStore, dialogService: DialogService, solutionService: SolutionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    load(): void;
    private apply;
    reload(): void;
    get sections(): string[];
    sectionLabel(s: string): string;
    isListSection(s: string): boolean;
    items(s: string): any[];
    count(s: string): number;
    get contents(): string;
    title(item: any): string;
    detail(s: string, item: any): string;
    /** The name of the entry a placeholder (`${ref:section.ref}`) points at, else the value itself. */
    private refName;
    /** The assistant's mark on an item (added / changed). */
    mark(s: string, ref: string): SolutionDraftChange | undefined;
    sectionMarked(s: string): boolean;
    /** Items the assistant removed (shown struck out until marks are cleared). */
    removed(s: string): SolutionDraftChange[];
    get marks(): number;
    clearMarks(): void;
    /** Validation errors and warnings about one section (they start with "<section>.<ref>:"). */
    sectionProblems(s: string): number;
    itemProblems(s: string, ref: string): string[];
    edit(s: string, index: number): void;
    add(s: string): void;
    canAddFromTenant(s: string): boolean;
    /** Adds one of the tenant's rule chains or pipelines as a new entry. */
    addFromTenant(s: string): void;
    /** The draft creates anything at all. */
    get hasContent(): boolean;
    duplicate(s: string, index: number): void;
    remove(s: string, index: number): void;
    private openEditor;
    setDescription(text: string): void;
    /** Saves once; callers may chain on the result (the request is shared, not repeated). */
    save(): Observable<SolutionDraft>;
    check(): void;
    install(): void;
    private escape;
    private doInstall;
    private follow;
    get progressText(): string;
    get isUpdate(): boolean;
    openDashboard(id: string): void;
    startEmulator(): void;
    /** The dashboards as they will look, with simulated values (unsaved edits included). */
    preview(ref?: string): void;
    askAssistant(): void;
    back(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionCreatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionCreatorComponent, "st-solution-creator", never, {}, {}, never, never, false, never>;
}
export {};
