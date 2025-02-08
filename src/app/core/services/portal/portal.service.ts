import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardViewerStyle } from '../../enums/card-viewer-style.enum';
import { WNCHrefType, WNCRouterLink } from '../../types/web-navigation-config.interface';
import { I18nService } from '../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private cardViewerStyle: BehaviorSubject<string>;
  private pages: BehaviorSubject<Array<WNCRouterLink>> = new BehaviorSubject<Array<WNCRouterLink>>(
    [
      {
        href: {
          url: ['/projects'],
          type: WNCHrefType.ROUTER_LINK
        },
        innerHTML: this.i18s.getValue("navbar.projects"),
        ngRouter: true,
        navEffects: true
      }, {
        href: {
          url: ['/resources'],
          type: WNCHrefType.ROUTER_LINK
        },
        innerHTML: this.i18s.getValue("navbar.resources"),
        navEffects: true,
        ngRouter: true
      },
      {
        href: {
          url: 'https://github.com/alxandruu',
          type: WNCHrefType.DEFAULT
        },
        ngRouter: false,
        target: "_blank",
        rel: "noopener noreferrer",
        innerHTML: '<i class="fab fa-github me-3"></i><span>Github</span>',

      }
    ]
  );

  constructor(private i18s: I18nService) {



    let lsCardViewerStyle = localStorage.getItem("card-style-viewer");

    if (lsCardViewerStyle == null) {
      lsCardViewerStyle = CardViewerStyle.LIST
    }

    this.cardViewerStyle = new BehaviorSubject<string>(lsCardViewerStyle);

  }



  public modifyCardViewerStyle(value: string) {
    localStorage.setItem("card-style-viewer", value);
    this.cardViewerStyle.next(value);
  }


  public getPages(): Observable<Array<WNCRouterLink>> {
    return this.pages.asObservable();
  }

  public getCardViewerStyle(): Observable<string> {
    return this.cardViewerStyle.asObservable();
  }
}

