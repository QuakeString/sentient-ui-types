import * as i0 from "@angular/core";
export declare class BackendConfigService {
    static readonly LOCAL_URL = "http://localhost:8080";
    getUrl(): string | null;
    setUrl(url: string): void;
    clear(): void;
    isConfigured(): boolean;
    /** Derives the WebSocket base from the stored HTTP URL. */
    derivedWsBase(): string;
    private normalize;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackendConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BackendConfigService>;
}
