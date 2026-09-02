import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { PageLink } from '@shared/models/page/page-link';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DestroyRef, Renderer2 } from '@angular/core';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { CalculatedField, CalculatedFieldEventArguments } from '@shared/models/calculated-field.models';
import { ImportExportService } from '@shared/import-export/import-export.service';
import { EntityDebugSettingsService } from '@home/components/entity/debug/entity-debug-settings.service';
import { DatePipe } from '@angular/common';
import { CalculatedFieldInfo } from '@shared/models/calculated-field.models';
import { TbPopoverService } from '@shared/components/popover.service';
export type CalculatedFieldsTableEntity = CalculatedField | CalculatedFieldInfo;
export declare class CalculatedFieldsTableConfig extends EntityTableConfig<CalculatedField> {
    private calculatedFieldsService;
    private translate;
    private dialog;
    private datePipe;
    entityId: EntityId;
    private store;
    private destroyRef;
    private renderer;
    entityName: string;
    private importExportService;
    private entityDebugSettingsService;
    private popoverService;
    readonly tenantId: string;
    additionalDebugActionConfig: {
        title: any;
        action: (calculatedField: CalculatedField, _openCalculatedFieldEdit?: boolean, _afterCloseCallback?: (expression: string) => void) => any;
    };
    constructor(calculatedFieldsService: CalculatedFieldsService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, entityId: EntityId, store: Store<AppState>, destroyRef: DestroyRef, renderer: Renderer2, entityName: string, importExportService: ImportExportService, entityDebugSettingsService: EntityDebugSettingsService, popoverService: TbPopoverService);
    private copyCalculatedField;
    private openReprocessDialog;
    private openDebugTab;
    fetchCalculatedFields(pageLink: PageLink): Observable<PageData<CalculatedField>>;
    onOpenDebugConfig($event: Event, calculatedField: CalculatedField): void;
    private editCalculatedField;
    private getCalculatedFieldDialog;
    private openDebugEventsDialog;
    private exportCalculatedField;
    private importCalculatedField;
    private updateImportedCalculatedField;
    private onDebugConfigChanged;
    /** Greys out cells of disabled calculated fields so the table shows at a
     *  glance which fields are inactive — mirrors the recipe table treatment. */
    private disabledCellStyle;
    private toggleEnabled;
    getTestScriptDialog(calculatedField: CalculatedField, argumentsObj?: CalculatedFieldEventArguments, openCalculatedFieldEdit?: boolean): Observable<string>;
}
