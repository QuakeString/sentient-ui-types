import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { AiModel, AiModelWithUserMsg, AiProviderModelList, CheckConnectivityResult } from '@shared/models/ai-model.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class AiModelService {
    private http;
    constructor(http: HttpClient);
    saveAiModel(aiModel: AiModel, config?: RequestConfig): Observable<AiModel>;
    getAiModels(pageLink: PageLink, config?: RequestConfig): Observable<PageData<AiModel>>;
    getAiModelById(aiModelId: string, config?: RequestConfig): Observable<AiModel>;
    deleteAiModel(aiModelId: string, config?: RequestConfig): Observable<Object>;
    /** SENTIENT: the models the provider offers now. `aiModelId` resolves a masked key. */
    listProviderModels(configuration: AiModel['configuration'], aiModelId?: string, config?: RequestConfig): Observable<AiProviderModelList>;
    checkConnectivity(aiModelWithUserMsg: AiModelWithUserMsg, config?: RequestConfig): Observable<CheckConnectivityResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiModelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
