import { Observable } from 'rxjs';
import { EntityId } from '@shared/models/id/entity-id';
import { AttributeData } from '@shared/models/telemetry/telemetry.models';
import { CriticalWriteService } from '@core/services/critical-write.service';
/**
 * The critical-parameter check for a write from an entity's Attributes or
 * Latest telemetry tab: one prompt when a key is critical, nothing otherwise.
 */
export declare function criticalAttributeGuard(service: CriticalWriteService, entityId: EntityId, scope: string, attributes: AttributeData[], entityName?: string): Observable<boolean>;
