import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { BaseData, HasId } from '@shared/models/base-data';
import * as i0 from "@angular/core";
export declare class GroupMembersToolbarComponent extends EntityTableHeaderComponent<BaseData<HasId>> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    goBack(): void;
    openDetails(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupMembersToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupMembersToolbarComponent, "tb-group-members-toolbar", never, {}, {}, never, never, false, never>;
}
