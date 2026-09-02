import { DashboardPageComponent } from '@home/components/dashboard-page/dashboard-page.component';
import { LayerDefinition } from '@shared/models/dashboard.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class SelectActiveLayerComponent {
    private translate;
    dashboardCtrl: DashboardPageComponent;
    constructor(translate: TranslateService);
    get visible(): boolean;
    get layers(): LayerDefinition[];
    get activeLayer(): number;
    get widgetCounts(): {
        [layerId: number]: number;
    };
    layerLabel(l: LayerDefinition): string;
    triggerLabel(): string;
    onLayerClick(event: Event, layer: number): void;
    onToggleHidden(event: Event, layer: number): void;
    onToggleLocked(event: Event, layer: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectActiveLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectActiveLayerComponent, "tb-select-active-layer", never, { "dashboardCtrl": { "alias": "dashboardCtrl"; "required": false; }; }, {}, never, never, false, never>;
}
