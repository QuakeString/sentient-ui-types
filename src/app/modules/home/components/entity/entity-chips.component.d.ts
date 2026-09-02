import { OnChanges, SimpleChanges } from '@angular/core';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class EntityChipsComponent implements OnChanges {
    entity: BaseData<EntityId>;
    key: string;
    detailsPagePrefixUrl: string;
    entityDetailsPrefixUrl: string;
    subEntities: Array<BaseData<EntityId>>;
    ngOnChanges(changes: SimpleChanges): void;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityChipsComponent, "tb-entity-chips", never, { "entity": { "alias": "entity"; "required": false; }; "key": { "alias": "key"; "required": false; }; "detailsPagePrefixUrl": { "alias": "detailsPagePrefixUrl"; "required": false; }; }, {}, never, never, false, never>;
}
