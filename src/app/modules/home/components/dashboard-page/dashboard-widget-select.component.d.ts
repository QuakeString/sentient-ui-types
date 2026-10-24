import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetSearchResult, WidgetService } from '@core/http/widget.service';
import { DeprecatedFilter, WidgetInfo, widgetType, WidgetTypeInfo } from '@shared/models/widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { GridEntitiesFetchFunction, ScrollGridColumns } from '@shared/components/grid/scroll-grid-datasource';
import { ItemSizeStrategy } from '@shared/components/grid/scroll-grid.component';
import * as i0 from "@angular/core";
type selectWidgetMode = 'bundles' | 'allWidgets';
interface WidgetsFilter {
    search: string;
    filter: widgetType[];
    deprecatedFilter: DeprecatedFilter;
}
interface BundleWidgetsFilter extends WidgetsFilter {
    widgetsBundleId: string;
}
interface BundlesFilter {
    search: string;
}
export declare class DashboardWidgetSelectComponent implements OnInit {
    private widgetsService;
    private store;
    private cd;
    private searchSubject;
    private search$;
    private filterWidgetTypes$;
    private deprecatedFilter$;
    private selectWidgetMode$;
    private widgetsBundle$;
    widgetTypes: Set<widgetType>;
    hasDeprecated: boolean;
    searchResult: WidgetSearchResult;
    aliasController: IAliasController;
    scadaFirst: boolean;
    set search(search: string);
    get search(): string;
    set filterWidgetTypes(widgetTypes: Array<widgetType>);
    get filterWidgetTypes(): Array<widgetType>;
    set selectWidgetMode(mode: selectWidgetMode);
    get selectWidgetMode(): selectWidgetMode;
    set deprecatedFilter(filter: DeprecatedFilter);
    get deprecatedFilter(): DeprecatedFilter;
    set widgetsBundle(widgetBundle: WidgetsBundle);
    get widgetsBundle(): WidgetsBundle;
    widgetSelected: EventEmitter<WidgetInfo>;
    columns: ScrollGridColumns;
    gridWidgetsItemSizeStrategy: ItemSizeStrategy;
    widgetBundlesFetchFunction: GridEntitiesFetchFunction<WidgetsBundle, BundlesFilter>;
    allWidgetsFetchFunction: GridEntitiesFetchFunction<WidgetTypeInfo, WidgetsFilter>;
    widgetsFetchFunction: GridEntitiesFetchFunction<WidgetTypeInfo, BundleWidgetsFilter>;
    favoriteBundleIds: Set<string>;
    favoriteWidgetIds: Set<string>;
    /** Created at or after this is "New"; null until known. */
    newSince: number;
    private newSince$;
    private pinnedCache;
    widgetsBundleFilter: BundlesFilter;
    allWidgetsFilter: WidgetsFilter;
    widgetsFilter: BundleWidgetsFilter;
    constructor(widgetsService: WidgetService, store: Store<AppState>, cd: ChangeDetectorRef);
    ngOnInit(): void;
    onWidgetClicked($event: Event, widget: WidgetTypeInfo): void;
    isSystem(item: WidgetsBundle): boolean;
    selectBundle($event: Event, bundle: WidgetsBundle): void;
    /** Search text is entered: the ranked results show. */
    searching(): boolean;
    trackById(_index: number, item: {
        id: {
            id: string;
        };
    }): string;
    isObject(value: any): boolean;
    isFavoriteBundle(item: WidgetsBundle): boolean;
    isFavoriteWidget(item: WidgetTypeInfo): boolean;
    isNew(item: {
        createdTime?: number;
    }): boolean;
    toggleFavoriteBundle($event: Event, item: WidgetsBundle): void;
    toggleFavoriteWidget($event: Event, item: WidgetTypeInfo): void;
    private toggle;
    /**
     * The star changes in place; the list keeps its order until it is next
     * loaded (reopened, or another bundle or view chosen), then favourites lead.
     */
    private favoritesChanged;
    private cached;
    /** Every bundle: favourites, then new, then the rest in the server's order. */
    private orderedBundles;
    private pinnedWidgets;
    /** Every widget of a bundle: favourites, then new, then the rest A to Z. */
    private orderedBundleWidgets;
    /** The list with its favourites first, then up to MAX_NEW new items (newest first), then the rest. */
    private leadWith;
    private pageOf;
    /** A favourite still has to pass the list's type and deprecated filters. */
    private matches;
    private toWidgetTypeInfo;
    /**
     * The grid pages through one list: the pinned items (favourites, then new)
     * followed by the server's A-Z pages without them, so each item shows once.
     * The server sorts by lower-case name, so the pinned items that come before
     * any server position can be counted from their names.
     */
    private withPinned;
    /** Items [from, to) of the server list, from at most two of its pages. */
    private serverRange;
    private toWidgetInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardWidgetSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardWidgetSelectComponent, "tb-dashboard-widget-select", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "scadaFirst": { "alias": "scadaFirst"; "required": false; }; "search": { "alias": "search"; "required": false; }; "filterWidgetTypes": { "alias": "filterWidgetTypes"; "required": false; }; "selectWidgetMode": { "alias": "selectWidgetMode"; "required": false; }; "deprecatedFilter": { "alias": "deprecatedFilter"; "required": false; }; }, { "widgetSelected": "widgetSelected"; }, never, never, false, never>;
}
export {};
