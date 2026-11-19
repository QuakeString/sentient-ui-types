export declare function storeCriticalGrant(entityId: string, token: string, expiresAt: number): void;
/** The pass for a write URL (or RPC body) that names an entity holding one. */
export declare function criticalGrantFor(url: string, body: any): string | null;
export declare function clearCriticalGrants(): void;
