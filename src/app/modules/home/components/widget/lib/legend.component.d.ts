import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { LegendConfig, LegendData, LegendKey } from '@shared/models/widget.models';
import { ThemeAwareColor } from '@shared/models/theme-color.models';
import * as i0 from "@angular/core";
export declare class LegendComponent implements OnInit, OnDestroy {
    private cd;
    private themeChangeSubscription;
    constructor(cd: ChangeDetectorRef);
    resolveColor(value: ThemeAwareColor): string;
    legendConfig: LegendConfig;
    legendData: LegendData;
    legendKeyHiddenChange: EventEmitter<number>;
    displayHeader: boolean;
    isHorizontal: boolean;
    isRowDirection: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleHideData(index: number): void;
    legendKeys(): LegendKey[];
    static ɵfac: i0.ɵɵFactoryDeclaration<LegendComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LegendComponent, "tb-legend", never, { "legendConfig": { "alias": "legendConfig"; "required": false; }; "legendData": { "alias": "legendData"; "required": false; }; }, { "legendKeyHiddenChange": "legendKeyHiddenChange"; }, never, never, false, never>;
}
