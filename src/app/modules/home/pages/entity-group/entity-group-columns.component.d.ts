import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';
import { EntityGroup, EntityGroupColumn, EntityGroupColumnSortOrder, EntityGroupColumnType } from '@shared/models/entity-group.model';
import * as i0 from "@angular/core";
export declare class EntityGroupColumnsComponent implements OnInit, OnChanges {
    private translate;
    private dialog;
    entityGroup: EntityGroup;
    isEdit: boolean;
    configChanged: EventEmitter<EntityGroupColumn[]>;
    columns: EntityGroupColumn[];
    columnTypes: {
        value: EntityGroupColumnType;
        label: string;
    }[];
    entityFieldsList: {
        value: string;
        name: string;
    }[];
    sortOrders: {
        value: EntityGroupColumnSortOrder;
        label: string;
    }[];
    constructor(translate: TranslateService, dialog: MatDialog);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadColumns;
    getColumnTypeLabel(type: EntityGroupColumnType): string;
    getSortOrderLabel(sortOrder?: EntityGroupColumnSortOrder): string;
    getKeyDisplay(row: EntityGroupColumn): string;
    onTypeChanged(col: EntityGroupColumn): void;
    onColumnChanged(): void;
    addColumn(): void;
    viewColumn($event: Event, column: EntityGroupColumn): void;
    editColumn($event: Event, column: EntityGroupColumn, index: number): void;
    deleteColumn($event: Event, index: number): void;
    dropColumn(event: CdkDragDrop<EntityGroupColumn[]>): void;
    private emitChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupColumnsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupColumnsComponent, "tb-entity-group-columns", never, { "entityGroup": { "alias": "entityGroup"; "required": false; }; "isEdit": { "alias": "isEdit"; "required": false; }; }, { "configChanged": "configChanged"; }, never, never, false, never>;
}
