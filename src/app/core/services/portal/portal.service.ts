import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  constructor() {
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

