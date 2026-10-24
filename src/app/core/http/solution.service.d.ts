import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { RequestConfig } from '@core/http/http-utils';
import { InstalledSolution, PackagePreflight, PackageSource, SolutionDraft, SolutionDraftInfo, SolutionItemSummary, SolutionItemType, SolutionJob, SolutionPreview, SolutionTemplateSummary, SolutionValidation } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
/** The Solution hub (`/api/solution…`): templates, drafts, installs, packages. */
export declare class SolutionService {
    private http;
    private translate;
    constructor(http: HttpClient, translate: TranslateService);
    /** The UI language: texts SENTIENT ships a translation for come back in it. */
    private get lang();
    getTemplates(config?: RequestConfig): Observable<SolutionTemplateSummary[]>;
    /** The template list last seen (in that language), kept for this session. */
    private templatesSeen;
    /**
     * The template list for the hub's pages: the one last seen at once (if
     * any), then the server's — emitted only when it differs. A page opened
     * again shows without waiting; changes still arrive.
     */
    getTemplatesCached(): Observable<SolutionTemplateSummary[]>;
    getTemplate(id: string, config?: RequestConfig): Observable<any>;
    createDraft(name: string, templateId: string, parameters: any, config?: RequestConfig): Observable<SolutionDraft>;
    /** A draft from a blueprint (blank: `{}`). */
    createBlankDraft(name: string, blueprint?: any, config?: RequestConfig): Observable<SolutionDraft>;
    getDrafts(config?: RequestConfig): Observable<SolutionDraftInfo[]>;
    getDraft(id: string, config?: RequestConfig): Observable<SolutionDraft>;
    /** One of the tenant's entities (a rule chain, an analytics pipeline) as a new entry for the draft. */
    getDraftEntry(draftId: string, section: string, entityId: string, config?: RequestConfig): Observable<any>;
    /** Saves the edited blueprint; a save made meanwhile (e.g. by the assistant) answers 409. */
    saveDraft(draft: SolutionDraft, config?: RequestConfig): Observable<SolutionDraft>;
    /** A draft of an installed solution: to edit and apply it, or (with `copyAs`) to start a new one from it. */
    draftFromInstalled(name: string, copyAs?: string, config?: RequestConfig): Observable<{
        draft: SolutionDraft;
        missing: string[];
    }>;
    renameSolution(name: string, newName: string, config?: RequestConfig): Observable<any>;
    /** Saves an installed solution (or a draft) as a template of this tenant. */
    saveAsTemplate(body: {
        name: string;
        version?: string;
        category?: string;
        description?: string;
        solution?: string;
        draftId?: string;
    }, config?: RequestConfig): Observable<any>;
    deleteDraft(id: string, config?: RequestConfig): Observable<void>;
    /** The blueprint's dashboards as they will look, built before installing, with simulated values. */
    previewDashboards(blueprint: any, config?: RequestConfig): Observable<SolutionPreview>;
    validateDraft(id: string, config?: RequestConfig): Observable<SolutionValidation>;
    /** Installs (or applies) a draft; `activationMail` e-mails the solution's new users an activation link. */
    installDraft(id: string, options?: {
        activationMail?: boolean;
    }, config?: RequestConfig): Observable<{
        jobId: string;
    }>;
    getJob(id: string, config?: RequestConfig): Observable<SolutionJob>;
    /** Single items (dashboards, widgets, rule chains, calculated fields, device profiles), optionally of one type. */
    getItems(itemType?: SolutionItemType, config?: RequestConfig): Observable<SolutionItemSummary[]>;
    getItem(id: string, config?: RequestConfig): Observable<any>;
    /** Saves one of the tenant's entities as a Solution hub item. */
    saveItem(request: {
        itemType: SolutionItemType;
        entityId: string;
        name?: string;
        version?: string;
        category?: string;
        summary?: string;
        description?: string;
        tags?: string[];
    }, config?: RequestConfig): Observable<any>;
    /** Creates the item in the tenant; a calculated field needs the `target` it belongs to. */
    installItem(id: string, request: {
        name?: string;
        target?: {
            entityType: string;
            id: string;
        };
    }, config?: RequestConfig): Observable<{
        entityType: string;
        id: string;
        name: string;
    }>;
    /** A draft updating an installed solution to its template's current version (same parameters). */
    updateDraft(name: string, config?: RequestConfig): Observable<SolutionDraft>;
    /** The solution's items changed or deleted since it was last installed or applied. */
    editedItems(name: string, config?: RequestConfig): Observable<{
        section: string;
        name: string;
        state: 'edited' | 'deleted';
    }[]>;
    getInstalled(config?: RequestConfig): Observable<InstalledSolution[]>;
    uninstall(name: string, keep?: string[], config?: RequestConfig): Observable<any>;
    emulator(name: string, action: 'START' | 'STOP', config?: RequestConfig): Observable<any>;
    /** The package file of a template or an installed solution. */
    exportPackage(source: PackageSource, config?: RequestConfig): Observable<{
        blob: Blob;
        fileName: string;
    }>;
    preflightPackage(file: Blob, config?: RequestConfig): Observable<PackagePreflight>;
    importPackage(file: Blob, acceptUnsigned: boolean, replace: boolean, config?: RequestConfig): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolutionService>;
}
