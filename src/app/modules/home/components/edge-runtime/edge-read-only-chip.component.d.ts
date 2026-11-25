import { EdgeRuntimeService } from '@core/services/edge-runtime.service';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
/**
 * SENTIENT Edge: "Read-only on this edge", with the reason in its tooltip,
 * on an entity the server owns (docs/edge plan P5). Nothing elsewhere.
 */
export declare class EdgeReadOnlyChipComponent {
    private edgeRuntime;
    entityType: EntityType;
    entityId: string;
    constructor(edgeRuntime: EdgeRuntimeService);
    get hint(): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeReadOnlyChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeReadOnlyChipComponent, "tb-edge-read-only-chip", never, { "entityType": { "alias": "entityType"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; }, {}, never, never, false, never>;
}
