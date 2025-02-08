import { CommonModule } from '@angular/common';
import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { I18nService } from 'src/app/core/services/i18n/i18n.service';
import { WNCHrefType, WNCRouterLink } from '../../../../core/types/web-navigation-config.interface';
import { fadeInOutAnimation } from 'src/app/core/animations/fade-in-out.animation';


@Component({
    selector: 'navigation-portal-link',
    template: `
        <a *ngIf="page.href.type == hrefType.DEFAULT" [href]="page.href.url" class="text-decoration-none"
                [ngClass]="{'hover-animation-underline': page.navEffects}" [attr.target]="page.target"
                [attr.rel]="page.rel" [innerHTML]="page.innerHTML"></a>

        <a *ngIf="page.href.type == hrefType.ROUTER_LINK" [routerLink]="page.href.url" class="text-decoration-none"
                [ngClass]="{'hover-animation-underline': page.navEffects}" [attr.target]="page.target"
                [attr.rel]="page.rel" [innerHTML]="page.innerHTML"  ></a>
    `,
    standalone: true,
    imports: [CommonModule, BrowserAnimationsModule, RouterModule],
    animations: [fadeInOutAnimation],
    encapsulation: ViewEncapsulation.None
})
export class NavigationPortalLinkComponent {
    hrefType = WNCHrefType

    @Input() page!: WNCRouterLink


    constructor(protected i18s: I18nService) {
    }

}
