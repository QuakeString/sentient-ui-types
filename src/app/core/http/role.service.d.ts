import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from './http-utils';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { GroupPermission, Role, SaveGroupPermissionRequest } from '@shared/models/role.model';
import { PermissionService } from '@core/services/permission.service';
import * as i0 from "@angular/core";
export declare class RoleService {
    private http;
    private permissionService;
    constructor(http: HttpClient, permissionService: PermissionService);
    getRoles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Role>>;
    getRole(roleId: string, config?: RequestConfig): Observable<Role>;
    saveRole(role: Role, config?: RequestConfig): Observable<Role>;
    deleteRole(roleId: string, config?: RequestConfig): Observable<Object>;
    saveGroupPermission(request: SaveGroupPermissionRequest, config?: RequestConfig): Observable<GroupPermission>;
    deleteGroupPermission(groupPermissionId: string, config?: RequestConfig): Observable<Object>;
    private reloadPermissions;
    getUserGroupPermissions(groupId: string, config?: RequestConfig): Observable<GroupPermission[]>;
    getEntityGroupPermissions(groupId: string, config?: RequestConfig): Observable<GroupPermission[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleService>;
}
