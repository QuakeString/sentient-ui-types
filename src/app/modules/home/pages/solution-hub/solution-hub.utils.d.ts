import { TranslateService } from '@ngx-translate/core';
import { SolutionService } from '@core/http/solution.service';
import { PackageSource } from '@shared/models/solution.models';
/** "Devices 4 · Dashboards 1 · Calculated fields 8" — the main sections first, at most `max`. */
export declare function createsLine(creates: {
    [section: string]: number;
} | null | undefined, translate: TranslateService, max?: number): string;
/** Exports a template or an installed solution as a package file (a zip) and downloads it. */
export declare function downloadPackage(service: SolutionService, source: PackageSource, onError: (message: string) => void): void;
/** Saves a downloaded file. */
export declare function saveBlob(blob: Blob, fileName: string): void;
/** The server's message from an HTTP error. */
export declare function errorText(e: any): string;
