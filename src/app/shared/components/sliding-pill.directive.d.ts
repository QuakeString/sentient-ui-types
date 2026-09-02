/**
 * Copyright © 2016-2025 The SENTIENT Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
/**
 * Directive that adds a sliding pill animation to any `mat-button-toggle-group`.
 *
 * Usage:
 *   <mat-button-toggle-group tbSlidingPill ...>
 *     <mat-button-toggle ...>Option 1</mat-button-toggle>
 *     <mat-button-toggle ...>Option 2</mat-button-toggle>
 *   </mat-button-toggle-group>
 *
 * The directive sets CSS custom properties `--pill-left` and `--pill-width`
 * on the host element and toggles the `.tb-pill-active` class.
 * Pair with the `.tb-sliding-pill` SCSS class (from `_sliding-pill.scss`).
 */
export declare class SlidingPillDirective implements AfterViewInit, OnDestroy {
    private el;
    private zone;
    private group;
    private destroy$;
    private resizeObserver;
    constructor(el: ElementRef<HTMLElement>, zone: NgZone, group: MatButtonToggleGroup);
    ngAfterViewInit(): void;
    private updatePillPosition;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SlidingPillDirective, [null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SlidingPillDirective, "mat-button-toggle-group[tbSlidingPill]", never, {}, {}, never, never, false, never>;
}
