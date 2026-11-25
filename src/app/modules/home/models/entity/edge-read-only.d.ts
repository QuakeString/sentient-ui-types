import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EdgeRuntimeService } from '@core/services/edge-runtime.service';
export declare const applyEdgeReadOnly: (config: EntityTableConfig<any, any, any>, edgeRuntime: EdgeRuntimeService, translate: TranslateService, router: Router) => void;
