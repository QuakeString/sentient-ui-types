import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class CustomPaginatorIntl implements MatPaginatorIntl {
    private translate;
    changes: Subject<void>;
    firstPageLabel: string;
    itemsPerPageLabel: string;
    lastPageLabel: string;
    nextPageLabel: string;
    previousPageLabel: string;
    separator: string;
    constructor(translate: TranslateService);
    getRangeLabel(page: number, pageSize: number, length: number): string;
    private applyLabels;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomPaginatorIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomPaginatorIntl>;
}
