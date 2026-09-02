import { OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from '@core/services/permission.service';
import * as i0 from "@angular/core";
export declare class HasPermissionDirective implements OnInit, OnDestroy {
    private templateRef;
    private viewContainer;
    private permissionService;
    tbHasPermission: string;
    private hasView;
    private subscription;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, permissionService: PermissionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<HasPermissionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HasPermissionDirective, "[tbHasPermission]", never, { "tbHasPermission": { "alias": "tbHasPermission"; "required": false; }; }, {}, never, never, false, never>;
}
