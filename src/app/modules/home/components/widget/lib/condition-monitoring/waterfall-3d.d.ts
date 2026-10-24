/** What the 3-D waterfall draws: a grid of amplitudes, one row per capture
 *  (oldest first) and one column per frequency. */
export interface Waterfall3dData {
    /** Frequency of each column, Hz. */
    freqs: number[];
    /** Capture time label of each row, oldest first. */
    times: string[];
    /** Amplitudes, row by row (times.length × freqs.length). */
    values: Float32Array;
    unit: string;
}
export interface Waterfall3dTheme {
    dark: boolean;
    text: string;
    line: string;
    hint: string;
    tipBackground: string;
    tipText: string;
}
/** A rotatable 3-D waterfall on a plain canvas: one filled spectrum line per
 *  capture, frequency across, capture time in depth (newest in front),
 *  amplitude up on a log scale and as colour. Drag to turn it, double-click to go back to the first view. */
export declare class Waterfall3dView {
    private host;
    private canvas;
    private tip;
    private resize$;
    private data;
    private theme;
    private hint;
    private yaw;
    private pitch;
    private frame;
    private drag;
    private rows;
    private cols;
    private freqs;
    private amps;
    private level;
    private vmax;
    private sx;
    private sy;
    private fsx;
    private fsy;
    private order;
    constructor(host: HTMLElement);
    destroy(): void;
    setData(data: Waterfall3dData, theme: Waterfall3dTheme, hint: string): void;
    private reduce;
    private schedule;
    /** World (x across, y depth, z up) to view: screen right, screen up, nearness. */
    private view;
    private draw;
    private onDown;
    private onMove;
    private onUp;
    private onLeave;
    private onReset;
    /** Tooltip for the front-most quad under the pointer. */
    private hover;
}
