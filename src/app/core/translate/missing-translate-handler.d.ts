import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
export declare class TbMissingTranslationHandler implements MissingTranslationHandler {
    private readonly reported;
    handle(params: MissingTranslationHandlerParams): string;
}
