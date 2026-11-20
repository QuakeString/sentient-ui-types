import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ColorGradientSettings } from '@shared/models/widget-settings.models';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { Datasource } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class GradientComponent implements OnInit, ControlValueAccessor, OnDestroy {
    private fb;
    private cd;
    gradient: ElementRef;
    disabled: boolean;
    popover: TbPopoverComponent;
    panelTitle: string;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    minValue: number;
    maxValue: number;
    advancedMode: boolean;
    modelValue: any;
    /** Selected stop marker: index into the colour list (start = 0, end = last). */
    readonly selectedMarker: import("@angular/core").WritableSignal<number>;
    gradientFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ColorGradientSettings): void;
    /** Markers under the preview bar; simple-mode middle stops can be dragged. */
    get markers(): {
        position: number;
        color: string;
        label: string;
        draggable: boolean;
    }[];
    get linearGradient(): string;
    markerDown(e: PointerEvent, index: number, bar: HTMLElement): void;
    markerKey(e: KeyboardEvent, index: number): void;
    /** Moves middle stop `index` (1..n-2), kept between its neighbours. */
    private setMarkerPosition;
    /** Simple-mode positions of start, middle stops and end (0..100). */
    private simplePositions;
    private colorGradientControl;
    get gradientListFormArray(): UntypedFormArray;
    get gradientListFormGroups(): FormGroup[];
    private advancedGradientControl;
    get advancedGradientListFormArray(): UntypedFormArray;
    get advancedGradientListFormGroups(): FormGroup[];
    trackByGradient(index: number, gradientControl: AbstractControl): any;
    removeGradient(index: number, advanced?: boolean): void;
    gradientDrop(event: CdkDragDrop<string[]>, advanced?: boolean): void;
    addGradient(advanced?: boolean): void;
    updateModel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GradientComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GradientComponent, "tb-gradient", never, { "disabled": { "alias": "disabled"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; "minValue": { "alias": "minValue"; "required": false; }; "maxValue": { "alias": "maxValue"; "required": false; }; "advancedMode": { "alias": "advancedMode"; "required": false; }; }, {}, never, never, false, never>;
}
