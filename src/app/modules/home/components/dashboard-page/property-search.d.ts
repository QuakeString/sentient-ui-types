/**
 * Filters a rendered settings form (the widget editor) by what the user types:
 * a row stays when every typed word matches its label, its value or the title
 * of a section it is in (forgiving: prefixes, typos). Other rows are hidden,
 * and so are sections left empty; a collapsed section with a match is opened
 * (and closed again when the search ends). The matched words are marked with
 * the CSS Custom Highlight API, so the form's own markup is never changed.
 * Rows that render later (tabs, async editors) are picked up as they appear.
 */
export declare class PropertySearch {
    private readonly root;
    private readonly onCount;
    private text;
    private readonly observer;
    private timer;
    private readonly opened;
    constructor(root: HTMLElement, onCount: (count: number) => void);
    get target(): HTMLElement;
    search(text: string): void;
    dispose(): void;
    private reset;
    private apply;
    /** The form's rows: innermost .tb-form-row elements, plus fields not in one. */
    private rows;
    private rowText;
    private sectionTitles;
    /** Ranges over the words of the row's text that a typed word matched. */
    private collectRanges;
}
