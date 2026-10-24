export interface Spectrogram {
    /** Frame start times, s. */
    times: number[];
    /** Row centre frequencies, Hz. */
    freqs: number[];
    /** [frame, row, dB] cells. */
    cells: number[][];
    minDb: number;
    maxDb: number;
}
/** Short-time spectrum of a clip, at most `maxFrames` × `maxRows` cells,
 *  in dB re the clip's loudest cell (the colour range is the top 80 dB). */
export declare const spectrogram: (samples: ArrayLike<number>, rateHz: number, maxFrames?: number, maxRows?: number, size?: number) => Spectrogram;
/** Mono 16-bit PCM WAV of samples in −1..1. */
export declare const encodeWav16: (samples: Float32Array, rateHz: number) => Blob;
/** Records the microphone as raw samples (no compression, so the clip is
 *  the real signal). Call `stop()` for the samples and the rate. */
export declare class MicRecorder {
    private ctx;
    private stream;
    private node;
    private chunks;
    private length;
    /** Seconds recorded so far. */
    get seconds(): number;
    start(): Promise<void>;
    stop(): Promise<{
        samples: Float32Array;
        rateHz: number;
    }>;
}
/** The server's limit of samples per clip (`MAX_WAVEFORM_SAMPLES`). */
export declare const MAX_WAVEFORM_SAMPLES_UI = 262144;
