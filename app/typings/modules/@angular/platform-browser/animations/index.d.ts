// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/src/module.d.ts
declare module '~@angular/platform-browser/animations/src/module' {
/**
 * @experimental Animation support is experimental.
 */
export class BrowserAnimationsModule {
}
/**
 * @experimental Animation support is experimental.
 */
export class NoopAnimationsModule {
}
}
declare module '@angular/platform-browser/animations/src/module' {
export * from '~@angular/platform-browser/animations/src/module';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/src/animation_builder.d.ts
declare module '~@angular/platform-browser/animations/src/animation_builder' {
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AnimationBuilder, AnimationFactory, AnimationMetadata, AnimationOptions, AnimationPlayer } from '@angular/animations';
import { RendererFactory2 } from '@angular/core';
import { AnimationRenderer } from '~@angular/platform-browser/animations/src/animation_renderer';
export class BrowserAnimationBuilder extends AnimationBuilder {
    private _nextAnimationId;
    private _renderer;
    constructor(rootRenderer: RendererFactory2);
    build(animation: AnimationMetadata | AnimationMetadata[]): AnimationFactory;
}
export class BrowserAnimationFactory extends AnimationFactory {
    private _id;
    private _renderer;
    constructor(_id: string, _renderer: AnimationRenderer);
    create(element: any, options?: AnimationOptions): AnimationPlayer;
}
export class RendererAnimationPlayer implements AnimationPlayer {
    id: string;
    element: any;
    private _renderer;
    parentPlayer: AnimationPlayer | null;
    private _started;
    constructor(id: string, element: any, options: AnimationOptions, _renderer: AnimationRenderer);
    private _listen(eventName, callback);
    private _command(command, ...args);
    onDone(fn: () => void): void;
    onStart(fn: () => void): void;
    onDestroy(fn: () => void): void;
    init(): void;
    hasStarted(): boolean;
    play(): void;
    pause(): void;
    restart(): void;
    finish(): void;
    destroy(): void;
    reset(): void;
    setPosition(p: number): void;
    getPosition(): number;
    totalTime: number;
}
}
declare module '@angular/platform-browser/animations/src/animation_builder' {
export * from '~@angular/platform-browser/animations/src/animation_builder';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/src/private_export.d.ts
declare module '~@angular/platform-browser/animations/src/private_export' {
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { BrowserAnimationBuilder as ɵBrowserAnimationBuilder, BrowserAnimationFactory as ɵBrowserAnimationFactory } from '~@angular/platform-browser/animations/src/animation_builder';
export { AnimationRenderer as ɵAnimationRenderer, AnimationRendererFactory as ɵAnimationRendererFactory } from '~@angular/platform-browser/animations/src/animation_renderer';
}
declare module '@angular/platform-browser/animations/src/private_export' {
export * from '~@angular/platform-browser/animations/src/private_export';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/src/animations.d.ts
declare module '~@angular/platform-browser/animations/src/animations' {
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all animation APIs of the animation browser package.
 */
export { BrowserAnimationsModule, NoopAnimationsModule } from '~@angular/platform-browser/animations/src/module';
export * from '~@angular/platform-browser/animations/src/private_export';
}
declare module '@angular/platform-browser/animations/src/animations' {
export * from '~@angular/platform-browser/animations/src/animations';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/public_api.d.ts
declare module '~@angular/platform-browser/animations/public_api' {
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the animation package.
 */
export * from '~@angular/platform-browser/animations/src/animations';
}
declare module '@angular/platform-browser/animations/public_api' {
export * from '~@angular/platform-browser/animations/public_api';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/src/animation_renderer.d.ts
declare module '~@angular/platform-browser/animations/src/animation_renderer' {
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { NgZone, Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2 } from '@angular/core';
export class AnimationRendererFactory implements RendererFactory2 {
    private delegate;
    private engine;
    private _zone;
    private _currentId;
    private _microtaskId;
    private _animationCallbacksBuffer;
    private _rendererCache;
    constructor(delegate: RendererFactory2, engine: AnimationEngine, _zone: NgZone);
    createRenderer(hostElement: any, type: RendererType2): Renderer2;
    begin(): void;
    private _scheduleCountTask();
    end(): void;
    whenRenderingDone(): Promise<any>;
}
export class BaseAnimationRenderer implements Renderer2 {
    protected namespaceId: string;
    delegate: Renderer2;
    engine: AnimationEngine;
    constructor(namespaceId: string, delegate: Renderer2, engine: AnimationEngine);
    readonly data: {
        [key: string]: any;
    };
    destroyNode: ((n: any) => void) | null;
    destroy(): void;
    createElement(name: string, namespace?: string | null | undefined): any;
    createComment(value: string): any;
    createText(value: string): any;
    appendChild(parent: any, newChild: any): void;
    insertBefore(parent: any, newChild: any, refChild: any): void;
    removeChild(parent: any, oldChild: any): void;
    selectRootElement(selectorOrNode: any): any;
    parentNode(node: any): any;
    nextSibling(node: any): any;
    setAttribute(el: any, name: string, value: string, namespace?: string | null | undefined): void;
    removeAttribute(el: any, name: string, namespace?: string | null | undefined): void;
    addClass(el: any, name: string): void;
    removeClass(el: any, name: string): void;
    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2 | undefined): void;
    removeStyle(el: any, style: string, flags?: RendererStyleFlags2 | undefined): void;
    setProperty(el: any, name: string, value: any): void;
    setValue(node: any, value: string): void;
    listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void;
}
export class AnimationRenderer extends BaseAnimationRenderer implements Renderer2 {
    factory: AnimationRendererFactory;
    constructor(factory: AnimationRendererFactory, namespaceId: string, delegate: Renderer2, engine: AnimationEngine);
    setProperty(el: any, name: string, value: any): void;
    listen(target: 'window' | 'document' | 'body' | any, eventName: string, callback: (event: any) => any): () => void;
}
}
declare module '@angular/platform-browser/animations/src/animation_renderer' {
export * from '~@angular/platform-browser/animations/src/animation_renderer';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/src/providers.d.ts
declare module '~@angular/platform-browser/animations/src/providers' {
import { AnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵNoopAnimationDriver as NoopAnimationDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer } from '@angular/animations/browser';
import { NgZone, Provider } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import { AnimationRendererFactory } from '~@angular/platform-browser/animations/src/animation_renderer';
export class InjectableAnimationEngine extends AnimationEngine {
    constructor(driver: AnimationDriver, normalizer: AnimationStyleNormalizer);
}
export function instantiateSupportedAnimationDriver(): NoopAnimationDriver;
export function instantiateDefaultStyleNormalizer(): WebAnimationsStyleNormalizer;
export function instantiateRendererFactory(renderer: DomRendererFactory2, engine: AnimationEngine, zone: NgZone): AnimationRendererFactory;
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export const BROWSER_ANIMATIONS_PROVIDERS: Provider[];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export const BROWSER_NOOP_ANIMATIONS_PROVIDERS: Provider[];
}
declare module '@angular/platform-browser/animations/src/providers' {
export * from '~@angular/platform-browser/animations/src/providers';
}

// Generated by typings
// Source: node_modules/@angular/platform-browser/animations/index.d.ts
declare module '~@angular/platform-browser/animations/index' {
/**
 * Generated bundle index. Do not edit.
 */
export * from '~@angular/platform-browser/animations/public_api';
export { BaseAnimationRenderer as ɵa } from '~@angular/platform-browser/animations/src/animation_renderer';
export { BROWSER_ANIMATIONS_PROVIDERS as ɵf, BROWSER_NOOP_ANIMATIONS_PROVIDERS as ɵg, InjectableAnimationEngine as ɵb, instantiateDefaultStyleNormalizer as ɵd, instantiateRendererFactory as ɵe, instantiateSupportedAnimationDriver as ɵc } from '~@angular/platform-browser/animations/src/providers';
}
declare module '@angular/platform-browser/animations/index' {
export * from '~@angular/platform-browser/animations/index';
}
declare module '@angular/platform-browser/animations' {
export * from '~@angular/platform-browser/animations/index';
}
