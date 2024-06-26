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

  private themeScheme: BehaviorSubject<string>;
  private scrollY: BehaviorSubject<number> = new BehaviorSubject<number>(window.scrollY);

  constructor() {
    let lstheme = localStorage.getItem("theme");
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

  }


  private setThemePreferences(themeScheme: string): void {
    document.documentElement.setAttribute('data-theme', themeScheme);
    localStorage.setItem('themeScheme', themeScheme);
  }

  public modifyThemeScheme(scheme: string) {
    this.themeScheme.next(scheme);
    this.setThemePreferences(scheme);
  }



  public getThemeScheme(): Observable<string> {
    return this.themeScheme.asObservable();
  }

  public getScrollY(): Observable<number> {
    return this.scrollY.asObservable();
  }


}

