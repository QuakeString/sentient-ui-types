import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetComponent } from '@home/components/widget/widget.component';
import { CmChartBase } from './cm-chart-base';
import { WaveformMeta } from './condition-monitoring.models';
import * as i0 from "@angular/core";
export interface SoundPlayerWidgetSettings {
    kind: 'sound';
    /** Sound key when the widget shows a device without a machine setup. */
    soundKey: string;
    /** Look-back of the clip list, days. */
    days: number;
    /** Highest frequency of the spectrogram, Hz (0 = up to half the rate). */
    maxHz: number;
}
export declare const soundPlayerDefaultSettings: SoundPlayerWidgetSettings;
interface SoundPoint {
    name: string;
    deviceId: string;
    soundKey: string;
}
/** Sound player: the sound clips of a machine's sensors with their level,
 *  a spectrogram of the clip, and a baseline clip to listen to before the
 *  latest one ("does it sound different from when it was healthy?"). */
export declare class SoundPlayerWidgetComponent extends CmChartBase implements OnInit, OnDestroy {
    private store;
    settings: SoundPlayerWidgetSettings;
    points: SoundPoint[];
    pointIndex: number;
    clips: WaveformMeta[];
    clipId: string | null;
    baselineId: string | null;
    audioUrl: string | null;
    playing: 'baseline' | 'clip' | null;
    /** State of the selected clip's own player bar. */
    clipPlaying: boolean;
    clipTime: number;
    clipDuration: number;
    clipTimeShown: number;
    audioRef?: ElementRef<HTMLAudioElement>;
    seekFill?: ElementRef<HTMLElement>;
    seekThumb?: ElementRef<HTMLElement>;
    loading: boolean;
    message: string;
    saving: boolean;
    private api;
    private spec;
    private urls;
    private player;
    private seeking;
    constructor(widgetComponent: WidgetComponent, cd: ChangeDetectorRef, store: Store<AppState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get point(): SoundPoint | undefined;
    get clip(): WaveformMeta | undefined;
    get baseline(): WaveformMeta | undefined;
    /** Level of the clip against the baseline, dB (positive = louder). */
    get levelChange(): number | null;
    refresh(): void;
    selectPoint(i: number): void;
    selectClip(id: string): void;
    markBaseline(): void;
    /** Play the baseline, then the selected clip. */
    compare(): void;
    togglePlay(audio: HTMLAudioElement): void;
    seekStart(e: PointerEvent, audio: HTMLAudioElement): void;
    seekMove(e: PointerEvent, audio: HTMLAudioElement): void;
    seekEnd(e: PointerEvent): void;
    onAudioMeta(audio: HTMLAudioElement): void;
    onAudioSeeked(audio: HTMLAudioElement): void;
    onAudioState(playing: boolean): void;
    onAudioTime(audio: HTMLAudioElement): void;
    private anchor;
    /** Moves the bar straight in the DOM; change detection runs only when the
     *  shown second changes. */
    private drawSeek;
    formatTime(s: number): string;
    stop(): void;
    private play;
    private wavUrl;
    private baselineMap;
    private loadPoints;
    private loadClips;
    private loadClip;
    has(v: unknown): boolean;
    protected render(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SoundPlayerWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SoundPlayerWidgetComponent, "st-sound-player-widget", never, {}, {}, never, never, false, never>;
}
export {};
