import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { EntityGroup, EntityGroupColumn, EntityGroupSettings, EntityGroupAction } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export declare class EntityGroupTabsComponent extends EntityTabsComponent<EntityGroup> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    onColumnsChanged(columns: EntityGroupColumn[]): void;
    onSettingsChanged(settings: EntityGroupSettings): void;
    onActionsChanged(actions: EntityGroupAction[]): void;
    private markFormDirty;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupTabsComponent, "tb-entity-group-tabs", never, {}, {}, never, never, false, never>;
}
