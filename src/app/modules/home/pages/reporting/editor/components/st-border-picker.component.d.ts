import { ControlValueAccessor } from '@angular/forms';
import { CdkOverlayOrigin, ConnectedPosition, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export interface BorderSides {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
}
export declare const DEFAULT_BORDER_SIDES: BorderSides;
export declare class StBorderPickerComponent implements ControlValueAccessor {
    trigger: CdkOverlayOrigin;
    value: BorderSides;
    panelOpen: boolean;
    arrowPosition: 'top' | 'bottom';
    positions: ConnectedPosition[];
    private onChange;
    private onTouched;
    get allActive(): boolean;
    get noneActive(): boolean;
    togglePanel(): void;
    closePanel(): void;
    onPositionChange(event: ConnectedOverlayPositionChange): void;
    toggleSide(side: keyof BorderSides): void;
    toggleAll(): void;
    getBorderLabel(): string;
    private emitChange;
    writeValue(value: BorderSides): void;
    registerOnChange(fn: (value: BorderSides) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState?(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StBorderPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StBorderPickerComponent, "st-border-picker", never, {}, {}, never, never, false, never>;
}
