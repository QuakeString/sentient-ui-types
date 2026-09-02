import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BasicActionWidgetComponent } from '@home/components/widget/lib/action/action-widget.models';
import { ComboBoxOption, ComboBoxWidgetSettings } from '@home/components/widget/lib/rpc/combo-box-widget.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { Observable } from 'rxjs';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class ComboBoxWidgetComponent extends BasicActionWidgetComponent implements OnInit, OnDestroy {
    protected imagePipe: ImagePipe;
    protected sanitizer: DomSanitizer;
    private renderer;
    private utils;
    protected cd: ChangeDetectorRef;
    private elementRef;
    settings: ComboBoxWidgetSettings;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    padding: string;
    showLabel: boolean;
    label$: Observable<string>;
    labelStyle: ComponentStyle;
    valueStyle: ComponentStyle;
    options: ComboBoxOption[];
    value: any;
    disabled: boolean;
    private valueSetter;
    private comboBoxCssClass;
    private themeChangeSubscription;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, utils: UtilsService, cd: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSelectionChange(value: any): void;
    compareWith: (a: any, b: any) => boolean;
    resolveColor(value: ThemeAwareColor): string;
    private onValue;
    private onDisabled;
    private onOptions;
    /**
     * Accepts a JSON array of `{label, value}` objects, an array of primitives
     * (label = value), or a `{ label: value }` map. Returns null on unusable input
     * so the current option list is preserved.
     */
    private parseOptions;
    private coerceValue;
    private toValueType;
    private applyComboColors;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComboBoxWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComboBoxWidgetComponent, "tb-combo-box-widget", never, {}, {}, never, never, false, never>;
}
