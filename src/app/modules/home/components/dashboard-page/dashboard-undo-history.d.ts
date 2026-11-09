export interface UndoStep<T> {
    /** Immutable — clone before use. */
    snapshot: T;
    /** Estimated bytes this step adds on top of the one it shares with. */
    ownBytes: number;
    /** Estimated bytes of the step on its own (what it costs once it is the oldest). */
    fullBytes: number;
}
interface CloneStats {
    ownBytes: number;
    fullBytes: number;
}
/**
 * Deep clone of `cur` that reuses every subtree of `prev` deep-equal to the
 * matching subtree of `cur`. Same copy semantics as `deepClone` (plain
 * objects, arrays, dates; observables kept as they are).
 */
export declare function shareClone<T>(cur: T, prev: any, stats: CloneStats): T;
export declare class UndoHistory<T> {
    private readonly maxSteps;
    private readonly maxBytes;
    private undoSteps;
    private redoSteps;
    constructor(maxSteps: number, maxBytes: number);
    get undoLength(): number;
    get redoLength(): number;
    /** Estimated memory held by the history (both stacks). */
    get bytes(): number;
    clear(): void;
    clearRedo(): void;
    /** A step of `state`, sharing with the newest step on either stack. Not stored. */
    capture(state: T): UndoStep<T>;
    pushUndo(step: UndoStep<T>): void;
    pushRedo(step: UndoStep<T>): void;
    /** The previous state, as a fresh mutable copy; null when there is none. */
    popUndo(): T;
    popRedo(): T;
    private push;
    private stackBytes;
}
export {};
