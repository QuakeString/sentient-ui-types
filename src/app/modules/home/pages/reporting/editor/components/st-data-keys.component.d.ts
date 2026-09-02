import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipGrid, MatChipInputEvent, MatChipRow } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { DataKey, DatasourceType } from '@shared/models/widget.models';
import { EntityId } from '@shared/models/id/entity-id';
import { EntityService } from '@core/http/entity.service';
import { TbPopoverService } from '@shared/components/popover.service';
import { DndDropEvent } from 'ngx-drag-drop';
import { IAliasController } from '@core/api/widget-api.models';
import { StChartType } from '../../models/st-chart.models';
import * as i0 from "@angular/core";
/**
 * Simplified Data Keys component for Report Builder
 * Similar to tb-data-keys but without widget context dependencies
 */
export declare class StDataKeysComponent implements ControlValueAccessor, OnInit, OnChanges {
    private fb;
    private dialog;
    private entityService;
    private popoverService;
    private renderer;
    private viewContainerRef;
    label: string;
    placeholder: string;
    latestDataKeys: boolean;
    entityId: EntityId;
    entityAliasId: string;
    aliasController: IAliasController;
    chartType: StChartType;
    dataKeyType: DataKeyType;
    datasourceType: DatasourceType;
    maxKeys: number;
    simpleMode: boolean;
    isHorizontal: boolean;
    attributeScope: string;
    disabled: boolean;
    keyInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    autocomplete: MatAutocompleteTrigger;
    chipList: MatChipGrid;
    keysListFormGroup: FormGroup;
    keys: Array<DataKey>;
    filteredKeys: Observable<Array<DataKey>>;
    separatorKeysCodes: number[];
    searchText: string;
    dataKeyTypes: typeof DataKeyType;
    dndId: string;
    dragIndex: number;
    get dragDisabled(): boolean;
    private dirty;
    private propagateChange;
    private latestSearchTextResult;
    private fetchObservable$;
    constructor(fb: FormBuilder, dialog: MatDialog, entityService: EntityService, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private clearSearchCache;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    writeValue(value: Array<DataKey> | null): void;
    setDisabledState(isDisabled: boolean): void;
    onFocus(): void;
    addKey(key: DataKey): void;
    add(event: MatChipInputEvent): void;
    remove(key: DataKey): void;
    editDataKey(key: DataKey, index: number): void;
    chipDragStart(index: number, chipRow: MatChipRow, placeholderChipRow: Element): void;
    chipDragEnd(): void;
    onChipDrop(event: DndDropEvent): void;
    openColorPickerPopup(key: DataKey, $event: Event, keyColorButton: HTMLDivElement): void;
    setSeriesType(key: DataKey, seriesType: 'line' | 'bar'): void;
    displayKeyFn(key?: DataKey): string | undefined;
    private clear;
    private generateDataKey;
    private generateColor;
    private fetchKeys;
    /**
     * Natural sort comparison for strings with numbers (e.g., sensor_001, sensor_002, sensor_010)
     */
    private naturalSort;
    private getKeys;
    private getDataKeyTypesToFetch;
    private fetchEntityKeysByAlias;
    private fetchEntityKeysByEntityId;
    private createDataKeyFilter;
    private mapKeysToDataKeys;
    static ɵfac: i0.ɵɵFactoryDeclaration<StDataKeysComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StDataKeysComponent, "st-data-keys", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "latestDataKeys": { "alias": "latestDataKeys"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; "entityAliasId": { "alias": "entityAliasId"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "chartType": { "alias": "chartType"; "required": false; }; "dataKeyType": { "alias": "dataKeyType"; "required": false; }; "datasourceType": { "alias": "datasourceType"; "required": false; }; "maxKeys": { "alias": "maxKeys"; "required": false; }; "simpleMode": { "alias": "simpleMode"; "required": false; }; "isHorizontal": { "alias": "isHorizontal"; "required": false; }; "attributeScope": { "alias": "attributeScope"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
