import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { PageHrefType } from '../../enums/page-href-type.enum';
import { Page } from '../../types/page.interface';

@Injectable({
    providedIn: 'root'
})
export class PortalManagerService {
    readonly pages = signal<Array<Page>>(this.getPages())
    readonly document = inject(DOCUMENT)

    private getPages(): Array<Page> {
        return [
            {
                href: {
                    url: ['/projects'],
                    type: PageHrefType.ROUTER_LINK
                },
                innerHTML: "Proyectos",
                ngRouter: true,
                navEffects: true
            }, {
                href: {
                    url: ['/resources'],
                    type: PageHrefType.ROUTER_LINK
                },
                innerHTML: "Recursos",
                navEffects: true,
                ngRouter: true
            },
            {
                href: {
                    url: 'https://github.com/alxandruu',
                    type: PageHrefType.DEFAULT
                },
                ngRouter: false,
                target: "_blank",
                rel: "noopener noreferrer",
                innerHTML: '<i class="fab fa-github me-3"></i><span>Github</span>',

            }
        ]
    }
}

