import { NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from '@core/core.state';
import { NotificationWebsocketService } from '@core/ws/notification-websocket.service';
import * as i0 from "@angular/core";
/**
 * One unread-count subscription for every notification bell on screen.
 *
 * The bell is rendered in the app bar and in each dashboard toolbar, and
 * dashboards kept alive in the route cache keep their toolbar (and its bell)
 * while parked. Each bell used to open its own websocket subscription; they
 * now share this one. It is open while at least one bell is attached, the user
 * is signed in and no bell has its notification popover open (the popover runs
 * its own unread subscription, as before).
 */
export declare class NotificationCountService {
    private notificationWsService;
    private zone;
    private store;
    private countSubject;
    private users;
    private suspended;
    private authenticated;
    private subscriber;
    private countSubscription;
    readonly count$: Observable<number>;
    constructor(notificationWsService: NotificationWebsocketService, zone: NgZone, store: Store<AppState>);
    /** Counter the popover updates while it is open. */
    get counter(): BehaviorSubject<number>;
    /** A bell is shown; call the returned function when it goes away. */
    attach(): () => void;
    /** The popover is open; call the returned function when it closes. */
    suspend(): () => void;
    private hold;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationCountService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationCountService>;
}
