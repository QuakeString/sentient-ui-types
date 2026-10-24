import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { SolutionService } from '@core/http/solution.service';
import { SolutionTemplateSummary } from '@shared/models/solution.models';
import * as i0 from "@angular/core";
/**
 * Home page card: the Solution hub's templates (official first) with their
 * dashboard screenshots, as many as fit the card's width (no scrolling); a
 * card opens the template's details in the hub.
 */
export declare class SolutionHubWidgetComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
    private solutionService;
    private cd;
    ctx: WidgetContext;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    allowed: boolean;
    templates: SolutionTemplateSummary[];
    installed: number;
    /** How many covers fit, and the grid they are laid out in. */
    fit: number;
    columns: number;
    rows: number;
    cardsRow: ElementRef<HTMLElement>;
    private resize$;
    constructor(solutionService: SolutionService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /** Columns and rows of covers for the row's size and the templates there are. */
    private layout;
    ngOnDestroy(): void;
    cover(t: SolutionTemplateSummary): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionHubWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SolutionHubWidgetComponent, "st-solution-hub-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
