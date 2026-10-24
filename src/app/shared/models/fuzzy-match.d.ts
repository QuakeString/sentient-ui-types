/**
 * Forgiving word matching for in-page searches (the widget properties search):
 * a typed word matches a word of the text exactly, as a prefix, inside it
 * (3+ letters), or with a typo or two (colr, lgend, treshold). Every typed
 * word must match. The server-side widget search ranks the same way.
 */
/** Letters and digits: Latin (Vietnamese included), Greek and Cyrillic. Plain
 *  ranges, not Unicode property escapes, which the app's runtime mishandles. */
export declare const WORD_CHARS = "0-9a-zA-Z\u00C0-\u024F\u0370-\u03FF\u0400-\u04FF\u1E00-\u1EFF";
export declare const searchWords: (text: string) => string[];
/** Whether the typed word `query` matches the word `word` (both lower case). */
export declare const wordMatches: (query: string, word: string) => boolean;
/** Whether every typed word matches some word of the text. */
export declare const textMatches: (queryWords: string[], textWords: string[]) => boolean;
