/**
 * Copies text to the clipboard and resolves to whether it worked.
 *
 * - On a secure origin (https, localhost) it uses the async Clipboard API.
 * - Otherwise, or if that is refused, it falls back to a hidden textarea and
 *   `execCommand('copy')`. The textarea is placed inside `host` (the clicked
 *   element) rather than in `document.body`: an open dialog traps focus and
 *   pulls it back from any element outside the dialog, which made the old
 *   body-level textarea copy nothing from copy buttons inside dialogs.
 */
export declare function copyTextToClipboard(text: string, host?: HTMLElement | null): Promise<boolean>;
