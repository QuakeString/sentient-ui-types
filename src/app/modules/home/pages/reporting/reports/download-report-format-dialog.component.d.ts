import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export interface DownloadReportFormatDialogData {
    fileName: string;
    formats: string[];
}
/** Multi-format (zip) report download: pick ONE document or the whole zip. */
export declare class DownloadReportFormatDialogComponent {
    dialogRef: MatDialogRef<DownloadReportFormatDialogComponent>;
    data: DownloadReportFormatDialogData;
    constructor(dialogRef: MatDialogRef<DownloadReportFormatDialogComponent>, data: DownloadReportFormatDialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<DownloadReportFormatDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DownloadReportFormatDialogComponent, "tb-download-report-format-dialog", never, {}, {}, never, never, true, never>;
}
