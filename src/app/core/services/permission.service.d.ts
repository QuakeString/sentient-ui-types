import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface UserPermissions {
    genericPermissions: {
        [resource: string]: string[];
    };
    groupPermissions?: {
        [groupId: string]: {
            [resource: string]: string[];
        };
    };
}
export declare class PermissionService {
    private http;
    private genericPermissions;
    private groupPermissions;
    private loaded;
    private loadFailed;
    private permissionsChanged;
    /** Emits whenever permissions are loaded or reloaded */
    permissionsChanged$: Observable<void>;
    constructor(http: HttpClient);
    get isLoaded(): boolean;
    loadPermissions(): Observable<void>;
    hasPermission(resource: string, operation: string): boolean;
    hasAnyPermission(resource: string): boolean;
    hasGroupPermission(groupId: string, resource: string, operation: string): boolean;
    invalidate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PermissionService>;
}
