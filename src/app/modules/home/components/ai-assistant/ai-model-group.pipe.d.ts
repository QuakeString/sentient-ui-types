import { PipeTransform } from '@angular/core';
import { AiAssistantModel } from '@core/http/ai-assistant.service';
import * as i0 from "@angular/core";
/** The system models (`true`) or the tenant's own models (`false`) of a list. */
export declare class AiModelGroupPipe implements PipeTransform {
    transform(models: AiAssistantModel[] | null | undefined, system: boolean): AiAssistantModel[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AiModelGroupPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AiModelGroupPipe, "stAiModelGroup", false>;
}
