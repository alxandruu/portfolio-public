import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Card } from '../../enums/card-scheme.enum';
import { Theme } from '../../enums/theme-scheme.enum';
import { LOCAL_STORAGE } from '../../providers/local-storage';

const THEME_PREFERENCE_LOCAL_STORAGE_KEY = 'theme-scheme',
  PREFERS_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)',
  THEME_ATTRIBUTE = 'data-theme',
  CARD_PREFERENCE_LOCAL_STORAGE_KEY = "card-scheme"


@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {
  private readonly document = inject(DOCUMENT)
  private readonly platformId = inject(PLATFORM_ID)
  private readonly localStorage: Storage | null = inject(LOCAL_STORAGE);

  readonly theme = signal<Theme | null>(this.preferedTheme())
  readonly card = signal<Card | null>(this.preferedCard())


  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.loadThemePreference()
    this.loadCardPreference()
    this.watchPreferedTheme()
  }

  private watchPreferedTheme() {
    globalThis.matchMedia(PREFERS_COLOR_SCHEME_DARK).addEventListener('change', (event) => {
      const scheme = event.matches ? Theme.DARK : Theme.LIGHT;
      this.setTheme(scheme);
    });
  }

  private preferedTheme() {
    return this.localStorage?.getItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY) as Theme ?? null
  }

  private preferedCard() {
    return this.localStorage?.getItem(CARD_PREFERENCE_LOCAL_STORAGE_KEY) as Card ?? null
  }

  private loadThemePreference(): void {
    const savedUserPreference = this.theme()
    this.setTheme(savedUserPreference === null ? globalThis.matchMedia(PREFERS_COLOR_SCHEME_DARK).matches ? Theme.DARK : Theme.LIGHT : savedUserPreference);
  }

  private loadCardPreference(): void {
    const savedUserPreference = this.card()
    this.setCard(savedUserPreference ?? Card.DEFAULT);
  }

  setTheme(theme: Theme): void {
    this.document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    this.localStorage?.setItem(THEME_PREFERENCE_LOCAL_STORAGE_KEY, theme);
    this.theme.set(theme)
  }

  setCard(card: Card) {
    this.localStorage?.setItem(CARD_PREFERENCE_LOCAL_STORAGE_KEY, card);
    this.card.set(card)
  }
}
