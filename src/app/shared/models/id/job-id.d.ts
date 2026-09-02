import { HasUUID } from '@shared/models/id/has-uuid';
export declare class JobId implements HasUUID {
    entityType: string;
    id: string;
    constructor(id: string);
}
