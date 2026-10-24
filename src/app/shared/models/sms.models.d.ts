export interface SmsLength {
    encoding: 'GSM-7' | 'UCS-2';
    /** Length in the encoding's units (extension characters count 2). */
    units: number;
    segments: number;
    /** Units one SMS holds at this length (single or per part). */
    perSegment: number;
}
export declare function smsLength(text: string): SmsLength;
