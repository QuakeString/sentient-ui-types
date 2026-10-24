import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CommandPaletteHost, CommandPaletteRect, CommandPaletteService } from './command-palette.service';
import * as i0 from "@angular/core";
/**
 * The top bar's "Search or go to…" field. It takes the bar's free space:
 * a field centred in the bar where there is room, else an icon button at the
 * end (same size either way, so the bar's other buttons never move). Opening
 * turns the field (in place) into the palette's input; the results hang
 * centred beneath it (CommandPaletteService). From the icon, a field of the
 * same kind appears over the bar.
 */
export declare class CommandPaletteTriggerComponent implements OnInit, OnDestroy, CommandPaletteHost {
    private palette;
    private elementRef;
    private zone;
    /**
     * 'auto': field or icon by the free space; 'icon': always the icon;
     * 'field': the field when it fits, else nothing (an icon elsewhere takes over, see compactChange).
     */
    variant: 'auto' | 'icon' | 'field';
    /** True when there is no room for the field. */
    compactChange: EventEmitter<boolean>;
    fieldRef: ElementRef<HTMLElement>;
    inputRef: ElementRef<HTMLInputElement>;
    readonly isMac: boolean;
    readonly shortcut: string;
    readonly iconMode: import("@angular/core").WritableSignal<boolean>;
    readonly open: import("@angular/core").WritableSignal<boolean>;
    readonly fieldWidth: import("@angular/core").WritableSignal<number>;
    readonly fieldShift: import("@angular/core").WritableSignal<number>;
    readonly hasValue: import("@angular/core").WritableSignal<boolean>;
    readonly scopeChip: import("@angular/core").WritableSignal<{
        label: string;
        icon: string;
    }>;
    readonly loading: import("@angular/core").WritableSignal<boolean>;
    removeScope?: () => void;
    clear?: () => void;
    private resizeObserver;
    private unregister;
    private returnFocus;
    private keepFocus;
    private suppressFocusOpen;
    private pointerOpening;
    /** Icon mode, open: the field floats over the bar here. */
    private floatRect;
    /** Icon mode, open: the bar's elements hidden while the field takes their place. */
    private hiddenBarContent;
    private fixedOffset;
    private readonly onWindowResize;
    private readonly onDocumentPointerDown;
    constructor(palette: CommandPaletteService, elementRef: ElementRef<HTMLElement>, zone: NgZone);
    get input(): HTMLInputElement;
    ngOnInit(): void;
    ngOnDestroy(): void;
    isAvailable(): boolean;
    activate(): void;
    /** Centred under the field, up to 640px wide, inside the window's 16px gutters. */
    panelRect(): CommandPaletteRect;
    scrimTop(): number;
    closed(): void;
    onPointerDown(): void;
    onFocus(): void;
    /** Typing into the closed field (it had kept the focus) opens it, keeping the text. */
    onInput(): void;
    onClosedKeydown(event: KeyboardEvent): void;
    onIconClick(): void;
    onClear(): void;
    private bar;
    /** Field or icon, and where the field sits so that it is centred in the bar. */
    private layout;
    /**
     * Icon mode: the field takes the bar's space left of the icon (whose content
     * is hidden meanwhile), as wide as the field at rest and centred in that space. With
     * too little room there (a phone), it spans the bar less its gutters.
     */
    private floatingRect;
    /** Left edge of the first visible control right of the icon (else the icon's end). */
    private nextControlLeft;
    /** The icon button (hidden but still laid out while open), else the whole trigger. */
    private iconRect;
    private reducedMotion;
    /** The floating field grows out of the icon: from a circle where the icon is to its full width. */
    private growFromIcon;
    /** Fades out (keeping their space, so nothing moves) the bar's elements left of the icon. */
    private hideBarContent;
    private restoreBarContent;
    /** Positions the floating field (fixed), correcting for an ancestor that contains fixed boxes. */
    private place;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommandPaletteTriggerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CommandPaletteTriggerComponent, "st-command-palette-trigger", never, { "variant": { "alias": "variant"; "required": false; }; }, { "compactChange": "compactChange"; }, never, never, true, never>;
}
