import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsiteThemeService {
  private _theme: any;

  constructor() { }

  public webpageTheme(): void {
    const localstorage_theme = localStorage.getItem("theme");
    let key = "";
    let keyActive;

    if (!localstorage_theme) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        // Theme set to dark.
        key = "dark";
        keyActive = "light";
      } else {
        // Theme set to light.
        key = "light";
        keyActive = "dark";
      }
    } else {
      key = localstorage_theme;
      keyActive = (key == "dark" ? "light" : "dark");
    }

    this.theme = key;
    document.documentElement.setAttribute('data-theme', key);

    document.documentElement.setAttribute('data-theme', key);
    localStorage.setItem('theme', key);
  }

  // Getters & Setters
  public get theme(): any {
    return this._theme;
  }

  public set theme(value: any) {
    this._theme = value;
  }
}
