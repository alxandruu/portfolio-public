import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Theme } from '../../enums/theme-scheme.enum';
import { LOCAL_STORAGE } from '../../providers/local-storage';

const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'theme-scheme',
  PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)',
  THEME_ATTRIBUTE = 'data-theme';


@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {
  private readonly document = inject(DOCUMENT)
  private readonly platformId = inject(PLATFORM_ID)
  private readonly localStorage: Storage | null = inject(LOCAL_STORAGE);
  readonly theme = signal<Theme | null>(this.preferedTheme())

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.loadThemePreference()
    this.watchPreferedTheme()
  }


  private watchPreferedTheme() {
    globalThis.matchMedia(PREFERS_COLOR_SCHEME_DARK).addEventListener('change', (event) => {
      const scheme = event.matches ? Theme.DARK : Theme.LIGHT;
      this.setTheme(scheme);
    });
  }

  preferedTheme() {
    return localStorage.getItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY) as Theme ?? null
  }


  private loadThemePreference(): void {
    const savedUserPreference = this.theme()
    this.setTheme(savedUserPreference === null ? globalThis.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? Theme.DARK : Theme.LIGHT : savedUserPreference);
  }

  setTheme(theme: Theme): void {
    this.document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    this.localStorage?.setItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY, theme);
    this.theme.set(theme)
  }
}
