import { BaseData, HasId } from '@shared/models/base-data';
import { EntityTableConfig } from './entities-table-config.models';
export interface AddEntityDialogData<T extends BaseData<HasId>> {
    entitiesTableConfig: EntityTableConfig<T>;
    /** Optional pre-seeded entity, used by "duplicate" / "copy" flows so the
     *  add dialog opens with the source record's fields pre-filled.  When
     *  omitted (the standard "Add" path), the dialog starts empty.  The
     *  caller must clear the `id` field on the prefill so the saveEntity
     *  contract treats it as a NEW record (saveRecipeData and similar
     *  resolvers gate on `id` presence to choose create vs update). */
    entity?: T;
}
export interface EntityAction<T extends BaseData<HasId>> {
    event: Event;
    action: string;
    entity: T;
}
