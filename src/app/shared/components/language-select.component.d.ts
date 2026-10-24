import { ControlValueAccessor } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { LanguageChoice } from '@shared/models/script.models';
import { MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
/**
 * UI language picker: each language in its own script with its English name,
 * the languages of India first, and a search box that matches either name.
 */
export declare class LanguageSelectComponent implements ControlValueAccessor {
    label: string;
    languages: string[];
    /** Ready-made choices instead of UI locales (e.g. translation content languages). */
    set choices(choices: LanguageChoice[] | null);
    subscriptSizing: SubscriptSizing;
    appearance: MatFormFieldAppearance;
    /** Off for compact form rows, where the row's title names the field. */
    showLabel: boolean;
    required: boolean;
    private choiceList;
    value: string;
    disabled: boolean;
    filter: string;
    indian: LanguageChoice[];
    world: LanguageChoice[];
    private onChange;
    private onTouched;
    constructor();
    nameOf(locale: string): import("@shared/models/script.models").NativeLanguageName;
    dirOf(locale: string): "ltr" | "rtl";
    /** BCP 47 tag for a lang attribute. */
    langOf(locale: string): string;
    refresh(): void;
    onFilter(text: string): void;
    onOpened(open: boolean): void;
    onSelect(change: MatSelectChange): void;
    writeValue(value: string): void;
    registerOnChange(fn: (v: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LanguageSelectComponent, "tb-language-select", never, { "label": { "alias": "label"; "required": false; }; "languages": { "alias": "languages"; "required": false; }; "choices": { "alias": "choices"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "showLabel": { "alias": "showLabel"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}
