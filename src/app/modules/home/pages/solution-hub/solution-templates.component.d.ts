import { ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SolutionService } from '@core/http/solution.service';
import { SolutionHubKind, SolutionItemSummary, SolutionTemplateSummary } from '@shared/models/solution.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
/** Solution hub → Templates: the gallery of templates the tenant can install. */
export declare class SolutionTemplatesComponent implements OnInit {
    private solutionService;
    private router;
    private route;
    private dialog;
    private translate;
    templates: SolutionTemplateSummary[];
    categories: string[];
    category: string;
    /** What the gallery shows: whole solutions, or one kind of single item. */
    readonly kinds: SolutionHubKind[];
    kind: SolutionHubKind;
    items: SolutionItemSummary[];
    search: string;
    searchMode: boolean;
    loading: boolean;
    searchInput: ElementRef<HTMLInputElement>;
    constructor(solutionService: SolutionService, router: Router, route: ActivatedRoute, dialog: MatDialog, translate: TranslateService);
    ngOnInit(): void;
    setKind(k: SolutionHubKind): void;
    load(): void;
    get shown(): SolutionTemplateSummary[];
    get shownItems(): SolutionItemSummary[];
    /** A single item: its description and Install (with the target for a calculated field). */
    installItem(i: SolutionItemSummary, $event?: Event): void;
    itemCover(i: SolutionItemSummary): string | null;
    enterSearch(): void;
    exitSearch(): void;
    creates(t: SolutionTemplateSummary): string;
    cover(t: SolutionTemplateSummary): string | null;
    open(t: SolutionTemplateSummary, fromLink?: boolean): void;
    /** Straight to the install form, without the details. */
    install(t: SolutionTemplateSummary, $event: Event): void;
    importPackage(): void;
    trackById(_: number, t: SolutionTemplateSummary): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionTemplatesComponent, "st-solution-templates", never, {}, {}, never, never, false, never>;
}
