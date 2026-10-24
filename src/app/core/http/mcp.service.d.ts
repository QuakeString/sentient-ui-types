import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from '@core/http/http-utils';
import { AdminSettings } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import * as i0 from "@angular/core";
/** Instance-wide MCP switch, stored in the `mcp` admin setting (sys admin only). */
export interface McpSettings {
    enabled: boolean;
    tenantProfileIds: string[];
}
/** What the current user may do with MCP (`GET /api/mcp/status`). */
export interface McpStatus {
    enabled: boolean;
    available: boolean;
    reason?: string;
}
export declare const MCP_SETTINGS_KEY = "mcp";
export declare class McpService {
    private http;
    private adminService;
    constructor(http: HttpClient, adminService: AdminService);
    getStatus(config?: RequestConfig): Observable<McpStatus>;
    /** The setting does not exist until it is first saved; that means "disabled". */
    getSettings(config?: RequestConfig): Observable<AdminSettings<McpSettings>>;
    saveSettings(settings: McpSettings, config?: RequestConfig): Observable<AdminSettings<McpSettings>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<McpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<McpService>;
}
