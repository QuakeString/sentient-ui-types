import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestConfig } from '@core/http/http-utils';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
/** A model the user can pick in the assistant. */
export interface AiAssistantModel {
    id: string;
    name: string;
    provider: string;
    modelId: string;
    systemModel: boolean;
    /** Effort levels the model accepts (empty: no effort setting). */
    efforts: string[];
    contextLength: number;
}
export interface AiAssistantUsage {
    period: number;
    mine: {
        requests: number;
        inputTokens: number;
        outputTokens: number;
    };
    /** Tenant admins: the tenant's use of system models against its limits. */
    tenantSystemModels?: {
        tokens: number;
        maxTokensPerMonth: number;
        maxRequestsPerMinute: number;
    };
}
/** `GET /api/ai/assistant/status`. */
export interface AiAssistantStatus {
    available: boolean;
    reason?: string;
    /** Whether the tenant profile (and, for customer users, the tenant's setup) allows the assistant. */
    allowed: boolean;
    notAllowedReason?: string;
    /** The user's own switch on the account page. */
    userEnabled: boolean;
    /** Customer users use the model their tenant admin chose. */
    customerUser: boolean;
    models: AiAssistantModel[];
    usage: AiAssistantUsage;
}
export type AiConversationStatus = 'IDLE' | 'RUNNING' | 'AWAITING_APPROVAL' | 'ERROR';
/** A change waiting for the user's decision. */
export interface AiPendingAction {
    id: string;
    name: string;
    title?: string;
    kind: 'WRITE' | 'DELETE' | 'UNKNOWN';
    description?: string;
    arguments: any;
}
export interface AiConversationMessage {
    seq: number;
    createdTime: number;
    role: 'USER' | 'ASSISTANT' | 'TOOL';
    content: any;
}
export interface AiConversation {
    id: string;
    title: string;
    createdTime: number;
    updatedTime: number;
    modelId?: string;
    effort?: string;
    status: AiConversationStatus;
    error?: string;
    pending?: AiPendingAction[];
    approveAll: boolean;
    allowDeletes: boolean;
    autoApprove: boolean;
    inputTokens: number;
    outputTokens: number;
    contextTokens: number;
    messages?: AiConversationMessage[];
}
/** The page the user is on. */
export interface AiPageContext {
    label: string;
    entityType?: string;
    entityId?: string;
    url?: string;
}
export interface AiAttachment {
    name: string;
    mime: string;
    /** Base64 contents. */
    data: string;
    size: number;
    /** A video's length, s. */
    duration?: number;
    /** Frames taken from a video in the browser (JPEG, base64), for models that do not read video. */
    frames?: {
        at: number;
        data: string;
    }[];
}
/** Something the user pointed at on the page (see the assistant's point mode). */
export interface AiReference {
    kind: 'widget';
    dashboardId: string;
    widgetId: string;
    /** What the user saw: "Demand trend › Y axis". */
    label?: string;
    /** The part of the widget, in words. */
    part?: string;
    /** Where that part lives in the widget JSON, when known. */
    path?: string;
}
export interface AiOutgoingMessage {
    text: string;
    modelId?: string;
    effort?: string;
    autoApprove?: boolean;
    context?: AiPageContext;
    files?: AiAttachment[];
    references?: AiReference[];
}
export type AiApprovalDecision = 'APPROVE' | 'APPROVE_ALL' | 'ALLOW_DELETES' | 'DENY';
/** The in-product AI assistant API (`/api/ai/assistant`). */
export declare class AiAssistantService {
    private http;
    constructor(http: HttpClient);
    getStatus(config?: RequestConfig): Observable<AiAssistantStatus>;
    getConversations(pageSize?: number, page?: number, config?: RequestConfig): Observable<PageData<AiConversation>>;
    getConversation(id: string, afterSeq?: number, config?: RequestConfig): Observable<AiConversation>;
    startConversation(message: AiOutgoingMessage, config?: RequestConfig): Observable<AiConversation>;
    sendMessage(id: string, message: AiOutgoingMessage, config?: RequestConfig): Observable<AiConversation>;
    decide(id: string, decision: AiApprovalDecision, config?: RequestConfig): Observable<AiConversation>;
    stop(id: string, config?: RequestConfig): Observable<AiConversation>;
    deleteConversation(id: string, config?: RequestConfig): Observable<boolean>;
    /** Tenant admin: the model customer users get (null: none). */
    getSettings(config?: RequestConfig): Observable<{
        customerModelId?: string;
    }>;
    saveSettings(settings: {
        customerModelId: string | null;
    }, config?: RequestConfig): Observable<{
        customerModelId?: string;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiAssistantService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiAssistantService>;
}
