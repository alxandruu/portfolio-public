import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardViewerStyle } from '../../enums/card-viewer-style.enum';
import { WebNavigationConfig, WNCHrefType } from '../../models/interfaces/web-navigation-config';
import { I18nService } from '../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private scrollY: BehaviorSubject<number> = new BehaviorSubject<number>(window.scrollY);
  private showLoadingIcon: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private cardViewerStyle: BehaviorSubject<string>;
  private pages: BehaviorSubject<WebNavigationConfig> = new BehaviorSubject<WebNavigationConfig>({
    pages: [
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
  });

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

  public toogShowLoadingIcon() {
    this.showLoadingIcon.next(!this.showLoadingIcon.getValue());
  }

  public getPages(): Observable<WebNavigationConfig> {
    return this.pages.asObservable();
  }

  public getScrollY(): Observable<number> {
    return this.scrollY.asObservable();
  }

  public getCardViewerStyle(): Observable<string> {
    return this.cardViewerStyle.asObservable();
  }

  public observeShowLoadingIcon(): Observable<boolean> {
    return this.showLoadingIcon.asObservable();
  }

}

