import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
/** What a secret holds: one line (password, token, key) or several (certificate, key file). */
export declare enum SecretType {
    TEXT = "TEXT",
    FILE = "FILE"
}
/** A stored secret. The value is write-only and never part of this model. */
export interface SecretInfo extends BaseData<EntityId> {
    name: string;
    type: SecretType;
    description?: string;
    updatedTime: number;
    /** `${secret:<name>}`, what configuration uses to refer to it. */
    placeholder: string;
}
export interface SaveSecretRequest {
    id?: string;
    name: string;
    type: SecretType;
    description?: string;
    /** Required on create; omitted on update to keep the stored value. */
    value?: string;
}
/** Names usable in a placeholder: letters, digits, `_`, `-`, `.`. */
export declare const SECRET_NAME_PATTERN: RegExp;
/** The secrets master key as the system administrator sees it (never the key). */
export interface MasterKeyInfo {
    /** `ENV`: SENTIENT_SECRETS_KEY (managed outside SENTIENT); `FILE`: the key file. */
    source: 'ENV' | 'FILE';
    path?: string;
    /** Tells keys apart without revealing them. */
    fingerprint: string;
    /** Previous keys still loaded: a rotation did not finish. */
    previousKeys: number;
    rotating: boolean;
}
/** What a key rotation did. */
export interface MasterKeyRotation {
    fingerprint: string;
    previousFingerprint: string;
    secrets: number;
    credentialRows: number;
    unreadable: number;
    oldKeyRemoved: boolean;
}
