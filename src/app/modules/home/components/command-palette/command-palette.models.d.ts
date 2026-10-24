import { Params } from '@angular/router';
import { MenuId } from '@core/services/menu.models';
import { GlobalSearchEntityType } from '@core/http/global-search.service';
import { Authority } from '@shared/models/authority.enum';
export interface FuzzyMatch {
    score: number;
    /** Indices of the matched characters in the original text (for highlighting). */
    indices: number[];
}
/** Scores of the match kinds, best first. */
export declare const MatchScore: {
    exact: number;
    prefix: number;
    wordPrefix: number;
    initials: number;
    substring: number;
    subsequence: number;
};
/**
 * A page match at least this good is listed before the entities: a whole
 * initials match ("rc") or better, after its small length penalty; a synonym's
 * word match (weighted 0.85) stays below it.
 */
export declare const STRONG_MATCH: number;
/** Lower-cased, accent-free, same length as the input (index i maps to i). */
export declare const foldText: (text: string) => string;
/**
 * How well query matches text: exact > prefix > word prefix > initials
 * ("rc" → "Rule chains") > substring > subsequence. Both are compared
 * case- and accent-insensitively. Returns null when it does not match.
 */
export declare const fuzzyMatch: (rawQuery: string, text: string) => FuzzyMatch | null;
export interface TextPart {
    text: string;
    match: boolean;
}
/** Splits text into runs of matched and unmatched characters. */
export declare const highlightParts: (text: string, indices?: number[]) => TextPart[];
/**
 * Extra words a page is found by (English and Vietnamese, accents optional).
 * Matched like a label, but never highlighted.
 */
export declare const pageKeywords: Partial<Record<MenuId | string, string>>;
/** Pages with no menu entry that every signed-in user may open. */
export interface ExtraPage {
    id: string;
    name: string;
    path: string;
    icon: string;
    /** Route guard: the authorities its route admits. */
    auth: Authority[];
}
/** account-routing.module.ts (profile, security and notification settings routes). */
export declare const extraPages: ExtraPage[];
export interface PaletteEntityType {
    type: GlobalSearchEntityType;
    /** The list page; the type is searched only when this menu entry is available. */
    menuId: MenuId;
    /** RBAC resource (role.model.ts), checked for READ; none for sysadmin-only types. */
    resource?: string;
    /** Route guard of the details page (only these authorities can open it). */
    auth: Authority[];
    /** Group title. */
    title: string;
    icon: string;
    detailsUrl: (id: string) => string;
    /** The full list; its table takes ?textSearch=. */
    listUrl: string;
}
/** Each type's details route, as declared by its routing module. */
export declare const paletteEntityTypes: PaletteEntityType[];
export type PaletteScopeKind = 'commands' | 'pages' | 'entity';
export interface PaletteScope {
    /** What the user types ("d:"). */
    prefix: string;
    kind: PaletteScopeKind;
    entityType?: GlobalSearchEntityType;
    /** Devices that are gateways only. */
    gateways?: boolean;
    /** Chip text. */
    label: string;
    icon: string;
}
export declare const paletteScopes: PaletteScope[];
export type PaletteItemKind = 'page' | 'entity' | 'command' | 'recent' | 'more' | 'ai' | 'scope';
export interface PaletteItem {
    /** Unique within the list (also the option's DOM id suffix). */
    key: string;
    kind: PaletteItemKind;
    icon: string;
    label: string;
    /** Characters of label to highlight. */
    matches?: number[];
    /** Muted path before the label ("Entities ›"). */
    context?: string;
    /** Muted text after the label (entity label, kind). */
    secondary?: string;
    /** Second line. */
    subtitle?: string;
    /** Small chip after the label ("gateway"). */
    chip?: string;
    /** Devices: connection dot (true online, false offline, null unknown → none). */
    online?: boolean | null;
    /** Starred dashboard. */
    starred?: boolean;
    /** Right-hand hint ("Page", "Command", shortcut). */
    hint?: string;
    /** Navigation target; such items can also open in a new tab. */
    url?: string;
    queryParams?: Params;
    /** Commands. */
    run?: () => void;
    /** Recorded in the recent list when opened. */
    recent?: PaletteRecent;
    score?: number;
}
export interface PaletteGroup {
    key: string;
    title: string;
    items: PaletteItem[];
}
/** A place opened from the palette, kept per user in localStorage. */
export interface PaletteRecent {
    kind: 'page' | 'entity';
    /** Menu id (pages) or entity type. */
    type: string;
    id: string;
    name: string;
    url: string;
    icon: string;
}
export declare const MAX_RECENT = 8;
export declare const MAX_PAGES = 6;
export declare const recentStorageKey: (userId: string) => string;
