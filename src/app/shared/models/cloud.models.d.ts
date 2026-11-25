import { BaseData } from '@shared/models/base-data';
import { HasId } from '@shared/models/base-data';
import { EntityType } from '@shared/models/entity-type.models';
/** GET /api/cloud/status: the edge's link to its server. */
export interface CloudStatus {
    cloudUrl: string;
    connected: boolean;
    lastConnectTime?: number;
    lastDisconnectTime?: number;
    syncInProgress: boolean;
    lastSyncTime?: number;
    edgeId?: string;
    edgeName?: string;
    serverVersion?: string;
    /** Why the edge stopped trying (refused credentials, another edge's key, version). */
    parkedReason?: string;
    lastError?: string;
    downlinksApplied: number;
    downlinksFailed: number;
    uplinksQueued: number;
    uplinksSent: number;
    uplinksTmpFailed: number;
    uplinksDeadLettered: number;
    uplinkPendingGeneral: number;
    uplinkPendingTs: number;
    uplinkOldestPending?: number;
    lastUplinkTime?: number;
    /** The end of the lease the edge runs on (plan P6). */
    leaseValidUntil?: number;
    /** Why the edge has no valid lease. */
    leaseError?: string;
    /** The server licence's tier, which the edge runs with. */
    licenseType?: string;
}
/**
 * GET /api/cloud/limits: what the edge's lease lets it hold of a kind its
 * server limits (plan P6.3), and what it holds now.
 */
export interface EdgeLimit {
    kind: 'devices' | 'assets' | 'dashboards' | 'ruleChains';
    held: number;
    allowed: number;
}
/** GET /api/noauth/cloud/status: what the login page may know. */
export interface PublicCloudStatus {
    edge: boolean;
    connected: boolean;
    waitingForServer: boolean;
}
/** How the server gave an entity to this edge. Absent: created here. */
export type EdgeScope = 'EXCLUSIVE' | 'SHARED' | 'CLOUD_ONLY';
/** Why an entity is read-only on this edge (locale key suffix under `edge-runtime.read-only-`). */
export type EdgeReadOnlyReason = 'cloud-only' | 'assigned' | 'tenant-wide';
/** Types the server owns outright: never changed on an edge. */
export declare const edgeCloudOnlyTypes: Set<EntityType>;
/** Types checked entity by entity, with how the server shares them. */
export declare const edgeScopedTypes: Map<EntityType, EdgeReadOnlyReason>;
/** Types a SHARED entity of which can be forked for this edge. */
export declare const edgeForkableTypes: Set<EntityType>;
export declare enum CloudEventStream {
    GENERAL = "GENERAL",
    TS = "TS"
}
export declare enum CloudEventStatus {
    PENDING = "PENDING",
    DEPLOYED = "DEPLOYED",
    DEAD_LETTER = "DEAD_LETTER"
}
/** One outbox event (GET /api/cloud/events). */
export interface CloudEventInfo extends BaseData<HasId> {
    stream: CloudEventStream;
    seqId: number;
    type: string;
    action: string;
    entityId?: string;
    status: CloudEventStatus;
    deadLetteredAt?: number;
    deadLetterReason?: string;
    body?: any;
}
/** An entity a fork names. */
export interface ForkEntity {
    entityType: EntityType;
    id: string;
    name: string;
}
/** POST /api/cloud/fork: the copy made for this edge. */
export interface ForkResult {
    id: string;
    forkedFrom: string;
    /** Shared rule chains calling the forked one, forked along. */
    alsoForked?: Array<ForkEntity & {
        copy: string;
    }>;
    /** This edge's own entities now using the copy. */
    repointed?: ForkEntity[];
    /** Shared entities still using the original (read-only here). */
    notRepointed?: ForkEntity[];
}
