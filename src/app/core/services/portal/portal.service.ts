import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WebNavigationConfig } from '../../models/interfaces/web-navigation-config';
import { I18nService } from '../i18n/i18n.service';

function getWindow(): Window {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  public static DARK_THEME_SCHEME = 'dark'
  public static LIGHT_THEME_SCHEME = 'light'
  public static CARD_VIEWER_STYLE_LIST = "list"
  public static CARD_VIEWER_STYLE_CARD = "card"

  private themeScheme: BehaviorSubject<string>;
  private scrollY: BehaviorSubject<number> = new BehaviorSubject<number>(window.scrollY);
  private showLoadingIcon: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private cardViewerStyle: BehaviorSubject<string>;
  private pages: BehaviorSubject<WebNavigationConfig> = new BehaviorSubject<WebNavigationConfig>({
    pages: [
      {
        href: '/projects',
        innerHTML: this.i18s.getValue("navbar.projects"),
        navEffects: true
      }, {
        href: '/resources',
        innerHTML: this.i18s.getValue("navbar.resources"),
        navEffects: true
      },
      {
        href: 'https://github.com/alxandruu',
        target: "_blank",
        rel: "noopener noreferrer",
        innerHTML: '<i class="fab fa-github me-3"></i><span>Github</span>',
      }
    ]
  });

  constructor(private i18s: I18nService) {
    let lstheme = localStorage.getItem("themeScheme");
    if (!lstheme) {
      const wantsDark = window.matchMedia("(prefers-color-scheme: dark)");
      if (wantsDark.matches) {
        lstheme = PortalService.DARK_THEME_SCHEME;

      } else {
        lstheme = PortalService.LIGHT_THEME_SCHEME;
      }
    }

    this.themeScheme = new BehaviorSubject<string>(lstheme);
    this.setThemePreferences(lstheme)

    getWindow().addEventListener('scroll', () => {
      this.scrollY.next(getWindow().scrollY)
    })

    let lsCardViewerStyle = localStorage.getItem("card-style-viewer");

    if (lsCardViewerStyle == null) {
      lsCardViewerStyle = PortalService.CARD_VIEWER_STYLE_LIST
    }

    this.cardViewerStyle = new BehaviorSubject<string>(lsCardViewerStyle);

  }



  private setThemePreferences(themeScheme: string): void {
    document.documentElement.setAttribute('data-theme', themeScheme);
    localStorage.setItem('themeScheme', themeScheme);
  }

  public modifyThemeScheme(scheme: string) {
    this.themeScheme.next(scheme);
    this.setThemePreferences(scheme);
  }

  public modifyCardViewerStyle(value: string) {
    localStorage.setItem("card-style-viewer", value);
    this.cardViewerStyle.next(value);
  }

  public toogShowLoadingIcon() {
    this.showLoadingIcon.next(!this.showLoadingIcon.getValue());
  }

  public getThemeScheme(): Observable<string> {
    return this.themeScheme.asObservable();
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

