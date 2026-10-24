import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@core/core.state';
import { DialogComponent } from '@shared/components/dialog.component';
import { DialogService } from '@core/services/dialog.service';
import { UserAvatarService } from '@core/http/user-avatar.service';
import { AvatarAdjustments, AvatarTransform } from './avatar-editor.utils';
import * as i0 from "@angular/core";
export interface AvatarEditorDialogData {
    userId: string;
    /** The current photo's version; when set the editor starts from that photo. */
    avatarVersion?: number;
}
/** The new avatarVersion, or null when the photo was removed. Nothing on cancel. */
export interface AvatarEditorDialogResult {
    avatarVersion: number | null;
}
/**
 * Crops and adjusts a profile photo: pan/zoom under a round mask, rotate,
 * mirror, brightness/contrast/saturation/black & white. The result is
 * rendered at {@link USER_AVATAR_SIZE} px and uploaded from here.
 */
export declare class AvatarEditorDialogComponent extends DialogComponent<AvatarEditorDialogComponent, AvatarEditorDialogResult> implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    data: AvatarEditorDialogData;
    dialogRef: MatDialogRef<AvatarEditorDialogComponent, AvatarEditorDialogResult>;
    private avatarService;
    private dialogService;
    private translate;
    private cd;
    fileInput: ElementRef<HTMLInputElement>;
    cropElement: ElementRef<HTMLElement>;
    readonly accept = "image/png,image/jpeg,image/webp";
    readonly minZoom = 1;
    readonly maxZoom = 4;
    readonly maxSourceMb: number;
    /** The decoded picture being edited, null while choosing one. */
    image: HTMLImageElement;
    imageUrl: string;
    imageWidth: number;
    imageHeight: number;
    transform: AvatarTransform;
    adjustments: AvatarAdjustments;
    /** Shared by the stage and the previews (all sized in percent of the crop box). */
    imageStyle: {
        [key: string]: string;
    };
    /** Loading a picture (the existing photo or a picked file). */
    loading: boolean;
    saving: boolean;
    dragOver: boolean;
    /** Translated message under the picker / above the actions. */
    error: string;
    readonly hasPhoto: boolean;
    /** Object URL this dialog created (a picked file); the cached photo URL is not ours to revoke. */
    private ownUrl;
    private photoSubscription;
    private escapeSubscription;
    /** Active pointers on the stage (one pans, two pinch-zoom). */
    private pointers;
    private pinchDistance;
    private dragDepth;
    /** Only the latest picture load may take effect (a drop can race the initial photo). */
    private loadSeq;
    constructor(store: Store<AppState>, router: Router, data: AvatarEditorDialogData, dialogRef: MatDialogRef<AvatarEditorDialogComponent, AvatarEditorDialogResult>, avatarService: UserAvatarService, dialogService: DialogService, translate: TranslateService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    chooseFile(): void;
    onFilePicked(event: Event): void;
    onDragEnter(event: DragEvent): void;
    onDragOver(event: DragEvent): void;
    onDragLeave(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    onPointerDown(event: PointerEvent): void;
    onPointerMove(event: PointerEvent): void;
    onPointerUp(event: PointerEvent): void;
    onWheel(event: WheelEvent): void;
    onStageKeydown(event: KeyboardEvent): void;
    setZoom(zoom: number): void;
    zoomBy(factor: number): void;
    rotate(clockwise: boolean): void;
    flip(): void;
    setAdjustment(key: 'brightness' | 'contrast' | 'saturation', value: number): void;
    setGrayscale(grayscale: boolean): void;
    resetAdjustments(): void;
    get adjustmentsChanged(): boolean;
    /** Slider value label: offset from neutral, e.g. "+20%". */
    formatAdjustment(value: number): string;
    cancel(): void;
    save(): Promise<void>;
    removePhoto(): void;
    private openFile;
    /**
     * Decodes the picture (the browser applies EXIF orientation) and starts
     * editing it afresh. False when a later load took over meanwhile.
     */
    private loadImage;
    private setTransform;
    private updateStyle;
    private failSave;
    /** Side of the crop square on screen, in CSS pixels. */
    private cropSide;
    /** A viewport point in crop units (origin at the circle centre). */
    private toCropUnits;
    private currentPinchDistance;
    private hasFiles;
    private revokeOwnUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarEditorDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarEditorDialogComponent, "st-avatar-editor-dialog", never, {}, {}, never, never, false, never>;
}
