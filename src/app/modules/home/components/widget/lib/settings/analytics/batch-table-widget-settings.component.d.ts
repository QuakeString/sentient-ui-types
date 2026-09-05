import { OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { CalculatedFieldsService } from '@core/http/calculated-fields.service';
import { StBatchDataset } from '@home/pages/reporting/models/st-chart.models';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
interface DefinitionChoice {
    id: string;
    name: string;
}
/** Settings panel for the Batch table widget: which EVENT definition and
 *  dataset to show, optional column list, refresh cadence, formatting. The
 *  entities come from the widget's datasources, not from here. */
export declare class BatchTableWidgetSettingsComponent extends WidgetSettingsComponent implements OnDestroy {
    protected store: Store<AppState>;
    private fb;
    private calculatedFieldsService;
    batchTableWidgetSettingsForm: UntypedFormGroup;
    definitionSearchControl: UntypedFormControl;
    filteredDefinitions: Observable<DefinitionChoice[]>;
    selectedDefinition: DefinitionChoice | null;
    readonly datasets: StBatchDataset[];
    readonly BatchDatasetTranslations: Map<StBatchDataset, string>;
    readonly chipSeparators: readonly [13, 188];
    private destroy$;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, calculatedFieldsService: CalculatedFieldsService);
    ngOnDestroy(): void;
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    private fetchDefinitions;
    selectDefinition(choice: DefinitionChoice): void;
    clearDefinition(): void;
    displayDefinition: (d: DefinitionChoice | string) => string;
    get columns(): string[];
    addColumn(event: MatChipInputEvent): void;
    removeColumn(column: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BatchTableWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BatchTableWidgetSettingsComponent, "tb-batch-table-widget-settings", never, {}, {}, never, never, false, never>;
}
export {};
