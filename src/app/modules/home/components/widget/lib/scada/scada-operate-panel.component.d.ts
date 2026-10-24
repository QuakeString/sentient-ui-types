import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { ScadaSymbolOperateRequest, ScadaSymbolOperation } from '@home/components/widget/lib/scada/scada-symbol.models';
import * as i0 from "@angular/core";
type OperatePhase = 'choose' | 'confirm' | 'sending' | 'done' | 'error';
/**
 * The switchgear operate dialog: choose an operation the device supports,
 * confirm it within a few seconds, then it is sent. Nothing is sent on the
 * first click.
 */
export declare class ScadaOperatePanelComponent implements OnDestroy {
    private popover;
    private cd;
    request: ScadaSymbolOperateRequest;
    phase: OperatePhase;
    chosen: ScadaSymbolOperation;
    secondsLeft: number;
    expired: boolean;
    error: string;
    offline: boolean;
    private timer;
    private closeTimer;
    private sending;
    constructor(popover: TbPopoverComponent, cd: ChangeDetectorRef);
    get current(): ScadaSymbolOperation;
    get choices(): ScadaSymbolOperation[];
    get progress(): number;
    ngOnDestroy(): void;
    /** In local control the device is operated at its panel, not from here. */
    get lockedLocal(): boolean;
    offered(op: ScadaSymbolOperation): boolean;
    choose(op: ScadaSymbolOperation): void;
    back(): void;
    /** After a failed send: the same operation again, straight away (it was confirmed). */
    retry(): void;
    execute(): void;
    close(): void;
    private stopTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaOperatePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaOperatePanelComponent, "st-scada-operate-panel", never, { "request": { "alias": "request"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
