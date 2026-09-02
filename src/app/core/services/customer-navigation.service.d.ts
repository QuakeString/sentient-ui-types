import * as i0 from "@angular/core";
export interface CustomerNavEntry {
    customerId: string;
    title: string;
}
/**
 * Tracks the customer hierarchy navigation stack so the breadcrumb component
 * can display the full path when drilling into sub-customers.
 *
 * Stack semantics:
 *  - Each entry is an ANCESTOR of the currently viewed customer level.
 *  - When navigating forward into a sub-customer, the current customer is
 *    pushed onto the stack before the router navigates.
 *  - When navigating back (via the back button), the last ancestor is popped
 *    before the router navigates back.
 *  - When a breadcrumb ancestor link is clicked, the resolver truncates the
 *    stack at that level.
 *  - When navigating to the top-level customers page, the stack is cleared.
 */
export declare class CustomerNavigationService {
    private ancestors;
    pushAncestor(customerId: string, title: string): void;
    popAncestor(): void;
    /** Truncate ancestors so everything from `fromIndex` onward is removed. */
    truncateAt(fromIndex: number): void;
    clear(): void;
    findIndex(customerId: string): number;
    getAncestors(): CustomerNavEntry[];
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerNavigationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomerNavigationService>;
}
